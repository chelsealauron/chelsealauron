// Personal Information Configuration
// Edit these variables to customize your portfolio

const PERSONAL_INFO = {
  // Basic Information
  name: "Chelsea Franzine C. Lauron",
  title: "Mobile & Web Developer",
  tagline: "A Practical Showcase of IT Skills, Systems, and Projects",
  email: "chelseafranzine@gmail.com",
  phone: "0920-416-6420
  location: "San Pedro Laguna, Philippines",
  
  // Social Media Links
  social: {
    linkedin: "linkedin.com/in/chelsea-lauron-2a5052327/",
    github: "https://github.com/chelsealauron",
    facebook: "https://www.facebook.com/chelsea.lauron/",  
  },
  
  // About Section
  about: {
   
    long: `I am a motivated and detail-oriented 4th Year Information Technology student from Mapúa Malayan Colleges Laguna, seeking an entry-level opportunity where I can apply and grow my technical skills. With a strong foundation in network administration, cybersecurity awareness, cloud computing, and database management, I am eager to contribute to the evolving IT industry. I bring excellent communication skills, adaptability, time management, and a commitment to producing clear technical documentation—qualities that make me a reliable and resourceful team member in any tech-driven environment.

`
  },
  
  // Skills
  skills: {
    frontend: ["HTML5", "CSS3", "Xamarin"],
    backend: ["Python", "PHP", "C#", "ASP.NET"],
    database: ["MySQL", "MariaDB", "PHPMyAdmin"],
    tools: ["AWS", "Figma"],
    languages: ["English", "Tagalog"]
  },
  
  // Experience
  experience: [
    {
      title: "Web Developing",
      company: "Information & Communications Technology Office - ICTO Biñan, Biñan City Hall",
      period: "April - July 2025",
      description: "The assigned task involved continuing the development of an unfinished website, focusing on completing its core features and enhancing overall functionality."
    },
    {
      title: "Student Developer",
      company: "Creotec Work Immersion Program",
      period: "March - April 2021",
      description: "Developed a basic mobile calculator application as part of a Senior High School Work Immersion Program focused on introducing mobile app development. Utilized MIT App Inventor to design, implement, and test core calculator functionalities while gaining foundational experience in visual programming and user interface design."
    }
  ],
  
  // Education
  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "Mapua Malayan Colleges Laguna",
      period: "2021 - present",
    }
    {
      strand: "Humanities and Social Sciences",
      school: "Far Eastern University - Alabang",
      period: "2019 - 2021",
    }
    { 
      school: "Sisters of Mary Immaculate School",
      period: "Junior High | 2015 - 2019",
    }
  ],
  
  // Projects
  projects: [
    {
      title: " San Cristobal Flood Management System (SCFMS)",
      description: "A full-stack flood monitoring system with water level monitoring, map visualization, SOS alert functionality, and official update access on both web and mobile platforms.",
      technologies: ["Flutter", "Lidar", "Google Cloud API", "Weather API", "Firebase"],
      image: "assets/images/project1.jpg",
    },
    {
      title: "Android Ticketing System",
      description: "A mobile-only ticketing system for Android with features for ticket purchasing, refunds, and support for cash or card payments.",
      technologies: ["Xamarin", "PHPMyAdmin", "XAMPP"],
      image: "assets/images/project3.jpg",
    }
    {
      title: "MMCL Tickets",
      description: "A web-based concert ticketing system developed in Visual Studio Community 2019 with features for purchasing and refunding tickets, merchandise options, and support for cash or card payments.",
      technologies: ["ASP.NET", "MDB",  "Access", "C#", "HTML"],
      image: "assets/images/project2.jpg",
    },
  ],
  
  // Services
  services: [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: "fas fa-code"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and Flutter.",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience.",
      icon: "fas fa-paint-brush"
    },
    {
      title: "Consulting",
      description: "Technical consulting and code review services for your projects.",
      icon: "fas fa-lightbulb"
    }
  ],
  
  // Contact Information
  contact: {
    email: "chelseafranzine@gmail.com",
    phone: "0920-416-6420",
    address: "San Pedro Laguna, Philippines",
    availability: "Available for full-time opportunities"
  },
  
  // Theme Colors (you can customize these)
  theme: {
    primary: "#007bff",
    secondary: "#6c757d",
    accent: "#28a745",
    dark: "#343a40",
    light: "#f8f9fa"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PERSONAL_INFO;
} 
