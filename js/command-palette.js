/**
 * Command Palette (Ctrl+K)
 * Power-user accelerator supporting Nielsen Heuristic #7 (Flexibility & Efficiency of Use)
 */

const CommandPalette = {
  isOpen: false,
  selectedIndex: 0,
  filteredItems: [],

  items: [
    // Navigation
    { id: 'nav-home', title: 'Go to Hero / Overview', category: 'Navigation', icon: '🏠', action: () => CommandPalette.scrollTo('#hero') },
    { id: 'nav-academic', title: 'Go to Academic & Education (VJTI)', category: 'Navigation', icon: '🎓', action: () => CommandPalette.scrollTo('#education') },
    { id: 'nav-exp', title: 'Go to Research Experience (IIIT Una)', category: 'Navigation', icon: '🔬', action: () => CommandPalette.scrollTo('#experience') },
    { id: 'nav-projects', title: 'Go to Engineering Projects', category: 'Navigation', icon: '⚡', action: () => CommandPalette.scrollTo('#projects') },
    { id: 'nav-skills', title: 'Go to Technical Skills & Systems', category: 'Navigation', icon: '🛠️', action: () => CommandPalette.scrollTo('#skills') },
    { id: 'nav-certs', title: 'Go to Verified Certifications', category: 'Navigation', icon: '📜', action: () => CommandPalette.scrollTo('#certifications') },
    { id: 'nav-blogs', title: 'Go to Technical Blogs & Research Notes', category: 'Navigation', icon: '✍️', action: () => CommandPalette.scrollTo('#blogs') },
    { id: 'nav-contact', title: 'Go to Contact & Social Connect', category: 'Navigation', icon: '📬', action: () => CommandPalette.scrollTo('#contact') },
    { id: 'nav-usability', title: 'Go to HCI Usability Evaluation Suite', category: 'Navigation', icon: '🧪', action: () => CommandPalette.scrollTo('#usability-lab') },

    // Interactive Simulators
    { id: 'sim-logistics', title: 'Launch MaargAI Risk Anomaly Simulator', category: 'Simulators', icon: '🚚', action: () => { CommandPalette.scrollTo('#projects'); Simulators.logistics.injectAnomaly('deviation'); } },
    { id: 'sim-traffic', title: 'Launch AI Network Traffic Classifier (CIC-IDS 2017)', category: 'Simulators', icon: '📡', action: () => { CommandPalette.scrollTo('#projects'); Simulators.traffic.classify('ddos'); } },
    { id: 'sim-enterprise', title: 'Launch Enterprise AD & SIEM Topology Explorer', category: 'Simulators', icon: '🖥️', action: () => { CommandPalette.scrollTo('#projects'); Simulators.enterprise.selectNode('dc'); } },

    // HCI Tools
    { id: 'tool-lens', title: 'Toggle HCI Principles Lens (Overlay)', category: 'HCI Tools', icon: '🔍', action: () => HciInspector.toggle() },
    { id: 'tool-benchmark', title: 'Start Guided Usability Benchmark Test', category: 'HCI Tools', icon: '⏱️', action: () => UsabilitySuite.benchmark.start() },
    { id: 'tool-sus', title: 'Open System Usability Scale (SUS) Calculator', category: 'HCI Tools', icon: '📊', action: () => CommandPalette.scrollTo('#sus-section') },
    { id: 'tool-matrix', title: 'View Nielsen 10 Heuristics Audit Matrix', category: 'HCI Tools', icon: '📋', action: () => CommandPalette.scrollTo('#heuristic-section') },
    { id: 'tool-report', title: 'View Formal Academic HCI Report', category: 'HCI Tools', icon: '📑', action: () => window.openHciReportModal && window.openHciReportModal() },

    // Actions & Shortcuts
    { id: 'act-theme', title: 'Toggle Dark / Light Theme', category: 'Actions', icon: '🌓', action: () => window.toggleTheme && window.toggleTheme() },
    { id: 'act-thm', title: 'Open TryHackMe Profile (OPT4RUN - Top 1% Global)', category: 'Actions', icon: '🛡️', action: () => window.open('https://tryhackme.com/p/OPT4RUN', '_blank') },
    { id: 'act-github', title: 'Open GitHub Profile (OP-T4RUN)', category: 'Actions', icon: '🐙', action: () => window.open('https://github.com/OP-T4RUN', '_blank') },
    { id: 'act-linkedin', title: 'Open LinkedIn Profile (Tarun Kumar Bajotra)', category: 'Actions', icon: '💼', action: () => window.open('https://www.linkedin.com/in/tarun-kumar-bajotra-240416371', '_blank') },
    { id: 'act-email', title: 'Copy Email: tarunbajotra2006@gmail.com', category: 'Actions', icon: '📋', action: () => CommandPalette.copyText('tarunbajotra2006@gmail.com', 'Email copied to clipboard!') },
    { id: 'act-phone', title: 'Copy Phone: +91 9622791729', category: 'Actions', icon: '📞', action: () => CommandPalette.copyText('+91 9622791729', 'Phone number copied to clipboard!') },
    { id: 'act-resume', title: 'Download Printable Resume PDF', category: 'Actions', icon: '📄', action: () => window.printResume && window.printResume() },
    { id: 'act-vcard', title: 'Download Contact vCard (.vcf)', category: 'Actions', icon: '📇', action: () => window.downloadVCard && window.downloadVCard() }
  ],

  init() {
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      } else if (e.key === '?' && !this.isTypingInInput(e)) {
        e.preventDefault();
        window.openShortcutsModal && window.openShortcutsModal();
      }
    });
  },

  isTypingInInput(e) {
    const tag = (e.target.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
  },

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  },

  open() {
    this.isOpen = true;
    let modal = document.getElementById('command-palette-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'command-palette-modal';
      modal.className = 'palette-overlay';
      modal.innerHTML = `
        <div class="palette-container glass-panel">
          <div class="palette-search-box">
            <span class="palette-search-icon">🔍</span>
            <input
              type="text"
              id="palette-input"
              class="palette-input"
              placeholder="Search sections, projects, blogs, simulators, or HCI tools... (Press ESC to close)"
              autocomplete="off"
            />
            <span class="palette-esc-badge">ESC</span>
          </div>
          <div id="palette-results" class="palette-results"></div>
          <div class="palette-footer">
            <span>Use <strong>↑</strong> <strong>↓</strong> to navigate</span>
            <span><strong>Enter</strong> to select</span>
            <span><strong>Esc</strong> to dismiss</span>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.close();
      });

      const input = document.getElementById('palette-input');
      input.addEventListener('input', (e) => this.filter(e.target.value));
      input.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    modal.classList.add('visible');
    const input = document.getElementById('palette-input');
    input.value = '';
    this.filter('');
    setTimeout(() => input.focus(), 50);
  },

  close() {
    this.isOpen = false;
    const modal = document.getElementById('command-palette-modal');
    if (modal) modal.classList.remove('visible');
  },

  filter(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }
    this.selectedIndex = 0;
    this.renderResults();
  },

  renderResults() {
    const container = document.getElementById('palette-results');
    if (!container) return;

    if (this.filteredItems.length === 0) {
      container.innerHTML = `
        <div class="palette-empty">
          <p>No matching commands found. Try 'project', 'sus', 'research', or 'h1'.</p>
        </div>
      `;
      return;
    }

    let html = '';
    let currentCat = '';

    this.filteredItems.forEach((item, idx) => {
      if (item.category !== currentCat) {
        currentCat = item.category;
        html += `<div class="palette-category-title">${currentCat}</div>`;
      }
      const isSelected = idx === this.selectedIndex;
      html += `
        <div
          class="palette-item ${isSelected ? 'selected' : ''}"
          onclick="CommandPalette.select(${idx})"
          onmouseenter="CommandPalette.setHover(${idx})"
        >
          <span class="palette-item-icon">${item.icon}</span>
          <span class="palette-item-title">${item.title}</span>
          <span class="palette-item-cat">${item.category}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    // Scroll into view if needed
    const selectedEl = container.querySelector('.palette-item.selected');
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  },

  setHover(idx) {
    this.selectedIndex = idx;
    const container = document.getElementById('palette-results');
    if (!container) return;
    container.querySelectorAll('.palette-item').forEach((el, i) => {
      el.classList.toggle('selected', i === idx);
    });
  },

  handleKeydown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex + 1) % this.filteredItems.length;
      this.renderResults();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
      this.renderResults();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.filteredItems[this.selectedIndex]) {
        this.select(this.selectedIndex);
      }
    }
  },

  select(idx) {
    const item = this.filteredItems[idx];
    if (item && item.action) {
      this.close();
      item.action();
    }
  },

  scrollTo(selector) {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  copyText(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      if (window.showToast) window.showToast(successMsg, 'success');
    }).catch(() => {
      if (window.showToast) window.showToast(text, 'default');
    });
  }
};

window.CommandPalette = CommandPalette;
