document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Province cards - staggered entrance
    document.querySelectorAll('.province-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Other destination cards - staggered entrance
    document.querySelectorAll('.other-dest-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.12}s`;
        observer.observe(card);
    });

    // Parallax effect on hero banner
    const heroImg = document.querySelector('.sumatera-hero-img');
    if (heroImg) {
        const hero = document.querySelector('.sumatera-hero');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < hero.offsetHeight) {
                heroImg.style.transform = `scale(${1 + scrolled * 0.0002}) translateY(${scrolled * 0.3}px)`;
            }
        }, { passive: true });
    }
});
