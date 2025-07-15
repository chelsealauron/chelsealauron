// Main JavaScript for Portfolio Website
// This file populates the website with data from config/personal-info.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Add event listeners
    addEventListeners();
    
    // Initialize animations
    initializeAnimations();
});

function initializeWebsite() {
    // Populate all content from PERSONAL_INFO
    populateBasicInfo();
    populateAbout();
    populateExperience();
    populateProjects();
    populateSkills();
    populateContact();
    populateSocialLinks();
    populateFooter();
    
    // Update current year
    updateCurrentYear();
}

function populateBasicInfo() {
    // Update page title
    document.getElementById('page-title').textContent = `${PERSONAL_INFO.name} - Portfolio`;
    
    // Update navigation brand
    document.getElementById('nav-brand').textContent = PERSONAL_INFO.name;
    
    // Update hero section
    document.getElementById('hero-name').textContent = PERSONAL_INFO.name;
    document.getElementById('hero-title').textContent = PERSONAL_INFO.title;
    document.getElementById('hero-tagline').textContent = PERSONAL_INFO.tagline;
}

function populateAbout() {
    document.getElementById('about-text').textContent = PERSONAL_INFO.about.short;
    document.getElementById('about-long').textContent = PERSONAL_INFO.about.long;
}

function populateExperience() {
    const timeline = document.getElementById('experience-timeline');
    
    PERSONAL_INFO.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        experienceItem.innerHTML = `
            <h4>${exp.title}</h4>
            <div class="company">${exp.company}</div>
            <div class="period">${exp.period}</div>
            <p>${exp.description}</p>
        `;
        timeline.appendChild(experienceItem);
    });
}

function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    PERSONAL_INFO.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-lg-4 col-md-6';
        projectCard.innerHTML = `
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-code"></i>
                </div>
                <div class="project-content">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="technology-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveUrl}" class="btn-live" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.githubUrl}" class="btn-github" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

function populateSkills() {
    // Frontend skills
    const frontendSkills = document.getElementById('frontend-skills');
    PERSONAL_INFO.skills.frontend.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        frontendSkills.appendChild(skillTag);
    });
    
    // Backend skills
    const backendSkills = document.getElementById('backend-skills');
    PERSONAL_INFO.skills.backend.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        backendSkills.appendChild(skillTag);
    });
    
    // Database skills
    const databaseSkills = document.getElementById('database-skills');
    PERSONAL_INFO.skills.database.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        databaseSkills.appendChild(skillTag);
    });
    
    // Tools skills
    const toolsSkills = document.getElementById('tools-skills');
    PERSONAL_INFO.skills.tools.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        toolsSkills.appendChild(skillTag);
    });
}

function populateContact() {
    document.getElementById('contact-email').textContent = PERSONAL_INFO.contact.email;
    document.getElementById('contact-phone').textContent = PERSONAL_INFO.contact.phone;
    document.getElementById('contact-location').textContent = PERSONAL_INFO.location;
    document.getElementById('contact-availability').textContent = PERSONAL_INFO.contact.availability;
}

function populateSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    const socialLinksFooter = document.getElementById('social-links-footer');
    
    const socialPlatforms = [
        { key: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn' },
        { key: 'github', icon: 'fab fa-github', label: 'GitHub' },
        { key: 'twitter', icon: 'fab fa-facebook', label: 'Facebook' },
    ];
    
   
    
    });
}

function populateFooter() {
    document.getElementById('footer-name').textContent = PERSONAL_INFO.name;
    document.getElementById('footer-tagline').textContent = PERSONAL_INFO.tagline;
    document.getElementById('copyright-name').textContent = PERSONAL_INFO.name;
}

function updateCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function addEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNav');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // Add loading animation to project cards
    document.addEventListener('scroll', function() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            
            if (cardTop < window.innerHeight && cardBottom > 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
}

function initializeAnimations() {
    // Add initial styles for animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
    
    // Trigger animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.experience-item, .skill-tag, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add typing effect to hero title (optional)
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Uncomment the line below to enable typing effect
        // typeWriter();
    }
}

// Initialize interactive features
addInteractiveFeatures();

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeWebsite,
        populateBasicInfo,
        populateAbout,
        populateExperience,
        populateProjects,
        populateSkills,
        populateContact,
        populateSocialLinks,
        populateFooter
    };
} 
