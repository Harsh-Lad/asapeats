document.addEventListener('DOMContentLoaded', () => {
    const menuCategories = [
        {
            title: "Traditional Indian",
            items: ["All Curries Veg/ Non veg", "All Entrée Veg/Non Veg", "All Breads", "All Sides"],
            image: "/placeholder.svg?height=400&width=600&text=Traditional+Indian",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Tandoori Naan Wraps",
            items: ["Tandoori Paneer Wrap", "Tandoori chicken wrap", "Seekh Kebab wrap", "Tandoori Mushroom Wrap", "Smashed Samosa Wrap"],
            image: "/placeholder.svg?height=400&width=600&text=Tandoori+Naan+Wraps",
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Fusion Italian",
            items: ["Butter Chicken Lasagna", "Lentil Bologanese Lasagna/ Pasta", "Vindaloo Puttanesca", "Fresh Gnocchi with fusion Sauces", "Stuffed Ravioli with Fusion Sauces"],
            image: "/placeholder.svg?height=400&width=600&text=Fusion+Italian",
            color: "from-green-500 to-blue-500"
        },
        {
            title: "Fusion Mexican",
            items: ["Mixed Fritter Taco", "Chicken Tikka Taco", "Pav Bhaji Quesadilla", "Kheema Bhuna Quesadilla", "Paneer Tikka Nachos", "Butter Chicken Nachos", "Tandoori Mushroom Burrito", "Seekh Kebab Burrito"],
            image: "/placeholder.svg?height=400&width=600&text=Fusion+Mexican",
            color: "from-yellow-500 to-red-500"
        },
        {
            title: "Fusion Asian",
            items: ["Triple Schezwan Rice/ Noodle (Chicken Optional)", "Chicken 65/ Paneer 65", "Manchurian / Gobi Manchurian", "Chilli Chicken / Chilli Paneer", "Chicken Tikka Bao/ Tofu Tikka bao", "Vada Bao/ Onion Bhaji bao", "Paneer Tikka Bao/ Seekh Kebab Bao", "Chicken 65 Bao/ Paneer 65 Bao", "Korean Fried Chicken with 3 Choices of Sauces"],
            image: "/placeholder.svg?height=400&width=600&text=Fusion+Asian",
            color: "from-red-500 to-yellow-500"
        },
        {
            title: "Chaat",
            items: ["Samosa chaat", "Sev Poori", "Pani Poori", "Bombay Sev Poori", "Aloo Tikki Chaat"],
            image: "/placeholder.svg?height=400&width=600&text=Chaat",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Dessert",
            items: ["ChaiMisu", "Tiramisu", "Gulab Jamun", "Gajar Halwa", "Moong Daal Halwa"],
            image: "/placeholder.svg?height=400&width=600&text=Dessert",
            color: "from-pink-500 to-purple-500"
        }
    ];

    const cateringContainer = document.getElementById('catering-categories');

    function renderCategorySection(category) {
        const itemsList = category.items.map(item => `<li class="flex items-center"><span class="w-2 h-2 bg-accent rounded-full mr-2"></span>${item}</li>`).join('');

        return `
            <div class="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div class="relative h-64">
                    <img src="${category.image}" alt="${category.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-r ${category.color} opacity-60"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="text-4xl font-bold text-white text-center">${category.title}</h3>
                    </div>
                </div>
                <div class="p-6 gradient-bg text-white">
                    <ul class="space-y-2">
                        ${itemsList}
                    </ul>
                </div>
            </div>
        `;
    }

    menuCategories.forEach(category => {
        cateringContainer.innerHTML += renderCategorySection(category);
    });
});

