import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  vite,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  java,
  sudoku,
  puzzle,
  mysql,
  git,
  github,
  netlify,
  cetpa,
  tictactoe,
  ceeras,
  carrent,
  vphomes,
  snake,
  threejs,
  quiz,
  typescript,
  notepad,
  portfolio,
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
    title: "React & Vite Frontend Developer",
    icon: mobile,
  },
  {
    title: "Java Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    name: "Vite",
    icon: vite,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
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
    name: "Github",
    icon: github,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "typescript",
    icon: typescript,
  }
];

const experiences = [
  {
    title: "Java Full Stack Developer",
    company_name: "Cetpa Infotech Pvt. Ltd.",
    icon: cetpa,
    iconBg: "#383E56",
    date: "April 2024 - October 2024",
    points: [
      "Created an e-commerce website using React.js focusing on UI design, reusable components, and responsive layout.",
      "Built a banking web app using JSP and Hibernate, integrated with Spring Boot for backend logic and database connectivity.",
      "Designed a login system with proper user authentication and JDBC-based MySQL integration.",
      "Learned GitHub project deployment and collaborated using version control tools.",
      "Created mini projects like a gaming website (HTML/CSS) and a Netflix UI clone to strengthen frontend skills.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Ceeras IT Services",
    icon: ceeras,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - June 2025",
    points: [
      "Gained hands-on experience with modern frontend tools like Vite and TailwindCSS for rapid UI development.",
      "Developed an Excel to MySQL Database Conversion tool handling over 10,000 employee records, processed in under 5 minutes.",
      "Implemented secure data transfer with AES encryption for sensitive fields like username and password.",
      "Utilized JDBC and Apache POI libraries to parse Excel files and insert data into MySQL 8.0 database.",
      "Built the entire project using Eclipse IDE with clean code structure and proper exception handling.",
      "Ensured high performance and data integrity by optimizing file reading and batch insertion logic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Menu Hub",
    description:
      "Developed a web-based food ordering platform with an interactive menu, add-to-cart functionality, and direct call-to-order feature for instant delivery coordination.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://delight-hub.netlify.app/",
  },
  {
    name: "House Price Prediction",
    description:
      "Built a full-stack House Price Prediction web application using a machine learning model in the backend and React with Bootstrap for the frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vphomes,
    source_code_link: "https://github.com/vaibh-vaibh/house_price_prediction.git",
  },
  {
    name: "Portfolio",
    description:
      "Developed a modern 3D portfolio website using Vite, TailwindCSS, and Three.js, an interactive 3D canvas, and integrated contact form with email functionality.",
    tags: [
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      }
    ],
    image: portfolio,
    source_code_link: "https://githubbox.com/vaibh-vaibh/portfolio",
  },
  {
    name: "Snake Game Frontend Website",
    description:
      "Developed a classic Snake Game using HTML, CSS, and JavaScript with smooth controls and real-time score tracking for an engaging and responsive gaming website experience.",
    tags: [
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "netlify", 
      },
    ],
    image: snake,
    source_code_link: "https://681363874673be8eea9c6d7c--steady-cassata-f46297.netlify.app/",
  },
  {
    name: "Science-Mathematics Quiz",
    description:
      "Created an interactive quiz application using a Quiz API featuring 50 MCQ questions on Science and Mathematics, with real-time scoring and final result display.",
    tags: [
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://smquiz.netlify.app/",
  },
  {
    name: "Notepad Desktop Application",
    description:
      "Developed a fully-functional Notepad desktop application clone with all core features including open, save, edit, and format text.",
    tags: [
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "electron",
      }
    ],
    image: notepad,
    source_code_link: "https://github.com/vaibh-vaibh/Electron-Notepad.git",
  },
  {
    name: "Sudoku Game Frontend Website",
    description:
      "Developed a modern Sudoku Gaming website using HTML, CSS, and JavaScript, featuring an interactive canvas and full functionality, allowing users to play and solve Sudoku puzzles seamlessly.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      }
    ],
    image: sudoku,
    source_code_link: "https://682224f788373333ad8ec2b1--quiet-strudel-3db611.netlify.app/",
  },
  {
    name: "Tic Tac Toe Game Frontend Website",
    description:
      "Developed a classic Tic Tac Toe Game using HTML, CSS, and JavaScript with smooth controls, dark mode and score tracking for an engaging and responsive gaming website experience.",
    tags: [
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "netlify", 
      },
    ],
    image: tictactoe,
    source_code_link: "https://68238e2e48c07440a7083eeb--fantastic-banoffee-3645c7.netlify.app/",
  },
  {
    name: "Word Spot Puzzle Game Frontend Website",
    description:
      "Developed a Word Spot Puzzle Game using HTML, CSS, and JavaScript with smooth controls,new game button and score tracking for an engaging and responsive gaming website experience.",
    tags: [
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "netlify", 
      },
    ],
    image: puzzle,
    source_code_link: "https://6825fe0284b868ffbea8a22c--remarkable-hotteok-9c85d8.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
