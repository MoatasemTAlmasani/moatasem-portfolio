const I18N = {
  en: {
    brand: 'Moatasem Hashem',
    nav: { home:'Home', about:'About', skills:'Skills', experience:'Experience', projects:'Projects', troubleshooting:'Troubleshooting', contact:'Contact' },
    hero: { available:'Open to Opportunities', viewProjects:'View My Projects', downloadCV:'Download CV', contactMe:'Contact Me' },
    profile: { name:'Moatasem Tareq Mohammed Hashem', headline:'Network Engineer', secondaryTitle:'Technical Support Engineer', tagline:'Network Engineering · Network Security · Technical Support', summary:'Results-driven Technical Support Specialist and detail-oriented Network Engineer with 3 years of experience delivering Tier 1–3 support in fast-paced IT environments.' },
    viz: { title:'NETWORK VISUALIZATION', core:'Core Network', firewall:'Firewall', wan:'WAN Connectivity', infra:'Infrastructure', traffic:'Network Traffic' },
    about: { label:'About', title:'Professional Architecture', bio:'Results-driven Technical Support Specialist and detail-oriented Network Engineer with 3 years of professional experience. Skilled in troubleshooting hardware, software, and network issues, managing service requests, and ensuring high customer satisfaction through effective communication and problem-solving. Focused on network engineering, network security, and enterprise IT infrastructure.', years:'Years Experience', graduated:'Graduated', grade:'with Honor' },
    skills: { label:'Skills', title:'Network Skills Map' },
    experience: { label:'Experience', title:'Professional Experience' },
    projects: { label:'Projects', title:'Project Network' },
    troubleshooting: { label:'Troubleshooting', title:'Diagnostic Flow' },
    ts: { identify:'Identify', isolate:'Isolate', analyze:'Analyze', resolve:'Resolve', verify:'Verify', document:'Document', faultHeader:'Simulated Fault Scenario', fault1:'Issue Detected', fault2:'Connectivity Test', fault3:'Layer Isolation', fault4:'Root Cause', fault5:'Resolution', fault6:'Connectivity Restored', faultNote:'This is a conceptual visualization, not a claim about a real incident.' },
    education: { label:'Education', title:'Academic Background' },
    contact: { label:'Contact', title:"Let's Connect", text:'Interested in networking, infrastructure, or technical collaboration? Get in touch through any of the channels below.', viewProjects:'View Projects', downloadCV:'Download CV' },
    footer: { copyright:'© {year} Moatasem. All rights reserved.', linkedin:'LinkedIn', email:'Email' },
    terminal: ['Initializing network visualization...', 'Checking connectivity...', 'Routing topology loaded', 'Security layer initialized', 'WAN connectivity: ONLINE', 'Core network: ONLINE', 'Network Engineer: READY']
  },
  ar: {
    brand: 'معتصم هاشم',
    nav: { home:'الرئيسية', about:'نبذة عني', skills:'المهارات', experience:'الخبرة', projects:'المشاريع', troubleshooting:'استكشاف الأعطال', contact:'تواصل معي' },
    hero: { available:'متاح للفرص', viewProjects:'استعرض مشاريعي', downloadCV:'تحميل السيرة الذاتية', contactMe:'تواصل معي' },
    profile: { name:'معتصم طارق محمد هاشم', headline:'مهندس شبكات', secondaryTitle:'مهندس دعم فني', tagline:'هندسة الشبكات · أمن الشبكات · الدعم الفني', summary:'أخصائي دعم فني ومهندس شبكات يهتم بالتفاصيل، ولديه خبرة مهنية لمدة 3 سنوات في تقديم دعم من المستوى الأول إلى الثالث ضمن بيئات تقنية سريعة.' },
    viz: { title:'تصور الشبكة', core:'الشبكة الأساسية', firewall:'الجدار الناري', wan:'اتصال WAN', infra:'البنية التحتية', traffic:'حركة الشبكة' },
    about: { label:'نبذة عني', title:'البنية المهنية', bio:'أخصائي دعم فني ومهندس شبكات يهتم بالتفاصيل، ولديه خبرة مهنية لمدة 3 سنوات. أمتلك خبرة في استكشاف أعطال الأجهزة والبرمجيات والشبكات، وإدارة طلبات الخدمة، وتحسين رضا المستخدمين من خلال التواصل الفعال وحل المشكلات. يتركز اهتمامي على هندسة الشبكات وأمن الشبكات والبنية التحتية التقنية للمؤسسات.', years:'سنوات الخبرة', graduated:'سنة التخرج', grade:'مع مرتبة الشرف' },
    skills: { label:'المهارات', title:'خريطة مهارات الشبكات' },
    experience: { label:'الخبرة', title:'الخبرة المهنية' },
    projects: { label:'المشاريع', title:'شبكة المشاريع' },
    troubleshooting: { label:'استكشاف الأعطال', title:'المسار التشخيصي' },
    ts: { identify:'التحديد', isolate:'العزل', analyze:'التحليل', resolve:'الحل', verify:'التحقق', document:'التوثيق', faultHeader:'سيناريو عطل افتراضي', fault1:'اكتشاف المشكلة', fault2:'اختبار الاتصال', fault3:'عزل الطبقة', fault4:'السبب الجذري', fault5:'الحل', fault6:'استعادة الاتصال', faultNote:'هذا تصور توضيحي، وليس ادعاءً بوقوع حادثة حقيقية.' },
    education: { label:'التعليم', title:'الخلفية الأكاديمية' },
    contact: { label:'تواصل', title:'لنتواصل', text:'هل لديك اهتمام بالشبكات أو البنية التحتية أو التعاون التقني؟ تواصل معي عبر إحدى القنوات التالية.', viewProjects:'استعرض المشاريع', downloadCV:'تحميل السيرة الذاتية' },
    footer: { copyright:'© {year} معتصم. جميع الحقوق محفوظة.', linkedin:'LinkedIn', email:'البريد الإلكتروني' },
    terminal: ['جارٍ تشغيل تصور الشبكة...', 'جارٍ التحقق من الاتصال...', 'تم تحميل مخطط التوجيه', 'تم تهيئة طبقة الأمان', 'اتصال WAN: متصل', 'الشبكة الأساسية: متصلة', 'مهندس الشبكات: جاهز']
  }
};

const Language = {
  current: localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en',
  set(lang) {
    this.current = lang;
    localStorage.setItem('portfolio-language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = getPath(I18N[lang], el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });
    document.title = lang === 'ar' ? 'معتصم طارق محمد هاشم | مهندس شبكات' : 'Moatasem Tareq Mohammed Hashem | Network Engineer';
    document.getElementById('meta-desc').content = lang === 'ar' ? 'الموقع المهني لمعتصم طارق محمد هاشم، مهندس شبكات ومهندس دعم فني متخصص في الشبكات وأمن الشبكات واستكشاف الأعطال والبنية التحتية التقنية.' : 'Professional portfolio of Moatasem Tareq Mohammed Hashem, a Network Engineer and Technical Support Engineer specialized in networking, network security, troubleshooting, and IT infrastructure.';
    document.getElementById('og-title').content = document.title;
    document.getElementById('og-desc').content = document.getElementById('meta-desc').content;
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  },
  t(key) { return getPath(I18N[this.current], key); }
};

function getPath(object, path) { return path.split('.').reduce((value, key) => value && value[key], object); }
window.I18N = I18N;
window.Language = Language;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => Language.set(btn.dataset.lang)));
  Language.set(Language.current);
});
