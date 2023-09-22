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
    ridgeline,
    nevadanano,
    wrench,
    carrent,
    scratch,
    threador,
    jobit,
    tripguide,
    threejs,
    python,
    cpp,
    jest,
    cypress,
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
      title: "Full-Stack Development",
      icon: web,
    },
    {
      title: "Data Analysis",
      icon: mobile,
    },
    {
      title: "Quality Assurance",
      icon: backend,
    },
    {
      title: "Automation",
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
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "Cypress",
      icon: cypress,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Quality and Development Intern",
      company_name: "Ridgeline",
      icon: ridgeline,
      iconBg: "#E6DEDD",
      date: "Three Months",
      points: [
        "Contributed to the development of an industry cloud platform for investment management, combining modern public cloud technology with core bussiness applications",
        "Represented data models through the development of an interactive UI dashboard, streamlining data referencing and enhancing efficiency in project development for all engineers",
        "Scripted comprehensive tests, including unit, integration, and end-to-end tests, ensuring code and data integrity",
        "Drafted and maintained thorough documentation and presentations of project progress, test plans, bugs, and feedback, facilitating effective communication and collaboration within the team and wider company audience",
        "Deployed code in an Agile environment and utilized tools such as Github and JIRA",
      ],
    },
    {
      title: "Engineering Intern",
      company_name: "Nevada Nano",
      icon: nevadanano,
      iconBg: "#383E56",
      date: "Two Years+",
      points: [
        "Contributed to the development and manufacturing of sensor modules for commercial applications, specifically, Internet of Things (IoT) enabled distributed gas sensing",
        "Developed a UI for downloading data from sensor modules",
        "Automated nightly firmware updating and testing of multiple sensors at once",
        "Scripted tests for internal software tools to safeguard the product's integrity",
        "Built a system to wirelessly transfer data from sensors to the web using a Wi-Fi connected microcontroller, webhooks, and Google Apps Script",
      ],
    },
    {
      title: "Additional Engineering Roles",
      company_name: "Non-software related engineering experiences which curated my well-rounded skill set",
      icon: wrench,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Biomedical Engineer at Prime Healthcaare",
        "Electrical Engineeer at Holm Electric",
        "Designer for outdoor residential construction projects at Manna Flow Designs",
        "Hospital Management Intern at Hospital Carlos Luis Valverde Vega",
        "Production Process Engineering and Quality Intern at Lamtex Composites",
        "Biomedical Research Assistant at the University of Nevada, Reno",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "References are available upon request. I have a reference avaiable for every company that I have worked for. Fill out the contact form below and let me know what you would like to hear more about.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Scratch",
      description:
        "Web application that allows users to create an account to compose and edit personal notes with file attachments.",
      tags: [
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "LambdaAPI",
          color: "green-text-gradient",
        },
      ],
      image: scratch,
      source_code_link: "https://d38kltoex5fq4m.cloudfront.net/",
    },
    {
      name: "Threador",
      description:
        "Mobile application that will allow users to read books in summarized snippets, similar to scrolling through a twitter feed and reading threads. This project is currently in progress.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Ionic",
          color: "purple-text-gradient",
        },
      ],
      image: threador,
      source_code_link: "https://drive.google.com/file/d/1CfYxez2-bgecPvm0Tuz0KGZX_FcfKZJ4/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };