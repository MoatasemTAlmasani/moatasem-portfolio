// js/data.js

const SITE_DATA = {
  // ==================== PROFILE & EDUCATION & CERTS ====================
  profile: {
    identity: {
      name: {
        en: "Moatasem Tareq Mohammed Hashem",
        ar: "معتصم طارق محمد هاشم"
      },
      headline: {
        en: "Network Engineer",
        ar: "مهندس شبكات"
      },
      secondaryTitle: {
        en: "Technical Support Engineer",
        ar: "مهندس دعم فني"
      },
      tagline: {
        en: "Network Engineering · Network Security · Technical Support",
        ar: "هندسة الشبكات · أمن الشبكات · الدعم الفني"
      },
      summary: {
        en: "Results-driven Technical Support Specialist and detail-oriented Network Engineer with 3 years of experience delivering Tier 1–3 support in fast-paced IT environments. Skilled in troubleshooting hardware, software, and network issues, managing service requests, and ensuring high customer satisfaction through effective communication and problem-solving.",
        ar: "أخصائي دعم فني ومهندس شبكات يهتم بالتفاصيل، ولديه خبرة مهنية لمدة 3 سنوات في تقديم دعم من المستوى الأول إلى الثالث ضمن بيئات تقنية سريعة. أمتلك خبرة في استكشاف أعطال الأجهزة والبرمجيات والشبكات، وإدارة طلبات الخدمة، وتحسين رضا المستخدمين من خلال التواصل الفعال وحل المشكلات."
      },
      location: { 
        en: "Sana'a, Yemen", 
        ar: "صنعاء، اليمن" 
      }
    },
    contact: {
      phone: "+967 771 357 631",
      email: "eng.moatasem.almasani@gmail.com",
      linkedin: "https://linkedin.com/in/moatasem-almasani-66b274234",
      github: "https://github.com/moatasem-almasani"
    },
    education: [
      {
        degree: { 
          en: "Bachelor's Degree, Information Technology — Excellent with Honor", 
          ar: "بكالوريوس تقنية المعلومات — ممتاز مع مرتبة الشرف" 
        },
        institution: { 
          en: "University of Science and Technology", 
          ar: "جامعة العلوم والتكنولوجيا" 
        },
        location: { 
          en: "Sana'a, Yemen", 
          ar: "صنعاء، اليمن" 
        },
        date: "2019 – 2023"
      },
      {
        degree: { 
          en: "Diploma, Secretarial and Business Correspondence", 
          ar: "دبلوم السكرتارية والمراسلات التجارية" 
        },
        institution: { 
          en: "Ideal Modern Institute", 
          ar: "المعهد المثالي الحديث" 
        },
        location: { 
          en: "Taiz, Yemen", 
          ar: "تعز، اليمن" 
        },
        date: "Sep 2018 – Sep 2019"
      },
      {
        degree: { 
          en: "Diploma, English Language", 
          ar: "دبلوم اللغة الإنجليزية" 
        },
        institution: { 
          en: "Ideal Modern Institute", 
          ar: "المعهد المثالي الحديث" 
        },
        location: { 
          en: "Taiz, Yemen", 
          ar: "تعز، اليمن" 
        },
        date: "Sep 2017 – Sep 2018"
      }
    ],
    certifications: [
      { title: "PMP — Planning and Project Control Essential", issuer: "Coursera", date: "July 2026" },
      { title: "ITIL Foundation v4", issuer: "Institute of Banking Studies", date: "November 2025" },
      { title: "Ethical Hacking Essentials", issuer: "Coursera", date: "September 2025" },
      { title: "FortiGate Administrator", issuer: "Coursera", date: "September 2025" },
      { title: "Introduction to Microsoft Azure Services", issuer: "Coursera", date: "January 2025" },
      { title: "IBM IT Scrum Master Diploma", issuer: "IBM via Coursera", date: "April 2024" },
      { title: "Google IT Support Professional Certificate", issuer: "Google", date: "December 2023" },
      { title: "FCA — Fortinet Certified Associate", issuer: "Fortinet", date: "November 2023" },
      { title: "FCF — Fortinet Certified Fundamentals", issuer: "Fortinet", date: "October 2023" },
      { title: "CCNA — Cisco Certified Network Associate", issuer: "Cisco Networking Academy", date: "April 2023" },
      { title: "MCSA — Microsoft Certified Solutions Associate", issuer: "Microsoft", date: "April 2023" }
    ],
    professionalDevelopment: [
      {
        title_en: "Development of Leadership Skills",
        title_ar: "تنمية المهارات القيادية",
        institution: "Consultation & Development Center, UST",
        date: "September 2023"
      },
      {
        title_en: "Diploma in Mobile Maintenance & Programming",
        title_ar: "دبلوم صيانة وبرمجة الهواتف المحمولة",
        institution: "Science and Life Institution",
        date: "Jan 2022"
      },
      {
        title_en: "Thinking & Problem Solving Skills",
        title_ar: "مهارات التفكير وحل المشكلات",
        institution: "Consultation & Development Center, UST",
        date: "June 2020"
      }
    ],
    languages: [
      { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" } },
      { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Professional Working Proficiency", ar: "إتقان مهني للعمل" } }
    ],
    cv: "public/cv/Moatasem_Hashem_CV_Updated.pdf"
  },

  // ==================== SKILLS ====================
  skills: {
    groups: [
      {
        id: "networking",
        title: { en: "Networking", ar: "الشبكات" },
        items: ["LAN/WAN", "VLAN", "Wireless Networking", "Routing & Switching", "Cisco", "Mikrotik", "IP Addressing & Subnetting", "RIP", "OSPF", "EIGRP"]
      },
      {
        id: "security",
        title: { en: "Security", ar: "الأمن" },
        items: ["Firewalls", "VPN (Site-to-Site & Remote Access)", "Network Protection Fundamentals", "Network Security Fundamentals"]
      },
      {
        id: "systems",
        title: { en: "Systems & Platforms", ar: "الأنظمة والمنصات" },
        items: ["Windows", "Linux (fundamentals)", "Active Directory", "Office 365"]
      },
      {
        id: "support",
        title: { en: "IT Service Management", ar: "إدارة خدمات تقنية المعلومات" },
        items: ["ITIL Processes", "SLA Compliance", "Incident & Ticket Management", "ManageEngine Service Desk / Service Plus"]
      },
      {
        id: "tools",
        title: { en: "Tools", ar: "الأدوات" },
        items: ["ManageEngine", "Remote Support Tools", "Microsoft Office / Office 365"]
      }
    ]
  },

  // ==================== EXPERIENCE ====================
  experience: [
    {
      role: { en: "Technical Support Engineer", ar: "مهندس دعم فني" },
      company: { en: "Yemen Kuwait Bank", ar: "بنك اليمن والكويت" },
      location: { en: "Sana'a, Yemen", ar: "صنعاء، اليمن" },
      date: { en: "March 2024 – Present", ar: "مارس 2024 – حتى الآن" },
      type: { en: "Professional Experience", ar: "خبرة مهنية" },
      items: {
        en: ["Provide first-line technical support to end-users via phone, email, chat, and ticketing systems.", "Diagnose and troubleshoot hardware, software, and network issues efficiently.", "Log, track, and resolve incidents using ticketing tools (Manage Engine Service Plus).", "Install, configure, and maintain operating systems, applications, and peripherals.", "Set up and support VPN connections, remote desktops, and mobile devices.", "Escalate unresolved issues to Tier 2/3 support or specialized teams when necessary.", "Perform routine maintenance and updates on systems and applications.", "Ensure timely resolution of incidents within agreed Service Level Agreements (SLAs).", "Assist in software deployments, patching, and system upgrades.", "Document all support activities, known issues, and solutions for future reference.", "Continuously update technical knowledge through training and certification."],
        ar: ["تقديم الدعم الفني الأولي للمستخدمين عبر الهاتف والبريد الإلكتروني والدردشة وأنظمة التذاكر.", "تشخيص واستكشاف أعطال الأجهزة والبرمجيات والشبكات بكفاءة.", "تسجيل الحوادث ومتابعتها وحلها باستخدام ManageEngine Service Plus.", "تثبيت أنظمة التشغيل والتطبيقات والأجهزة الطرفية وتهيئتها وصيانتها.", "إعداد اتصالات VPN وأجهزة سطح المكتب البعيد والأجهزة المحمولة ودعمها.", "تصعيد المشكلات غير المحلولة إلى فرق الدعم المتقدمة عند الحاجة.", "تنفيذ الصيانة الدورية والتحديثات للأنظمة والتطبيقات.", "ضمان حل الحوادث ضمن اتفاقيات مستوى الخدمة المتفق عليها.", "المساعدة في نشر البرمجيات والتحديثات وترقيات الأنظمة.", "توثيق أنشطة الدعم والمشكلات المعروفة وحلولها للرجوع إليها لاحقاً.", "تحديث المعرفة التقنية باستمرار من خلال التدريب والشهادات."]
      }
    },
    {
      role: { en: "Network Engineer — Internship", ar: "مهندس شبكات — تدريب" },
      company: { en: "NATCO – HAS", ar: "NATCO – HAS" },
      location: { en: "Sana'a, Yemen", ar: "صنعاء، اليمن" },
      date: { en: "October 2023 – December 2023", ar: "أكتوبر 2023 – ديسمبر 2023" },
      type: { en: "Internship", ar: "تدريب" },
      items: {
        en: ["Gained practical knowledge of network fundamentals, including LAN, WAN, and VLAN concepts.", "Configured and troubleshot routers, switches, and access points under supervision.", "Practiced IP addressing, subnetting, and routing protocols (RIP, OSPF, and EIGRP).", "Gained hands-on experience with Windows and Linux network configurations.", "Created and documented network inventory, including topology diagrams and IP address lists.", "Studied and applied IT security practices and network protection measures.", "Collaborated with team members to understand real-world IT infrastructure operations."],
        ar: ["اكتساب معرفة عملية بأساسيات الشبكات، بما في ذلك مفاهيم LAN وWAN وVLAN.", "تهيئة واستكشاف أعطال أجهزة التوجيه والمبدلات ونقاط الوصول تحت الإشراف.", "التدرب على عنونة IP وتقسيم الشبكات وبروتوكولات التوجيه RIP وOSPF وEIGRP.", "اكتساب خبرة عملية في تهيئة الشبكات على Windows وLinux.", "إنشاء وتوثيق جرد الشبكة، بما في ذلك مخططات البنية وقوائم عناوين IP.", "دراسة وتطبيق ممارسات أمن تقنية المعلومات وإجراءات حماية الشبكات.", "التعاون مع أعضاء الفريق لفهم عمليات البنية التحتية التقنية الواقعية."]
      }
    },
    {
      role: { en: "IT Assistant", ar: "مساعد تقنية معلومات" },
      company: { en: "Yemen Media Guide (YMGD)", ar: "دليل الإعلام اليمني (YMGD)" },
      location: { en: "Taiz, Yemen", ar: "تعز، اليمن" },
      date: { en: "May 2023 – August 2023", ar: "مايو 2023 – أغسطس 2023" },
      type: { en: "Professional Experience", ar: "خبرة مهنية" },
      items: {
        en: ["Participated in on-call rotations and after-hours support as needed.", "Maintained IT security best practices, including antivirus management and user awareness.", "Collaborated with other IT teams to improve system reliability and user experience.", "Installed and configured hardware, software, systems, networks, printers, and scanners.", "Responded in a timely manner to service issues and requests.", "Repaired and replaced equipment as necessary.", "Tested new technology."],
        ar: ["المشاركة في المناوبات والدعم خارج أوقات الدوام عند الحاجة.", "الحفاظ على أفضل ممارسات أمن تقنية المعلومات، بما في ذلك إدارة مضادات الفيروسات وتوعية المستخدمين.", "التعاون مع فرق تقنية المعلومات لتحسين موثوقية الأنظمة وتجربة المستخدم.", "تثبيت وتهيئة الأجهزة والبرمجيات والأنظمة والشبكات والطابعات والماسحات.", "الاستجابة في الوقت المناسب لمشكلات وطلبات الخدمة.", "إصلاح المعدات واستبدالها عند الحاجة.", "اختبار التقنيات الجديدة."]
      }
    }
  ],

  // ==================== PROJECTS ====================
  projects: {
    nodes: [
      {
        id: "enterprise-network",
        title: { en: "Enterprise Network Design", ar: "تصميم شبكة المؤسسات" },
        type: { en: "Learning / Design Project", ar: "مشروع تعليمي / تصميمي" },
        description: {
          en: "Multi-floor enterprise network design using Core, Distribution, and Access layers, VLAN segmentation, inter-VLAN routing, redundancy, Internet connectivity, and site-to-administration connectivity.",
          ar: "تصميم شبكة مؤسسية متعددة الطوابق باستخدام طبقات Core وDistribution وAccess، مع تقسيم VLAN وInter-VLAN Routing والتكرار والاتصال بالإنترنت وربط الموقع الإداري."
        },
        technologies: ["Cisco IOS", "VLANs", "Inter-VLAN Routing", "HSRP", "STP", "GNS3"],
        metrics: "High Availability & Multi-Tier Architecture",
        parent: "core",
        area: "network",
        status: "completed",
        icon: "network-wired"
      },
      {
        id: "wan-mpls",
        title: { en: "WAN & Branch Connectivity", ar: "اتصال WAN وربط الفروع" },
        type: { en: "Learning / Lab Project", ar: "مشروع تعليمي / مختبري" },
        description: {
          en: "Studying and designing enterprise WAN connectivity using MPLS concepts including PE/P routers, LSP, LDP, VRF, RD/RT, and branch-to-HQ communication.",
          ar: "دراسة وتصميم اتصال WAN للمؤسسات باستخدام مفاهيم MPLS، بما في ذلك PE/P وLSP وLDP وVRF وRD/RT وربط الفروع بالمقر الرئيسي."
        },
        technologies: ["MPLS", "BGP", "OSPF", "VRF", "LDP", "EVE-NG"],
        metrics: "Multi-Site Secure Routing",
        parent: "wan",
        area: "network",
        status: "completed",
        icon: "globe"
      },
      {
        id: "security-lab",
        title: { en: "Network Security Lab", ar: "مختبر أمن الشبكات" },
        type: { en: "Lab Project", ar: "مشروع مختبري" },
        description: {
          en: "Hands-on learning around firewalls, VPN configuration (site-to-site and remote access), network segmentation, and security troubleshooting.",
          ar: "تدريب عملي على الجدران النارية وتهيئة VPN (Site-to-Site وRemote Access) وتقسيم الشبكات واستكشاف أعطال الأمن."
        },
        technologies: ["Fortinet FortiGate", "IPsec VPN", "SSL VPN", "NAT", "Firewall Policies"],
        metrics: "Encrypted Tunnels & Perimeter Defense",
        parent: "firewall",
        area: "security",
        status: "active",
        icon: "shield-alt"
      },
      {
        id: "ticketing",
        title: { en: "IT Service Desk Operations", ar: "عمليات مكتب خدمة تقنية المعلومات" },
        type: { en: "Professional Experience", ar: "خبرة مهنية" },
        description: {
          en: "Managing incidents and service requests via ManageEngine Service Plus, ensuring SLA compliance, documenting solutions, and escalating complex issues to Tier 2/3 teams.",
          ar: "إدارة الحوادث وطلبات الخدمة عبر ManageEngine Service Plus، وضمان الالتزام باتفاقيات مستوى الخدمة، وتوثيق الحلول، وتصعيد المشكلات المعقدة إلى فرق الدعم المتقدمة."
        },
        technologies: ["ManageEngine ServiceDesk", "ITIL v4", "SLA Management", "Active Directory", "Ticketing"],
        metrics: "Tier 1-3 Support & High SLA Compliance",
        parent: "access",
        area: "support",
        status: "operational",
        icon: "headset"
      }
    ]
  }
};