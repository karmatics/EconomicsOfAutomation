class EconomicsOfAutomation {

  async run(env) {
      if (!env || !env.container) {
        throw new Error("[EconomicsOfAutomation] run() requires an environment object with a valid container.");
      }
      this.env = env;
      this.container = env.container;
      this.activeVariants = {};
      this.selectedBlockId = null;
      this.assistantDialog = null;

      // Supported pages / documents across the complete six-part series
      this.pages = [
        { id: "dividend", title: "1. The Robot Dividend", docClass: () => globalThis.ArticleContent },
        { id: "colony", title: "2. The 100,000 Colony", docClass: () => globalThis.ColonyContent },
        { id: "earth", title: "3. Earth Transition", docClass: () => globalThis.EarthContent },
        { id: "doomer", title: "4. The Doomer Loop", docClass: () => globalThis.DoomerContent },
        { id: "paradigms", title: "5. The Three Visions", docClass: () => globalThis.ParadigmsContent },
        { id: "objections", title: "6. The Adversarial Gauntlet", docClass: () => globalThis.ObjectionsContent }
      ];

      const savedPage = localStorage.getItem("robot_dividend_active_page") || "dividend";
      this.currentPageId = this.pages.some((p) => p.id === savedPage) ? savedPage : "dividend";

      // Restore preferred theme
      const savedTheme = localStorage.getItem("robot_dividend_theme") || "light";
      if (savedTheme === "dark") {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }

      this.initUI();
      this.renderArticle();
    }

  initUI() {
        this.container.innerHTML = "";

        // Build Page Switcher Buttons
        this.navPageButtons = {};
        const pageTabElements = this.pages.map((p) => {
          const btn = makeElement("button", {
            className: `nav-page-btn ${this.currentPageId === p.id ? "active" : ""}`,
            title: `Switch to ${p.title}`,
            onclick: () => this.switchPage(p.id)
          }, p.title);
          this.navPageButtons[p.id] = btn;
          return btn;
        });

        this.pageSelector = makeElement("div", { className: "reader-nav-pages" }, pageTabElements);

        // Support mouse-wheel horizontal translation: spinning mouse wheel scrolls horizontally
        this.pageSelector.addEventListener("wheel", (e) => {
          if (e.deltaY !== 0) {
            e.preventDefault();
            this.pageSelector.scrollLeft += e.deltaY * 1.2;
            this._updateNavScrollIndicators();
          }
        }, { passive: false });

        // Support mouse drag-to-scroll
        let isDragging = false;
        let startX = 0;
        let initialScrollLeft = 0;

        this.pageSelector.addEventListener("mousedown", (e) => {
          if (e.button !== 0) return;
          isDragging = true;
          startX = e.pageX - this.pageSelector.offsetLeft;
          initialScrollLeft = this.pageSelector.scrollLeft;
          this.pageSelector.classList.add("dragging");
        });

        window.addEventListener("mouseup", () => {
          if (isDragging) {
            isDragging = false;
            this.pageSelector.classList.remove("dragging");
          }
        });

        this.pageSelector.addEventListener("mousemove", (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const currentX = e.pageX - this.pageSelector.offsetLeft;
          const walk = (currentX - startX) * 1.5;
          this.pageSelector.scrollLeft = initialScrollLeft - walk;
          this._updateNavScrollIndicators();
        });

        this.pageSelector.addEventListener("scroll", () => {
          this._updateNavScrollIndicators();
        }, { passive: true });

        // Dedicated Scroll Navigation Buttons (left & right)
        this.navScrollLeftBtn = makeElement("button", {
          className: "nav-scroll-btn nav-scroll-left",
          title: "Scroll tabs left",
          "aria-label": "Scroll tabs left",
          onclick: () => {
            this.pageSelector.scrollBy({ left: -240, behavior: "smooth" });
            setTimeout(() => this._updateNavScrollIndicators(), 250);
          }
        }, "‹");

        this.navScrollRightBtn = makeElement("button", {
          className: "nav-scroll-btn nav-scroll-right",
          title: "Scroll tabs right",
          "aria-label": "Scroll tabs right",
          onclick: () => {
            this.pageSelector.scrollBy({ left: 240, behavior: "smooth" });
            setTimeout(() => this._updateNavScrollIndicators(), 250);
          }
        }, "›");

        this.navCarousel = makeElement("div", { className: "reader-nav-carousel" }, [
          this.navScrollLeftBtn,
          this.pageSelector,
          this.navScrollRightBtn
        ]);

        // Responsive Chapter Dropdown Selector for small viewports / mobile
        const selectOptions = this.pages.map((p) => {
          return makeElement("option", {
            value: p.id,
            selected: this.currentPageId === p.id
          }, p.title);
        });

        this.navSelect = makeElement("select", {
          className: "nav-chapter-select",
          "aria-label": "Choose Chapter",
          onchange: (e) => {
            this.switchPage(e.target.value);
          }
        }, selectOptions);

        // Clean Floating Navigation Bar with responsive layout
        this.navBar = makeElement("nav", { className: "reader-nav-bar" }, [
          ["div", { className: "reader-nav-brand" }, [
            ["span", { className: "nav-brand-icon" }, "⚡"],
            ["span", { className: "nav-brand-text" }, "Economics of Automation"]
          ]],
          this.navCarousel,
          this.navSelect,
          ["div", { className: "reader-nav-actions" }, [
            ["button", {
              className: "nav-btn theme-toggle-btn",
              title: "Toggle Light / Dark mode",
              "aria-label": "Toggle reading theme",
              onclick: () => this.toggleTheme()
            }, "🌓"],
            ["button", {
              className: "nav-btn primary export-btn",
              title: "Export all sections as Markdown or Formatted Text",
              onclick: () => this.showExportDialog()
            }, [
              ["span", {}, "📤"],
              ["span", { className: "btn-label-long" }, "Export"]
            ]]
          ]]
        ]);
        document.body.appendChild(this.navBar);

        // Reading Progress Bar
        this.progressTrack = makeElement("div", { className: "reading-progress-track" });
        this.progressBar = makeElement("div", { className: "reading-progress-bar" });
        this.progressTrack.appendChild(this.progressBar);
        document.body.appendChild(this.progressTrack);

        this._scrollHandler = () => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
            this.progressBar.style.width = `${progress}%`;
          }
        };
        window.addEventListener("scroll", this._scrollHandler, { passive: true });

        this.shell = makeElement("div", { className: "article-shell" });
        this.articleContainer = makeElement("div", { className: "article-container" });
        this.shell.appendChild(this.articleContainer);
        this.container.appendChild(this.shell);

        // Initial check for scroll indicator states
        setTimeout(() => this._updateNavScrollIndicators(), 50);
        window.addEventListener("resize", () => this._updateNavScrollIndicators(), { passive: true });
      }
  renderArticle() {
      this.articleContainer.innerHTML = "";
      const doc = this.getCurrentDoc();
      const meta = doc.getMeta();
      const manifest = doc.manifest();

      // Dynamically calculate word count and estimated reading time based on active variants
      let totalWords = 0;
      manifest.forEach((sec) => {
        sec.blocks.forEach((b) => {
          const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
          const variantKey = `${this.currentPageId}:${b.id}`;
          const curIdx = this.activeVariants[variantKey] || 0;
          const txt = variants[curIdx] || variants[0] || "";
          totalWords += txt.split(/\s+/).filter(Boolean).length;
        });
      });
      const estMinutes = Math.max(1, Math.round(totalWords / 220));

      const currentIdx = this.pages.findIndex((p) => p.id === this.currentPageId);
      const prevPage = currentIdx > 0 ? this.pages[currentIdx - 1] : null;
      const nextPage = currentIdx < this.pages.length - 1 ? this.pages[currentIdx + 1] : null;

      const header = makeElement("header", { className: "article-header" }, [
        ["div", { className: "article-meta-row" }, [
          ["span", { className: "article-kicker" }, meta.kicker],
          ["span", { className: "article-read-time" }, `Part ${currentIdx + 1} of ${this.pages.length} • ${estMinutes} min read`]
        ]],
        ["h1", { className: "article-title" }, meta.title],
        ["p", { className: "article-subtitle" }, meta.subtitle]
      ]);
      this.articleContainer.appendChild(header);

      manifest.forEach((sec) => {
        const secWrap = makeElement("section", { className: "section-divider" });

        if (sec.partLabel) {
          secWrap.appendChild(makeElement("div", { className: "section-part-label" }, sec.partLabel));
        }
        secWrap.appendChild(makeElement("h2", { className: "section-heading" }, sec.title));

        sec.blocks.forEach((b) => {
          const blockEl = this.renderBlock(b);
          secWrap.appendChild(blockEl);
        });

        this.articleContainer.appendChild(secWrap);
      });

      // Cinematic Chapter Transition Footer
      const footerNav = makeElement("nav", {
        className: "article-chapter-footer",
        style: {
          marginTop: "80px",
          paddingTop: "36px",
          borderTop: "2px solid var(--reader-border)",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }
      });

      const navRow = makeElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "14px"
        }
      });

      if (prevPage) {
        const prevDocMeta = prevPage.docClass().getMeta();
        const prevBtn = makeElement("button", {
          className: "nav-btn",
          style: {
            flex: "1",
            minWidth: "240px",
            padding: "16px 20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            textAlign: "left"
          },
          onclick: () => this.switchPage(prevPage.id)
        }, [
          makeElement("span", { style: { fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--reader-accent)" } }, "← Previous Chapter"),
          makeElement("span", { style: { fontSize: "1.05rem", fontWeight: "700" } }, prevDocMeta.title)
        ]);
        navRow.appendChild(prevBtn);
      } else {
        navRow.appendChild(makeElement("div", { style: { flex: "1" } }));
      }

      if (nextPage) {
        const nextDocMeta = nextPage.docClass().getMeta();
        const nextBtn = makeElement("button", {
          className: "nav-btn primary",
          style: {
            flex: "1",
            minWidth: "240px",
            padding: "16px 20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4px",
            textAlign: "right"
          },
          onclick: () => this.switchPage(nextPage.id)
        }, [
          makeElement("span", { style: { fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: "0.9" } }, "Next Chapter →"),
          makeElement("span", { style: { fontSize: "1.05rem", fontWeight: "700" } }, nextDocMeta.title)
        ]);
        navRow.appendChild(nextBtn);
      } else {
        const exportSeriesBtn = makeElement("button", {
          className: "nav-btn primary",
          style: {
            flex: "1",
            minWidth: "240px",
            padding: "16px 20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            textAlign: "center"
          },
          onclick: () => this.showExportDialog("markdown")
        }, [
          makeElement("span", { style: { fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.1em" } }, "✨ Series Complete"),
          makeElement("span", { style: { fontSize: "1.1rem", fontWeight: "800" } }, "Export All 6 Chapters to Markdown")
        ]);
        navRow.appendChild(exportSeriesBtn);
      }

      footerNav.appendChild(navRow);
      this.articleContainer.appendChild(footerNav);
    }

  renderBlock(blockDef) {
        const doc = this.getCurrentDoc();
        const blockId = blockDef.id;

        // Interactive Custom Component Block (e.g. TaxChart)
        if (blockDef.type === "component") {
          const mountId = `comp-mount-${blockId}`;
          const wrapper = makeElement("div", {
            className: "interactive-component-wrap",
            id: mountId
          });

          const compClass = globalThis[blockDef.component];
          if (compClass && typeof compClass.render === "function") {
            setTimeout(() => {
              const el = document.getElementById(mountId);
              if (el) compClass.render(el);
            }, 0);
          } else {
            const placeholder = makeElement("div", { className: "interactive-component-placeholder" }, [
              ["div", { className: "comp-placeholder-badge" }, "📊 Interactive Simulation"],
              ["div", { className: "comp-placeholder-title" }, blockDef.title || "Interactive Tax & Dividend Simulator"],
              ["div", { className: "comp-placeholder-desc" }, 
                "Dynamic sliders for Total Collection Rate (T) and Progressivity Index (P) will mount here."
              ]
            ]);
            wrapper.appendChild(placeholder);
          }

          return wrapper;
        }

        // Sidebar / Callout Note Box
        if (blockDef.type === "sidebar" || blockDef.type === "callout") {
          const variants = (typeof doc[blockId] === "function") ? doc[blockId]() : ["[Missing block]"];
          const variantKey = `${this.currentPageId}:${blockId}`;
          const currentIdx = this.activeVariants[variantKey] || 0;
          const currentText = variants[currentIdx] || variants[0];
          return makeElement("aside", { className: "block-sidebar" }, [
            blockDef.kicker ? ["div", { className: "block-sidebar-kicker" }, blockDef.kicker] : null,
            blockDef.title ? ["div", { className: "block-sidebar-title" }, blockDef.title] : null,
            ["div", { className: "block-sidebar-body" }, this.formatInlineText(currentText)]
          ]);
        }

        // Single Image
        if (blockDef.type === "image") {
          const card = this.createThumbCard(blockDef.file);
          return makeElement("div", { className: "image-single-wrap" }, [card]);
        }

        // Grouped Images
        if (blockDef.type === "image-group") {
          const isGrid4 = blockDef.layout === "grid-4";
          const containerClass = isGrid4 ? "image-grid-four" : "image-row-pair";

          const cards = (blockDef.images || []).map((imgDef) => {
            return this.createThumbCard(imgDef.file);
          });

          return makeElement("div", { className: containerClass }, cards);
        }

        // Handle Text Blocks & Quotes
        const variants = (typeof doc[blockId] === "function") ? doc[blockId]() : ["[Missing block]"];
        const variantKey = `${this.currentPageId}:${blockId}`;
        const currentIdx = this.activeVariants[variantKey] || 0;
        const currentText = variants[currentIdx] || variants[0];

        const wrapper = makeElement("div", {
          className: `block-wrapper ${this.selectedBlockId === blockId ? "block-selected" : ""}`,
          id: `block-${blockId}`
        });

        let contentEl;
        if (blockDef.type === "quote") {
          contentEl = makeElement("blockquote", { className: "block-quote" }, this.formatInlineText(currentText));
        } else {
          if (/\n\d+\.\s/.test(currentText) || /^\d+\.\s/.test(currentText)) {
            contentEl = makeElement("div", { className: "block-text-multi" });
            const lines = currentText.split("\n");
            let currentParagraph = [];
            let currentList = null;

            const flushParagraph = () => {
              if (currentParagraph.length > 0) {
                const pText = currentParagraph.join(" ").trim();
                if (pText) contentEl.appendChild(makeElement("p", { className: "block-p" }, this.formatInlineText(pText)));
                currentParagraph = [];
              }
            };

            const flushList = () => {
              if (currentList) {
                contentEl.appendChild(currentList);
                currentList = null;
              }
            };

            lines.forEach((line) => {
              const trimmed = line.trim();
              if (!trimmed) {
                flushParagraph();
                flushList();
                return;
              }

              const listMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
              if (listMatch) {
                flushParagraph();
                if (!currentList) currentList = makeElement("ol", { className: "block-ol" });
                currentList.appendChild(makeElement("li", {}, this.formatInlineText(listMatch[2])));
              } else {
                flushList();
                currentParagraph.push(trimmed);
              }
            });

            flushParagraph();
            flushList();
          } else if (currentText.includes("\n\n")) {
            contentEl = makeElement("div", { className: "block-text-multi" });
            const parts = currentText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
            parts.forEach((p) => {
              contentEl.appendChild(makeElement("p", { className: "block-p" }, this.formatInlineText(p)));
            });
          } else {
            contentEl = makeElement("p", { className: "block-p" }, this.formatInlineText(currentText));
          }
        }

        wrapper.appendChild(contentEl);

        // Subtle Gutter Controls
        const gutterControls = makeElement("div", { className: "block-gutter-controls" });

        if (variants.length > 1) {
          const vCol = makeElement("div", { className: "gutter-v-col" });
          variants.forEach((_, idx) => {
            const badge = makeElement("button", {
              className: `gutter-v-badge ${idx === currentIdx ? "active" : ""}`,
              title: `Switch to variant ${idx + 1}`,
              onclick: (e) => {
                e.stopPropagation();
                this.activeVariants[variantKey] = idx;
                this.renderArticle();
                if (this.assistantDialog && this.assistantDialog.element?.isConnected) {
                  this.updateAssistant(blockId);
                }
              }
            }, `${idx + 1}`);
            vCol.appendChild(badge);
          });
          gutterControls.appendChild(vCol);
        }

        const inspectBtn = makeElement("button", {
          className: "gutter-inspect-btn",
          title: `Edit & AI studio for #${blockId}`,
          onclick: (e) => {
            e.stopPropagation();
            this.selectBlock(blockId, true);
          }
        }, "✎");
        gutterControls.appendChild(inspectBtn);

        const idTip = makeElement("span", {
          className: "gutter-id-tip"
        }, `#${blockId}`);
        gutterControls.appendChild(idTip);

        wrapper.appendChild(gutterControls);

        wrapper.addEventListener("click", () => {
          this.selectBlock(blockId, true);
        });

        return wrapper;
      }
  selectBlock(blockId, openDialog = false) {
    this.selectedBlockId = blockId;
    document.querySelectorAll(".block-wrapper").forEach((el) => el.classList.remove("block-selected"));
    const el = document.getElementById(`block-${blockId}`);
    if (el) el.classList.add("block-selected");

    if (openDialog) {
      this.setupAssistantDialog(blockId);
    } else if (this.assistantDialog && this.assistantDialog.element?.isConnected) {
      this.updateAssistant(blockId);
    }
  }

  setupAssistantDialog(blockId = "p_scarcity_1") {
    // If dialog exists and is alive on screen, merely bring to front and refresh content
    if (this.assistantDialog && this.assistantDialog.element && this.assistantDialog.element.isConnected) {
      this.assistantDialog.bringToFront();
      this.updateAssistant(blockId);
      return;
    }

    this.assistantContent = makeElement("div", { style: { padding: "4px" } });

    this.assistantDialog = UITools.makeDialog({
      appendTo: document.body,
      title: "AI Editing Studio & Variant Manager",
      size: [410, 520],
      position: [Math.max(20, window.innerWidth - 440), 68],
      contentElement: this.assistantContent,
      onClose: () => {
        this.assistantDialog = null;
      }
    });

    this.updateAssistant(blockId);
  }

  updateAssistant(blockId) {
      if (!this.assistantContent) return;
      this.assistantContent.innerHTML = "";
      const doc = this.getCurrentDoc();

      const isFigure = blockId.startsWith("fig_");
      const imgPrompts = doc.getImagePrompts?.() || {};
      const specificPrompt = imgPrompts[blockId];

      const variants = (typeof doc[blockId] === "function") ? doc[blockId]() : [];
      const variantKey = `${this.currentPageId}:${blockId}`;
      const activeIdx = this.activeVariants[variantKey] || 0;
      const docName = doc.name || "ArticleContent";

      const header = makeElement("div", { 
        style: { 
          marginBottom: "14px", 
          borderBottom: "1px solid rgba(255,255,255,0.1)", 
          paddingBottom: "10px" 
        } 
      }, [
        ["div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" } }, isFigure ? "Figure Image Specification" : "Active Method Anchor"],
        ["div", { style: { fontSize: "14px", fontWeight: "700", color: "#60a5fa", marginTop: "2px" } }, `${docName}.${blockId}()`],
        ["div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "3px" } }, isFigure ? "Photorealistic Frontier Sci-Fi Image" : `Available text versions: ${variants.length}`]
      ]);
      this.assistantContent.appendChild(header);

      if (isFigure && specificPrompt) {
        const promptCard = makeElement("div", {
          style: {
            background: "rgba(37,99,235,0.15)",
            border: "1px solid rgba(96,165,250,0.35)",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "14px"
          }
        }, [
          ["div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" } }, [
            ["span", { style: { fontWeight: "700", fontSize: "11px", color: "#93c5fd", textTransform: "uppercase" } }, "Midjourney / DALL-E Prompt"],
            ["span", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" } }, "Frontier Sci-Fi Style"]
          ]],
          ["div", { style: { fontSize: "12px", color: "#e2e8f0", lineHeight: "1.45", maxHeight: "150px", overflowY: "auto" } }, specificPrompt]
        ]);
        this.assistantContent.appendChild(promptCard);

        const copyImagePromptBtn = makeElement("button", {
          className: "uw-btn primary",
          style: { width: "100%", marginBottom: "10px", padding: "8px" },
          onclick: () => {
            const fullPrompt = `${imgPrompts.masterAnchor || ""} -- Scene: ${specificPrompt}`;
            navigator.clipboard.writeText(fullPrompt);
            alert(`Copied full photorealistic prompt for #${blockId} to your clipboard!`);
          }
        }, "🎨 Copy Image Prompt (With Master Style)");
        this.assistantContent.appendChild(copyImagePromptBtn);
      }

      const listWrap = makeElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" } });
      variants.forEach((txt, idx) => {
        const isCur = idx === activeIdx;
        const vCard = makeElement("div", {
          style: {
            background: isCur ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
            border: isCur ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.08)",
            borderRadius: "6px",
            padding: "10px",
            cursor: "pointer"
          },
          onclick: () => {
            this.activeVariants[variantKey] = idx;
            this.renderArticle();
            this.updateAssistant(blockId);
          }
        }, [
          ["div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "4px" } }, [
            ["span", { style: { fontWeight: "700", fontSize: "11px", color: isCur ? "#93c5fd" : "#94a3b8" } }, `Version ${idx + 1}${isCur ? " (Active)" : ""}`],
            ["span", { style: { fontSize: "10px", color: "rgba(255,255,255,0.4)" } }, `${txt.length} chars`]
          ]],
          ["div", { style: { fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4" } }, txt]
        ]);
        listWrap.appendChild(vCard);
      });
      this.assistantContent.appendChild(listWrap);

      const copyPromptBtn = makeElement("button", {
        className: "uw-btn",
        style: { width: "100%", marginBottom: "10px" },
        onclick: () => {
          const patchPrompt = 
  `Please rewrite or provide an alternative version for paragraph method \`${docName}.${blockId}\`.
  Output the change as a surgical method patch container:

  <` + `script data-file="EconomicsOfAutomation/js/${docName}.js" data-method="${docName}.${blockId}" data-action="patch">
  static ${blockId}() {
    return [
      ${JSON.stringify(variants[activeIdx] || "")},
      "Your alternative version goes here..."
    ];
  }
  <` + `/script>`;

          navigator.clipboard.writeText(patchPrompt);
          alert(`Copied prompt template to clipboard!\n\nYou can paste this directly to the AI to request alternative versions for #${blockId}.`);
        }
      }, "📋 Copy AI Text Patch Prompt");
      this.assistantContent.appendChild(copyPromptBtn);

      const viewTopBtn = makeElement("button", {
        className: "uw-btn",
        style: { width: "100%" },
        onclick: () => {
          const el = document.getElementById(`block-${blockId}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, "🔍 Scroll to this block in article");
      this.assistantContent.appendChild(viewTopBtn);
    }
  destroy() {
    if (this._scrollHandler) {
      window.removeEventListener("scroll", this._scrollHandler);
    }
    if (this.progressTrack && this.progressTrack.parentNode) {
      this.progressTrack.remove();
    }
    if (this.navBar && this.navBar.parentNode) {
      this.navBar.remove();
    }
    if (this.assistantDialog && typeof this.assistantDialog.close === "function") {
      this.assistantDialog.close();
      this.assistantDialog = null;
    }
  }
  toggleTheme() {
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem("robot_dividend_theme", isDark ? "dark" : "light");
  }

  showExportDialog(defaultMode = "markdown") {
      // 1. Generate full content across all six pages
      const markdownContent = this.generateMarkdown();
      const formattedHtml = this.generateFormattedHtml();

      // Calculate total series statistics
      let totalSeriesWords = 0;
      this.pages.forEach((pageDef) => {
        const doc = pageDef.docClass();
        if (!doc) return;
        const manifest = doc.manifest();
        manifest.forEach((sec) => {
          sec.blocks.forEach((b) => {
            const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
            const variantKey = `${pageDef.id}:${b.id}`;
            const curIdx = this.activeVariants[variantKey] || 0;
            const txt = variants[curIdx] || variants[0] || "";
            totalSeriesWords += txt.split(/\s+/).filter(Boolean).length;
          });
        });
      });
      const estTotalMinutes = Math.max(1, Math.round(totalSeriesWords / 220));

      const plainText = formattedHtml
        .replace(/<h1>(.*?)<\/h1>/g, "$1\n\n")
        .replace(/<h2>(.*?)<\/h2>/g, "$1\n\n")
        .replace(/<h3>(.*?)<\/h3>/g, "$1\n\n")
        .replace(/<blockquote><p>(.*?)<\/p><\/blockquote>/g, "> $1\n\n")
        .replace(/<ol>(.*?)<\/ol>/gs, "$1\n")
        .replace(/<li>(.*?)<\/li>/g, "• $1\n")
        .replace(/<p><em>(.*?)<\/em><\/p>/g, "$1\n\n")
        .replace(/<p>(.*?)<\/p>/g, "$1\n\n")
        .replace(/<hr>/g, "\n---\n\n");

      let activeTab = defaultMode; // "markdown" | "html"

      // Textarea for Markdown preview & direct editing/selection
      const mdEditor = makeElement("textarea", {
        className: "export-code-view",
        style: {
          display: activeTab === "markdown" ? "block" : "none",
          flex: "1",
          width: "100%",
          minHeight: "300px",
          background: "var(--reader-surface, #1e293b)",
          color: "var(--reader-text, #f8fafc)",
          border: "1px solid var(--reader-border, #334155)",
          borderRadius: "8px",
          padding: "16px",
          boxSizing: "border-box",
          fontFamily: "var(--reader-font-mono, monospace)",
          fontSize: "12.5px",
          lineHeight: "1.6",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          resize: "none"
        }
      });
      mdEditor.value = markdownContent;

      // Rich rendered HTML view for visual inspection before copying into Gmail or Word
      const richPreview = makeElement("div", {
        className: "export-rendered-preview",
        style: {
          display: activeTab === "html" ? "block" : "none",
          flex: "1",
          minHeight: "300px",
          overflowY: "auto",
          background: "var(--reader-surface, #ffffff)",
          color: "var(--reader-text, #1f242e)",
          border: "1px solid var(--reader-border, #e2e8f0)",
          borderRadius: "8px",
          padding: "18px 22px",
          boxSizing: "border-box"
        },
        innerHTML: formattedHtml
      });

      const tabMarkdownBtn = makeElement("button", {
        className: `nav-page-btn ${activeTab === "markdown" ? "active" : ""}`,
        onclick: () => {
          activeTab = "markdown";
          tabMarkdownBtn.classList.add("active");
          tabHtmlBtn.classList.remove("active");
          mdEditor.style.display = "block";
          richPreview.style.display = "none";
          copyBtn.textContent = "📋 Copy Markdown";
        }
      }, "📝 Markdown (for LLMs & text)");

      const tabHtmlBtn = makeElement("button", {
        className: `nav-page-btn ${activeTab === "html" ? "active" : ""}`,
        onclick: () => {
          activeTab = "html";
          tabHtmlBtn.classList.add("active");
          tabMarkdownBtn.classList.remove("active");
          richPreview.style.display = "block";
          mdEditor.style.display = "none";
          copyBtn.textContent = "📋 Copy Formatted Text";
        }
      }, "🌐 Formatted Text (for Gmail & rich text)");

      const copyBtn = makeElement("button", {
        className: "uw-btn primary",
        style: { padding: "7px 18px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px" },
        onclick: (e) => {
          const btn = e.currentTarget;
          if (activeTab === "markdown") {
            const textToCopy = mdEditor.value || markdownContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
              btn.textContent = "✓ Copied Markdown!";
              setTimeout(() => { btn.textContent = "📋 Copy Markdown"; }, 2400);
            }).catch(() => {
              this._fallbackCopy(textToCopy, btn);
            });
          } else {
            if (navigator.clipboard && window.ClipboardItem) {
              const htmlBlob = new Blob([formattedHtml], { type: "text/html" });
              const textBlob = new Blob([plainText], { type: "text/plain" });
              navigator.clipboard.write([
                new ClipboardItem({ "text/html": htmlBlob, "text/plain": textBlob })
              ]).then(() => {
                btn.textContent = "✓ Copied Formatted Text!";
                setTimeout(() => { btn.textContent = "📋 Copy Formatted Text"; }, 2400);
              }).catch(() => {
                this._fallbackCopy(formattedHtml, btn);
              });
            } else {
              this._fallbackCopy(formattedHtml, btn);
            }
          }
        }
      }, activeTab === "markdown" ? "📋 Copy Markdown" : "📋 Copy Formatted Text");

      const statsBanner = makeElement("div", {
        style: {
          background: "var(--reader-card-bg)",
          border: "1px solid var(--reader-border)",
          borderRadius: "8px",
          padding: "8px 14px",
          fontSize: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "6px"
        }
      }, [
        makeElement("span", { style: { fontWeight: "700", color: "var(--reader-accent)" } }, `📚 Complete Series (${this.pages.length} Chapters)`),
        makeElement("span", { style: { color: "var(--reader-muted)" } }, `~${totalSeriesWords.toLocaleString()} words • ${estTotalMinutes} min read`),
        makeElement("span", { style: { color: "var(--reader-text-subtle)", fontStyle: "italic" } }, "Active paragraph selections preserved")
      ]);

      const dialogContent = makeElement("div", {
        className: "export-container",
        style: { display: "flex", flexDirection: "column", height: "100%", gap: "12px", boxSizing: "border-box" }
      }, [
        makeElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" } }, [
          makeElement("div", { className: "reader-nav-pages" }, [tabMarkdownBtn, tabHtmlBtn]),
          copyBtn
        ]),
        statsBanner,
        makeElement("div", {
          className: "export-view-container",
          style: { flex: "1", minHeight: "320px", display: "flex", position: "relative" }
        }, [
          mdEditor,
          richPreview
        ])
      ]);

      UITools.makeDialog({
        appendTo: document.body,
        title: "Export All 6 Chapters",
        size: [740, 600],
        position: [Math.max(16, Math.floor(window.innerWidth / 2 - 370)), 45],
        contentElement: dialogContent
      });
    }
  _fallbackCopy(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      if (btn) {
        btn.textContent = "✓ HTML Copied!";
        setTimeout(() => { btn.textContent = "📋 Copy for Quora (Direct Paste)"; }, 2500);
      }
    });
  }

  createThumbCard(fileName) {
    const thumbPath = `images/thumbs/${fileName}`;
    const fullPath = `images/${fileName}`;

    const card = makeElement("div", {
      className: "thumb-card",
      title: "Click to expand image"
    });

    const img = makeElement("img", {
      className: "thumb-img",
      loading: "lazy",
      decoding: "async",
      src: thumbPath
    });

    // Automated graceful fallback: if images/thumbs/ doesn't exist yet or extension is .jpg
    img.onerror = () => {
      if (img.src.indexOf("/thumbs/") !== -1) {
        img.src = fullPath;
      } else if (img.src.endsWith(".jpeg")) {
        img.src = img.src.replace(/\.jpeg$/, ".jpg");
      } else if (img.src.endsWith(".jpg")) {
        img.src = img.src.replace(/\.jpg$/, ".jpeg");
      }
    };

    card.addEventListener("click", (e) => {
      e.stopPropagation();
      this.showLargePopout(fullPath);
    });

    card.appendChild(img);
    return card;
  }

  showLargePopout(imagePath) {
    // Remove any existing popout
    const existing = document.querySelector(".popout-large-frame");
    if (existing) existing.remove();

    const frame = makeElement("div", {
      className: "popout-large-frame",
      title: "Click anywhere on image to close"
    });

    const img = makeElement("img", {
      className: "popout-large-img",
      src: imagePath
    });

    img.onerror = () => {
      if (img.src.endsWith(".jpeg")) {
        img.src = img.src.replace(/\.jpeg$/, ".jpg");
      }
    };

    frame.appendChild(img);
    document.body.appendChild(frame);

    requestAnimationFrame(() => frame.classList.add("visible"));

    const closePopout = () => {
      frame.classList.remove("visible");
      setTimeout(() => frame.remove(), 190);
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("click", outsideClickHandler);
    };

    const keyHandler = (e) => {
      if (e.key === "Escape") closePopout();
    };

    const outsideClickHandler = (e) => {
      if (!frame.contains(e.target)) {
        closePopout();
      }
    };

    frame.addEventListener("click", (e) => {
      e.stopPropagation();
      closePopout();
    });

    window.addEventListener("keydown", keyHandler);
    setTimeout(() => {
      window.addEventListener("click", outsideClickHandler);
    }, 50);
  }

  getCurrentDoc() {
      const pageCfg = this.pages.find((p) => p.id === this.currentPageId) || this.pages[0];
      const resolved = pageCfg.docClass();
      return resolved || globalThis.ArticleContent;
    }

  switchPage(pageId) {
        if (this.currentPageId === pageId) return;
        this.currentPageId = pageId;
        localStorage.setItem("robot_dividend_active_page", pageId);

        // Update navigation button active styles and scroll active tab into view
        if (this.navPageButtons) {
          Object.entries(this.navPageButtons).forEach(([id, btn]) => {
            const isActive = id === pageId;
            btn.classList.toggle("active", isActive);
            if (isActive && this.pageSelector) {
              // Smoothly align active tab within the scrollable container
              const btnLeft = btn.offsetLeft;
              const btnWidth = btn.offsetWidth;
              const containerWidth = this.pageSelector.clientWidth;
              const targetScroll = btnLeft - (containerWidth / 2) + (btnWidth / 2);
              this.pageSelector.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
            }
          });
        }

        // Update mobile select menu if present
        if (this.navSelect) {
          this.navSelect.value = pageId;
        }

        // Scroll smoothly to top of the article
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Render new document
        this.renderArticle();
        this._updateNavScrollIndicators();

        // Update assistant if open
        if (this.assistantDialog && this.assistantDialog.element?.isConnected) {
          const doc = this.getCurrentDoc();
          const firstBlock = doc.manifest()?.[0]?.blocks?.[0]?.id || "p_scarcity_1";
          this.selectBlock(firstBlock, false);
          this.updateAssistant(firstBlock);
        }
      }
  getImageDescription(fileName) {
      const descriptions = {
        // First page (ArticleContent) images
        "dinner.jpeg": "The pioneer colonists gather outdoors around a hand-hewn wooden table in front of their prefab shelter, sharing an evening meal earned through collective human sweat before the arrival of machines.",
        "robotsarrive.jpeg": "A scorched automated supply pod rests in a clearing as rugged, solar-powered utility automatons descend its ramp to take over the colony's heavy agricultural labor.",
        "sawmill.jpeg": "Frontier settlers work at a community timber mill, preparing standardized yellow-pine 2×4 boards that serve as the tangible physical backing for the settlement's Credit currency.",
        "market.jpeg": "Colonists exchange timber-backed Credits on data slates for fresh produce and household goods in a lively open-air settlement market without hauling lumber around.",
        "transition.jpeg": "Autonomous multi-tread harvesters fell and stack giant alien trees in the background while relaxed colonists sit on an electric truck tailgate checking their monthly Credit dividend ledgers.",
        "robotandcarpenter.jpeg": "A human woodworker crafts fine furnishings side-by-side with an articulated robotic assistant, demonstrating how automation elevates necessary labor into voluntary creative craftsmanship.",
        "musicandart.jpeg": "With survival decoupled from compulsory labor, colonists gather on open-air café verandas to play acoustic guitar, sketch, and drink tea purely for the pleasure of creative expression.",
        "vehicle.jpeg": "A colonist enjoys an open-air leisure cruise in a custom recreational explorer rover, using automated manufacturing to pursue personal exploration without commercial barriers.",
        "treehouses.jpeg": "As machine abundance deepens into true luxury, colonists have their tireless utility robots build whimsical, multi-tiered treehouses woven high into the alien canopy for relaxation and panoramic views.",
        "whimsicalhouse.jpeg": "A breathtaking cottage featuring intricately fitted stone arches and hand-masonry—obviously not the easiest or most practical way to build a house, but constructed purely for aesthetic beauty and personal taste because tireless robots performed all the quarrying and heavy lifting.",

        // Colony / Doomer / Paradigms / Earth / Objections images
        "fig_dozen": "Twelve frontier colonists and a squad of rugged utility robots stepping off an arrival cargo pod.",
        "fig_hundred": "The sawmill Credit standard: standardized lumber backing digital currency for everyday trade.",
        "fig_trans": "Public automated combines reaping record crops while citizens receive an unconditional Robot Dividend.",
        "fig_auto": "A bustling frontier town where machines run the utilities and citizens devote their time to chosen vocations.",
        "fig_colony_gov": "Citizens at public voting terminals casting ranked ballots to directly select fiscal consensus curves.",
        "fig_colony_depot": "Overhead gantry cranes moving standardized containers of energy cells, timber, and grain in a public reserve depot.",
        "fig_colony_bots": "Engineers supervising newly unpacked utility robots as open-source AI models coordinate the manufacturing of duplicate machines.",
        "fig_bunker_contrast": "A stark contrast between an isolated billionaire alone in a concrete shelter and a vibrant sunlit city park where citizens thrive together.",
        "fig_empty_showroom": "A futuristic showroom packed with high-tech autonomous vehicles sitting empty because displaced workers lack purchasing power to buy them.",
        "fig_earth_gridlock": "Autonomous delivery vehicles navigating modern glass office towers alongside anxious citizens demanding economic updates to legacy payroll systems.",
        "fig_earth_dialogue": "A televised gigafactory interview contrasting traditional economic dogma with first-principles physical abundance.",
        "fig_triad_matrix": "A three-part panoramic juxtaposition of financialized crypto servers, centralized AI clusters, and an open sunlit post-labor agricultural commons.",
        "fig_gold_fallacy": "A symbolic composition illustrating the Wheelbarrow of Gold paradox: dying of thirst surrounded by bullion vs. abundance reaped by autonomous combines.",
        "fig_bridge_persuasion": "A transparent civic town hall where citizens and entrepreneurs achieve consensus around machine surplus capture and universal dividends."
      };

      return descriptions[fileName] || `Photorealistic depiction of frontier colony life and automated infrastructure (${fileName}).`;
    }

  getComponentMarkdown(blockDef) {
    if (blockDef.component === "TaxChartComponent" || blockDef.id?.includes("tax_chart")) {
      return [
        "> ### Interactive Simulation: Algorithmic Negative Income Tax & Dividend Schedule",
        ">",
        "> **Architecture & Lineage:**",
        "> This simulation implements a continuous negative income tax schedule—in the tradition of Milton Friedman and James Meade—governed by two parameters within a capacity safety corridor $[T_{\\min}, T_{\\max}]$:",
        "> 1. **Total Collection Rate ($T$):** The share of economic surplus captured through a consumption VAT, excess-profit surtaxes (with 100% immediate capital expensing), and resource royalties on land, power throughput, and mineral extraction:",
        ">    $$R_{\\text{total}} = R_{\\text{VAT}} + R_{\\text{Surtax}} + R_{\\text{Resource}}$$",
        ">    The upper bound ($T_{\\max}$) is calibrated to real physical telemetry (grain reserves, electrical grid operating margins, and critical trade staffing) to prevent overshooting productive capacity.",
        "> 2. **Progressivity Index ($P$):** The curvature parameter ($P \\in [0, 100\\%]$), which maps into an equalizing curve parameter $p$:",
        ">    - **$P = 0\\%$ ($p = 0$):** A lump-sum flat fee ($T_i = r \\cdot \\bar{Y}$), regressive on lower brackets.",
        ">    - **$P = 30\\%$ ($p = 0.5$):** A proportional flat tax ($T_i = r \\cdot Y_i$), where each bracket pays target percentage $r = T/100$.",
        ">    - **$P > 30\\%$ ($p > 0.5$):** Blends into a progressive negative income tax:",
        ">      $$T_i = (1 - u)(r \\cdot Y_i) + u\\big(Y_i - (1 - r)\\bar{Y}\\big)$$",
        ">      where $u = (p - 0.5) \\times 2 \\times 0.65$. The $0.65$ damping factor ensures that marginal tax rates remain well below 100%, so earning additional income always yields positive net take-home pay.",
        ">",
        "> **Negative Tax Credits & Dual-Channel Distribution:**",
        "> When $P > 30\\%$, the schedule generates negative tax liabilities ($T_i < 0$) for lower percentiles, disbursed through two channels:",
        "> - **Basic Services ($S_t$):** Broad access to zero-marginal-cost digital services (AI medical screening, legal advocacy, and personalized tutoring).",
        "> - **Liquid Cash Floor ($C_t$):** Scaled to physical production capacity (housing starts, food tonnage, and power margins). Transitional surplus above current physical absorptive capacity funds milestone construction prizes to break physical bottlenecks.",
        ">",
        "> **Scenario Benchmarks:**",
        "> - *Frontier (Pre-Auto):* Functions as a standard progressive tax, preserving work incentives when labor is required.",
        "> - *Transition (50% Auto):* Recycles corporate automation rents to ensure displaced workers receive an expanding dividend baseline.",
        "> - *Full Automation (100k Robots):* When wage sweat falls to zero for the majority, the formula automatically distributes the automated harvest as a universal dividend floor.",
        "> - *Earth Benchmark (US 2024 Data):* Demonstrates Gini compression and poverty eradication while maintaining clear rewards for innovation and skill."
      ].join("\n");
    }

    if (blockDef.component === "DoomerDebateComponent") {
      return [
        "> ### Case Study: The Anatomy of a Doomer Loop",
        ">",
        "> A breakdown of an online discussion tracing how anxiety over automation escalates into fatalistic extermination scenarios in five steps (The Scarcity Reflex, The 50-Year Stagnation Argument, The Assumption of Frictionless Tyranny, The Competitive Dilemma, and The Status Fallacy)—and the game-theoretic incentives showing why capital owners require solvent domestic consumers."
      ].join("\n");
    }

    if (blockDef.component === "ParadigmsComparisonComponent") {
      return [
        "> ### Analytical Comparison: Three Post-Labor Blueprints",
        ">",
        "> A comparative matrix evaluating David Shapiro's Post-Labor Economics (Sovereign Wealth Funds & citizen equity trusts), Emad Mostaque's The Last Economy (compute vouchers & UBAI), and Rob Brown's Robot Dividend (algorithmic tax curves & physical claim checks) across thermodynamics, public finance, and human agency."
      ].join("\n");
    }

    return `> *[Interactive Component: ${blockDef.title || blockDef.id}]*`;
  }
  generateMarkdown() {
      const mdLines = [];

      mdLines.push("# Economics of Automation: The Complete Series");
      mdLines.push("");
      mdLines.push("> *A First-Principles Exploration of Work, Money, and Machine Abundance*");
      mdLines.push("");
      mdLines.push("---");
      mdLines.push("");

      // Iterate across all 5 pages
      this.pages.forEach((pageDef, pageIdx) => {
        const doc = pageDef.docClass();
        if (!doc) return;
        const meta = doc.getMeta();
        const manifest = doc.manifest();

        mdLines.push(`# Part ${pageIdx + 1}: ${meta.title}`);
        if (meta.kicker) {
          mdLines.push(`**${meta.kicker}**`);
        }
        if (meta.subtitle) {
          mdLines.push(`> *${meta.subtitle}*`);
        }
        mdLines.push("");

        manifest.forEach((sec) => {
          const secHeading = sec.partLabel ? `## ${sec.partLabel}: ${sec.title}` : `## ${sec.title}`;
          mdLines.push(secHeading);
          mdLines.push("");

          sec.blocks.forEach((b) => {
            // 1. Interactive Component Blocks (e.g. Tax Curve App, Doomer Ladder, Paradigms Matrix)
            if (b.type === "component") {
              mdLines.push(this.getComponentMarkdown(b));
              mdLines.push("");
              return;
            }

            // 2. Single Image
            if (b.type === "image") {
              mdLines.push(`> **[Illustration: ${b.file}]**`);
              mdLines.push(`> *${this.getImageDescription(b.file)}*`);
              mdLines.push("");
              return;
            }

            // 3. Grouped Images (e.g. 2-column pairs or bottom 4-grid)
            if (b.type === "image-group") {
              mdLines.push(`> **[Illustrations & Visual Progression]**`);
              (b.images || []).forEach((img) => {
                const desc = this.getImageDescription(img.file);
                mdLines.push(`> - **${img.file}:** ${desc}`);
              });
              mdLines.push("");
              return;
            }

            // 4. Sidebar Callouts
            if (b.type === "sidebar" || b.type === "callout") {
              const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
              const variantKey = `${pageDef.id}:${b.id}`;
              const currentIdx = this.activeVariants[variantKey] || 0;
              const text = variants[currentIdx] || variants[0] || "";

              mdLines.push(`> ### 📌 ${b.title || "Note"}`);
              if (b.kicker) mdLines.push(`> *${b.kicker}*`);
              mdLines.push(">");
              text.split("\n").forEach((line) => {
                mdLines.push(`> ${line}`);
              });
              mdLines.push("");
              return;
            }

            // 5. Quotes and Paragraphs (Strictly using current selection, defaulting to first)
            const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
            const variantKey = `${pageDef.id}:${b.id}`;
            const currentIdx = this.activeVariants[variantKey] || 0;
            const text = variants[currentIdx] || variants[0] || "";

            if (b.type === "quote") {
              mdLines.push(`> "${text}"`);
              mdLines.push("");
              return;
            }

            // Regular Paragraphs & Numbered Lists
            if (/\n\d+\.\s/.test(text) || /^\d+\.\s/.test(text)) {
              const lines = text.split("\n");
              lines.forEach((l) => {
                const trimmed = l.trim();
                if (trimmed) mdLines.push(trimmed);
              });
              mdLines.push("");
            } else if (text.includes("\n\n")) {
              text.split(/\n\s*\n/).forEach((p) => {
                const pTrim = p.trim();
                if (pTrim) {
                  mdLines.push(pTrim);
                  mdLines.push("");
                }
              });
            } else {
              mdLines.push(text);
              mdLines.push("");
            }
          });
        });

        if (pageIdx < this.pages.length - 1) {
          mdLines.push("---");
          mdLines.push("");
        }
      });

      return mdLines.join("\n");
    }
  copyMarkdownToClipboard(btn = null) {
      const md = this.generateMarkdown();
      const origHTML = btn ? btn.innerHTML : null;

      const showSuccess = () => {
        if (btn) {
          btn.innerHTML = '<span>✓</span><span class="btn-label-long">Copied Markdown!</span>';
          setTimeout(() => {
            if (btn && origHTML) btn.innerHTML = origHTML;
          }, 2200);
        }
        if (typeof UITools !== "undefined" && typeof UITools.showHUD === "function") {
          UITools.showHUD({
            html: `<div style="padding:10px 16px;background:#065f46;color:#ecfdf5;border:1px solid #10b981;border-radius:8px;font-size:13px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.45);display:flex;align-items:center;gap:8px;"><span>✓</span><span>Copied current version of <b>${this.getCurrentDoc().getMeta().title}</b> to clipboard as Markdown!</span></div>`,
            position: "bottom-right",
            autoClose: 2600
          });
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(md).then(showSuccess).catch(() => {
          this._fallbackCopy(md, btn);
        });
      } else {
        this._fallbackCopy(md, btn);
      }
    }

  generateFormattedHtml() {
      const htmlParts = [];
      htmlParts.push(`<h1>Economics of Automation: The Complete Series</h1>`);
      htmlParts.push(`<p><em>A First-Principles Exploration of Work, Money, and Machine Abundance</em></p><hr>`);

      // Iterate through all 5 pages
      this.pages.forEach((pageDef, pageIdx) => {
        const doc = pageDef.docClass();
        if (!doc) return;
        const meta = doc.getMeta();
        const manifest = doc.manifest();

        htmlParts.push(`<h2>Part ${pageIdx + 1}: ${meta.title}</h2>`);
        if (meta.subtitle) {
          htmlParts.push(`<p><em>${meta.subtitle}</em></p>`);
        }

        manifest.forEach((sec) => {
          const heading = sec.partLabel ? `${sec.partLabel}: ${sec.title}` : sec.title;
          htmlParts.push(`<h3>${heading}</h3>`);

          sec.blocks.forEach((b) => {
            if (b.type === "component") {
              if (b.component === "TaxChartComponent" || b.id?.includes("tax_chart")) {
                htmlParts.push(`<blockquote><p><strong>[Interactive Simulation: Democratic Tax Curve & Dividend Simulator]</strong><br>A parameterized curve governed by Total Collection Rate (T) and Progressivity (P) voted on directly by citizens. Above 30% progressivity, the schedule creates negative tax credits for lower percentiles, distributing the machine harvest as a universal dividend floor without a separate welfare bureaucracy.</p></blockquote>`);
              } else if (b.component === "DoomerDebateComponent") {
                htmlParts.push(`<blockquote><p><strong>[Interactive Case Study: The Anatomy of a Doomer Loop]</strong><br>A step-by-step game-theoretic analysis showing why capital owners need solvent domestic consumers to prevent demand collapse.</p></blockquote>`);
              } else if (b.component === "ParadigmsComparisonComponent") {
                htmlParts.push(`<blockquote><p><strong>[Interactive Matrix: The Three Post-Labor Blueprints]</strong><br>Comparative evaluation of Shapiro's capital leverage, Mostaque's compute vouchers, and Brown's physical Robot Dividend.</p></blockquote>`);
              }
              return;
            }

            if (b.type === "image") {
              htmlParts.push(`<p><em>[Illustration: ${b.file} — ${this.getImageDescription(b.file)}]</em></p>`);
              return;
            }

            if (b.type === "image-group") {
              const list = (b.images || []).map((img) => `<strong>${img.file}:</strong> ${this.getImageDescription(img.file)}`).join("<br>");
              htmlParts.push(`<blockquote><p><em>[Illustrations]</em><br>${list}</p></blockquote>`);
              return;
            }

            if (b.type === "sidebar" || b.type === "callout") {
              const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
              const variantKey = `${pageDef.id}:${b.id}`;
              const idx = this.activeVariants[variantKey] || 0;
              const text = variants[idx] || variants[0] || "";
              htmlParts.push(`<blockquote><p><strong>${b.title || "Note"}</strong>: ${text}</p></blockquote>`);
              return;
            }

            const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
            const variantKey = `${pageDef.id}:${b.id}`;
            const idx = this.activeVariants[variantKey] || 0;
            const text = variants[idx] || variants[0] || "";

            if (b.type === "quote") {
              htmlParts.push(`<blockquote><p>${text}</p></blockquote>`);
            } else if (/\n\d+\.\s/.test(text) || /^\d+\.\s/.test(text)) {
              const lines = text.split("\n");
              let inList = false;
              lines.forEach((l) => {
                const trimmed = l.trim();
                if (!trimmed) return;
                const m = trimmed.match(/^\d+\.\s+(.*)$/);
                if (m) {
                  if (!inList) {
                    htmlParts.push("<ol>");
                    inList = true;
                  }
                  htmlParts.push(`<li>${m[1]}</li>`);
                } else {
                  if (inList) {
                    htmlParts.push("</ol>");
                    inList = false;
                  }
                  htmlParts.push(`<p>${trimmed}</p>`);
                }
              });
              if (inList) htmlParts.push("</ol>");
            } else if (text.includes("\n\n")) {
              text.split(/\n\s*\n/).forEach((p) => htmlParts.push(`<p>${p.trim()}</p>`));
            } else {
              htmlParts.push(`<p>${text}</p>`);
            }
          });
        });

        if (pageIdx < this.pages.length - 1) {
          htmlParts.push("<hr>");
        }
      });

      return htmlParts.join("\n");
    }

  _updateNavScrollIndicators() {
      if (!this.pageSelector || !this.navCarousel) return;
      const { scrollLeft, scrollWidth, clientWidth } = this.pageSelector;
      const canScrollLeft = scrollLeft > 4;
      const canScrollRight = scrollLeft < (scrollWidth - clientWidth - 4);

      if (this.navScrollLeftBtn) {
        this.navScrollLeftBtn.classList.toggle("disabled", !canScrollLeft);
      }
      if (this.navScrollRightBtn) {
        this.navScrollRightBtn.classList.toggle("disabled", !canScrollRight);
      }

      this.navCarousel.classList.toggle("has-overflow-left", canScrollLeft);
      this.navCarousel.classList.toggle("has-overflow-right", canScrollRight);
    }

  formatInlineText(text) {
      if (!text || typeof text !== "string") return text || "";
      if (!text.includes("*")) return text;

      const frag = document.createDocumentFragment();
      const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
      for (const part of parts) {
        if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
          const strong = document.createElement("strong");
          strong.textContent = part.slice(2, -2);
          frag.appendChild(strong);
        } else if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
          const em = document.createElement("em");
          em.textContent = part.slice(1, -1);
          frag.appendChild(em);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      }
      return frag;
    }
}

globalThis.EconomicsOfAutomation = EconomicsOfAutomation;
if (typeof module !== "undefined" && module.exports) module.exports = EconomicsOfAutomation;