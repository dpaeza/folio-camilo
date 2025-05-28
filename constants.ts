// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Camilo Lyons",
  description:
    "I'm a Data Scientist who bridges data and decision-making seamlessly. I focus on developing ETL processes, building predictive models, and delivering data-driven solutions through modern analytics, machine learning, and data visualization tools.",
  siteUrl: "https://danielapaez.dev/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop data analytics solutions",
  "I design and optimize ETL pipelines",
  "I create data-driven insights and visualizations",
  "I build machine learning models",
];

export const EMAIL = "camilo.lyv@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/camilo-lyons-valero/",
  github: "https://github.com/clyonsv"
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Carato Website",
    image: "/projects/carato.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Web application built using React and MUI",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://carato-frontend-dh.vercel.app/",
    tech: ["react", "figma", "materialui" ],
  },
  {
    name: "Sabaru Chatbot",
    image: "/projects/subaru-bot.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Frontend development of a chatbot for Subaru Argentina",
    gradient: ["#0073c2", "#1f3b77"],
    url: "https://www.subaru.com.ar/",
    tech: ["react", "figma", "html", "javascript", "css"],
  },
  {
    name: "KiddoCircle Website",
    image: "/projects/kiddocircle.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Online store for buying and selling children's items",
    gradient: ["#fa897b", "#b84c5c"],
    url: "https://kiddocircle.web.app/",
    tech: ["react", "figma", "firebase", "sass", "redux"],
  },
  {
    name: "PiSass Script Website",
    image: "/projects/PiSassScript.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pizzeria web app for browsing the menu and placing delivery orders",
    gradient: ["#fd2b58", "#6e1f2e"],
    url: "https://juranyr.github.io/Workshop-5/",
    tech: ["react", "sass", "figma"],
  },
  {
    name: "Food Delivey Website",
    image: "/projects/food-delivery-app.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Food delivery website built for ordering meals online",
    gradient: ["#5E4C06", "#746528"],
    url: "https://food-delivery-app-68ee2.web.app/",
    tech: ["react", "figma", "firebase", "sass", "redux"],
  },
  {
    name: "To do Website",
    image: "/projects/todo.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "To do app built using React for managing tasks",
    gradient: ["#67197d", "#3520a4"],
    url: "https://todo-app-dpaeza.vercel.app/",
    tech: ["react", "sass", "figma"],
  },
  {
    name: "Space Landing Page",
    image: "/projects/space.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Landing page built using React for visualizing space destinations",
    gradient: ["#13161d", "#1f222b"],
    url: "https://turistic-space.vercel.app/",
    tech: ["react", "sass", "figma"],
  },
  {
    name: "Sportit Landing Page",
    image: "/projects/sportit.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Landing page built using javascript, html and css",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://dpaeza.github.io/sportit-lading-Page/",
    tech: ["javascript", "html", "css"],
  }
];

export const SKILLS = {
  languajes: [
    {
      name: "Python",
      icon: "python",
    },
    {
      name: "SQL Server",
      icon: "sql",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
    },
    {
      name: "Pandas",
      icon: "Pandas",
    },
    {
      name: "NumPy",
      icon: "numpy",
    },
    {
      name: "Seaborn",
      icon: "seaborn",
    },
    {
      name: "Anaconda",
      icon: "anaconda",
    },
    {
      name: "Jupyter Notebook",
      icon: "jupyter",
    },
    {
      name: "Google Colab",
      icon: "colaboratory",
    },
    {
      name: "Visual Studio Code",
      icon: "vs-code",
    },
    {
      name: "Qlik View",
      icon: "qlik",
    },
    {
      name: "Qlik Sense",
      icon: "qlik-sense"
    },
    {
      name: "Git",
      icon: "git",
    },
    {
      name: "Github",
      icon: "github",
    },
    {
      name: "Excel",
      icon: "excel",
    },
    {
      name: "Microsoft Fabric",
      icon: "fabric",
    },
    {
      name : "Power Apps",
      icon : "power-apps",
    },
    {
      name: "Power Automate",
      icon: "power-automate",
    }
  ],
  visualization: [
    {
      name: "Matplotlib",
      icon: "matplotlib",
    },
    {
      name: "Power BI",
      icon: "power-bi",
    },
  ],
  machineLearning: [
    {
      name: "XGBoost",
      icon: "XGBoost",
    },
    {
      name: "Scikit-learn",
      icon: "scikit-learn",
    },
    {
      name: "Spacy",
      icon: "spacy",
    },
    {
      name: "Text Blob",
      icon: "textblob",
    }
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated as a Professional Developer 👩‍🎓",
    size: ItemSize.SMALL,
    subtitle: "Completed the Certified Tech Developer program at Digital House, building a solid  foundation in software development.",
    image: "/timeline/digitalhouse.svg",
    slideImage: "/timeline/graduation-digital-house.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle: "Developed the frontend of Carato, a car rental website, as my final project for the Certified Tech Developer program at Digital House 🚗💻",
    image: "/timeline/carato-logo.svg",
    slideImage: "/timeline/carato.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fullstack Developer",
    size: ItemSize.SMALL,
    subtitle:"End-to-end frontend and backend development of Margot, an internal AI-powered tool for the Marketing team to boost productivity.",
    image: "/timeline/Inchcape_logo.svg",
    slideImage: "/timeline/margot.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fullstack Developer",
    size: ItemSize.SMALL,
    subtitle:"Initiated the frontend and backend development of BCM (Bot Content Manager), a web platform to monitor chatbots performance and responses.",
    image: "/timeline/Inchcape_logo.svg",
    slideImage: "/timeline/bcm.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fullstack Developer",
    size: ItemSize.SMALL,
    subtitle: "Frontend development of a chat bot for Suabru Argentina.",
    image: "/timeline/Inchcape_logo.svg",
    slideImage: "/timeline/subaru2.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fullstack Developer (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "First job as developer! 🥳 Joined Inchcape Digital as a Fullstack Developer in the Innovation team, where I developed AI-powered frontend and backend solutions, mostly for internal tools used by the marketing team.",
    image: "/timeline/Inchcape_logo.svg",
    slideImage: "/timeline/inchcape-team.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated as a Frontend Developer 👩‍🎓",
    size: ItemSize.SMALL,
    subtitle: "Completed an intensive bootcamp at MAKAIA focused on modern frontend technologies and best practices. 👩‍💻",
    image: "/timeline/makaia.png",
    slideImage: "/timeline/makaia-pic.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle: "Built the frontend of KiddoCircle, an online store for buying and selling children's items, as my final project at MAKAIA (Bootcamp) 🧸🛍️.",
    image: "/timeline/makaia.png",
    slideImage: "/timeline/kiddocircle.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated as a Mechanical Engineer 🎓",
    size: ItemSize.SMALL,
    subtitle: "Earned my Bachelor's degree in Mechanical Engineering from Universidad del Norte.",
    image: "/timeline/logo-uninorte.png",
    slideImage: "/timeline/diploma-uninorte.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
