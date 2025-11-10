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
  Netflix,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "GenAI and AgenticAI",
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
    title: "Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Improved Food Safety efficiency by ~28% by developing and enhancing Angular-based dashboards used by technicians and supervisors, enabling quicker decision-making on quality and compliance issues.",
      "Reduced manual data validation efforts by ~35% by building Asp.Net APIs to automate backend workflows and integrate real-time updates between inspection data, service logs, and reporting modules.",
      "Worked on incremental data model improvements by adjusting MongoDB schemas and optimizing aggregation pipelines, which helped reduce query load and improve record fetch response time.",
      "Contributed to building an internal GenAI-powered knowledge assistant by integrating embeddings-based document retrieval and refining prompt workflows (LangChain + GPT API), ensuring responses were generated strictly from organizational SOPs, audit logs, and policy documents rather than external sources.",
      "Collaborated in Agile sprints with Product Owners, QA, cross-functional engineering teams to refine features, perform code reviews, and deliver incremental product improvements aligned with client requirements."
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
    source_code_link: "https://github.com/vkshah2987/securevault",
  },
  {
    name: "Netflix Clone",
    description:
      "Full-stack Netflix clone with secure login, personalized watchlists, and dynamic content feeds — built using React, Node.js, Firebase Auth, and TMDB API.",
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
        name: "Firebase",
        color: "red-text-gradient",
      },
      {
        name: "TMDB API",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      }
    ],
    image: Netflix,
    source_code_link: "https://github.com/vkshah2987/Netflix-Clone",
  },
  {
    name: "SMART WORKSPACE AI",
    description:
      "A RAG-based document assistant that allows users to ask questions and get context-specific answers from their own files, built using LangChain, FAISS, and OpenAI with a React UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "purple-text-gradient",
      },
      {
        name: "LangChain",
        color: "orange-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
    ],
    image: dummy,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };