document.addEventListener('DOMContentLoaded', () => {
    // Hero section animations
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('#hero p');
    const heroButton = document.querySelector('#hero button');

    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(-20px)';
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transform = 'translateY(20px)';
    heroButton.style.opacity = '0';

    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s, transform 1s';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        heroSubtitle.style.transition = 'opacity 1s, transform 1s';
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 1000);

    setTimeout(() => {
        heroButton.style.transition = 'opacity 1s';
        heroButton.style.opacity = '1';
    }, 1500);

    // Scroll animations
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Parallax content animations
    const parallaxContents = document.querySelectorAll('.parallax-content');

    const animateParallaxContent = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
            
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 1s, transform 1s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    };

    const parallaxObserver = new IntersectionObserver(animateParallaxContent, {
        root: null,
        threshold: 0.1
    });

    parallaxContents.forEach(content => {
        parallaxObserver.observe(content);
    });
});

