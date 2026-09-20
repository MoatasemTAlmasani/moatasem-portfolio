const NetworkAnimation = {
  nodes: [
    // طبقة الحافة ومزودي الخدمة (WAN / ISP Layer)
    { id: 'isp1', label: 'ISP 1 (BGP)', icon: 'I1', x: 130, y: 35, target: '#projects', tip: 'Primary Internet Provider & BGP Routing' },
    { id: 'isp2', label: 'ISP 2 (Backup)', icon: 'I2', x: 270, y: 35, target: '#projects', tip: 'Secondary Redundant Internet Provider' },

    // طبقة جدار الحماية المزدوج (HA Firewalls)
    { id: 'fw1', label: 'Primary FW', icon: 'F1', x: 145, y: 110, target: '#skills', tip: 'Primary FortiGate Firewall (Active - Deep Packet Inspection)' },
    { id: 'fw2', label: 'Secondary FW', icon: 'F2', x: 255, y: 110, target: '#skills', tip: 'Secondary FortiGate Firewall (Standby / HA Heartbeat)' },

    // طبقة المفاتيح المركزية المزدوجة (Dual Core Switches)
    { id: 'core1', label: 'Core Switch 1', icon: 'C1', x: 145, y: 185, target: '#skills', tip: 'Primary Enterprise Core Switch (Stacking Backbone)' },
    { id: 'core2', label: 'Core Switch 2', icon: 'C2', x: 255, y: 185, target: '#skills', tip: 'Secondary Enterprise Core Switch (High Availability)' },

    // مجمع السيرفرات ومنطقة الحماية (Server Farm & DMZ)
    { id: 'web', label: 'DMZ Web Server', icon: 'WB', x: 70, y: 260, target: '#projects', tip: 'Secure Web Server & Public Services' },
    { id: 'ad', label: 'Active Directory', icon: 'AD', x: 150, y: 265, target: '#skills', tip: 'Domain Controller, LDAP, DNS & Authentication' },
    { id: 'db', label: 'Database Server', icon: 'DB', x: 250, y: 265, target: '#projects', tip: 'Enterprise SQL & MySQL Core Database' },
    { id: 'nas', label: 'NAS / Storage', icon: 'NS', x: 330, y: 260, target: '#projects', tip: 'Network Attached Storage & Automated Backups' },

    // طبقة التوزيع والوصول (Distribution & Access)
    { id: 'distribution', label: 'Distribution Layer', icon: 'DS', x: 130, y: 345, target: '#skills', tip: 'LAN Inter-VLAN Routing & Policies' },
    { id: 'access', label: 'Access Layer', icon: 'AS', x: 270, y: 345, target: '#experience', tip: 'Port Security, PoE & Access Switches' },

    // الفروع والمستخدمين (Branch WAN & End Users)
    { id: 'wan', label: 'Branch / SD-WAN', icon: 'BR', x: 200, y: 420, target: '#projects', tip: 'MPLS & SD-WAN Multi-Site Branch Connectivity' },
    { id: 'users', label: 'Users & Services', icon: 'IT', x: 200, y: 490, target: '#troubleshooting', tip: 'Technical Support, End-Users & Workstations' }
  ],

  links: [
    // ربط مزودي الخدمة بجدران الحماية
    ['isp1', 'fw1'],
    ['isp2', 'fw2'],
    ['fw1', 'fw2'], // رابط المزامنة والنبض (HA Heartbeat)

    // ربط جدران الحماية بالـ Core Switches (مسارات مزدوجة)
    ['fw1', 'core1'],
    ['fw1', 'core2'],
    ['fw2', 'core1'],
    ['fw2', 'core2'],
    ['core1', 'core2'], // ربط بين السويتشين المركزيين

    // ربط السيرفرات ومنطقة DMZ بالـ Core Switches
    ['core1', 'web'],
    ['core1', 'ad'],
    ['core2', 'db'],
    ['core2', 'nas'],

    // ربط الـ Core بسويتشات التوزيع والوصول
    ['core1', 'distribution'],
    ['core2', 'access'],
    ['distribution', 'access'],

    // ربط الشبكة الفرعية والمستخدمين
    ['distribution', 'wan'],
    ['access', 'wan'],
    ['wan', 'users']
  ],

  init() {
    const svg = document.getElementById('hero-topology');
    if (!svg) return;
    const links = document.getElementById('topology-links');
    const nodes = document.getElementById('topology-nodes');
    const packets = document.getElementById('topology-packets');
    const byId = id => this.nodes.find(n => n.id === id);

    // رسم الروابط الخطية
    links.innerHTML = this.links.map(([a, b]) => {
      const from = byId(a), to = byId(b);
      return `<line class="topology-link" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" />`;
    }).join('');

    // رسم العقد والأجهزة بداخل الـ SVG مع مراعاة إزاحة النص لئلا يتداخل مع الأجهزة المجاورة
    nodes.innerHTML = this.nodes.map((node, index) => {
      // تحديد اتجاه إزاحة النص حسب الموقع يميناً أو يساراً لجمالية العرض
      const isRightSide = node.x > 200;
      const textX = isRightSide ? node.x + 24 : node.x - 24;
      const textAnchor = isRightSide ? 'start' : 'end';

      return `
      <g class="topology-node node-${node.type || 'default'}" tabindex="0" data-node="${node.id}" role="button" aria-label="${node.label}">
        <circle class="node-halo" cx="${node.x}" cy="${node.y}" r="27" style="animation-delay:${index * .2}s"></circle>
        <circle class="node-body" cx="${node.x}" cy="${node.y}" r="20"></circle>
        <text class="node-icon" x="${node.x}" y="${node.y}">${node.icon}</text>
        <text x="${textX}" y="${node.y + 4}" text-anchor="${textAnchor}" style="font-size: 10px; font-weight: 500;">${node.label}</text>
      </g>`;
    }).join('');

    // رسم حزم البيانات المتحركة عبر الروابط
    packets.innerHTML = this.links.map(([a, b], i) => {
      const from = byId(a), to = byId(b);
      return `<circle class="node-packet topology-packet" r="3"><animateMotion dur="${2.5 + (i % 5) * .3}s" repeatCount="indefinite" begin="${i * .2}s" path="M ${from.x} ${from.y} L ${to.x} ${to.y}" /></circle>`;
    }).join('');

    const tooltip = document.getElementById('node-tooltip');
    nodes.querySelectorAll('.topology-node').forEach(el => {
      const node = byId(el.dataset.node);
      const show = event => {
        if (!tooltip) return;
        tooltip.innerHTML = `<div class="node-tooltip-title">${node.label}</div><div>${node.tip}</div>`;
        tooltip.hidden = false; 
        tooltip.classList.add('visible');
        const x = event.clientX || 0; 
        const y = event.clientY || 0;
        tooltip.style.left = `${Math.min(x + 12, window.innerWidth - 260)}px`;
        tooltip.style.top = `${Math.min(y + 12, window.innerHeight - 90)}px`;
      };
      const hide = () => { 
        if (!tooltip) return;
        tooltip.classList.remove('visible'); 
        tooltip.hidden = true; 
      };

      el.addEventListener('mouseenter', show); 
      el.addEventListener('mousemove', show); 
      el.addEventListener('mouseleave', hide);
      el.addEventListener('focus', event => show(event)); 
      el.addEventListener('blur', hide);
      el.addEventListener('click', () => document.querySelector(node.target)?.scrollIntoView({ behavior:'smooth' }));
      el.addEventListener('keydown', event => { 
        if (event.key === 'Enter' || event.key === ' ') { 
          event.preventDefault(); 
          document.querySelector(node.target)?.scrollIntoView({ behavior:'smooth' }); 
        } 
      });
    });
  }
};

window.NetworkAnimation = NetworkAnimation;
document.addEventListener('DOMContentLoaded', () => NetworkAnimation.init());