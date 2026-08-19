export const profile = {
  name: "TellurOm",
  role: "B.Tech CSE — Cyber Security",
  university: "ITM Skills University, Kharghar",
  location: "Navi Mumbai, India",
  graduation: "2028",
  email: "tellurom108@gmail.com",
  phone: "90112873073",
  github: "https://github.com/TellurOm",
  linkedin: "https://www.linkedin.com/in/naanetellurom108/",
  resume: "https://drive.google.com/file/d/1OF_p_Qq2fm6GZmc4ACTDVJb3KMISBClk/view?usp=drive_link",
  certificate:
    "https://drive.google.com/file/d/1q8wHuOjp2B9onFdW5sA__qnSuuIUy_Pu/view?usp=drive_link",
  intro:
    "B.Tech CSE Cyber Security student focused on ethical hacking, penetration testing, network security and continuous security research.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Certification", href: "#certification" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const metadataStrip = [
  { value: "eJPT Certified", label: "Security Junior Penetration Tester" },
  { value: "2028", label: "Expected graduation" },
  { value: "Cyber Security", label: "Primary focus" },
  { value: "Navi Mumbai", label: "India" },
];

export const focusAreas = [
  {
    no: "01",
    title: "Penetration Testing",
    line: "Structured assessment of hosts and services inside authorized lab environments.",
    detail: "Scoping → recon → enumeration → validation",
  },
  {
    no: "02",
    title: "Network Security",
    line: "Understanding protocols, traffic behaviour and where trust breaks down.",
    detail: "TCP/IP · packet analysis · segmentation",
  },
  {
    no: "03",
    title: "Ethical Hacking",
    line: "Studying attacker methodology to reason about defensive gaps.",
    detail: "Methodology · tooling · reporting",
  },
  {
    no: "04",
    title: "Cloud Security",
    line: "Building foundations in identity, configuration and shared-responsibility models.",
    detail: "In progress — coursework & labs",
  },
];

export const skillGroups = [
  { group: "Security", items: ["Kali Linux", "Nmap", "Wireshark"] },
  { group: "Programming", items: ["C", "C++", "Python"] },
  { group: "Web", items: ["HTML5", "CSS3", "JavaScript"] },
  { group: "Development", items: ["Git", "GitHub", "VS Code", "Terminal"] },
  { group: "Systems", items: ["Windows", "Ubuntu", "Linux"] },
  {
    group: "Core",
    items: [
      "Computer Networking",
      "Operating Systems",
      "DBMS",
      "OOP",
      "Cyber Security Fundamentals",
    ],
  },
];

export const methodology = [
  {
    no: "01",
    stage: "Reconnaissance",
    detail:
      "Mapping the authorized lab scope — host discovery, service exposure and surface notes before any interaction.",
  },
  {
    no: "02",
    stage: "Enumeration",
    detail:
      "Interrogating identified services to build an accurate picture of versions, shares and reachable endpoints.",
  },
  {
    no: "03",
    stage: "Vulnerability Assessment",
    detail:
      "Correlating findings with known weakness classes and separating noise from what is actually exploitable.",
  },
  {
    no: "04",
    stage: "Exploitation",
    detail:
      "Validating a small number of findings in simulated lab targets to confirm real impact rather than theory.",
  },
  {
    no: "05",
    stage: "Post-Exploitation",
    detail:
      "Studying privilege escalation fundamentals, persistence concepts and clean documentation of the path taken.",
  },
];

export const journey = [
  {
    phase: "Foundations",
    items: ["Programming", "Computer Networks", "Operating Systems", "DBMS"],
  },
  {
    phase: "Security Fundamentals",
    items: ["Cybersecurity Fundamentals", "Cryptography", "Linux"],
  },
  {
    phase: "Practical Security",
    items: ["Reconnaissance", "Enumeration", "Vulnerability Assessment"],
  },
  { phase: "eJPT", items: ["Security Junior Penetration Tester"] },
  { phase: "Continuing", items: ["CTFs", "Security Labs", "Cybersecurity Research"] },
];

export const caseStudy = {
  title: "Enterprise Penetration Testing Labs & Network Exploitation",
  subtitle: "eJPT Certification Applied Research",
  summary:
    "A sustained body of hands-on work carried out across authorized, simulated laboratory networks while preparing for and completing the eJPT certification — treating each lab as a small engagement with a scope, a method and written findings.",
  overview: [
    "The work centred on practising a complete assessment workflow against intentionally vulnerable hosts inside authorized lab environments rather than on isolated tool usage.",
    "Each lab was approached as a miniature engagement: define the scope, enumerate what is reachable, assess what is weak, validate a limited number of findings, and record the reasoning behind every step.",
  ],
  approach: [
    "Scope first — only in-scope, simulated lab targets were touched, with the boundaries written down before starting.",
    "Recon and enumeration were kept deliberately slow, so that later conclusions rested on observed evidence instead of assumptions.",
    "Findings were categorised by weakness class and reachability before any exploitation was attempted.",
    "Validation stayed minimal and purposeful; the goal was confirming impact, not collecting shells.",
    "Every lab ended with notes: what worked, what failed, and what a defender would have seen.",
  ],
  tools: ["Kali Linux", "Nmap", "Wireshark", "Linux"],
  technicalAreas: [
    "Reconnaissance",
    "Enumeration",
    "Vulnerability Assessment",
    "Network Analysis",
    "Privilege Escalation Fundamentals",
  ],
  learnings: [
    "Enumeration quality determines everything downstream — most dead ends came from rushing this stage.",
    "Reading traffic in Wireshark made abstract protocol theory concrete, especially around authentication and service behaviour.",
    "Tools are interchangeable; the methodology is the transferable skill.",
    "Documentation is part of the technical work, not an afterthought — an unreproducible finding has little value.",
    "Working strictly inside authorized environments builds the professional habits expected of a security practitioner.",
  ],
};
