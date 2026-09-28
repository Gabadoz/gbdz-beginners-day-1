document.addEventListener('DOMContentLoaded', () => {

    const btnCta = document.getElementById('btn-cta');
    const projectsSection = document.getElementById('projects');

    if (btnCta && projectsSection) {
        btnCta.addEventListener('click', () => {

            projectsSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {

            event.preventDefault();

            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const messageInput = document.getElementById('message').value;

            if (nameInput.trim() === '' || emailInput.trim() === '' || messageInput.trim() === '') {
                alert('Harap isi semua kolom formulir sebelum mengirim pesan!');
                return;
            }

            alert(`Terima kasih, \{nameInput}! Pesan Anda telah berhasil terkirim. Semua masukkan anda (\){emailInput} akan segera saya baca.`);

            contactForm.reset();
        });
    }

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba( 0, 0, 0, 0.4)';
            header.style.borderBottomColor = 'transparent';
        } else {
            header.style.boxShadow = 'none';
            header.style.borderBottomColor = 'var(--border-color)';
        }
    });

    const animatedCards = document.querySelectorAll('.skill-card, .card-project');

    const observerOptions = {
        root:null,
        threshold: 0.15
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

        animatedCards.forEach(card => {
            cardObserver.observe(card);
        });
    
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (event) => {
            if (!header.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});