// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Camilo Lyons",
  description:
    "I'm a Data Scientist who bridges data and decision-making seamlessly. I focus on developing ETL processes, building predictive models, and delivering data-driven solutions through modern analytics, machine learning, and data visualization tools.",
  siteUrl: "https://folio-camilo.vercel.app/",
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
  url?: string;
  images?: string[];
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica.webp",
    blurImage: "/projects/blur/tactica.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#1b5ca8", "#0e3c6a"],
    images: ["/projects/carrousel/tactica-1.1.webp", "/projects/carrousel/tactica-1.2.webp"],
    tech: ["power-bi", "qlik-sense", "qlik", "vs-code" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica2.webp",
    blurImage: "/projects/blur/tactica2.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#dc2915", "#6b1007"],
    images: ["/projects/carrousel/tactica-2.1.webp", "/projects/carrousel/tactica-2.2.webp", "/projects/carrousel/tactica-2.3.webp"],
    tech: ["power-bi", "qlik-sense", "qlik", "vs-code" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica3.webp",
    blurImage: "/projects/blur/tactica3.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#69ce01", "#467c9c"],
    images: ["/projects/carrousel/tactica-3.1.webp"],
    tech: ["power-bi", "vs-code", "qlik", "qlik-sense" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica4.webp",
    blurImage: "/projects/blur/tactica4.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#f0ac1e", "#a76f00"],
    images: ["/projects/carrousel/tactica-4.1.webp"],
    tech: ["power-bi", "vs-code", "qlik", "qlik-sense" ],
  },
  {
    name: "Power BI Dashboard for real-time monitoring of commercial companies",
    image: "/projects/tactica5.webp",
    blurImage: "/projects/blur/tactica5.webp",
    description: "Using Power BI to track multiple clients in areas such as sales, pricing, coverage, out-of-stocks, competitive analysis, availability, and productivity.",
    gradient: ["#28759f", "#1b4f6a"],
    images: ["/projects/carrousel/tactica-5.1.webp", "/projects/carrousel/tactica-5.2.webp", "/projects/carrousel/tactica-5.3.webp"],
    tech: ["power-bi", "vs-code", "qlik", "qlik-sense" ],
  },
  {
    name: "Power BI dashboard for field work execution control",
    image: "/projects/FSCR.webp",
    blurImage: "/projects/blur/FSCR.webp",
    description: "Using Power BI to track work performed by field staff",
    gradient: ["#ea76e5", "#972f91"],
    images: ["/projects/carrousel/FSCR-1.1.webp", "/projects/carrousel/FSCR-1.2.webp"],
    tech: ["power-bi", "power-query", "sharepoint"],
  },
  {
    name: "Human Resources Dashboard",
    image: "/projects/FSCR-human.webp",
    blurImage: "/projects/blur/FSCR-human.webp",
    description: "Power BI dashboard for real-time tracking of hiring, available positions, and turnover rates by area and region",
    gradient: ["#504e5c", "#2e2c36"],
    images: ["/projects/carrousel/FSCR-2.1.webp"],
    tech: ["power-bi", "power-query", "sharepoint", "power-apps", "excel"],
  },
  {
    name: "BI dashboard for controlling internal payroll and vehicle billing processes",
    image: "/projects/FSCR-tigo.webp",
    blurImage: "/projects/blur/FSCR-tigo.webp",
    description: "Power BI application for controlling payroll and other billing processes for a telecommunications company",
    gradient: ["#0c477f", "#062e52"],
    images: ["/projects/carrousel/FSCR-3.1.webp", "/projects/carrousel/FSCR-3.2.webp", "/projects/carrousel/FSCR-3.3.webp"],
    tech: ["power-bi", "power-query", "sharepoint", "excel"],
  },
  {
    name: "Power BI dashboard for vehicle inspections",
    image: "/projects/FSCR-vehicle.webp",
    blurImage: "/projects/blur/FSCR-vehicle.webp",
    description: "Using Power BI to track vehicle and operational inspections for use by fleet supervisor engineers",
    gradient: ["#6c8299", "#455565"],
    images: ["/projects/carrousel/FSCR-4.1.webp", "/projects/carrousel/FSCR-4.2.webp", "/projects/carrousel/FSCR-4.3.webp", "/projects/carrousel/FSCR-4.4.webp", "/projects/carrousel/FSCR-4.5.webp"],
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
    tech: ["python", "jupyter", "Pandas", "spacy", "scikit-learn", "matplotlib", "seaborn", "textblob"],
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
    tech: ["python", "jupyter", "Pandas", "numpy", "seaborn", "statsmodels", "scikit-learn", "matplotlib", "XGBoost"],
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
    title: "Data Science III: NLP and Deep Learning Applied to Data Science",
    size: ItemSize.SMALL,
    subtitle: "In this couse, I explore the potential of Deep Learning and Natural Language Processing (NLP). I learned to analyze text, developed advanced models, and applied advanced techniques in Data Science Projects.",
    image: "/timeline/coder-logo.webp",
    slideImage: "/timeline/data-science3.webp",
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
    title: "Data Science II: Machine Learning for Data Science",
    size: ItemSize.SMALL,
    subtitle: "In this couse, I delved into the world of Machine Learning. I learned how to build predictive models, train algorithms, and apply advanced techniques to gain insights and improve processes in data projects.",
    image: "/timeline/coder-logo.webp",
    slideImage: "/timeline/data-science2.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "BI Developer",
    size: ItemSize.SMALL,
    subtitle:"Second role as a Data Analyst, focused on developing ETL processes using Qlik View / Qlik Sense and Visual Studio Code, with final visualization in Power BI. I participated in projects for multiple clients, tailoring solutions to their specific requirements and managing ongoing communication with them.",
    image: "/timeline/tactica.png",
    slideImage: "/timeline/prueba.avif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Science I: Fundamentals of Data Science",
    size: ItemSize.SMALL,
    subtitle: "In this course, I discovered the fundamentals of Data Science. I learned how to work with large volumes of data, perform exploratory analysis, and use tools like Python to solve complex problems.",
    image: "/timeline/coder-logo.webp",
    slideImage: "/timeline/data-science1.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Operations Analyst",
    size: ItemSize.SMALL,
    subtitle:"My first role focused entirely on Data Analysis, where I developed business intelligence solutions using Power BI for various areas of the company, facilitating the tracking of human resources, the automotive sector, hiring, personnel execution, payroll management, and invoicing processes.",
    image: "/timeline/FSCR.png",
    slideImage: "/timeline/data-analytics-tutorial.webp",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Analytics",
    size: ItemSize.SMALL,
    subtitle: "Completed an intensive course at Coderhouse, focusing on modern data analysis technologies, including relational databases management with SQL and developing interactive visualizations in Power BI.",
    image: "/timeline/coder-logo.webp",
    slideImage: "/timeline/data-analytics.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Engineering Assistant",
    size: ItemSize.SMALL,
    subtitle: "My first professional experience as an engineer, where I managed large volumes of data in various operational processes. This experience sparked my interest in data analysis and laid the foundation for my development in the analytics field.",
    image: "/timeline/imsacol.png",
    slideImage: "/timeline/draw.avif",
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
    slideImage: "/timeline/diploma.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
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
