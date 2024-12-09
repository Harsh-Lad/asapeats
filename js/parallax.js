document.addEventListener('DOMContentLoaded', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');

    function handleParallax() {
        parallaxSections.forEach(section => {
            const distance = window.pageYOffset - section.offsetTop;
            const speed = 0.5;
            section.style.backgroundPositionY = `${distance * speed}px`;
        });
    }

    window.addEventListener('scroll', handleParallax);
});

