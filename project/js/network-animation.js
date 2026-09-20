const NetworkAnimation = {
  nodes: [
    { id:'internet', label:'Internet', icon:'WAN', x:200, y:34, target:'#projects', tip:'Network connectivity' },
    { id:'firewall', label:'Firewall', icon:'FW', x:200, y:114, target:'#skills', tip:'Firewalls · VPN · Network Protection' },
    { id:'core', label:'Core Switch', icon:'CS', x:200, y:194, target:'#skills', tip:'Routing & Switching backbone' },
    { id:'distribution', label:'Distribution', icon:'DS', x:110, y:284, target:'#skills', tip:'LAN · VLAN · Wireless Networking' },
    { id:'access', label:'Access', icon:'AS', x:290, y:284, target:'#experience', tip:'Endpoint connectivity · IT Support' },
    { id:'wan', label:'Branch / WAN', icon:'BR', x:200, y:374, target:'#projects', tip:'WAN connectivity' },
    { id:'users', label:'Users / Services', icon:'IT', x:200, y:464, target:'#troubleshooting', tip:'Technical Support · Incident Management' }
  ],
  links: [['internet','firewall'],['firewall','core'],['core','distribution'],['core','access'],['distribution','wan'],['access','wan'],['wan','users']],
  init() {
    const svg = document.getElementById('hero-topology');
    if (!svg) return;
    const links = document.getElementById('topology-links');
    const nodes = document.getElementById('topology-nodes');
    const packets = document.getElementById('topology-packets');
    const byId = id => this.nodes.find(n => n.id === id);
    links.innerHTML = this.links.map(([a,b]) => {
      const from = byId(a), to = byId(b);
      return `<line class="topology-link" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" />`;
    }).join('');
    nodes.innerHTML = this.nodes.map((node, index) => `
      <g class="topology-node" tabindex="0" data-node="${node.id}" role="button" aria-label="${node.label}">
        <circle class="node-halo" cx="${node.x}" cy="${node.y}" r="27" style="animation-delay:${index * .25}s"></circle>
        <circle class="node-body" cx="${node.x}" cy="${node.y}" r="20"></circle>
        <text class="node-icon" x="${node.x}" y="${node.y}">${node.icon}</text>
        <text x="${node.x + 30}" y="${node.y + 4}">${node.label}</text>
      </g>`).join('');
    packets.innerHTML = this.links.map(([a,b], i) => {
      const from = byId(a), to = byId(b);
      return `<circle class="topology-packet" r="3"><animateMotion dur="${2.7 + i * .25}s" repeatCount="indefinite" begin="${i * .4}s" path="M ${from.x} ${from.y} L ${to.x} ${to.y}" /></circle>`;
    }).join('');
    const tooltip = document.getElementById('node-tooltip');
    nodes.querySelectorAll('.topology-node').forEach(el => {
      const node = byId(el.dataset.node);
      const show = event => {
        tooltip.innerHTML = `<div class="node-tooltip-title">${node.label}</div><div>${node.tip}</div>`;
        tooltip.hidden = false; tooltip.classList.add('visible');
        const x = event.clientX || 0; const y = event.clientY || 0;
        tooltip.style.left = `${Math.min(x + 12, window.innerWidth - 260)}px`;
        tooltip.style.top = `${Math.min(y + 12, window.innerHeight - 90)}px`;
      };
      const hide = () => { tooltip.classList.remove('visible'); tooltip.hidden = true; };
      el.addEventListener('mouseenter', show); el.addEventListener('mousemove', show); el.addEventListener('mouseleave', hide);
      el.addEventListener('focus', event => show(event)); el.addEventListener('blur', hide);
      el.addEventListener('click', () => document.querySelector(node.target)?.scrollIntoView({ behavior:'smooth' }));
      el.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); document.querySelector(node.target)?.scrollIntoView({ behavior:'smooth' }); } });
    });
  }
};
window.NetworkAnimation = NetworkAnimation;
document.addEventListener('DOMContentLoaded', () => NetworkAnimation.init());
