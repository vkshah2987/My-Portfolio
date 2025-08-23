import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  accenture,
  flutera,
  transparent,
  tesla,
  shopify,
  carrent,
  secureVault,
  dummy,
  dummyProfile,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developed and delivered complete frontend features using Angular, including dynamic UI components, reactive forms, and secure API integrations.",
      "Reduced backend latency by 30% through SQL query optimization and Node/SQL endpoint improvements.",
      "Decreased page load time by 20% by modularizing Angular components, implementing lazy loading, and optimizing assets.",
      "Automated 70% of regression testing workflows using Jasmine and Karma, accelerating QA cycles.",
      "Resolved 90%+ of P1/P2 production issues within SLA by monitoring logs, triaging root causes, and deploying targeted hotfixes.",
      "Integrated GenAI (Figma MCP Server) to automate design-to-code workflows, accelerating UI development.",
      "Streamlined deployments with shell scripts and YAML configs, reducing manual rollout overhead.",
      "Improved build reliability and team coordination by enforcing PR checks and documenting branching strategies."
    ],
  },
  {
    title: "Frontend Development Engineer",
    company_name: "Flutera Technologies",
    icon: flutera,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Sep 2023",
    points: [
      "Increased user engagement by 40% by revamping 5+ React.js interfaces, improving navigation and data visibility.",
      "Enhanced API response handling by 35% by integrating Axios interceptors and modular Redux logic.",
      "Reduced server maintenance overhead by designing AWS Lambda serverless functions handling 1000+ daily events.",
      "Improved modularity with reusable components, custom hooks, and TailwindCSS-based UI design.",
      "Ensured secure data handling with input validation, payload encoding, and sanitization of external API responses."
    ],
  },
  {
    title: "Freelancer",
    company_name: "Independent",
    icon: transparent,
    iconBg: "#FFFFFF",
    date: "May 2021 - Present",
    points: [
      "Developing and maintaining full-stack web applications using React.js and related technologies.",
      "Collaborating with designers, product managers, and developers to deliver high-quality products.",
      "Implementing responsive designs and ensuring cross-browser compatibility.",
      "Conducting code reviews and providing constructive feedback to improve overall code quality."
    ],
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a beautiful website, but Vishal proved me wrong.",
    name: "Shubham Kumar",
    designation: "Software Engineer",
    company: "Accenture",
    image: dummyProfile,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vishal does.",
    name: "Ajay",
    designation: "Founder",
    company: "Agrovation Co",
    image: dummyProfile,
  },
  {
    testimonial:
      "After Vishal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Satish",
    designation: "Founder",
    company: "Musapri",
    image: dummyProfile,
  },
];

const projects = [
  {
    name: "SecureVault",
    description:
      "Secure password manager with encrypted storage, password generation, strength meter, and JWT-protected endpoints with frontend encryption.",
    tags: [
      {
        name: "angular",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "flask",
        color: "red-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "sky-text-gradient",
      },
    ],
    image: secureVault,
    source_code_link: "https://github.com/",
  },
  {
    name: "MediPortal [inProgress]",
    description:
      "Healthcare portal for booking appointments and accessing medical records with secure role-based access, JWT authentication, and email reminders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "red-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bcrypt",
        color: "orange-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
      {
        name: "cryptojs",
        color: "purple-text-gradient",
      },
    ],
    image: dummy,
    source_code_link: "https://github.com/",
  },
  {
    name: "AlgoVisual [inProgress]",
    description:
      "Interactive algorithm visualizer for sorting and graph traversal algorithms, using React and Canvas API with a modular UI and smooth animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "canvas api",
        color: "purple-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: dummy,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };