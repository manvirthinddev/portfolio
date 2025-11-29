import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JavaScript from "./assets/javascript.png";
import ReactLogo from "./assets/reactjs.png"; 
import Tailwind from "./assets/tailwindcss.png"; 
import Bootstrap from "./assets/bootstrap.png";
import Mysql from "./assets/mysql.png";
import MongoDB from "./assets/mongodb.png";
import C from "./assets/c.png";
import Cpp from "./assets/cpp.png";  
import Java from "./assets/java.png";
import CSharp from "./assets/csharp.png";
import PHP from "./assets/php.png";
import GithubLogo from "./assets/github.png";
import VSCode from "./assets/vscode.png";
import Figma from "./assets/figma.png";

// project images 
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import Project6 from "./assets/project6.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: HTML },
      { name: "CSS", logo: CSS },
      { name: "JavaScript", logo: JavaScript },
      { name: "React JS", logo: ReactLogo },
      { name: "Tailwind CSS", logo: Tailwind },
      { name: "Bootstrap", logo: Bootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", logo: Mysql },
      { name: "MongoDB", logo: MongoDB },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: C },
      { name: "C++", logo: Cpp },
      { name: "Java", logo: Java },
      { name: "C-Sharp", logo: CSharp },
      { name: "JavaScript", logo: JavaScript },
      { name: "PHP", logo: PHP },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: GithubLogo },
      { name: "VS Code", logo: VSCode },
      { name: "Figma", logo: Figma },
    ],
  },


];

export const projects = [
  {
    id: 1,
    title: "Background Changer",
    description:
      "A simple and interactive React tool that lets users switch background colors or images instantly. Great for UI practice and DOM interaction.",
    image: Project1,
    tags: ["React", "JavaScript", "UI Tool"],
    github: "https://github.com/yourusername/project1",
    webapp: "https://react-bg-changer-ryvjh2ixc-manvir-thinds-projects.vercel.app/",
  },

  {
    id: 2,
    title: "Todo App with Context API",
    description:
      "A clean and functional Todo app built using React Context API. Users can add, edit, delete, and persist tasks using LocalStorage.",
    image: Project2,
    tags: ["React", "Context API", "LocalStorage", "State Management"],
    github: "https://github.com/manvirthinddev/react-todoContextLocal",
    webapp: "https://react-todo-context-local-sigma.vercel.app/",
  },

  {
    id: 3,
    title: "Currency Converter",
    description:
      "A modern currency converter that fetches real-time exchange rates using an external API. Converts values instantly with a smooth UI.",
    image: Project3,
    tags: ["React", "API", "Real-Time Data", "Finance"],
    github: "https://github.com/manvirthinddev/react-currencyConvertor",
    webapp: "https://react-currency-convertor-gamma.vercel.app/",
  },

  {
    id: 4,
    title: "Password Generator",
    description:
      "A fully customizable password generator that creates strong, secure passwords with adjustable length and character types.",
    image: Project4,
    tags: ["React", "Security", "Utility Tool"],
    github: "https://github.com/manvirthinddev/react-passwordGenerator",
    webapp: "https://react-password-generator-black.vercel.app/",
  },

  {
    id: 5,
    title: "Text Editor",
    description:
      "A lightweight text editor that allows users to format, edit, and manipulate text in real time. Designed for quick note-taking and formatting demos.",
    image: Project5,
    tags: ["React", "Text Tools", "Productivity"],
    github: "https://github.com/manvirthinddev/react-textEditor",
    webapp: "https://react-text-editor-psi.vercel.app/",
  },

  {
    id: 6,
    title: "Car Animation",
    description:
      "A playful animation project showcasing a moving car made with React. Built using CSS animations for smooth and fun visual movement.",
    image: Project6,
    tags: ["React", "CSS Animation", "Frontend Fun"],
    github: "https://github.com/manvirthinddev/carAnimation",
    webapp: "https://rainbow-queijadas-1c3893.netlify.app/",
  },

];
