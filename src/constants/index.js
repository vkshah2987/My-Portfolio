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
    title: "Software Engineer Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developed and optimized full-stack application using JavaScript, Angular, and Microsoft SQL Server, improving API response time by 30% through query optimization.",
      "Enhanced front-end performance by optimizing Angular components, reducing load time by 20% for improved user experience.",
      "Managed version control and code collaboration using Git and GitHub, enforcing code review best practices that improve code quality and reduce production bugs by 20%.",
      "Collaborated with cross-functional teams in an Agile environment, participating in sprint planning, stand-ups, and retrospectives, delivering 95% of assigned tasks within sprint timelines."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Flutera Technologies",
    icon: flutera,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Sep 2023",
    points: [
      "Improved 5+ dynamic web interfaces using React.js, increasing user engagement by 40%.",
      "Integrated REST APIs and state management solutions, improving data handling efficiency.",
      "Designed and implemented serverless architectures using AWS Lambda and DynamoDB."
    ],
  },
  {
    title: "Freelancer",
    company_name: "",
    icon: transparent,
    iconBg: "#fff",
    date: "May 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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