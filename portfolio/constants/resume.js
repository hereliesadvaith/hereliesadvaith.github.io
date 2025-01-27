import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiGo,
  SiXml,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiOdoo,
  SiDjango,
  SiScrapy,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiLinux,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a passionate software developer with a keen interest in building scalable web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Advaith B G",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "hereliesadvaith@gmail.com",
    },
  ],
};

const experience = {
  title: "My Experience",
  description: "I have worked on various projects using modern technologies.",
  items: [
    {
      company: "Cybrosys Technologies",
      position: "Python Developer",
      duration: "2023 - Present",
    },
    {
      company: "Cybrosys Technologies",
      position: "Python Developer Trainee",
      duration: "2023",
    },
    {
      company: "Baker Academy",
      position: "Structural Engineer Intern",
      duration: "2021",
    },
  ],
};

const education = {
  title: "My Education",
  description: "I hold a Bachelor's degree in Civl Engineering.",
  items: [
    {
      institution: "Udemy",
      course: "Full-Stack Web Development Bootcamp",
      duration: "2022",
    },
    {
      institution: "Udemy",
      course: "Go Programming Bootcamp",
      duration: "2022",
    },
    {
      institution: "College of Engineering, Thalassery",
      course: "Bachelor of Technology in Civil Engineering",
      duration: "2016 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have expertise in various programming languages and frameworks.",
  items: [
    // {
    //   icon: <SiHtml5 />,
    //   name: "html 5",
    // },
    // {
    //   icon: <SiCss3 />,
    //   name: "css 3",
    // },
    // {
    //   icon: <SiJavascript />,
    //   name: "javascript",
    // },
    {
      icon: <SiPython />,
      name: "python",
    },
    // {
    //   icon: <SiGo />,
    //   name: "go",
    // },
    // {
    //   icon: <SiXml />,
    //   name: "xml",
    // },
    // {
    //   icon: <SiBootstrap />,
    //   name: "bootstrap",
    // },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiReact />,
      name: "react js",
    },
    {
      icon: <SiOdoo />,
      name: "odoo",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiScrapy />,
      name: "scrapy",
    },
    {
      icon: <SiNumpy />,
      name: "numpy",
    },
    {
      icon: <SiPandas />,
      name: "pandas",
    },
    {
      icon: <SiPlotly />,
      name: "plotly",
    },
    // {
    //   icon: <SiScikitlearn />,
    //   name: "scikit-learn",
    // },
    // {
    //   icon: <SiMysql />,
    //   name: "mysql",
    // },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiDocker />,
      name: "docker",
    },
    {
      icon: <SiLinux />,
      name: "linux",
    },
  ],
};

export { about, experience, education, skills };
