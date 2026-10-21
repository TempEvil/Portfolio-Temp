import type { personalData } from "@/shared/types/ResumeDataType";

export const personal_curriculumn_vitae: personalData = {
  first_name: "Sok",
  last_name: "Sovannarith",
  address: "Kouk Khleang, Sen Sok, Phnom Penh, Cambodia.",
  telephone: "016 302 954",
  email: "soksovannarithx@gmail.com",
  about_me:
    "Frontend Developer | Computer Science Graduate (Royal University of Phnom Penh) Frontend developer with 1+ year experience in building responsive web apps using modern JavaScript frameworks.",
  public_link: [
    { name: "GitHub", url: "https://github.com/RithEvilx" },
    { name: "Linkedin", url: "https://linkedin.com/in/sok-sovannarith" },
    { name: "Telegram", url: "https://t.me/rithevil" },
  ],
  work_experience: [
    {
      company: "UDAYA Technology",
      position: "Frontend Developer",
      duration: "Mar 2025 - Present",
      responsibility: [
        "Develop accommodation booking platforms, including resort booking websites and an Online Travel Agency (OTA) platform, using React.js and TypeScript.",
        "Built an internal administration dashboard comprising 16 modules, featuring role-based access control (RBAC), reporting, and PDF/Excel export functionality using React.js and Chakra UI v2.",
        "Integrated ABA PayWay into a resort booking website to enable secure online payment processing.",
        "Develop internal administrative systems and management interfaces to support operational workflows, resource monitoring, and system control.",
        "Implement efficient data fetching, caching, and server-state management using TanStack Query (formerly React Query).",
        "Build responsive, accessible user interfaces using Chakra UI v3 across subsequent projects, following modern frontend development practices.",
        "Collaborate with the development team using Git/GitHub and Agile workflows to deliver features and support production releases.",
      ],
    },
  ],
  education: [
    {
      school: "ROYAL UNIVERSITY OF PHNOM PENH",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2020 - 2024",
    },
    {
      school: "BELTEI INTERNATIONAL SCHOOL",
      degree: "High School Diploma",
      duration: "2019 - 2020",
    },
  ],
  training: [
    // { school: "", degree: "", duration: "" }
  ],
  technical_skills: [
    { name: "React", value: 85 },
    { name: "Javascript", value: 85 },
    { name: "Typescript", value: 75 },
    { name: "GitHub", value: 75 },
    { name: "Java", value: 50 },
    { name: "SQL", value: 50 },
  ],
  soft_skils: [
    { name: "Problem solving", value: 80 },
    { name: "Critical thinking", value: 80 },
    { name: "Adaptability", value: 80 },
    { name: "Communication", value: 55 },
  ],
  languages: [
    { name: "Khmer", value: 100 },
    { name: "English", value: 60 },
  ],
  references: [],
  hobbies: ["Exploring emerging technologies", "Continuous learning and skill development", "Listening to music"],
};
