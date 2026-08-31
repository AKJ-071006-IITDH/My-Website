/* ============================================================
   EDIT ME — this is the only file you need to touch.
   Everything on the site is generated from the objects below.
   Save the file, refresh index.html, and your changes appear.
   ============================================================ */

const SITE_DATA = {

  // ---- 1. Profile -------------------------------------------------
  profile: {
    name: "Aayush Kumar Jha",
    tagline: "B.Tech, Mathematics & Computing — IIT Dharwad · CGPA 9.48",
    location: "Dharwad, Karnataka · Home: Bokaro Steel City, India",
    photo: "profile.jpg",
    abstract:
      "I'm a pre-final year B.Tech student in Mathematics and Computing at IIT " +
      "Dharwad, fascinated by the mathematics underneath machine learning and AI. " +
      "I've co-authored research on quantum-secured networking presented at IEEE " +
      "HiPC 2025, and I currently build end-to-end ML systems spanning computer " +
      "vision, low-resource NLP, and satellite image super-resolution — alongside " +
      "strengthening my core CS fundamentals in computer architecture and " +
      "operating systems.",
    // Optional — link to a PDF resume. Leave as "" to hide the button.
    resumeUrl: "",
  },

  // ---- 2. Contact links --------------------------------------------
  links: [
    { icon: "github",   label: "GitHub",   value: "github.com/AKJ-071006-IITDH",                 url: "https://github.com/AKJ-071006-IITDH" },
    { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/aayush-kumar-jha-ab3b28306",   url: "https://www.linkedin.com/in/aayush-kumar-jha-ab3b28306/" },
    { icon: "leetcode", label: "LeetCode", value: "leetcode.com/u/AKJ071006IITDH",                url: "https://leetcode.com/u/AKJ071006IITDH/" },
    { icon: "mail",     label: "Email",    value: "aayushkumarjha.071006@gmail.com",              url: "mailto:aayushkumarjha.071006@gmail.com" },
    { icon: "mail",     label: "Institute Email", value: "mc24bt004@iitdh.ac.in",                 url: "mailto:mc24bt004@iitdh.ac.in" },
    { icon: "link",     label: "Phone",    value: "+91 9942685272",                               url: "tel:+919942685272" },
  ],

  // ---- 3. Skills ------------------------------------------------
  skillGroups: [
    {
      group: "Languages",
      items: ["Java", "C", "Python", "Bash"],
    },
    {
      group: "CS Fundamentals",
      items: ["Data Structures & Algorithms", "OOP", "Graph Theory", "Computer Architecture", "Operating Systems"],
    },
    {
      group: "AI / ML",
      items: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
    },
    {
      group: "Tools & Tech",
      items: ["Git", "Docker", "VS Code", "LLM API Integration", "LaTeX"],
    },
  ],

  // ---- 4. Projects --------------------------------------------------
  // status: "active" | "complete"
  projects: [
    {
      title: "Satellite Imagery Super-Resolution (SIH 2026)",
      domain: "Machine Learning",
      status: "active",
      description: "End-to-end 4x super-resolution pipeline for 4-channel (RGB+NIR) Sentinel-2 satellite imagery, using a custom 12-block RRDBNet and PatchGAN discriminator. Eliminated adversarial mode collapse via ESRGAN-style weight interpolation, reaching 36.94 dB PSNR / 0.867 SSIM, and deployed the model through a FastAPI backend with an interactive dashboard.",
      stack: ["Python", "PyTorch", "FastAPI", "OpenCV", "SQLite"],
      github: "https://github.com/AKJ-071006-IITDH/SIH26142-satellite-SR",
      demo: "",
    },
    {
      title: "Underwater Image Enhancement (CNN Autoencoder)",
      domain: "Computer Vision",
      status: "complete",
      description: "A convolutional autoencoder with skip connections that restores color and clarity in underwater images, trained on 712 raw-reference pairs. Reached 18.96 dB mean PSNR and 0.82 mean SSIM on 178 held-out test images with a ~3.5M-parameter model, using AdamW, Huber loss, and a ReduceLROnPlateau scheduler.",
      stack: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/AKJ-071006-IITDH/UnderWater-Image-Enhancement-using-CNN",
      demo: "",
    },
    {
      title: "Low-Resource NMT: English ↔ Manipuri",
      domain: "NLP",
      status: "active",
      description: "Fine-tuned IndicTrans2 and Sarvam models (1.1B/4.3B parameters) for Manipuri using LoRA/DoRA, reaching 51.55 BLEU. Built a full pipeline for data quality analysis, splitting, and multi-metric evaluation, plus back-translation augmentation that expanded training data ~2.8x, and compared Seq2Seq vs CausalLM architectures on an RTX 6000 Ada GPU.",
      stack: ["Python", "PyTorch", "LoRA/DoRA"],
      github: "",
      demo: "",
    },
    {
      title: "You_Look_Only_Once_Codebase",
      domain: "Computer Vision",
      status: "active",
      description: "Custom YOLO object detection models engineered and deployed via Python. Manages end-to-end data pipelines with CVAT.ai labeling and Roboflow dataset integration, with models deployed and evaluated locally.",
      stack: ["Python"],
      github: "https://github.com/AKJ-071006-IITDH/You_Look_Only_Once_Codebase",
      demo: "",
    },
    {
      title: "ToyRISC Processor Simulator",
      domain: "Computer Architecture",
      status: "complete",
      description: "A cycle-accurate simulator for a custom ToyRISC instruction set, built as a multi-lab Computer Architecture project. Implements instruction fetch-decode-execute, a register file, and memory access, with the ISA progressively extended across six iterations and validated against expected register/memory states.",
      stack: ["Java"],
      github: "https://github.com/AKJ-071006-IITDH/ToyRISC_Processor_Simulator",
      demo: "",
    },
    {
      title: "A2A TALENTVector",
      domain: "AI Agents",
      status: "complete",
      description: "An autonomous talent-sourcing system built at the Nasiko AI Agent Buildathon, using the Google A2A Protocol and JSON-RPC 2.0 with OAuth-based email and profile access. Includes a log-normalized multi-metric scoring engine to rank developers and an automated GPT-4o data parsing pipeline.",
      stack: ["Python", "GPT-4o", "OAuth"],
      github: "https://github.com/AKJ-071006-IITDH/A2A_TALENTVector-Core",
      demo: "",
    },
    {
      title: "Data_Structures_and_Algorithms_Codebase_Java",
      domain: "DSA",
      status: "active",
      description: "A complete, self-authored repository of fundamental and advanced data structure and algorithm implementations, written entirely in Java.",
      stack: ["Java"],
      github: "https://github.com/AKJ-071006-IITDH/Data_Structures_and_Algorithms_Codebase_Java",
      demo: "",
    },

    /* Copy the block below to add a brand-new project card:

    {
      title: "Project Name",
      domain: "Category shown as the tag",
      status: "active",           // or "complete"
      description: "One or two sentences on what it does.",
      stack: ["Tech", "Stack"],
      github: "https://github.com/you/repo",
      demo: "",                   // live link, or "" to hide the button
    },

    */
  ],

  // ---- 5. Experience (shown as a timeline) --------------------------
  experience: [
    {
      role: "Student Mentor",
      org: "Student Mentorship Program, IIT Dharwad",
      period: "Jul 2025 — May 2026",
      location: "Dharwad",
      description: "Provided academic guidance to first-year students and conducted regular group sessions to help them transition to college life.",
    },
    {
      role: "Member — Software & Mechanical Team",
      org: "Robotics Club, IIT Dharwad",
      period: "Sep 2024 — May 2026",
      location: "Dharwad",
      description: "Collaborating with a multidisciplinary team to design a SLAM (Simultaneous Localization and Mapping) robot, contributing to both software and mechanical design for autonomous navigation.",
    },
  ],

  // ---- 6. Education ---------------------------------------------------
  education: [
    {
      school: "Indian Institute of Technology, Dharwad",
      degree: "B.Tech, Mathematics and Computing — CGPA 9.48",
      period: "Aug 2024 — Jul 2028",
    },
    {
      school: "St. Xavier's School, Bokaro",
      degree: "",
      period: "",
    },
  ],

  // ---- 7. Publications ------------------------------------------------
  publications: [
    {
      title: "Cryptographic Collapse Forecasting: A Strategic Shift to Quantum Security",
      role: "Co-Author",
      venue: "32nd IEEE International Conference on High Performance Computing, Data, and Analytics (HiPC 2025)",
      period: "Sep — Dec 2025",
      description: "Collaborated with FutureG Labs, IIT Dharwad on quantum-secured networking within O-RAN architectures. Presented findings via a poster presentation to international domain experts in Hyderabad.",
      url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11459252",
    },

    /* Copy this block to add a new publication:

    {
      title: "Paper title",
      role: "Co-Author",            // or "Author", "Lead Author", etc.
      venue: "Conference or journal name",
      period: "Month Year",
      description: "One or two sentences on the work.",
      url: "https://link-to-paper",  // or "" to hide the link
    },

    */
  ],

  // ---- 8. Achievements --------------------------------------------------
  achievements: [
    "Maintained a 9.48 CGPA in the Mathematics and Computing department at IIT Dharwad.",
    "Built and shipped an autonomous agent at the Nasiko AI Agent Buildathon.",

    // Add a new one anytime — just add another quoted line above, separated by a comma.
  ],
};
