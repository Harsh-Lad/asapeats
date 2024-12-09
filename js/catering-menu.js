document.addEventListener('DOMContentLoaded', () => {
    const menuCategories = [
        {
            title: "Traditional Indian",
            items: ["All Curries Veg/ Non veg", "All Entrée Veg/Non Veg", "All Breads", "All Sides"],
            image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Tandoori Naan Wraps",
            items: ["Tandoori Paneer Wrap", "Tandoori chicken wrap", "Seekh Kebab wrap", "Tandoori Mushroom Wrap", "Smashed Samosa Wrap"],
            image: "https://realfood.tesco.com/media/images/1400x919-Chicken-naan-wraps-3dafbdb7-dcb7-46ee-9516-65516df4120a-0-1400x919.jpg",
            // color: "from-red-500 to-pink-500"
        },
        {
            title: "Fusion Italian",
            items: ["Butter Chicken Lasagna", "Lentil Bologanese Lasagna/ Pasta", "Vindaloo Puttanesca", "Fresh Gnocchi with fusion Sauces", "Stuffed Ravioli with Fusion Sauces"],
            image: "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2021/07/12195559/Spicy-Garlic-Butter-Linguini3.jpg",
            // color: "from-green-500 to-blue-500"
        },
        {
            title: "Fusion Mexican",
            items: ["Mixed Fritter Taco", "Chicken Tikka Taco", "Pav Bhaji Quesadilla", "Kheema Bhuna Quesadilla", "Paneer Tikka Nachos", "Butter Chicken Nachos", "Tandoori Mushroom Burrito", "Seekh Kebab Burrito"],
            image: "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/12/2018/04/29791314_2100635183506498_5584511521314045952_o.jpg",
            // color: "from-yellow-500 to-red-500"
        },
        {
            title: "Fusion Asian",
            items: ["Triple Schezwan Rice/ Noodle (Chicken Optional)", "Chicken 65/ Paneer 65", "Manchurian / Gobi Manchurian", "Chilli Chicken / Chilli Paneer", "Chicken Tikka Bao/ Tofu Tikka bao", "Vada Bao/ Onion Bhaji bao", "Paneer Tikka Bao/ Seekh Kebab Bao", "Chicken 65 Bao/ Paneer 65 Bao", "Korean Fried Chicken with 3 Choices of Sauces"],
            image: "https://tb-static.uber.com/prod/image-proc/processed_images/ed77949d651bd56c6f804a9285f7b0c0/61e8d264e9409914f90881b13f54d0ac.jpeg",
            // color: "from-red-500 to-yellow-500"
        },
        {
            title: "Chaat",
            items: ["Samosa chaat", "Sev Poori", "Pani Poori", "Bombay Sev Poori", "Aloo Tikki Chaat"],
            image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Delhi_Style_Matar_Chaat_Matra_Recipe_Spicy__Tangy_Dry_Green_Peas_Curry_Curry_Recipe.jpg",
            // color: "from-purple-500 to-pink-500"
        },
        {
            title: "Dessert",
            items: ["ChaiMisu", "Tiramisu", "Gulab Jamun", "Gajar Halwa", "Moong Daal Halwa"],
            image: "https://hips.hearstapps.com/hmg-prod/images/easy-no-bake-desserts-oreo-pie-645d1a6b9c9d7.jpg",
            // color: "from-pink-500 to-purple-500"
        }
    ];

    const cateringMenuContainer = document.getElementById('catering-menu');

    function renderCategorySection(category, index) {
        const itemsList = category.items.map(item => `
            <li class="mb-2 last:mb-0">
                <div class="flex items-center">
                    <span class="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                    <span class="text-sm md:text-base">${item}</span>
                </div>
            </li>
        `).join('');

        return `
            <div class="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div class="relative h-48 md:h-64">
                    <img src="${category.image}" alt="${category.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-r ${category.color} opacity-70"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="text-3xl md:text-4xl font-bold text-white text-center px-4 py-2 bg-black bg-opacity-50 rounded">${category.title}</h3>
                    </div>
                </div>
                <div class="p-6 ">
                    <ul class="space-y-2 text-gray-800">
                        ${itemsList}
                    </ul>
                </div>
            </div>
        `;
    }

    cateringMenuContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${menuCategories.map((category, index) => renderCategorySection(category, index)).join('')}
        </div>
    `;
});

