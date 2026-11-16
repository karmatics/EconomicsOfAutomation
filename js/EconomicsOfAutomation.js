class EconomicsOfAutomation {
  constructor() {
    this.reader = null;
    this.sidePanel = null;
  }

  static async run(env) {
    const instance = new EconomicsOfAutomation();
    return await instance.run(env);
  }

  async run(env) {
        if (!env || !env.container) {
          throw new Error("[EconomicsOfAutomation] run() requires an environment object with a valid container.");
        }

        if (this.rootElement) {
          this.destroy();
        }

        if (typeof DomBasics !== 'undefined' && typeof DomBasics.run === 'function') {
          DomBasics.run();
        }

        this.env = env;
        this.rootElement = env.container;
        this.rootElement.innerHTML = '';
        this.rootElement.style.overflowY = 'visible';
        this.rootElement.style.overflowX = 'hidden';
        this.rootElement.style.minHeight = '100vh';
        this.rootElement.style.boxSizing = 'border-box';
        this.rootElement.style.transition = 'margin-left 0.25s cubic-bezier(0.2, 0.0, 0.2, 1), width 0.25s cubic-bezier(0.2, 0.0, 0.2, 1)';

        const pages = [
          { id: 'dividend', title: '1. The Robot Dividend', group: 'core', docClass: () => globalThis.ArticleContent },
          { id: 'colony', title: '2. The 100,000 Colony', group: 'core', docClass: () => globalThis.ColonyContent },
          { id: 'earth', title: '3. Earth Transition', group: 'core', docClass: () => globalThis.EarthContent },
          { id: 'statusquo', title: '4. The Status Quo Trap', group: 'response', docClass: () => globalThis.KineticContent },
          { id: 'doomer', title: '5. The Doomer Loop', group: 'response', docClass: () => globalThis.DoomerContent },
          { id: 'paradigms', title: '6. The Three Visions', group: 'response', docClass: () => globalThis.ParadigmsContent },
          { id: 'objections', title: '7. The Adversarial Gauntlet', group: 'response', docClass: () => globalThis.ObjectionsContent },
          { id: 'gametheory', title: '8. Game Theory & The Law', group: 'reference', docClass: () => globalThis.GameTheoryContent },
          { id: 'rules', title: '9. Discussion Ground Rules', group: 'reference', docClass: () => globalThis.RulesContent },
          { id: 'ai-rules', title: '10. AI Prompt Directives', group: 'reference', docClass: () => globalThis.AiRulesContent }
        ];

        this.pages = pages;

        if (typeof DocumentReader !== 'undefined') {
          if (typeof SidePanel !== 'undefined') {
            const isNarrow = window.innerWidth < 860;
            const panelWidth = isNarrow ? 260 : 280;
            this.sidePanel = new SidePanel('left', panelWidth, null);
          }

          this.reader = new DocumentReader({
            container: this.rootElement,
            brandTitle: 'The Robot Dividend',
            brandIcon: '⚡',
            dossierId: 'EconomicsOfAutomation',
            sidePanel: this.sidePanel,
            pages: pages,
            itemNotes: globalThis.CadPlanItemNotes || null,
            itemNotesClass: globalThis.CadPlanItemNotes || null,
            editorClass: globalThis.CadPlanDocumentEditor || null
          });

          this.activePageId = this.reader.currentPageId || 'dividend';
          const origSwitchPage = this.reader.switchPage.bind(this.reader);
          this.reader.switchPage = (pageId, updateUrl = true) => {
            origSwitchPage(pageId, updateUrl);
            this._syncSidebarActiveState(pageId);
          };

          await this.reader.init();

          if (typeof CadPlanAardvark !== 'undefined') {
            this.aardvark = new CadPlanAardvark({
              container: this.rootElement,
              dossierId: 'EconomicsOfAutomation',
              itemNotes: globalThis.CadPlanItemNotes || null,
              documentReader: this.reader
            });
            this.aardvark.init();
            this.reader.aardvark = this.aardvark;
          }

          if (this.sidePanel) {
            this._buildSidePanelNavigation(pages);

            this._safeAreaHandler = (e) => {
              const isMobile = window.innerWidth < 860;
              const left = isMobile ? 0 : (e.detail?.left || 0);
              if (this.rootElement) {
                this.rootElement.style.marginLeft = `${left}px`;
                this.rootElement.style.width = left > 0 ? `calc(100% - ${left}px)` : '100%';
              }
            };
            window.addEventListener('layout-safe-area-change', this._safeAreaHandler);

            if (window.innerWidth >= 860) {
              this.sidePanel.open();
            }
          }

          if (typeof CadPlanItemNotes !== 'undefined' && typeof CadPlanItemNotes.subscribe === 'function') {
            this._unsubNotes = CadPlanItemNotes.subscribe(() => {
              if (this.sidePanel && this.pages) {
                this._buildSidePanelNavigation(this.pages);
              }
            });
          }

          window.economicsApp = this;
          globalThis._economicsInstance = this;
        }

        return this;
      }
  _buildSidePanelNavigation(pages) {
    if (!this.sidePanel) return;

    this.sidePanel.header.innerHTML = '';
    const headerTitle = makeElement('div', {
      style: {
        fontFamily: 'monospace',
        fontSize: '11px',
        fontWeight: 'bold',
        color: '#00f2fe',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flex: 1
      }
    }, [
      makeElement('span', {}, '⚡'),
      makeElement('span', {}, 'The Robot Dividend Series')
    ]);

    const closeBtn = makeElement('button', {
      className: 'dr-nav-btn',
      style: { padding: '2px 8px', fontSize: '10px' },
      onclick: () => this.sidePanel.close()
    }, '✕');

    this.sidePanel.header.append(headerTitle, closeBtn);

    const container = this.sidePanel.contentContainer;
    container.innerHTML = '';
    container.style.cssText = 'flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 12px;';

    // Group 1: Core 3-Part Series
    const coreBox = makeElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '6px' }
    });
    coreBox.appendChild(makeElement('span', {
      style: { fontSize: '10px', textTransform: 'uppercase', color: '#00f2fe', fontWeight: '800', letterSpacing: '0.08em', padding: '0 4px' }
    }, 'Core Treatise:'));

    pages.filter(p => p.group === 'core').forEach(page => {
      coreBox.appendChild(this._createChapterCard(page));
    });
    container.appendChild(coreBox);

    // Group 2: Deep Dives & Targeted Responses
    const respBox = makeElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '6px' }
    });
    respBox.appendChild(makeElement('span', {
      style: { fontSize: '10px', textTransform: 'uppercase', color: '#c084fc', fontWeight: '800', letterSpacing: '0.08em', padding: '0 4px' }
    }, 'Targeted Responses:'));

    pages.filter(p => p.group === 'response').forEach(page => {
      respBox.appendChild(this._createChapterCard(page));
    });
    container.appendChild(respBox);

    // Group 3: Reference & Governance Directives
    const refBox = makeElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '6px' }
    });
    refBox.appendChild(makeElement('span', {
      style: { fontSize: '10px', textTransform: 'uppercase', color: '#f59e0b', fontWeight: '800', letterSpacing: '0.08em', padding: '0 4px' }
    }, 'Governance & Directives:'));

    pages.filter(p => p.group === 'reference').forEach(page => {
      refBox.appendChild(this._createChapterCard(page));
    });
    container.appendChild(refBox);

    // Footer tools
    const toolsBox = makeElement('div', {
      style: {
        marginTop: 'auto',
        paddingTop: '10px',
        borderTop: '1px solid #1e293b',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6px'
      }
    }, [
      makeElement('button', {
        className: 'dr-nav-btn',
        style: { color: '#00f2fe', fontSize: '10px', padding: '6px' },
        onclick: () => {
          if (this.reader && typeof this.reader.showExportDialog === 'function') {
            this.reader.showExportDialog();
          }
        }
      }, '📤 Export Series'),
      makeElement('button', {
        className: 'dr-nav-btn',
        style: { color: '#10b981', fontSize: '10px', padding: '6px' },
        onclick: () => this.selectChapter('ai-rules')
      }, '🤖 Copy Prompt')
    ]);
    container.appendChild(toolsBox);
  }

  _createChapterCard(page) {
      const isCur = page.id === (this.activePageId || this.reader?.currentPageId || 'dividend');
      let noteCount = 0;
      if (typeof CadPlanItemNotes !== 'undefined' && typeof CadPlanItemNotes.getLocalMap === 'function') {
        const map = CadPlanItemNotes.getLocalMap();
        Object.keys(map).forEach(k => {
          if (k.startsWith(`EconomicsOfAutomation:${page.id}:`)) {
            noteCount += (map[k] || []).filter(n => n.status !== 'resolved').length;
          }
        });
      }

      return makeElement('div', {
        className: `cp-chapter-card ${isCur ? 'active' : ''}`,
        id: `nav-card-${page.id}`,
        style: {
          padding: '8px 10px',
          border: '1px solid ' + (isCur ? '#00f2fe' : '#1e293b'),
          borderRadius: '6px',
          background: isCur ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '6px'
        },
        onclick: () => this.selectChapter(page.id)
      }, [
        makeElement('strong', {
          style: {
            fontSize: '11px',
            color: isCur ? '#00f2fe' : '#f8fafc',
            display: 'block'
          }
        }, page.title),
        noteCount > 0 ? makeElement('span', {
          style: {
            background: 'rgba(0, 242, 254, 0.2)',
            color: '#00f2fe',
            border: '1px solid #00f2fe88',
            fontSize: '9px',
            padding: '1px 6px',
            borderRadius: '10px',
            fontWeight: '800',
            fontFamily: 'monospace',
            flexShrink: 0
          }
        }, `${noteCount} 📝`) : null
      ].filter(Boolean));
    }
  selectChapter(pageId) {
    this.activePageId = pageId;
    if (this.reader && typeof this.reader.switchPage === 'function') {
      this.reader.switchPage(pageId);
    }
    if (this.sidePanel) {
      this.sidePanel.contentContainer.querySelectorAll('.cp-chapter-card').forEach(c => {
        c.classList.toggle('active', c.id === `nav-card-${pageId}`);
        c.style.borderColor = c.id === `nav-card-${pageId}` ? '#00f2fe' : '#1e293b';
        c.style.background = c.id === `nav-card-${pageId}` ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)';
        const strong = c.querySelector('strong');
        if (strong) strong.style.color = c.id === `nav-card-${pageId}` ? '#00f2fe' : '#f8fafc';
      });
    }
    if (this.rootElement) {
      this.rootElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  destroy() {
        if (this._unsubNotes) {
          try { this._unsubNotes(); } catch (e) {}
          this._unsubNotes = null;
        }
        if (this._safeAreaHandler) {
          window.removeEventListener('layout-safe-area-change', this._safeAreaHandler);
          this._safeAreaHandler = null;
        }
        if (this.aardvark) {
          this.aardvark.destroy();
          this.aardvark = null;
        }
        if (this.sidePanel) {
          this.sidePanel.destroy();
          this.sidePanel = null;
        }
        if (this.reader && typeof this.reader.destroy === 'function') {
          this.reader.destroy();
          this.reader = null;
        }
        if (globalThis._economicsInstance === this) globalThis._economicsInstance = null;
        this.rootElement = null;
      }
  _syncSidebarActiveState(pageId) {
      this.activePageId = pageId;
      if (this.sidePanel && this.sidePanel.contentContainer) {
        this.sidePanel.contentContainer.querySelectorAll('.cp-chapter-card').forEach(c => {
          const match = c.id === `nav-card-${pageId}`;
          c.classList.toggle('active', match);
          c.style.borderColor = match ? '#00f2fe' : '#1e293b';
          c.style.background = match ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)';
          const strong = c.querySelector('strong');
          if (strong) strong.style.color = match ? '#00f2fe' : '#f8fafc';
        });
      }
    }
}

globalThis.EconomicsOfAutomation = EconomicsOfAutomation;
if (typeof module !== 'undefined' && module.exports) module.exports = EconomicsOfAutomation;