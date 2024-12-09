document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: 'Aussie Butter Chicken', description: 'Tender chicken in a creamy tomato sauce with a touch of native lemon myrtle', price: '$22.99', image: '/aussie-butter-chicken.jpg' },
        { name: 'Kangaroo Biryani', description: 'Fragrant rice dish with lean kangaroo meat and bush spices', price: '$24.99', image: '/kangaroo-biryani.jpg' },
        { name: 'Barramundi Curry', description: 'Australian barramundi in a coconut curry with finger lime', price: '$26.99', image: '/barramundi-curry.jpg' },
        { name: 'Wattleseed Naan', description: 'Traditional naan bread infused with nutty wattleseed', price: '$5.99', image: '/wattleseed-naan.jpg' },
        { name: 'Emu Tikka Masala', description: 'Grilled emu in a rich, spiced tomato cream sauce', price: '$28.99', image: '/emu-tikka-masala.jpg' },
        { name: 'Macadamia Samosas', description: 'Crispy pastries filled with spiced vegetables and macadamia nuts', price: '$10.99', image: '/macadamia-samosas.jpg' },
    ];

    const menuContainer = document.getElementById('menu-items');

    function renderMenuItem(item) {
        return `
            <div class="menu-card">
                <div class="menu-card-inner">
                    <div class="menu-card-front">
                        <img src="${item.image}" alt="${item.name}" class="menu-image">
                        <h3 class="menu-title text-primary mt-4">${item.name}</h3>
                        <p class="menu-price text-accent">${item.price}</p>
                    </div>
                    <div class="menu-card-back">
                        <h3 class="menu-title text-white mb-4">${item.name}</h3>
                        <p class="menu-description text-white">${item.description}</p>
                        <p class="menu-price text-accent mt-4">${item.price}</p>
                    </div>
                </div>
            </div>
        `;
    }

    menuItems.forEach(item => {
        menuContainer.innerHTML += renderMenuItem(item);
    });
});

