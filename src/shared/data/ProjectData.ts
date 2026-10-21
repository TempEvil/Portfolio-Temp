import type { ProjectDataType } from "@/shared/types/ProjectDataType";

import {
  CarShopImg,
  CameraStoreImg,
  ImageSliderImg,
  FacebookCloneImg,
  BookingWebsiteImg,
  FirstPortfolioImg,
  HoverCardEffectImg,
} from "@/app/configs/app";

export const ProjectData: ProjectDataType[] = [
  // Booking Website
  {
    id: 1,
    image: BookingWebsiteImg,
    name: "Booking Website",
    date: "July 2025 - Oct 2025",
    description:
      "A specialized booking platform developed to automate guest reservations for a resort client. The UI was designed and the frontend was implemented to integrate with the client's backend system, enabling real-time booking updates. By incorporating ABA Bank payments, the platform transformed a manual administrative process into a more efficient, user-friendly digital experience that improved operational workflows and customer accessibility.",
    stack: ["React", "TypeScript", "Chakra UI", "Tanstack Query"],
    demo: "https://www.romdoul-kravanh.com",
    story:
      "This project involved building a modern booking interface for a resort client already using an internal management system. The main challenge was transitioning from a manual reservation workflow to a digital-first experience. The frontend was developed to connect with the backend system, enabling automated booking updates and reducing the need for manual data entry.",
    keyContributions: [
      {
        title: "UI/UX Design",
        task: "Contributed to designing a minimalist, mobile-first interface—prioritizing a smooth and intuitive user experience for travelers.",
      },
      {
        title: "System Integration",
        task: "Implemented frontend logic that connects with the backend system to support real-time booking updates and data synchronization.",
      },
      {
        title: "Payment Integration",
        task: "Integrated the ABA Bank Payment Gateway, supporting a secure and reliable transaction process during checkout.",
      },
      {
        title: "Process Improvement",
        task: "Helped transition the booking workflow from a manual process to a more automated system, improving accessibility and efficiency.",
      },
    ],
    disclaimer:
      "This project was completed as part of my role within a company and involved collaboration with a broader team.",
  },
  // Hover Card Effect
  {
    id: 2,
    image: HoverCardEffectImg,
    name: "Hover Card Effect",
    date: "June 2025",
    description:
      "A technical exploration of modern CSS capabilities. This project demonstrates the power of advanced selectors like :has() and sibling combinators to create interactive UI elements without relying on JavaScript for state management.",
    stack: ["HTML5", "CSS3"],
    demo: "https://rithevilx.github.io/HoverCardEffect",
    github: "https://github.com/RithEvilx/HoverCardEffect",
    story:
      "I wanted to push the boundaries of 'CSS-only' interactivity. By utilizing the :has() pseudo-class, I was able to create parent-aware styling that previously required complex JS logic.",
    keyContributions: [
      {
        title: "Advanced Selectors",
        task: "Implemented complex UI logic using the adjacent sibling combinator (+) and the universal selector (*).",
      },
      {
        title: "Parent-State UI",
        task: "Used the :has() pseudo-class to toggle styles based on child element hover states.",
      },
    ],
  },
  // Image Slider
  {
    id: 3,
    image: ImageSliderImg,
    name: "Image Slider",
    date: "June 2025",
    description:
      "A smooth, responsive image slider focusing on fluid CSS animations and layout transitions to enhance user engagement through visual storytelling.",
    stack: ["HTML5", "CSS3"],
    demo: "https://rithevilx.github.io/ImageSlider",
    github: "https://github.com/RithEvilx/ImageSlider",
    story:
      "The goal was to create a lightweight slider that feels native and responsive across all devices using pure CSS transition properties.",
    keyContributions: [
      {
        title: "Animation Optimization",
        task: "Created keyframe animations for smooth transitions between image states.",
      },
    ],
  },
  // First Portfolio
  {
    id: 4,
    image: FirstPortfolioImg,
    name: "First Portfolio",
    date: "May 2024",
    description:
      "A personal milestone project created after my year-4 final exams. This portfolio serves as a comprehensive showcase of my academic journey, technical skills, and initial professional experiences.",
    stack: ["HTML5", "CSS3"],
    demo: "https://rithevilx.github.io/soksovannarith",
    github: "https://github.com/RithEvilx/soksovannarith",
    story:
      "After finishing my university exams, I built this to bridge the gap between student life and professional career, organizing my work into a clean, readable digital resume.",
    keyContributions: [
      {
        title: "Information Architecture",
        task: "Structured multi-section content to highlight education and skills effectively.",
      },
    ],
  },
  // Camera Store
  {
    id: 5,
    image: CameraStoreImg,
    name: "Camera Store",
    date: "May 2023",
    description:
      "My first full-page web project following the completion of an HTML short course at ANT Technology Training Center. It focuses on semantic HTML and foundational layout design.",
    stack: ["HTML5", "CSS3"],
    demo: "https://rithevilx.github.io/sovannarith-camera-store",
    github: "https://github.com/RithEvilx/sovannarith-camera-store",
    story:
      "This was my 'hello world' into structured web development. I applied everything I learned during my training at ANT to build a functional retail-style landing page.",
    keyContributions: [
      {
        title: "Semantic Structure",
        task: "Used proper HTML5 tags to ensure a SEO-friendly and accessible document structure.",
      },
    ],
  },
  // Car Shop
  {
    id: 6,
    image: CarShopImg,
    name: "Car Shop",
    date: "March 2023",
    description:
      "A focused development task from my time at ANT Technology Training Center, designed to practice grid and flexbox layouts within a commercial context.",
    stack: ["HTML5", "CSS3"],
    demo: "https://rithevilx.github.io/Shop-Car",
    github: "https://github.com/RithEvilx/Shop-Car",
    story:
      "Building this helped me master the alignment and spacing challenges often found in e-commerce product grids.",
    keyContributions: [
      {
        title: "Layout Practice",
        task: "Implemented basic grid layouts to display car listings and specifications.",
      },
    ],
  },
  // Facebook Clone
  {
    id: 7,
    image: FacebookCloneImg,
    name: "Facebook Clone",
    date: "January 2023",
    description:
      "A structural clone of the Facebook homepage, focusing on replicating a complex, multi-column layout and mimicking a familiar user interface.",
    stack: ["HTML5", "CSS3"],
    demo: "https://rithevilx.github.io/Facebook-Homepage/",
    github: "https://github.com/RithEvilx/Facebook-Homepage",
    story:
      "This was my first attempt at reverse-engineering a major platform's UI to understand how professional websites handle complex navigation and sidebars.",
    keyContributions: [
      {
        title: "UI Re-engineering",
        task: "Analyzed and replicated the visual hierarchy and component placement of a world-class social platform.",
      },
    ],
  },
];
