import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    linkedin,
    mysql,
    socketio,
    innovation,
    city,
    blog,
    chat,
    auth,
    brain,
    dashboard,
    chats
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: socketio,
        name: "Real time",
        type: "Real time",
    },
];

export const experiences = [

    {
        title: "IndiaSkills Competition 2023-24",
        company_name: "IndiaSkills Competition",
        icon: innovation, // Replace with the appropriate icon
        iconBg: "#accbe1",
        date: "2023-2024",
        points: [
           "Secured 2st rank in the IndiaSkills competition 2023-24 for IT Software Solutions for Business in Maharashtra! 🥇",
            "Competed against incredibly talented individuals and emerged victorious.",
            "Highlighted the importance of dedication, hard work, persistence, and passion in pursuing one's dreams.",
            "Looking forward to pushing the boundaries of innovation and excellence in IT Software Solutions.",
        ],
    },
    {
        title: "Technothon 2024",
        company_name: "Technothon",
        icon: innovation, // Replace with the appropriate icon
        iconBg: "#accbe1",
        date: "May 2024 - May 2024",
        points: [
            "Overview: Participated in a competitive 24-hour hackathon focused on innovative problem-solving using technology.",
            "Project: Developed a MERN stack application for a unified repository that streamlines data management and accessibility.",
            "Technologies Used: MongoDB, Express.js, React.js, Node.js, JavaScript, Git.",
            "Outcome: Successfully delivered a functional prototype that received positive feedback for its user-friendly interface and efficient data handling. This project enhanced my collaboration skills and reinforced my ability to work under tight deadlines.",
        ],
    },
    {
        title: "Dipex 2024",
        company_name: "Dipex",
        icon: innovation, // Replace with the appropriate icon
        iconBg: "#accbe1",
        date: "May 2024 - May 2024",
        points: [
            "Overview: Engaged in a prestigious 4-day state-level project competition, collaborating with peers to develop a comprehensive educational solution.",
            "Project: Created an e-learning platform where users can interact with video lectures and take quizzes to reinforce their learning.",
            "Features: Integrated user-friendly navigation, real-time feedback on quizzes, and interactive video content.",
            "Presentation: Successfully showcased the project to a panel of mentors and industry experts, demonstrating its features and functionalities. Received valuable insights and constructive feedback, which helped refine our approach and presentation skills.",
        ],
    },
    {
        title: "Technothon 2023",
        company_name: "Technothon",
        icon: innovation,
        iconBg: "#accbe1",
        date: "May 2023 - May 2023",
        points: [
            "Overview: Participated in another intense 24-hour hackathon dedicated to addressing real-world challenges through technology.",
            "Project: Developed a MERN stack application focused on traffic statistics. The project included the generation of detailed reports and graphical representations of traffic data based on specific problem statements.",
            "Technologies Used: MongoDB, Express.js, React.js, Node.js, Chart.js, Git.",
            "Outcome: Delivered a well-received project that highlighted the importance of data visualization in urban planning. This experience enhanced my skills in data analysis and presentation, as well as my ability to collaborate effectively in a fast-paced environment.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/wizardsWeb',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: city,
        theme: "btn-back-red",
        name: "Smart-City UI",
        description: "Built an amazing UI for the Smart City using React-Three-Fiber, React, Firebase, and Framer Motion. This project features a 3D smart city model and includes various functionalities related to the community.",
        link: "https://github.com/wizardsWeb/3D-smart-city-hackathon", // Add your GitHub link or project link here
    },
    {
        iconUrl: blog,
        theme: "btn-back-green",
        name: "MERN Blog",
        description: "Developed a full-stack blog website using the MERN stack (MongoDB, Express, React, Node.js). Implemented CRUD operations to enable users to create, read, update, and delete blog posts, as well as customize their profiles.",
        link: "https://github.com/wizardsWeb/mern-blog", // Add your GitHub link or project link here
    },
    {
        iconUrl: chats,
        theme: "btn-back-blue",
        name: "Real-time Estate Chat App",
        description: "Built a project on the MERN stack, Tailwind CSS, Socket.IO, and Zustand, allowing users to search for places, save their favorites, and engage in real-time chat.",
        link: "https://github.com/wizardsWeb/projRepo", // Add your GitHub link or project link here
    },
    {
        iconUrl: auth,
        theme: "btn-back-pink",
        name: "Auth Project",
        description: "Designed and implemented a MERN stack authentication app, featuring secure user authentication, email verification, and password recovery through email, ensuring robust security measures.",
        link: "https://github.com/wizardsWeb/mern-advance-auth", // Add your GitHub link or project link here
    },
    {
        iconUrl: brain,
        theme: "btn-back-yellow",
        name: "BrainWave",
        description: "Developed a modern, animated website using React JS for the frontend, featuring smooth and engaging animations to enhance user experience.",
        link: "https://github.com/wizardsWeb/brainwave-animated", // Add your GitHub link or project link here
    },
    {
        iconUrl: dashboard,
        theme: "btn-back-black",
        name: "Admin Dashboard",
        description: "Built an admin dashboard using React JS and the Syncfusion library, integrating dynamic charts, components, and temporary CRUD functionality for streamlined data management.",
        link: "https://github.com/wizardsWeb/react-sync-dashboard", // Add your GitHub link or project link here
    },
];
