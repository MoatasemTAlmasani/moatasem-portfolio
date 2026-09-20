const Navigation = {
  init() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('mobile-open', !open);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false'); links.classList.remove('mobile-open');
    }));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(links.querySelectorAll('.nav-link'));
    const updateActive = () => {
      const scrollY = window.scrollY + 120;
      let active = sections[0]?.id;
      for (const section of sections) if (section.offsetTop <= scrollY) active = section.id;
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === active));
    };
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 20); updateActive(); }, { passive: true });
    updateActive();
  }
};
window.Navigation = Navigation;
document.addEventListener('DOMContentLoaded', () => Navigation.init());
