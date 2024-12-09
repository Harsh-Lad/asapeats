document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const headerContent = `
        <div class="container mx-auto px-4 py-4 bg-white">
            <div class="flex justify-between items-center bg-white">
                <a href="/" class="text-2xl font-bold text-primary">
                 <img src="./media/logo.png" alt="ASAP EATS logo" class="h-16">
                </a>
                <nav class="hidden md:flex space-x-1">
                    <a href="/" class="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md">Home</a>
                    <a href="./restaurant-menu.html" class="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md">Restaurant Menu</a>
                    <a href="./catering-menu.html" class="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md">Catering Menu</a>
                    <a href="./meal-service.html" class="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md">Meal Service</a>
                </nav>
                <button id="mobile-menu-button" class="md:hidden">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden">
            <nav class="px-2 pt-2 pb-3 space-y-1">
                <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Home</a>
                <a href="./restaurant-menu.html" class="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Restaurant Menu</a>
                <a href="./catering-menu.html" class="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Catering Menu</a>
                <a href="./meal-service.html" class="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Meal Service</a>
            </nav>
        </div>
    `;

    header.innerHTML = headerContent;

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('bg-background/95', 'backdrop-blur', 'supports-[backdrop-filter]:bg-background/60');
        } else {
            header.classList.remove('bg-background/95', 'backdrop-blur', 'supports-[backdrop-filter]:bg-background/60');
        }
    });

    lucide.createIcons();
});

