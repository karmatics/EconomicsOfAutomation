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

      // Supported pages / documents in the application
      this.pages = [
        { id: "dividend", title: "1. The Robot Dividend", docClass: () => globalThis.ArticleContent },
        { id: "colony", title: "2. The 100,000 Colony", docClass: () => globalThis.ColonyContent },
        { id: "earth", title: "3. Earth Transition", docClass: () => globalThis.EarthContent },
        { id: "doomer", title: "4. The Doomer Loop", docClass: () => globalThis.DoomerContent }
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

      const pageSelector = makeElement("div", { className: "reader-nav-pages" }, pageTabElements);

      // Floating Navigation Bar
      this.navBar = makeElement("nav", { className: "reader-nav-bar" }, [
        ["div", { className: "reader-nav-brand" }, [
          ["span", {}, "⚡"],
          ["span", {}, "Economics of Automation"]
        ]],
        pageSelector,
        ["div", { className: "reader-nav-actions" }, [
          ["button", {
            className: "nav-btn",
            title: "Toggle Light / Dark reading palette",
            onclick: () => this.toggleTheme()
          }, "🌓 Theme"],
          ["button", {
            className: "nav-btn primary",
            title: "Export formatted essay for Quora or publication",
            onclick: () => this.showExportDialog()
          }, [
            ["span", {}, "📤"],
            ["span", { className: "btn-label-long" }, "Export for Quora"]
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

      const header = makeElement("header", { className: "article-header" }, [
        ["div", { className: "article-meta-row" }, [
          ["span", { className: "article-kicker" }, meta.kicker],
          ["span", { className: "article-read-time" }, `${estMinutes} min read`]
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
          ["div", { className: "block-sidebar-body" }, currentText]
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
        contentEl = makeElement("blockquote", { className: "block-quote" }, currentText);
      } else {
        if (/\n\d+\.\s/.test(currentText) || /^\d+\.\s/.test(currentText)) {
          contentEl = makeElement("div", { className: "block-text-multi" });
          const lines = currentText.split("\n");
          let currentParagraph = [];
          let currentList = null;

          const flushParagraph = () => {
            if (currentParagraph.length > 0) {
              const pText = currentParagraph.join(" ").trim();
              if (pText) contentEl.appendChild(makeElement("p", { className: "block-p" }, pText));
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
              currentList.appendChild(makeElement("li", {}, listMatch[2]));
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
            contentEl.appendChild(makeElement("p", { className: "block-p" }, p));
          });
        } else {
          contentEl = makeElement("p", { className: "block-p" }, currentText);
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

  showExportDialog() {
      const doc = this.getCurrentDoc();
      const meta = doc.getMeta();
      const manifest = doc.manifest();

      // Generate clean, simple HTML tailored for Quora's rich-text limits
      const htmlParts = [];
      htmlParts.push(`<h2>${meta.title}</h2>`);
      htmlParts.push(`<p><em>${meta.subtitle}</em></p>`);

      manifest.forEach((sec) => {
        if (sec.partLabel) {
          htmlParts.push(`<h3>${sec.partLabel}: ${sec.title}</h3>`);
        } else {
          htmlParts.push(`<h3>${sec.title}</h3>`);
        }

        sec.blocks.forEach((b) => {
          if (b.type === "image") {
            htmlParts.push(`<p><em>[Illustration: ${b.file}]</em></p>`);
            return;
          }
          if (b.type === "image-group") {
            const fileList = (b.images || []).map((img) => img.file).join(", ");
            htmlParts.push(`<p><em>[Illustrations: ${fileList}]</em></p>`);
            return;
          }
          if (b.type === "callout") {
            return;
          }

          const variants = (typeof doc[b.id] === "function") ? doc[b.id]() : [];
          const variantKey = `${this.currentPageId}:${b.id}`;
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
            text.split(/\n\s*\n/).forEach((p) => {
              htmlParts.push(`<p>${p.trim()}</p>`);
            });
          } else {
            htmlParts.push(`<p>${text}</p>`);
          }
        });
      });

      const simpleHtml = htmlParts.join("\n");

      const plainText = simpleHtml
        .replace(/<h2>(.*?)<\/h2>/g, "$1\n\n")
        .replace(/<h3>(.*?)<\/h3>/g, "$1\n\n")
        .replace(/<blockquote><p>(.*?)<\/p><\/blockquote>/g, "> $1\n\n")
        .replace(/<ol>(.*?)<\/ol>/gs, "$1\n")
        .replace(/<li>(.*?)<\/li>/g, "• $1\n")
        .replace(/<p><em>(.*?)<\/em><\/p>/g, "$1\n\n")
        .replace(/<p>(.*?)<\/p>/g, "$1\n\n");

      let showingCode = false;

      const previewBox = makeElement("div", {
        className: "export-rendered-preview",
        innerHTML: simpleHtml
      });

      const codeBox = makeElement("textarea", {
        className: "export-code-view",
        readonly: "true",
        value: simpleHtml
      });

      const toggleBtn = makeElement("button", {
        className: "uw-btn",
        onclick: () => {
          showingCode = !showingCode;
          if (showingCode) {
            previewBox.style.display = "none";
            codeBox.style.display = "block";
            toggleBtn.textContent = "👁️ Show Formatted Preview";
          } else {
            codeBox.style.display = "none";
            previewBox.style.display = "block";
            toggleBtn.textContent = "📄 View Simple HTML Code";
          }
        }
      }, "📄 View Simple HTML Code");

      const copyRichBtn = makeElement("button", {
        className: "uw-btn primary",
        onclick: (e) => {
          const btn = e.currentTarget;
          if (navigator.clipboard && window.ClipboardItem) {
            const htmlBlob = new Blob([simpleHtml], { type: "text/html" });
            const textBlob = new Blob([plainText], { type: "text/plain" });
            navigator.clipboard.write([
              new ClipboardItem({
                "text/html": htmlBlob,
                "text/plain": textBlob
              })
            ]).then(() => {
              btn.textContent = "✓ Copied! Paste directly in Quora";
              setTimeout(() => { btn.textContent = "📋 Copy for Quora (Direct Paste)"; }, 2500);
            }).catch(() => {
              this._fallbackCopy(simpleHtml, btn);
            });
          } else {
            this._fallbackCopy(simpleHtml, btn);
          }
        }
      }, "📋 Copy for Quora (Direct Paste)");

      const dialogContent = makeElement("div", { className: "export-container" }, [
        ["p", { className: "export-desc" }, 
          `Formatted text for "${meta.title}". Click 'Copy for Quora' and press Ctrl+V / Cmd+V directly into Quora's rich-text editor.`
        ],
        ["div", { className: "export-view-container" }, [
          previewBox,
          codeBox
        ]],
        ["div", { className: "export-footer-bar" }, [
          toggleBtn,
          copyRichBtn
        ]]
      ]);

      UITools.makeDialog({
        appendTo: document.body,
        title: `Export for Quora: ${meta.title}`,
        size: [600, 520],
        position: [Math.max(20, Math.floor(window.innerWidth / 2 - 300)), 70],
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

      // Update navigation button active styles
      if (this.navPageButtons) {
        Object.entries(this.navPageButtons).forEach(([id, btn]) => {
          btn.classList.toggle("active", id === pageId);
        });
      }

      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Render new document
      this.renderArticle();

      // Update assistant if open
      if (this.assistantDialog && this.assistantDialog.element?.isConnected) {
        const doc = this.getCurrentDoc();
        const firstBlock = doc.manifest()?.[0]?.blocks?.[0]?.id || "p_scarcity_1";
        this.selectBlock(firstBlock, false);
        this.updateAssistant(firstBlock);
      }
    }
}

globalThis.EconomicsOfAutomation = EconomicsOfAutomation;
if (typeof module !== "undefined" && module.exports) module.exports = EconomicsOfAutomation;