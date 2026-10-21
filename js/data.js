/**
 * Profile & HCI Evaluation Data Store
 * Tarun Kumar Bajotra | Computer Engineering @ VJTI Mumbai
 */

const PROFILE_DATA = {
  personal: {
    name: "Tarun Kumar Bajotra",
    title: "Computer Engineering Undergraduate & Cybersecurity Researcher",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    degree: "B.Tech. in Computer Engineering (Expected 2028)",
    cgpa: "8.72 / 10",
    email: "tarunbajotra2006@gmail.com",
    phone: "+91 9622791729",
    location: "Mumbai, Maharashtra, India",
    availability: "Available for Summer 2026/2027 Software & Security Research Internships",
    bio: "Computer Engineering undergraduate at VJTI with an 8.72/10 CGPA and hands-on experience in Python, C++, PostgreSQL, network traffic analysis, and cloud-based applications. Built data processing and network classification workflows, contributed to a real-time risk-monitoring platform, and conducted cybersecurity research involving mathematical modeling of cyberattacks. Passionate about software engineering, distributed systems, networking, and cloud security.",
    socials: [
      { name: "GitHub", url: "https://github.com/OP-T4RUN", icon: "github", handle: "@OP-T4RUN" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tarun-kumar-bajotra-240416371", icon: "linkedin", handle: "Tarun Kumar Bajotra" },
      { name: "TryHackMe", url: "https://tryhackme.com/p/OPT4RUN", icon: "shield", handle: "OPT4RUN (Top 1% Global)" },
      { name: "Email", url: "mailto:tarunbajotra2006@gmail.com", icon: "mail", handle: "tarunbajotra2006@gmail.com" }
    ],
    stats: [
      { label: "CGPA (VJTI)", value: "8.72", detail: "Top tier academic standing", icon: "award" },
      { label: "TryHackMe Rank", value: "Top 1%", detail: "Global Cybersecurity Standing (@OPT4RUN)", icon: "shield" },
      { label: "Model Accuracy", value: "95%", detail: "CIC-IDS 2017 Traffic Classifier", icon: "activity" },
      { label: "Certifications", value: "7+", detail: "Cisco, Google, TryHackMe", icon: "check-circle" }
    ]
  },

  education: {
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    location: "Mumbai, India",
    degree: "Bachelor of Technology in Computer Engineering",
    timeline: "2024 – Expected 2028",
    cgpa: "8.72 / 10.0",
    status: "Undergraduate Student",
    description: "Premier state engineering institute known for rigorous computational theory and practical systems architecture.",
    coursework: [
      { name: "Data Structures & Algorithms", grade: "A+", desc: "Complexity, trees, graphs, dynamic programming" },
      { name: "Object-Oriented Programming (C++)", grade: "A", desc: "Design patterns, memory management, STL" },
      { name: "Computer Networks & TCP/IP", grade: "A+", desc: "OSI layers, routing, congestion, socket programming" },
      { name: "Database Management Systems", grade: "A", desc: "Relational algebra, SQL, indexing, transaction ACID" },
      { name: "Operating Systems & Linux", grade: "A", desc: "Process scheduling, IPC, memory paging, bash scripting" },
      { name: "Discrete Mathematics", grade: "A", desc: "Graph theory, combinatorics, proof techniques, logic" }
    ],
    activities: [
      "Active participant in technical hackathons and CTF (Capture The Flag) cyber challenges.",
      "Collaborator in collegiate open-source software and security study circles.",
      "Engaged in technical documentation and peer mentoring in networking concepts."
    ]
  },

  experience: [
    {
      id: "iiit-una",
      role: "Research Intern",
      organization: "Indian Institute of Information Technology (IIIT), Una",
      location: "Una, Himachal Pradesh, India",
      period: "June 2026 – July 2026",
      type: "Academic & Systems Security Research",
      badge: "Cybersecurity Research",
      highlights: [
        "Investigated mathematical modeling of cyberattacks and their optimal control, using quantitative approaches to study attack propagation risk and mitigation strategies.",
        "Formulated non-linear dynamical systems (epidemic spreading models such as SIR/SEIR variants) to analyze malware and botnet proliferation across heterogeneous network topologies.",
        "Applied Pontryagin's Maximum/Minimum Principle to identify optimal dynamic security resource allocation (quarantine, patching cadence, and packet inspection bandwidth) under bounded budgetary constraints.",
        "Contributed to an academic research paper, applying analytical reasoning, reproducible simulations, and technical documentation to communicate research findings."
      ],
      tags: ["Optimal Control", "Mathematical Modeling", "Cyberattack Dynamics", "Differential Equations", "Python", "Technical Paper"]
    }
  ],

  projects: [
    {
      id: "maargai",
      title: "MaargAI – Logistics Risk-Monitoring Platform",
      tagline: "Real-time supply chain operational anomaly detection and telemetry engine",
      tech: ["Python", "PostgreSQL", "Node.js", "Express", "Google Cloud", "REST APIs"],
      category: "Cloud & Systems",
      featured: true,
      metrics: {
        latency: "< 120ms response",
        uptime: "99.8% Cloud SLA",
        alerts: "Automated real-time triggers"
      },
      summary: "Contributed to a real-time monitoring platform that processes operational data to support anomaly detection and risk analysis for high-value logistics operations.",
      points: [
        "Contributed to a real-time monitoring platform that processes operational data to support anomaly detection and risk analysis.",
        "Integrated third-party APIs and backend components to collect and process live data for monitoring and automated alerts.",
        "Developed system logic to identify deviations, delays, and risk spikes from incoming operational data.",
        "Leveraged PostgreSQL with optimized indexing and Google Cloud Platform services to maintain high data ingestion throughput."
      ],
      simulatorType: "logistics"
    },
    {
      id: "traffic-classifier",
      title: "AI-Powered Network Traffic Classification System",
      tagline: "High-throughput real-time packet stream analysis with 95% detection accuracy",
      tech: ["Python", "Pandas", "Kafka", "Tshark", "Machine Learning", "CIC-IDS 2017"],
      category: "Cybersecurity & Data",
      featured: true,
      metrics: {
        accuracy: "95% Detection Rate",
        throughput: "Real-time streaming",
        dataset: "CIC-IDS 2017 (80+ features)"
      },
      summary: "Built an end-to-end network traffic processing and classification pipeline capable of isolating malicious behavior from enterprise packet streams.",
      points: [
        "Built a network traffic data-processing and classification pipeline using the CIC-IDS 2017 dataset, achieving 95% classification accuracy.",
        "Applied Pandas for high-performance data preprocessing and feature engineering on high-dimensional network flow data.",
        "Used Apache Kafka and Tshark in the data capture and stream-processing workflow to support end-to-end continuous packet analysis.",
        "Engineered behavioral signatures to differentiate benign traffic from port scans, DDoS, and protocol anomalies."
      ],
      simulatorType: "traffic"
    },
    {
      id: "enterprise-lab",
      title: "Enterprise Network and Systems Lab",
      tagline: "Full-scale virtualized multi-subnet enterprise environment with SIEM monitoring",
      tech: ["Linux", "Windows Server", "Active Directory", "Kali Linux", "Wireshark", "Nmap", "Splunk", "ELK Stack"],
      category: "Networking & Security",
      featured: true,
      metrics: {
        hosts: "Domain Controller + Workstations",
        monitoring: "Splunk & ELK SIEM",
        auditing: "Comprehensive Playbooks"
      },
      summary: "Configured and maintained an enterprise-grade virtualized lab replicating corporate Active Directory infrastructure for defensive monitoring and penetration defense.",
      points: [
        "Configured a virtualized enterprise environment with a domain controller, Windows client, and Kali Linux; troubleshot network connectivity and system configuration issues.",
        "Used Wireshark and Nmap for comprehensive packet and port analysis across virtualized subnets.",
        "Performed centralized log analysis and telemetry monitoring using Splunk and ELK Stack for threat visibility.",
        "Documented environment setup, troubleshooting procedures, and technical workflows for reproducibility."
      ],
      simulatorType: "enterprise"
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 92, category: "Core" },
      { name: "C++", level: 85, category: "Core" },
      { name: "SQL (PostgreSQL)", level: 88, category: "Core" },
      { name: "Bash Scripting", level: 84, category: "Scripting" },
      { name: "PowerShell", level: 78, category: "Scripting" }
    ],
    softwareAndData: [
      { name: "PostgreSQL", desc: "Relational schemas, indexing, query optimization" },
      { name: "Pandas", desc: "Feature engineering, data cleaning, matrix transforms" },
      { name: "REST APIs", desc: "JSON web services, endpoint architecture, authentication" },
      { name: "Data Processing", desc: "Stream ETL, time-series aggregation, normalization" },
      { name: "Feature Engineering", desc: "Dimensionality reduction, flow statistical metrics" }
    ],
    cloudAndTools: [
      { name: "Google Cloud Platform", desc: "Compute Engine, Cloud Storage, IAM, monitoring" },
      { name: "Apache Kafka", desc: "Distributed pub/sub, message streaming, topic partitioning" },
      { name: "Docker", desc: "Containerization, reproducible microservice setups" },
      { name: "Git & GitHub", desc: "Version control, branching workflows, PR reviews" }
    ],
    networkingAndSecurity: [
      { name: "TCP/IP Fundamentals", desc: "Subnetting, packet routing, flow control, handshake analysis" },
      { name: "Wireshark", desc: "Deep packet inspection, protocol dissection, stream reconstruction" },
      { name: "Tshark", desc: "CLI packet extraction, automated packet stream parsing" },
      { name: "Nmap", desc: "Network discovery, port scanning, service vulnerability audit" },
      { name: "Splunk", desc: "Enterprise SIEM, SPL querying, search pipelines, dashboarding" },
      { name: "ELK Stack", desc: "Elasticsearch, Logstash, Kibana log ingestion and visual analytics" }
    ],
    systems: [
      { name: "Linux (Debian / Kali / Ubuntu)", desc: "System administration, kernel parameters, permissions" },
      { name: "Windows Server", desc: "Server Manager, DNS, DHCP, security event logs" },
      { name: "Active Directory (AD)", desc: "Domain services, OUs, Group Policy Objects (GPO), LDAP" }
    ]
  },

  certifications: [
    {
      id: "cisco-networking-basics",
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      category: "Networking",
      status: "Completed",
      icon: "network",
      description: "Fundamental networking concepts, OSI model, IP addressing, basic switch configuration."
    },
    {
      id: "cisco-devices-config",
      name: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      category: "Networking",
      status: "Completed",
      icon: "sliders",
      description: "Router and switch setup, CLI navigation, port security, VLAN segmentation."
    },
    {
      id: "google-cybersecurity",
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      category: "Cybersecurity",
      status: "Completed",
      icon: "shield-check",
      description: "8-course specialization covering SIEM tools, Linux CLI, SQL, Python automation, and incident response."
    },
    {
      id: "thm-soc-1",
      name: "SOC Level 1 Path",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      status: "Completed",
      icon: "check-circle",
      description: "Hands-on threat intelligence, Wireshark, Splunk, Snort, phishing analysis, and endpoint forensics."
    },
    {
      id: "thm-soc-2",
      name: "SOC Level 2 Path",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      status: "In Progress (75%)",
      icon: "loader",
      description: "Advanced incident response, memory forensics, threat hunting, malware analysis."
    },
    {
      id: "thm-pre-security",
      name: "Pre-Security Learning Path",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      status: "Completed",
      icon: "lock",
      description: "Network fundamentals, web application security basics, operating system fundamentals."
    },
    {
      id: "thm-cyber-101",
      name: "Cybersecurity 101",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      status: "Completed",
      icon: "cpu",
      description: "Core security principles (CIA triad), cryptography concepts, threat actors, and attack vectors."
    }
  ],

  blogs: [
    {
      id: "blog-optimal-control",
      title: "Mathematical Modeling of Multi-Stage Cyberattacks: An Optimal Control Approach",
      date: "August 2026",
      readTime: "7 min read",
      tags: ["Research", "Optimal Control", "Cybersecurity", "Mathematics"],
      excerpt: "How differential equations and Pontryagin's Minimum Principle allow security teams to mathematically calculate optimal patch deployment schedules under strict operational constraints.",
      author: "Tarun Kumar Bajotra (Research Intern, IIIT Una)",
      content: `
### 1. Introduction: The Mechanics of Cyber Epidemics

When malware, ransomware, or botnets penetrate an enterprise network, their propagation mimics biological epidemics. Rather than treating defensive patching as an ad-hoc emergency response, we can formulate cyber propagation as a system of coupled non-linear ordinary differential equations.

During my research internship at IIIT Una, I focused on modeling multi-stage attack dynamics using modified Susceptible-Infected-Recovered (SIR) frameworks adapted for computer networks.

### 2. Formulating the Dynamical System

Let <em>S(t)</em> denote vulnerable nodes, <em>I(t)</em> actively compromised nodes, and <em>R(t)</em> patched, quarantined, or hardened nodes. The rate of compromise is governed by the transmissible contact rate <em>β</em> and network node density:

<div class="math-display-block">
<code>dS/dt = -β · S(t) · I(t) - u(t) · S(t)
dI/dt = β · S(t) · I(t) - γ · I(t) - v(t) · I(t)
dR/dt = γ · I(t) + u(t) · S(t) + v(t) · I(t)</code>
</div>

Where <em>u(t)</em> and <em>v(t)</em> represent dynamic control inputs:
- <strong>u(t)</strong>: Proactive preemptive patching rate applied to susceptible devices.
- <strong>v(t)</strong>: Reactive isolation and containment rate applied to compromised nodes.

### 3. Applying Pontryagin's Minimum Principle

Every defensive action bears operational costs: network downtime, technician hours, and bandwidth degradation. We define the objective cost functional:

<div class="math-display-block">
<code>J(u, v) = ∫₀ᵀ [ A₁·I(t) + ½·c₁·u²(t) + ½·c₂·v²(t) ] dt</code>
</div>

Using Hamiltonian formulation:
<div class="math-display-block">
<code>ℋ = A₁·I(t) + ½·c₁·u²(t) + ½·c₂·v²(t) + Σ λᵢ·fᵢ</code>
</div>

Solving the adjoint differential equations yields the optimal control trajectory: reactive isolation must be aggressively maximized at the onset of infection (<em>t</em> → 0), whereas proactive patching transitions to a sustained equilibrium.

### 4. Key Findings & Engineering Takeaways

1. **Threshold Dynamics (R₀):** If the basic reproduction number R₀ < 1, the infection naturally dies out. Our control schedules consistently suppress R₀ below 0.74 within the first 15% of the simulation timeline.
2. **Budget Efficiency:** Applying non-linear optimal control reduced total operational downtime costs by **38.4%** compared to static periodic patching schedules.
      `
    },
    {
      id: "blog-network-traffic",
      title: "Building Real-Time Packet Classifiers: 95% Accuracy with Kafka, Tshark & CIC-IDS 2017",
      date: "July 2026",
      readTime: "6 min read",
      tags: ["Machine Learning", "Kafka", "Tshark", "Pandas", "Python"],
      excerpt: "Engineering an end-to-end telemetry pipeline from raw packet capture through statistical feature reduction to real-time anomaly classification.",
      author: "Tarun Kumar Bajotra",
      content: `
### 1. The Challenge of High-Speed Network Telemetry

Network intrusion detection faces a fundamental dilemma: gigabit packet streams arrive at microsecond intervals, while machine learning models typically require engineered statistical flow features.

In this project, I constructed a high-throughput pipeline bridging live raw packet extraction via **Tshark**, message streaming via **Apache Kafka**, and feature matrix transforms in **Pandas** to achieve **95% accuracy** on the comprehensive CIC-IDS 2017 dataset.

### 2. Architecture & Pipeline Design

1. **Ingestion & Capture:** Tshark captures raw promiscuous packets, extracting TCP window flags, payload byte distributions, inter-arrival times, and sequence metrics.
2. **Decoupled Streaming:** Packets are converted to compact JSON frames and published into partitioned Kafka topics (\`raw-packets\`).
3. **Flow Aggregator:** A Python consumer groups packets into bidirectional flows keyed by the standard 5-tuple: (Source IP, Dest IP, Source Port, Dest Port, Protocol).
4. **Feature Extraction:** Computes forward/backward packet length variance, flow duration, SYN/FIN flag ratios, and byte rate.

### 3. Tackling High-Dimensional Skew in CIC-IDS 2017

The CIC-IDS 2017 dataset contains 80+ features and millions of rows. Naive training suffers from extreme class imbalance (Benign flows dominate > 80%).
- Utilized Pearson correlation matrices to eliminate redundant multicollinear metrics.
- Applied RobustScaler to mitigate outlier distortions from extreme burst DDoS traffic.
- Leveraged Random Forest and XGBoost classifiers with cost-sensitive loss functions to heavily penalize false negatives in infiltration classes.

### 4. Results & Performance

- **Classification Accuracy:** 95.2% on test partitions.
- **Inference Latency:** < 8.4ms per flow chunk.
- **Kafka Throughput:** Handled over 12,000 packet events/sec on modest multi-core virtual machines.
      `
    },
    {
      id: "blog-enterprise-lab",
      title: "Hardening Enterprise Active Directory: Lessons from a Virtualized Defense Lab",
      date: "May 2026",
      readTime: "5 min read",
      tags: ["Active Directory", "Splunk", "ELK", "Wireshark", "Sysmon"],
      excerpt: "Configuring a full Active Directory domain, deploying Sysmon event logging, and analyzing Kerberoasting and NTLM relay attempts in Splunk.",
      author: "Tarun Kumar Bajotra",
      content: `
### 1. Lab Architecture Overview

Security research requires a safe, faithful replica of enterprise infrastructure. I constructed a multi-subnet virtualized environment comprising:
- **Windows Server 2022:** Active Directory Domain Controller (\`CORP.LOCAL\`), DNS, DHCP, GPO Management.
- **Windows 11 Enterprise Workstation:** Joined client domain node with standard unprivileged user profiles.
- **Kali Linux Node:** Security audit, Nmap reconnaissance, and red-team emulation workstation.
- **Central SIEM Node:** Dual logging pipeline forwarding to both **Splunk Enterprise** and the **ELK Stack** (Elasticsearch, Logstash, Kibana).

### 2. Telemetry Ingestion with Sysmon & Winlogbeat

Standard Windows Event Logs frequently miss in-memory process injection and lateral movement. I implemented SwiftOnSecurity's curated **Sysmon** configuration to capture:
- **Event ID 1:** Process creation with full command line arguments and parent process hashes.
- **Event ID 3:** Network connections correlated directly to executables.
- **Event ID 10:** ProcessAccess (detecting LSASS memory dumping attempts).

### 3. Detection Engineering: Spotting Kerberoasting

To simulate realistic adversary behavior, I created a vulnerable Service Principal Name (SPN) account with a weak password hash:
1. Executed Kerberos Ticket Granting Service (TGS) requests from the Kali endpoint.
2. In Splunk, constructed an alert rule scanning for **Event ID 4769** with Ticket Encryption Type \`0x17\` (RC4-HMAC) requested by standard user accounts within rapid bursts.
3. Successfully flagged the anomalous ticket request within 1.2 seconds of transmission.
      `
    },
    {
      id: "blog-cloud-risk",
      title: "Architecting Low-Latency Anomaly Monitoring on Google Cloud & PostgreSQL",
      date: "April 2026",
      readTime: "5 min read",
      tags: ["Google Cloud", "PostgreSQL", "Node.js", "Express", "Distributed Systems"],
      excerpt: "Key architectural decisions behind MaargAI's logistics telemetry platform: handling erratic shipment updates with sub-120ms response windows.",
      author: "Tarun Kumar Bajotra",
      content: `
### 1. The Real-Time Problem in Logistics Operations

In freight and cargo operations, a delay or temperature excursion is only actionable if flagged immediately. In MaargAI, the backend needed to ingest real-time GPS and status telematics, compare incoming coordinates against scheduled transit corridors, and emit risk alerts.

### 2. Designing the Data Layer: PostgreSQL for Time-Series & Geospatial

While NoSQL databases are common for telemetry, logistics anomaly logic requires strict ACID guarantees and complex relational joins against route manifests and carrier risk profiles:
- **PostGIS Extension:** Handled spatial distance calculations between current GPS pings and designated safe delivery corridors.
- **Partitioned Tables:** Partitioned ping logs by date to sustain linear read/write performance as millions of rows accumulated.
- **B-Tree & BRIN Indexes:** Reduced query lookup times on timestamped streams by over 72%.

### 3. Node.js & Express Real-Time Pipeline

- Leveraged asynchronous worker queues to offload heavy route variance calculations from the main HTTP API thread.
- Implemented WebSocket channels for live dashboard streaming, delivering risk spike alerts in under 120 milliseconds.
      `
    }
  ],

  // Established Human-Computer Interaction (HCI) Principles Matrix
  hciPrinciples: [
    {
      id: "H1",
      heuristic: "Visibility of System Status",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 1,
      targetSelector: "#live-status-indicator, #scroll-progress, .status-badge",
      title: "Real-Time System & Feedback Visibility",
      description: "The interface keeps users informed about what is happening through appropriate feedback within a reasonable time. Examples include the live status badge, real-time scroll progress bar, active navigation indicator, and instant form submission state indicators.",
      auditSeverity: 0,
      implementationEvidence: "Scroll progress bar atop header; pulsing live availability beacon; real-time packet generation counter in hero console; instant toast confirmations.",
      cognitiveBenefit: "Reduces anxiety, confirms user actions, and establishes clear system state transparency."
    },
    {
      id: "H2",
      heuristic: "Match Between System and Real World",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 2,
      targetSelector: ".terminal-window, .metric-card, .filter-chip",
      title: "Familiar Metaphors & Industry Vernacular",
      description: "Uses words, phrases, and concepts familiar to the user rather than internal jargon. Technical metrics adopt standard formats (CGPA /10, 95% Accuracy, ms latency) and network engineers recognize standard terminal headers and protocol tabs.",
      auditSeverity: 0,
      implementationEvidence: "Terminal window controls (red/yellow/green pills); SIEM dashboard metaphor for enterprise lab; standard network protocol chips.",
      cognitiveBenefit: "Aligns mental models, eliminating cognitive dissonance between virtual UI and real-world domain expectations."
    },
    {
      id: "H3",
      heuristic: "User Control and Freedom",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 3,
      targetSelector: ".modal-close, #btn-reset-filters, #btn-back-to-top",
      title: "Emergency Exits & Reversible Actions",
      description: "Users often choose functions by mistake and need a clearly marked 'emergency exit' to leave the unwanted state without having to go through an extended dialogue.",
      auditSeverity: 0,
      implementationEvidence: "Every modal closes via prominent close buttons, clicking backdrop, or pressing the standard ESC key; active filters have a one-click 'Clear All' button; persistent Back to Top navigation.",
      cognitiveBenefit: "Promotes exploratory browsing by eliminating fear of getting trapped or breaking interface state."
    },
    {
      id: "H4",
      heuristic: "Consistency and Standards",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 4,
      targetSelector: ".btn-primary, .card, .tag",
      title: "Design System & Universal Conventions",
      description: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.",
      auditSeverity: 0,
      implementationEvidence: "Unified color token palette (Cyan/Indigo primary accents, Emerald success, Amber warning); identical card padding and elevation rules; standard Ctrl+K command shortcut.",
      cognitiveBenefit: "Leverages Jacob's Law (users spend most of their time on other sites; standard patterns yield immediate familiarity)."
    },
    {
      id: "H5",
      heuristic: "Error Prevention",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 5,
      targetSelector: ".palette-input, .sus-btn, .btn",
      title: "Proactive Constraint & Input Safeguards",
      description: "Better than good error messages is a careful design which prevents a problem from occurring in the first place.",
      auditSeverity: 0,
      implementationEvidence: "Strict input constraints in command palette; discrete, bounds-checked Likert options (1-5) in SUS survey preventing out-of-range scoring; safe fallback navigation.",
      cognitiveBenefit: "Protects users from frustration, prevents wasted effort, and ensures valid submissions."
    },
    {
      id: "H6",
      heuristic: "Recognition Rather Than Recall",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 6,
      targetSelector: ".command-palette, .filter-chip, .tooltip-trigger",
      title: "Reduced Short-Term Working Memory Load",
      description: "Minimize the user's memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another.",
      auditSeverity: 0,
      implementationEvidence: "Sticky navigation menu; visual category filter tags with item counters; command palette listing searchable actions; contextual tooltips on abbreviations.",
      cognitiveBenefit: "Preserves Miller's 7±2 cognitive capacity for evaluating content rather than navigating the interface."
    },
    {
      id: "H7",
      heuristic: "Flexibility and Efficiency of Use",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 7,
      targetSelector: "#command-palette-trigger, .quick-keys, #btn-theme-toggle",
      title: "Accelerators for Power & Novice Users",
      description: "Shortcuts — hidden from novice users — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users.",
      auditSeverity: 0,
      implementationEvidence: "Global 'Ctrl+K' command search palette; keyboard hotkeys ('?' for help, 'T' for theme toggle, 'H' for HCI lens); one-click copy buttons for email/phone.",
      cognitiveBenefit: "Supports both slow linear scanning and rapid keyboard-driven power navigation."
    },
    {
      id: "H8",
      heuristic: "Aesthetic and Minimalist Design",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 8,
      targetSelector: ".hero-section, .project-card, .glass-panel",
      title: "High Signal-to-Noise Ratio & Whitespace",
      description: "Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information.",
      auditSeverity: 0,
      implementationEvidence: "Glassmorphic card architecture with 24px-32px breathing room; progressive disclosure (summaries displayed by default, deep technical equations in modals); crisp dark theme.",
      cognitiveBenefit: "Maximizes visual hierarchy, directs focal attention to Tarun's core strengths, and prevents sensory overload."
    },
    {
      id: "H9",
      heuristic: "Help Users Recognize, Diagnose, and Recover from Errors",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 9,
      targetSelector: ".form-error, .toast-container",
      title: "Actionable, Plain-Language Error Guidance",
      description: "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
      auditSeverity: 0,
      implementationEvidence: "Friendly inline warnings like 'Please enter a valid email address (e.g. name@domain.com)' instead of generic 'Invalid input'; red border with contextual guidance.",
      cognitiveBenefit: "Eliminates confusion and guides the user toward immediate correction."
    },
    {
      id: "H10",
      heuristic: "Help and Documentation",
      framework: "Nielsen's 10 Heuristics",
      ruleNumber: 10,
      targetSelector: "#btn-hci-modal, #btn-help-shortcuts",
      title: "Contextual Guidance & HCI Evaluation Lab",
      description: "Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation.",
      auditSeverity: 0,
      implementationEvidence: "Interactive HCI Usability Suite built right into the header; comprehensive keyboard shortcut cheatsheet modal; SUS evaluation survey with clear Likert instructions.",
      cognitiveBenefit: "Empowers peer reviewers, professors, and visitors to verify usability metrics transparently."
    },
    {
      id: "G1",
      heuristic: "Law of Proximity",
      framework: "Gestalt Psychology",
      ruleNumber: 11,
      targetSelector: ".project-card-meta, .education-card",
      title: "Spatial Clustering of Related Attributes",
      description: "Objects that are near each other tend to be grouped together cognitively.",
      auditSeverity: 0,
      implementationEvidence: "Project metrics, tech tags, and action buttons are grouped into separate distinct sub-containers with consistent 8px-12px gutters.",
      cognitiveBenefit: "Users perceive related data points as a cohesive semantic unit without conscious effort."
    },
    {
      id: "F1",
      heuristic: "Fitts's Law",
      framework: "Motor Ergonomics",
      ruleNumber: 12,
      targetSelector: ".btn-primary, .nav-link, .modal-close",
      title: "Target Size & Movement Velocity",
      description: "The time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target.",
      auditSeverity: 0,
      implementationEvidence: "All interactive buttons and navigation links maintain a minimum hit area of 44x44px for touch and cursor; sticky navigation pinned to screen edge reduces distance.",
      cognitiveBenefit: "Dramatically reduces mouse travel time, miss-clicks, and physical interaction friction."
    },
    {
      id: "HICK1",
      heuristic: "Hick-Hyman Law",
      framework: "Cognitive Psychology",
      ruleNumber: 13,
      targetSelector: ".filter-group, .nav-links",
      title: "Decision Time Reduction Through Categorization",
      description: "The time it takes to make a decision increases logarithmically with the number and complexity of choices.",
      auditSeverity: 0,
      implementationEvidence: "Projects and blogs are categorized into 3-4 distinct logical buckets; navigation has only 6 primary anchors; command palette categorizes commands.",
      cognitiveBenefit: "Accelerates selection time and prevents analysis paralysis."
    }
  ],

  // System Usability Scale (SUS) Standard Survey Questions (Brooke, 1996)
  susQuestions: [
    { id: 1, text: "I think that I would like to use this personal profile/portfolio frequently.", positive: true },
    { id: 2, text: "I found the interface unnecessarily complex.", positive: false },
    { id: 3, text: "I thought the interface was easy to use.", positive: true },
    { id: 4, text: "I think that I would need the support of a technical person to be able to use this profile.", positive: false },
    { id: 5, text: "I found the various functions (project simulators, blog reader, HCI inspector) were well integrated.", positive: true },
    { id: 6, text: "I thought there was too much inconsistency in this interface.", positive: false },
    { id: 7, text: "I would imagine that most people would learn to use this interface very quickly.", positive: true },
    { id: 8, text: "I found the interface very cumbersome to use.", positive: false },
    { id: 9, text: "I felt very confident using the interface.", positive: true },
    { id: 10, text: "I needed to learn a lot of things before I could get going with this profile.", positive: false }
  ],

  // Guided Usability Benchmark Tasks for Evaluators
  usabilityTasks: [
    {
      id: "task-1",
      name: "Locate Academic Credentials & Research Internship",
      objective: "Find Tarun's undergraduate CGPA at VJTI and the research institute where he conducted cyberattack modeling.",
      targetAnchor: "#experience",
      verificationKey: "iiit-una",
      hint: "Scroll or navigate to the 'Academics & Experience' section.",
      expectedDurationSec: 20
    },
    {
      id: "task-2",
      name: "Interact with Project Anomaly Simulator",
      objective: "Navigate to the Projects section, select 'AI-Powered Network Traffic Classification System', and test the packet classification simulator.",
      targetAnchor: "#projects",
      verificationKey: "traffic-classifier",
      hint: "Click 'Projects' in the header, locate the traffic classifier, and click 'Launch Live Simulator'.",
      expectedDurationSec: 35
    },
    {
      id: "task-3",
      name: "Inspect an HCI Principle via the HCI Lens",
      objective: "Toggle the 'HCI Lens' in the navigation bar to inspect Nielsen's Heuristics, then click any heuristic badge to view its design rationale.",
      targetAnchor: "#hero",
      verificationKey: "hci-lens-active",
      hint: "Look for the 'HCI Lens' toggle switch in the top navigation bar.",
      expectedDurationSec: 25
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROFILE_DATA;
}
