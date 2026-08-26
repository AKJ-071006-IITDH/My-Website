/* ============================================================
   EDIT ME — this is the only file you need to touch.
   Everything on the site is generated from the objects below.
   Save the file, refresh index.html, and your changes appear.
   ============================================================ */

const SITE_DATA = {

  // ---- 1. Profile -------------------------------------------------
  profile: {
    name: "Aayush Kumar Jha",
    // Short line shown right under your name in the hero.
    tagline: "B.Tech, Mathematics & Computing — IIT Dharwad",
    // Where you're based right now.
    location: "Dharwad, Karnataka · Home: Bokaro Steel City, India",
    // Path to your photo. Just replace assets/profile.jpg with a new
    // file of the same name, or change this string to point elsewhere.
    photo: "assets/profile.jpg",
    // The paragraph shown as your "Abstract" in the hero section.
    abstract:
      "I'm a B.Tech student in Mathematics and Computing at IIT Dharwad, " +
      "fascinated by the mathematics underneath machine learning and AI. " +
      "I've done research work in quantum cybersecurity and high-performance " +
      "computing, and I'm currently upskilling in applied machine learning " +
      "and high-fidelity mathematical modelling, alongside strengthening my " +
      "core CS fundamentals in computer architecture and operating systems.",
    // Optional — link to a PDF resume. Leave as "" to hide the button.
    resumeUrl: "",
  },

  // ---- 2. Contact links --------------------------------------------
  // Add or remove entries freely — the icon key must match one of the
  // names in the ICONS object at the bottom of script.js.
  links: [
    { icon: "github",   label: "GitHub",   value: "github.com/AKJ-071006-IITDH",              url: "https://github.com/AKJ-071006-IITDH" },
    { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/aayushkumar-jha-ab3b28306", url: "https://www.linkedin.com/in/aayushkumar-jha-ab3b28306" },
    { icon: "leetcode", label: "LeetCode", value: "leetcode.com/u/AKJ071006IITDH",             url: "https://leetcode.com/u/AKJ071006IITDH/" },
    { icon: "mail",     label: "Email",    value: "aayushkumarjha.071006@gmail.com",           url: "mailto:aayushkumarjha.071006@gmail.com" },
  ],

  // ---- 3. Skills ------------------------------------------------
  // Grouped however you like — add a new group by adding a new object.
  skillGroups: [
    {
      group: "Core",
      items: ["Computer Architecture", "Operating Systems", "Data Structures & Algorithms"],
    },
    {
      group: "AI / ML",
      items: ["Machine Learning", "Deep Learning", "Artificial Intelligence"],
    },
    {
      group: "Languages spoken",
      items: ["English", "Hindi", "Maithili"],
    },
  ],

  // ---- 4. Projects --------------------------------------------------
  // domain is used as the little tag on each card — reuse the same
  // string across projects to group them (e.g. "Machine Learning").
  // status: "active" | "complete"
  projects: [
    {
      title: "A2A_TALENTVector-Core",
      domain: "Machine Learning",
      status: "active",
      // TODO: replace with a real 1-2 sentence description.
      description: "Python project — add a short description of what this does and why you built it.",
      stack: ["Python"],
      github: "https://github.com/AKJ-071006-IITDH/A2A_TALENTVector-Core",
      demo: "",
    },
    {
      title: "You_Look_Only_Once_Codebase",
      domain: "Computer Vision",
      status: "active",
      // TODO: replace with a real 1-2 sentence description.
      description: "A YOLO-based object detection codebase — describe your implementation, dataset, or results here.",
      stack: ["Python"],
      github: "https://github.com/AKJ-071006-IITDH/You_Look_Only_Once_Codebase",
      demo: "",
    },
    {
      title: "ToyRISC_Processor_Simulator",
      domain: "Computer Architecture",
      status: "complete",
      // TODO: replace with a real 1-2 sentence description.
      description: "A simulator for a toy RISC processor — describe the instruction set, pipeline stages, or design goals.",
      stack: ["Java"],
      github: "https://github.com/AKJ-071006-IITDH/ToyRISC_Processor_Simulator",
      demo: "",
    },
    {
      title: "Data_Structures_and_Algorithms_Codebase_Java",
      domain: "DSA",
      status: "active",
      // TODO: replace with a real 1-2 sentence description.
      description: "A growing collection of data structure and algorithm implementations in Java.",
      stack: ["Java"],
      github: "https://github.com/AKJ-071006-IITDH/Data_Structures_and_Algorithms_Codebase_Java",
      demo: "",
    },
    {
      title: "Research-Works",
      domain: "Research",
      status: "active",
      // TODO: replace with a real 1-2 sentence description — e.g. your
      // quantum cybersecurity / HPC research.
      description: "Notes and work from ongoing research — describe the topic, e.g. quantum cybersecurity or high-performance computing.",
      stack: [],
      github: "https://github.com/AKJ-071006-IITDH/Research-Works",
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
      description: "",
    },
    {
      role: "Club Member — Software & Mechanical Team",
      org: "Robotics Club, IIT Dharwad",
      period: "Sep 2024 — May 2026",
      location: "Dharwad",
      description: "Working on a SLAM robot.",
    },
  ],

  // ---- 6. Education ---------------------------------------------------
  education: [
    {
      school: "Indian Institute of Technology, Dharwad",
      degree: "B.Tech, Mathematics and Computing",
      period: "Aug 2024 — Jul 2028",
    },
    {
      school: "St. Xavier's School, Bokaro",
      degree: "",
      period: "",
    },
  ],
};
