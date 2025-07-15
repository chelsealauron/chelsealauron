// Personal Information Configuration
// Edit these variables to customize your portfolio

const PERSONAL_INFO = {
  // Basic Information
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "Passionate about creating amazing digital experiences",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  
  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourhandle",
    behance: "https://behance.net/yourprofile",
    dribbble: "https://dribbble.com/yourprofile"
  },
  
  // About Section
  about: {
    short: "I'm a passionate developer who loves turning ideas into reality through code.",
    long: `I'm a full-stack developer with X years of experience in web development. 
    I specialize in creating responsive, user-friendly applications using modern technologies. 
    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
    or sharing knowledge with the developer community.`
  },
  
  // Skills
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript"],
    backend: ["Node.js", "Python", "PHP", "Java", "C#"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Figma", "Adobe Creative Suite"],
    languages: ["English", "Spanish", "French"]
  },
  
  // Experience
  experience: [
    {
      title: "Senior Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led development of multiple web applications using React and Node.js. Managed a team of 5 developers and improved application performance by 40%."
    },
    {
      title: "Full Stack Developer",
      company: "Startup XYZ",
      period: "2020 - 2022",
      description: "Built and maintained customer-facing applications. Implemented new features and optimized database queries."
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites and e-commerce solutions. Collaborated with designers to implement pixel-perfect designs."
    }
  ],
  
  // Education
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      period: "2014 - 2018",
      description: "Graduated with honors. Specialized in software engineering and web development."
    }
  ],
  
  // Projects
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "assets/images/project1.jpg",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/yourusername/project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["Vue.js", "Firebase", "Vuex"],
      image: "assets/images/project2.jpg",
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/yourusername/project2"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/images/project3.jpg",
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/yourusername/project3"
    }
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
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, Country",
    availability: "Available for freelance work and full-time opportunities"
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