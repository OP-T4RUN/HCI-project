/**
 * HCI Lens / Principles Inspector Mode
 * Dynamically highlights and explains Human-Computer Interaction principles across the UI
 */

const HciInspector = {
  isActive: false,

  toggle() {
    this.isActive = !this.isActive;
    const body = document.body;
    const toggleBtn = document.getElementById('btn-hci-lens');
    const statusText = document.getElementById('hci-lens-text');

    if (this.isActive) {
      body.classList.add('hci-lens-active');
      if (toggleBtn) toggleBtn.classList.add('active');
      if (statusText) statusText.textContent = 'HCI Lens: ON';
      this.attachBadges();
      if (window.showToast) {
        window.showToast('🔍 HCI Lens activated! Hover or click highlighted badges to inspect design principles.', 'info');
      }
    } else {
      body.classList.remove('hci-lens-active');
      if (toggleBtn) toggleBtn.classList.remove('active');
      if (statusText) statusText.textContent = 'HCI Lens: OFF';
      this.removeBadges();
      if (window.showToast) {
        window.showToast('HCI Lens deactivated.', 'default');
      }
    }
  },

  attachBadges() {
    this.removeBadges(); // Clear any previous

    const principles = PROFILE_DATA.hciPrinciples;

    principles.forEach(p => {
      const targets = document.querySelectorAll(p.targetSelector);
      targets.forEach((elem, idx) => {
        // Only attach to first matching visible element to avoid clutter
        if (idx > 0 && !elem.classList.contains('always-badge')) return;

        const badge = document.createElement('div');
        badge.className = 'hci-badge-pill';
        badge.setAttribute('data-id', p.id);
        badge.setAttribute('tabindex', '0');
        badge.setAttribute('role', 'button');
        badge.setAttribute('aria-label', `HCI Principle ${p.id}: ${p.heuristic}`);
        badge.innerHTML = `
          <span class="badge-dot"></span>
          <span class="badge-text">${p.id}: ${p.heuristic.split(' ')[0]}</span>
        `;

        badge.addEventListener('click', (e) => {
          e.stopPropagation();
          UsabilitySuite.inspectPrinciple(p.id);
        });

        badge.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            UsabilitySuite.inspectPrinciple(p.id);
          }
        });

        // Ensure relative positioning on parent if static
        const compStyle = window.getComputedStyle(elem);
        if (compStyle.position === 'static') {
          elem.style.position = 'relative';
        }

        elem.classList.add('hci-highlighted');
        elem.appendChild(badge);
      });
    });
  },

  removeBadges() {
    document.querySelectorAll('.hci-badge-pill').forEach(b => b.remove());
    document.querySelectorAll('.hci-highlighted').forEach(el => el.classList.remove('hci-highlighted'));
  }
};

window.HciInspector = HciInspector;
