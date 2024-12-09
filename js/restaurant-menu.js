document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        {
            category: "WOK",
            items: [
                {
                    name: "Triple Schezwan",
                    description: "Sliced onion, cabbage, tofu & capsicum tossed in homemade schezwan sauce with rice or hokkein noodle (egg optional)",
                    price: "$13.90",
                    addon: "+ $2.00 Add vegan Chicken | Lamb",
                    image: "https://5.imimg.com/data5/UD/WE/VG/GLADMIN-6019273/selection-621-500x500.png"
                },
                {
                    name: "Chilli Garlic",
                    description: "Sliced onion, cabbage, tofu & capsicum tossed in homemade chilli garlic sauce with rice or hokkein noodles (egg optional)",
                    price: "$13.90",
                    addon: "+ $2.00 Add vegan Chicken | Lamb",
                    image: "https://images.slurrp.com/prod/recipe_images/whiskaffair/chilli-garlic-noodles-recipe-1617379924_Q3I0L354OJZ5Z4MVYA0T.webp?impolicy=slurrp-20210601&width=1200&height=675"
                },
                {
                    name: "Veg Manchurian",
                    description: "Mix veg balls tossed in an authentic Indian chinese gravy",
                    price: "$9.90",
                    image: "https://myfoodstory.com/wp-content/uploads/2021/10/Veg-Manchurian-FI-1.jpg"
                }
            ]
        },
        {
            category: "JAFFLE",
            items: [
                {
                    name: "Paneer Tikka Jaffle",
                    description: "Tandoori cottage cheese in a creamy tomato gravy, topped with cheese",
                    image: "https://i.ytimg.com/vi/4ZGCgtOcgBk/maxresdefault.jpg",
                    price: "$9.90"
                },
                {
                    name: "Mushroom Keema Jaffle",
                    description: "Mince mushroom cooked in authentic Indian spices, topped with cheese",
                    image: "https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2021/05/DSC_0163-1.jpeg?resize=1024%2C681&ssl=1",
                    price: "$9.90"
                },
                {
                    name: "Pizza Masala Jaffle",
                    description: "Home-made masala tomato sauce with veggies and cheese",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IO4bwuTQQS_aMXcSxy9_hX35avJUN5OpKw&s",
                    price: "$9.90"
                }
            ]
        },
        {
            category: "TACO",
            items: [
                {
                    name: "Cauliflower Fritter Taco",
                    description: "Cauliflower fritters in a soft taco shell with picanto mayo, iceburg lettuce & pineapple salsa",
                    image: "https://www.woolworths.co.nz/Content/Recipes/233183-AirFryerCauliflowerTacos-810x510.jpg",
                    price: "$4.90"

                },
                {
                    name: "Tandoori Paneer Taco",
                    description: "Tandoori paneer in a soft taco shell with picanto mayo, iceburg lettuce & pineapple salsa",
                    image: "https://i0.wp.com/infusedliving.net/wp-content/uploads/2021/06/Tacos3.png?fit=640%2C480&ssl=1",
                    price: "$4.90"

                }
            ]
        },
        {
            category: "CHAAT",
            items: [
                {
                    name: "Pav Bhaji Quesadillas",
                    description: "Traditional pav bhaji in a quesadilla with habanero mayo pickled onions & cheese",
                    price: "$9.90",
                    image: "https://profusioncurry.com/wp-content/uploads/2023/01/Pav-bhaji-quesadillas-close-up.jpg"
                },
                {
                    name: "Samosa",
                    description: "Golden-brown pastry shells filled with a mixture of spiced potatoes",
                    price: "1 pc $3.50 | 2 pc $5.90",
                    image: "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/AlooSamosa3.webp"
                },
                {
                    name: "Pakodas",
                    description: "Popular indian fritter made by coating and frying vegetables in a Indian spiced chickpea batter",
                    price: "Reg $6.90 | Lrg $9.90",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyCLYIv580emo6eO0NPZtdyI5PODkq_vZrQ&s"
                },
                {
                    name: "Avo Corn Bhel",
                    description: "Avocado corn bhel is a modern twist on the classic indian bhel puri",
                    price: "$9.90",
                    image: "https://static.toiimg.com/thumb/58713315.cms?width=1200&height=900"
                }
            ]
        },
        {
            category: "BAO",
            items: [
                {
                    name: "Vada Bao",
                    description: "Bao stuffed with fried potato balls, chefs special mint mayo chutney & pickled onions",
                    image: "https://i.ytimg.com/vi/jbfDnA3Vv8o/maxresdefault.jpg",
                    price: "$6.90"

                },
                {
                    name: "Tandoori Paneer Bao",
                    description: "Bao stuffed with tandoori paneer, mint mayo iceberg lettuce and pickled veggies",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ17wlZy120NO7MkM-Wapzm2ayzlEcySpAYA&s",
                    price: "$6.90"

                },
                {
                    name: "Spiced Tofu Bao",
                    description: "Bao stuffed with 5 spice tofu, mint mayo iceburg lettuce and pickled veggies",
                    image: "https://beesbites.com.au/wp-content/uploads/2020/12/Chilli-Garlic-Tofu-1.jpg",
                    price: "$6.90"

                }
            ]
        }
    ];

    const menuContainer = document.getElementById('menu-items');

    function renderMenuItem(item, categoryPrice) {
        return `
            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                <img class="object-cover w-full h-48" src="${item.image}" alt="${item.name}">
                <div class="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
                    <h3 class="text-2xl font-bold text-white mb-2">${item.name}</h3>
                    <p class="text-sm text-gray-300 mb-2">${item.description}</p>
                    <p class="text-lg font-bold text-primary">${item.price || categoryPrice}</p>
                    ${item.addon ? `<p class="text-sm text-primary mt-2">${item.addon}</p>` : ''}
                </div>
            </div>
        `;
    }

    function renderCategory(category) {
        let html = `
            <div class="col-span-full">
                <h2 class="text-3xl font-bold text-primary mb-6">${category.category}</h2>
                ${category.price ? `<p class="text-xl font-semibold mb-4">${category.price}</p>` : ''}
            </div>
        `;
        category.items.forEach(item => {
            html += `<div class="col-span-1">${renderMenuItem(item, category.price)}</div>`;
        });
        return html;
    }

    menuItems.forEach(category => {
        menuContainer.innerHTML += renderCategory(category);
    });
});

