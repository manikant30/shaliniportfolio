// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  // Add entrance animations to all elements
  const entranceObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const entranceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, entranceObserverOptions);

  // Apply entrance animations to elements
  const animatedElements = document.querySelectorAll('.hero-left, .hero-right, .stat-item, .nav-menu, .nav-right');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    entranceObserver.observe(el);
  });

  // Navigation smooth scrolling with active state
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section');

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Theme toggle functionality with smooth transitions
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  let isDarkTheme = true;

  themeToggle.addEventListener('click', function () {
    isDarkTheme = !isDarkTheme;

    // Add rotation effect
    this.style.transform = 'rotate(360deg)';
    this.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
      this.style.transform = 'rotate(0deg)';
    }, 500);

    if (isDarkTheme) {
      body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
      body.style.color = '#ffffff';
      body.style.transition = 'all 0.5s ease';
    } else {
      body.style.background = 'linear-gradient(135deg, #82667eff 0%, #e9ecef 50%, #363b3fff 100%)';
      body.style.color = '#333333';
      body.style.transition = 'all 0.5s ease';
    }
  });



  // Download CV button functionality
  const downloadCVBtn = document.querySelector('.download-cv');
  downloadCVBtn.addEventListener('click', function () {
    // Create a sample CV download
    const cvContent = `
            Gautam Kumar
            Email: gautamkumar951011@gmail.com
            Phone: +91 9771541226
            Location: India
            Summary: Passionate and dedicated Full Stack Developer with a strong foundation in web development technologies. Proven ability to create responsive, user-friendly applications and deliver high-quality code. Eager to contribute to innovative projects and collaborate with teams to achieve exceptional results.
            Experience: Fresher with hands-on experience in web development projects.
            Skills: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Python, C++, C
            Projects: Developed multiple web applications including e-commerce platforms, portfolio websites, and RESTful APIs
            Education: Bachelor of Technology in Computer Science and Engineering
            Certifications: Full Stack Web Development, JavaScript Algorithms and Data Structures, Responsive Web Design
            Portfolio: https://gautamkumarportfolio.com
            GitHub: https://github.com/gautamkumar
            Full Stack Developer

            Languages: English, Hindi
            Interests: Web Development, Open Source Contribution, Problem Solving
            Technologies: 5+ mastered

            Contact: gautamkumar951011@gmail.com
            LinkedIn: linkedin.com/in/gautamkumar

        `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Gautam_kumar.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });

  // Hire Me and Contact Me buttons
  const hireMeBtn = document.querySelector('.btn-primary');
  const contactMeBtn = document.querySelector('.btn-secondary');

  hireMeBtn.addEventListener('click', function () {
    alert('Thank you for your interest! Please contact me at gautamkumar951011@gmail.com for hiring inquiries.');
  });

  contactMeBtn.addEventListener('click', function () {
    alert('Contact me at:\nEmail: gautamkumar951011@gmail.com\nPhone: +91 9262909417 \nLinkedIn: linkedin.com/in/gautam-kumar-4a4ab3293\nGitHub: github.com/Gautamkumar9262 \nInstagram: instagram.com/rock_star_gautam__?igsh=MWRoa2ZueWhscjgxNA==');
  });

  // Social media links with dynamic hover effects
  const socialLinks = document.querySelectorAll('.social-icon');
  socialLinks.forEach((link, index) => {
    // Add staggered animation delay
    link.style.animationDelay = `${index * 0.1}s`;

    link.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px) scale(1.1)';
      this.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.3)';
    });

    link.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });

    link.addEventListener('click', function (e) {
      e.preventDefault();
      const platform = this.querySelector('i').className;

      let url = '#';
      if (platform.includes('facebook')) {
        url = 'https://www.facebook.com/share/1B75spW6VN/';
      } else if (platform.includes('twitter')) {
        url = 'https://x.com/Gautamkuma36546?t=0k6j0H-JTrRLZImlkYfmxA&s=09';
      } else if (platform.includes('instagram')) {
        url = 'https://www.instagram.com/rock_star_gautam__?igsh=MWRoa2ZueWhscjgxNA==';
      } else if (platform.includes('linkedin')) {
        url = 'https://www.linkedin.com/in/gautam-kumar-4a4ab3293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
      } else if (platform.includes('github')) {
        url = 'https://github.com/Gautamkumar9262';
      }

      window.open(url, '_blank');
    });
  });

  // Add scroll effect to header with dynamic blur
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      header.style.background = 'rgba(15, 15, 35, 0.98)';
      header.style.backdropFilter = 'blur(15px)';
    } else {
      header.style.background = 'rgba(15, 15, 35, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    }

    // Add parallax effect to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
      const speed = 0.5;
      profileImage.style.transform = `translateY(${scrollY * speed}px)`;
    }
  });

  // Animate statistics on scroll with enhanced effects
  const statsSection = document.querySelector('.stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  const statItems = document.querySelectorAll('.stat-item');

  const statsObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
              item.style.transform = 'scale(1)';
            }, 300);
            animateNumber(statNumbers[index]);
          }, index * 300);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, statsObserverOptions);

  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  function animateNumber(element) {
    const finalNumber = parseInt(element.textContent);
    let currentNumber = 0;
    const increment = finalNumber / 50;

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= finalNumber) {
        element.textContent = finalNumber + '+';
        element.style.color = '#00d4ff';
        element.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(currentNumber) + '+';
      }
    }, 30);
  }

  // Add typing effect to the name
  const nameElement = document.querySelector('.name');
  const originalText = nameElement.textContent;
  nameElement.textContent = '';

  let charIndex = 0;
  const typeWriter = () => {
    if (charIndex < originalText.length) {
      nameElement.textContent += originalText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    }
  };

  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);

  // Dynamic typing effect for job titles
  const titleElement = document.querySelector('.title .highlight');
  const jobTitles = [
    'Full Stack Developer'
  ];

  let currentTitleIndex = 0;
  let isDeleting = false;
  let currentCharIndex = 0;

  function typeJobTitle() {
    const currentTitle = jobTitles[currentTitleIndex];

    if (isDeleting) {
      // Delete characters
      titleElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      // Type characters
      titleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }

    let typeSpeed = 150;

    if (isDeleting) {
      typeSpeed = 100;
    }

    if (!isDeleting && currentCharIndex === currentTitle.length) {
      // Pause at end
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next title
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
      typeSpeed = 500;
    }

    setTimeout(typeJobTitle, typeSpeed);
  }

  // Start the dynamic typing effect after name typing is complete
  setTimeout(typeJobTitle, 3000);

  // Portfolio filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillsSection = document.querySelector('.skills');

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 500);
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // Contact form functionality
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelectorAll('input[type="text"]')[1].value;
      const message = this.querySelector('textarea').value;

      // Show success message
      alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);

      // Reset form
      this.reset();
    });
  }

  // Add hover effects to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add click effects to portfolio items
  const portfolioLinks = document.querySelectorAll('.portfolio-link');
  portfolioLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const projectName = this.closest('.portfolio-info').querySelector('h3').textContent;
      alert(`Opening ${projectName} project...`);
    });
  });
}
);


// Add some particle effects in the background
function createParticles() {
  const body = document.body;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#00d4ff';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.3';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;

    body.appendChild(particle);
  }
}

// Add floating animation and ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes slideInFromBottom {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .profile-image {
        animation: pulse 3s ease-in-out infinite;
    }
    
    .social-icon {
        animation: slideInFromBottom 0.6s ease forwards;
    }
    
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
setTimeout(createParticles, 1000);

// Project links functionality
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const projectName = this.closest('.project-card').querySelector('h3').textContent;
    const linkType = this.textContent.includes('Demo') ? 'Live Demo' : 'Source Code';
    alert(`Opening ${linkType} for ${projectName}...`);
  });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});