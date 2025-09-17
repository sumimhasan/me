      const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.navlinks a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Skill bar animation
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
        
        // Animate skill bars when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('#skills'));
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        }
        
        // Terminal typing effect
        const terminalContent = document.getElementById('terminalContent');
        const prompt = document.querySelector('.prompt');
        
        function typeText(text, element, delay = 50) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    terminalContent.scrollTop = terminalContent.scrollHeight;
                } else {
                    clearInterval(timer);
                }
            }, delay);
        }
        
        // Add typing effect to terminal
        setTimeout(() => {
            typeText('sumim@portfolio:~$ ', prompt, 100);
        }, 3000);