// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Enhanced Portfolio Animations
function animatePortfolioItems() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach((item, index) => {
        // Add animation delay based on position
        item.style.animationDelay = `${index * 0.1}s`;

        // Trigger animation when item comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else {
                    entry.target.classList.remove('animate-in');
                    entry.target.classList.add('animate-out');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(item);
    });
}

// Enhanced Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Animate out all items first
        portfolioItems.forEach(item => {
            item.classList.add('animate-out');
            item.classList.remove('animate-in');
        });

        // After animation out, filter and animate in
        setTimeout(() => {
            portfolioItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                    item.style.animationDelay = `${index * 0.1}s`;

                    // Trigger animation in
                    setTimeout(() => {
                        item.classList.add('animate-in');
                        item.classList.remove('animate-out');
                    }, 100);
                } else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                    item.classList.remove('animate-in');
                }
            });
        }, 500);

        // Show/hide portfolio sections based on filter
        const portfolioSections = document.querySelectorAll('.portfolio-section');
        portfolioSections.forEach(section => {
            const sectionItems = section.querySelectorAll('.portfolio-item');
            const hasVisibleItems = Array.from(sectionItems).some(item =>
                filterValue === 'all' || item.getAttribute('data-category') === filterValue
            );

            if (hasVisibleItems) {
                section.style.display = 'block';
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100);
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(-20px)';

                setTimeout(() => {
                    section.style.display = 'none';
                }, 600);
            }
        });
    });
});

// Initialize portfolio animations when page loads
document.addEventListener('DOMContentLoaded', function () {
    animatePortfolioItems();

    // Initialize portfolio - show all items with animation
    setTimeout(() => {
        portfolioItems.forEach((item, index) => {
            item.classList.add('show');
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate-in');
        });
    }, 500);
});

// Navbar background change on scroll
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.style.background = 'rgba(255, 255, 255, 0.98)';
//         navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//     } else {
//         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//         navbar.style.boxShadow = 'none';
//     }
// });

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
const animateElements = document.querySelectorAll('.section-title, .about-text, .about-stats, .skill-category, .portfolio-item, .contact-info, .contact-form');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to portfolio items
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click handlers for portfolio links (placeholder functionality)
document.querySelectorAll('.portfolio-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = link.querySelector('i');

        if (icon.classList.contains('fa-play')) {
            alert('Video player would open here. Replace with your actual video links!');
        } else if (icon.classList.contains('fa-external-link-alt')) {
            alert('External project link would open here. Replace with your actual project URLs!');
        } else if (icon.classList.contains('fa-eye')) {
            alert('Project gallery would open here. Replace with your actual gallery/3D viewer!');
        }
    });
});

// Add smooth reveal animation for stats
const stats = document.querySelectorAll('.stat h3');
const animateStats = () => {
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;

        const updateStat = () => {
            if (currentValue < finalValue) {
                currentValue += increment;
                stat.textContent = Math.ceil(currentValue) + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
            }
        };

        updateStat();
    });
};

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingCSS = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
        animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;

// Inject loading CSS
const style = document.createElement('style');
style.textContent = loadingCSS;
document.head.appendChild(style);

// Enhanced slide-up and fade-out on scroll
function handleSlideUpFadeOut() {
    const slideUps = document.querySelectorAll('.slide-up');
    slideUps.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Show (slide up) when at least 10% visible
        if (rect.top < windowHeight * 0.9 && rect.bottom > windowHeight * 0.1) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
        // Fade out only when the element is almost completely out of view (bottom < 80px from top)
        if (rect.bottom < 80 || rect.top > windowHeight - 80) {
            el.classList.add('fade-out');
        } else {
            el.classList.remove('fade-out');
        }
    });

    // Special animation for keywords
    const keywords = document.querySelectorAll('.side-keyword');
    keywords.forEach((keyword, index) => {
        const rect = keyword.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight * 0.9 && rect.bottom > windowHeight * 0.1) {
            // Stagger the animation with delay based on index
            setTimeout(() => {
                keyword.style.opacity = '1';
                keyword.style.transform = 'translateY(0) scale(1)';
            }, index * 150); // 150ms delay between each keyword
        } else {
            keyword.style.opacity = '0';
            keyword.style.transform = 'translateY(20px) scale(0.9)';
        }
    });
}
window.addEventListener('scroll', handleSlideUpFadeOut);
window.addEventListener('resize', handleSlideUpFadeOut);
window.addEventListener('DOMContentLoaded', handleSlideUpFadeOut);

// Samurai Video Length Control
document.addEventListener('DOMContentLoaded', function () {
    const samuraiVideo = document.getElementById('samurai-video');

    if (samuraiVideo) {
        // Set video start time (in seconds) - adjust this value as needed
        const startTime = 0; // Start from beginning

        // Set video duration (in seconds) - adjust this value as needed
        const maxDuration = 10; // Play for 10 seconds then loop

        samuraiVideo.addEventListener('loadedmetadata', function () {
            // Set the start time
            samuraiVideo.currentTime = startTime;
        });

        samuraiVideo.addEventListener('timeupdate', function () {
            // Check if video has played for the specified duration
            if (samuraiVideo.currentTime >= startTime + maxDuration) {
                // Reset to start time to create a loop effect
                samuraiVideo.currentTime = startTime;
            }
        });

        // Ensure video plays when it becomes visible
        samuraiVideo.addEventListener('play', function () {
            samuraiVideo.currentTime = startTime;
        });
    }
});