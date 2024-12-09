document.addEventListener('DOMContentLoaded', () => {
    const mealPackages = [
        {
            name: "Feed Me ASAP",
            price: "$16",
            persons: "(1 pp)",
            includes: [
                "Two small Curries",
                "4 Rotis/ 2 Rotis & ",
                "Small Rice/ large Rice",
            ],
            bgImage: "https://silkroadrecipes.com/wp-content/uploads/2022/03/Indian-Chicken-Curry-5.jpg"
        },
        {
            name: "Treat us ASAP",
            price: "$35",
            persons: "(2 pp)",
            includes: [
                "Three small Curries",
                "8 Rotis/ 6 Roti & large Rice",
                "2 fresh juices",
            ],
            bgImage: "https://outoftheordinaryfood.com/wp-content/uploads/2012/03/3-curries.jpg"
        },
        {
            name: "Spoil us ASAP",
            price: "$70",
            persons: "(4 pp)",
            includes: [
                "Four large Curries",
                "12 Rotis + 8 Rotis & 2 large Rice",
                "2 fresh Juices"
            ],
            bgImage: "https://jheel.com.au/wp-content/uploads/2024/10/jheel-indian-restaurant.png"
        }
    ];

    const weeklyMenu = {
        Monday: {
            main: [
                { name: "Paneer Tikka Masala", image: "https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-4.jpg" },
                { name: "Dal makhni", image: "https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.jpg?s=612x612&w=0&k=20&c=49yLaUAE2apakVk2AAiRQimZd98WtSjIQ0hzCzWsmns=" }
            ],
            sides: [
                { name: "Aloo Ghobi", image: "https://www.vegkitchen.com/wp-content/uploads/2017/09/aloo-gobi-1-of-3.jpg" },
                { name: "Egg Curry", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/egg-curry-recipe.jpg" }
            ]
        },
        Tuesday: {
            main: [
                { name: "Palak Paneer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e8drcWUkY2f_cH6ZUHje22SVYZGGw1pqcw&s" },
                { name: "Dal Tadka", image: "https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured.jpg" }
            ],
            sides: [
                { name: "Mix Veg", image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg" },
                { name: "Sev Bhaji", image: "https://parcelkaro.in/wp-content/uploads/2023/11/Sev-Bhaji.jpg" }
            ]
        },
        Wednesday: {
            main: [
                { name: "Butter Paneer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2S5_Gi10ivUEWNYc6IADmWIud08vlhvhfQ&s" },
                { name: "Chana Dal", image: "https://theflavoursofkitchen.com/wp-content/uploads/2021/08/Chana-dal-4-scaled.jpg" }
            ],
            sides: [
                { name: "Navratan korma", image: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/03/navratan-korma-recipe-1.jpg" },
                { name: "Vegan Lamb Rogan Josh", image: "https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/05/7895-Vegan-rogan-josh.jpg?v=1-0" }
            ]
        },
        Thursday: {
            main: [
                { name: "Vegan Chicken Vindaloo", image: "https://holycowvegan.net/wp-content/uploads/2021/04/vegan-vegetable-vindaloo-5.jpg" },
                { name: "Moong Dal", image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/07/green-moong-dal-recipe-1-500x375.jpg" }
            ],
            sides: [
                { name: "Egg Curry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bN45gG4cWFoUDqhsEgWfnXzLymv5fbOqhg&s" },
                { name: "Chole Masala", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg" }
            ]
        },
        Friday: {
            main: [
                { name: "Butter Soya Chaap", image: "https://i0.wp.com/upbeetanisha.com/wp-content/uploads/2024/01/IMG_9751.jpg?w=1200&ssl=1" },
                { name: "Kadi Pakoda", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fgR4NKkYoLMeB3tYk6mVcmrGqiGxp3vqLQ&s" }
            ],
            sides: [
                { name: "Paneer Korma", image: "https://www.whiskaffair.com/wp-content/uploads/2020/10/Shahi-Paneer-Korma-2-3.jpg" },
                { name: "Vegan Chicken Madras", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOv_AJkIsapO9plm4cjyzQS1NZCHfnTQ5Tg&s" }
            ]
        },
        Saturday: {
            main: [
                { name: "Rajma Masala", image: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg" },
                { name: "Masoor Dal", image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Recipe_For_Beginners_One_Pot_Tadkewali_Masoor_Dal_Recipe-1.jpg" }
            ],
            sides: [
                { name: "Mattar Paneer", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg" },
                { name: "Vegan Butter Chicken", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5iVjeU8LRU5yAwkCZxu_4wx4WD46zh1vLQ&s" }
            ]
        }
    };

    function renderMealPackages() {
        const container = document.getElementById('meal-packages');
        container.innerHTML = mealPackages.map(pkg => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-duration-300 relative">
                <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('${pkg.bgImage}');"></div>
                <div class="relative z-10 bg-opacity-0 bg-[#C8A23F] p-6 text-white">
                    <h3 class="text-2xl font-bold mb-2 opacity-0">${pkg.name} ${pkg.persons}</h3>
                    <p class="text-3xl font-bold opacity-0">${pkg.price}</p>
                </div>
                <div class="relative z-10 p-6 bg-white bg-opacity-90">
                 <div class="relative z-10 bg-opacity-80 bg-[#C8A23F] p-6 text-orange-500	">
                    <h3 class="text-2xl font-bold mb-2 text-orange-500	">${pkg.name} ${pkg.persons}</h3>
                    <p class="text-3xl font-bold text-orange-500	">${pkg.price}</p>
                </div>
                    <ul class="space-y-3">
                        ${pkg.includes.map(item => `
                            <li class="flex items-start">
                                <span class="w-2 h-2 bg-[#C8A23F] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>

                </div>
            </div>
        `).join('');
    }

    function renderWeeklyMenu() {
        const container = document.getElementById('weekly-menu');
        container.innerHTML = Object.entries(weeklyMenu).map(([day, meals]) => `
            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-2xl font-bold text-[#FF6B35] mb-4">${day}</h3>
                <div class="space-y-4">
                    <div class="space-y-4">
                        ${meals.main.map(item => `
                            <div class="flex items-center space-x-4">
                                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-full object-cover">
                                <p class="text-lg text-[#1B4B43]">${item.name}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="space-y-4 text-gray-600">
                        ${meals.sides.map(item => `
                            <div class="flex items-center space-x-4">
                                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-full object-cover">
                                <p class="text-lg">${item.name}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderMealPackages();
    renderWeeklyMenu();
});

