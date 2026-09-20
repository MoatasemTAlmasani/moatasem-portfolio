/* ============================================
   MAIN.JS — Data loading, rendering, terminal
   ============================================ */

const SVG_ICONS = {
  network: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="8" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="12" cy="17" r="2.5"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="8" x2="12" y2="17"/><line x1="18" y1="8" x2="12" y2="17"/></svg>',
  security: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z"/></svg>',
  systems: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="7" cy="17" r="1" fill="currentColor"/></svg>',
  support: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-1v-6h3M4 12v6a2 2 0 0 0 2 2h1v-6H4"/></svg>',
  tools: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.4-2.4z"/></svg>',
  building: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="7" x2="9" y2="7"/><line x1="15" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="9" y2="11"/><line x1="15" y1="15" x2="15" y2="15"/><line x1="18" y1="15" x2="18" y2="15"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z"/></svg>',
  headset: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="4" height="6" rx="1"/><rect x="18" y="14" width="4" height="6" rx="1"/><path d="M20 20a4 4 0 0 1-4 4h-2"/></svg>',
  graduation: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1 2.5 3 6 3s6-2 6-3v-5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>'
};

const SKILL_ICONS = { networking:'network', security:'security', systems:'systems', support:'support', tools:'tools' };

const App = {
  data: {},

  async init() {
    // دالة آمنة لجلب البيانات لمنع توقف باقي الأجزاء في حال فشل أي ملف
    const loadJson = async (path) => {
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } catch (err) {
        console.error(`فشل تحميل الملف (${path}):`, err);
        return null;
      }
    };

    try {
      const [profile, skills, experience, projects] = await Promise.all([
        loadJson('./data/profile.json'),
        loadJson('./data/skills.json'),
        loadJson('./data/experience.json'),
        loadJson('./data/projects.json')
      ]);

      this.data = { profile, skills, experience, projects };

      // تشغيل الرسم دائماً للأجزاء المتوفرة
      if (this.data.skills) this.renderSkills();
      if (this.data.experience) this.renderExperience();
      if (this.data.projects) this.renderProjects();
      if (this.data.profile) {
        this.renderEducation();
        this.renderContact();
        this.renderFooter();
      }

      // تفعيل التأثيرات والحركات والتنقل دائماً
      this.initReveal();
      this.initTerminal();

      window.addEventListener('languagechange', () => {
        if (this.data.skills) this.renderSkills();
        if (this.data.experience) this.renderExperience();
        if (this.data.projects) this.renderProjects();
        if (this.data.profile) {
          this.renderEducation();
          this.renderContact();
          this.renderFooter();
        }
        this.initTerminal();
      });

    } catch (err) {
      console.error('خطأ عام أثناء التهيئة:', err);
    }
  },

  lang() { return (window.Language && Language.current) ? Language.current : 'en'; },
  tr(obj) { return obj ? (obj[this.lang()] || obj.en || '') : ''; },

  renderSkills() {
    const container = document.getElementById('skills-map');
    if (!container || !this.data.skills || !this.data.skills.groups) return;
    container.innerHTML = this.data.skills.groups.map(group => {
      const iconKey = SKILL_ICONS[group.id] || 'tools';
      return `<div class="skill-group">
        <div class="skill-group-header">
          <div class="skill-group-icon">${SVG_ICONS[iconKey] || SVG_ICONS.tools}</div>
          <div class="skill-group-title">${this.tr(group.title)}</div>
        </div>
        <div class="skill-items">${group.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
      </div>`;
    }).join('');
  },

  renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container || !this.data.experience) return;
    container.innerHTML = this.data.experience.map(job => `
      <div class="timeline-item">
        <div class="timeline-card">
          <div class="timeline-type">${this.tr(job.type)}</div>
          <div class="timeline-role">${this.tr(job.role)}</div>
          <div class="timeline-company">${this.tr(job.company)}</div>
          <div class="timeline-date">${this.tr(job.date)} · ${this.tr(job.location)}</div>
          <ul class="timeline-items">${(job.items && job.items[this.lang()]) ? job.items[this.lang()].map(item => `<li>${item}</li>`).join('') : ''}</ul>
        </div>
      </div>`).join('');
  },

  renderProjects() {
    const container = document.getElementById('projects-network');
    if (!container || !this.data.projects || !this.data.projects.nodes) return;
    const areaIcons = { network: 'building', security: 'shield', support: 'headset' };
    container.innerHTML = this.data.projects.nodes.map(node => `
      <div class="project-node">
        <div class="project-header">
          <div class="project-icon">${SVG_ICONS[areaIcons[node.area] || 'building'] || SVG_ICONS.building}</div>
          <div>
            <div class="project-title">${this.tr(node.title)}</div>
            <span class="project-badge">${this.tr(node.type)}</span>
          </div>
        </div>
        <p class="project-desc">${this.tr(node.description)}</p>
      </div>`).join('');
  },

  renderEducation() {
    const container = document.getElementById('education-list');
    if (!container || !this.data.profile || !this.data.profile.education) return;
    container.innerHTML = this.data.profile.education.map(edu => `
      <div class="edu-card">
        <div class="edu-icon">${SVG_ICONS.graduation}</div>
        <div>
          <div class="edu-degree">${this.tr(edu.degree)}</div>
          <div class="edu-institution">${this.tr(edu.institution)}</div>
          <div class="edu-location">${this.tr(edu.location)}</div>
          <div class="edu-date">${edu.date}</div>
        </div>
      </div>`).join('');
  },

  renderContact() {
    if (!this.data.profile || !this.data.profile.contact) return;
    const c = this.data.profile.contact;
    const cards = document.getElementById('contact-cards');
    if (cards) {
      const items = [
        { label: this.lang() === 'ar' ? 'الهاتف' : 'Phone', value: c.phone, href: `tel:${c.phone ? c.phone.replace(/\s/g, '') : ''}`, icon: SVG_ICONS.phone },
        { label: this.lang() === 'ar' ? 'البريد' : 'Email', value: c.email, href: `mailto:${c.email}`, icon: SVG_ICONS.mail },
        { label: 'LinkedIn', value: 'LinkedIn', href: c.linkedin, icon: SVG_ICONS.linkedin }
      ];
      cards.innerHTML = items.map(item => `
        <a href="${item.href}" class="contact-card" target="${item.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener noreferrer">
          <div class="contact-card-icon">${item.icon}</div>
          <div class="contact-card-label">${item.label}</div>
          <div class="contact-card-value">${item.value}</div>
        </a>`).join('');
    }
  },

  renderFooter() {
    if (!this.data.profile || !this.data.profile.contact) return;
    const social = document.getElementById('footer-social');
    const c = this.data.profile.contact;
    if (social) {
      social.innerHTML = `
        <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${SVG_ICONS.linkedin}</a>
        <a href="mailto:${c.email}" aria-label="Email">${SVG_ICONS.mail}</a>
        <a href="tel:${c.phone ? c.phone.replace(/\s/g, '') : ''}" aria-label="Phone">${SVG_ICONS.phone}</a>`;
    }
    const cp = document.getElementById('footer-copyright');
    if (cp && window.Language) cp.textContent = Language.t('footer.copyright').replace('{year}', new Date().getFullYear());
  },

  initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) { 
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target); 
        } 
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  initTerminal() {
    const body = document.getElementById('noc-terminal-body');
    if (!body || !window.Language) return;
    const lines = Language.t('terminal');
    if (!lines) return;
    body.innerHTML = '';
    let index = 0;
    const showLine = () => {
      if (index >= lines.length) {
        body.innerHTML += '<div class="noc-line"><span class="noc-prompt">&gt;</span> <span class="noc-ok">&#9679;</span> <span class="noc-cursor"></span></div>';
        return;
      }
      const line = lines[index];
      const div = document.createElement('div');
      div.className = 'noc-line';
      div.innerHTML = `<span class="noc-prompt">&gt;</span> ${line}`;
      body.appendChild(div);
      index++;
      setTimeout(showLine, 600);
    };
    setTimeout(showLine, 500);
  }
};

window.App = App;
document.addEventListener('DOMContentLoaded', () => App.init());
