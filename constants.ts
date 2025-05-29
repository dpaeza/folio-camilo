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
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica.webp",
    blurImage: "/projects/blur/tactica.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#1b5ca8", "#0e3c6a"],
    url: "https://carato-frontend-dh.vercel.app/",
    tech: ["power-bi", "qlik-sense", "qlik", "vs-code" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica2.webp",
    blurImage: "/projects/blur/tactica2.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#dc2915", "#6b1007"],
    url: "https://carato-frontend-dh.vercel.app/",
    tech: ["power-bi", "qlik-sense", "qlik", "vs-code" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica3.webp",
    blurImage: "/projects/blur/tactica3.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#69ce01", "#467c9c"],
    url: "https://carato-frontend-dh.vercel.app/",
    tech: ["power-bi", "vs-code", "qlik", "qlik-sense" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica4.webp",
    blurImage: "/projects/blur/tactica4.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#f0ac1e", "#a76f00"],
    url: "https://carato-frontend-dh.vercel.app/",
    tech: ["power-bi", "vs-code", "qlik", "qlik-sense" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica5.webp",
    blurImage: "/projects/blur/tactica5.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#28759f", "#1b4f6a"],
    url: "https://carato-frontend-dh.vercel.app/",
    tech: ["power-bi", "vs-code", "qlik", "qlik-sense" ],
  },
  {
    name: "Power BI dashboard for field work execution control",
    image: "/projects/FSCR.webp",
    blurImage: "/projects/blur/FSCR.webp",
    description: "Using Power BI to track work performed by field staff",
    gradient: ["#ea76e5", "#972f91"],
    url: "https://www.subaru.com.ar/",
    tech: ["power-bi", "power-query", "sharepoint"],
  },
  {
    name: "Human Resources Dashboard",
    image: "/projects/FSCR-human.webp",
    blurImage: "/projects/blur/FSCR-human.webp",
    description: "Power BI dashboard for real-time tracking of hiring, available positions, and turnover rates by area and region",
    gradient: ["#504e5c", "#2e2c36"],
    url: "https://www.subaru.com.ar/",
    tech: ["power-bi", "power-query", "sharepoint", "power-apps", "excel"],
  },
  {
    name: "BI dashboard for controlling internal payroll and vehicle billing processes",
    image: "/projects/FSCR-tigo.webp",
    blurImage: "/projects/blur/FSCR-tigo.webp",
    description: "Power BI application for controlling payroll and other billing processes for a telecommunications company",
    gradient: ["#0c477f", "#062e52"],
    url: "https://www.subaru.com.ar/",
    tech: ["power-bi", "power-query", "sharepoint", "excel"],
  },
  {
    name: "Power BI dashboard for vehicle inspections",
    image: "/projects/FSCR-vehicle.webp",
    blurImage: "/projects/blur/FSCR-vehicle.webp",
    description: "Using Power BI to track vehicle and operational inspections for use by fleet supervisor engineers",
    gradient: ["#6c8299", "#455565"],
    url: "https://www.subaru.com.ar/",
    tech: ["power-bi", "power-query", "sharepoint", "power-apps"],
  },
  {
    name: "E-Commerce: order analysis dashboard",
    image: "/projects/e-commerce.webp",
    blurImage: "/projects/blur/e-commerce.webp",
    description: "Power BI dashboard for e-commerce sales analysis and tracking",
    gradient: ["#1e5249", "#10302b"],
    url: "https://community.fabric.microsoft.com/t5/Data-Stories-Gallery/E-Commerce-order-analysis-dashboard/m-p/3692981",
    tech: ["power-bi", "power-query"],
  },
  {
    name: "Financial News Analysis with NLP and Deep Learning: Stock Market Prediction and Fake News Detection",
    image: "/projects/data-science-3.webp",
    blurImage: "/projects/blur/data-science-3.webp",
    description: "Using Python and Natural Language Processing (NLP) techniques alongside Deep Learning models to analyze financial news, predict stock market trends, and detect misleading information",
    gradient: ["#c13838", "#891d1d"],
    url: "https://github.com/clyonsv/Data-Science-3-Camilo-Lyons/blob/8b0b9c3f5063a27f379e92c733714edad5401377/Data%20Science%203%20NLP_Camilo%20Lyons.ipynb",
    tech: ["python", "jupyter", "pandas", "spacy", "scikit-learn", "matplotlib", "seaborn", "textblob"],
  },
  {
    name: "Strategic dashboard on Power BI: Formula 1 - drivers and Grand Prix insights",
    image: "/projects/data-analitycs.webp",
    blurImage: "/projects/blur/data-analitycs.webp",
    description: "Power BI strategy dashboard inspired by Formula 1 connected to multiple databases",
    gradient: ["#2c2c3b", "#1a1a24"],
    url: "https://community.fabric.microsoft.com/t5/Data-Stories-Gallery/Formula-1-Drivers-and-Grand-Prix-insights/m-p/3679073",
    tech: ["excel", "sql", "power-bi", "power-query"],
  },
  {
    name: "Application of Supervised Machine Learning Models in the Binary Classification of Dementia Disease",
    image: "/projects/data-science-1-2.webp",
    blurImage: "/projects/blur/data-science-1-2.webp",
    description: "Execution, optimization, and selection of Machine Learning models focused on binary classification in the healthcare field",
    gradient: ["#b40426", "#6c0217"],
    url: "https://github.com/clyonsv/Data.science-Camilo.Lyons/blob/bd7e4591e23c09142d75c4cd0d648ad4aa2a2779/2da%20Entrega_Dementia_Dataset%2BCamilo_Lyons.ipynb",
    tech: ["python", "jupyter", "pandas", "numpy", "seaborn", "statsmodels", "scikit-learn", "matplotlib", "XGBoost"],
  },
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
    },
    {
      name: "Power Query",
      icon: "power-query",
    },
    {
      name: "Sharepoint",
      icon: "sharepoint",
    },
    {
      name: "Statsmodels",
      icon: "statsmodels",
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
