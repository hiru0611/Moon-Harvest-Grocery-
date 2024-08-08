document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        menu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.style.display = 'none';
    });
});


//order 1 --------------------------------------------------------------------------

function showDetails(branch) {
    var branchInfoDiv = document.getElementById("branch-info");
    var branchImagesDisplayDiv = document.getElementById("branch-images-display");
    var mapDiv = document.getElementById("map");

    var details = {
        Kandy: {
            info: "Kandy is a major city in Sri Lanka, located in the Central Province. It was the last capital of the ancient kings' era of Sri Lanka.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63326.75469507238!2d80.61048419135252!3d7.290571600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37bbf23f9ff57%3A0x2f25eeb658dbfba7!2sKandy%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1626096083641!5m2!1sen!2sus"
        },
        Colombo: {
            info: "Colombo is the commercial capital and largest city of Sri Lanka by population. It is the financial centre of the island and a popular tourist destination.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.262491249893!2d79.85587869299862!3d6.927078598791233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259258c4f6f4f%3A0x8f2b4ff5a8b6cb5f!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1626096127350!5m2!1sen!2sus"
        },
        Galle: {
            info: "Galle is a city situated on the southwestern tip of Sri Lanka. It is known for the Galle Fort, a UNESCO World Heritage Site.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126770.08968185577!2d80.20168577522822!3d6.05351870404047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173c2b2d69d4b%3A0xf1590e25ab1edb2d!2sGalle%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1626096159920!5m2!1sen!2sus"
        }
    };

    branchInfoDiv.innerHTML = `<p>${details[branch].info}</p>`;

    // Get the images for the selected branch
    var branchImages = document.getElementById(branch.toLowerCase() + "-images").innerHTML;
    branchImagesDisplayDiv.innerHTML = branchImages;

    mapDiv.innerHTML = `<iframe src="${details[branch].mapUrl}" allowfullscreen="" loading="lazy"></iframe>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const prices = {
        apple: 3,
        banana: 1.5,
        orange: 2,
        strawberry: 3.5,
        grapes: 2.5,
        pineapple: 4,
        watermelon: 3,
        kiwi: 5,
        mango: 6,
        onion: 1,
        brocolli: 3.5,
        tomato: 2.5,
        carrot: 2,
        cucumber: 1.8,
        cauliflower: 2.2,
        potato: 1.5,
        beet: 2.8,
        cabbage: 1.6,
        milk: 1.2,
        yoghurt: 1.5,
        cheese: 5,
        butter: 2.5,
        sourcream: 1.8,
        egg: 0.5,
        curd: 1.2,
        icecream: 3,
        cottagecheese: 4,
        beef: 8,
        chicken: 6,
        pork: 7,
        lamb: 9,
        salmon: 10,
        tuna: 8,
        shrimp: 12,
        lobster: 15,
        crab: 14,
        flour: 0.5,
        sugar: 0.7,
        butter: 1.2,
        eggs: 2.0,
        baking_powder: 1.0,
        vanilla_extract: 3.0,
        salt: 0.3,
        milk: 1.5,
        baking_soda: 0.8
    };

    const units = {
        apple: 'kg',
        banana: 'kg',
        orange: 'kg',
        strawberry: 'kg',
        grapes: 'kg',
        pineapple: 'kg',
        watermelon: 'kg',
        kiwi: 'kg',
        mango: 'kg',
        onion: 'kg',
        brocolli: 'kg',
        tomato: 'kg',
        carrot: 'kg',
        cucumber: 'kg',
        cauliflower: 'kg',
        potato: 'kg',
        beet: 'kg',
        cabbage: 'kg',
        milk: 'pieces',
        yoghurt: 'pieces',
        cheese: 'pieces',
        butter: 'pieces',
        sourcream: 'pieces',
        egg: 'pieces',
        curd: 'pieces',
        icecream: 'pieces',
        cottagecheese: 'pieces',
        beef: 'kg',
        chicken: 'kg',
        pork: 'kg',
        lamb: 'kg',
        salmon: 'kg',
        tuna: 'kg',
        shrimp: 'kg',
        lobster: 'kg',
        crab: 'kg',
        flour: 'pieces',
        sugar: 'pieces',
        butter: 'pieces',
        eggs: 'pieces',
        baking_powder: 'pieces',
        vanilla_extract: 'pieces',
        salt: 'pieces',
        milk: 'pieces',
        baking_soda: 'pieces'
    };

    const images = {
        apple: './images/apple.png',
        banana: './images/Banana.png',
        orange: './images/orange.webp',
        strawberry: './images/strawberry.png',
        grapes: './images/grape.webp',
        pineapple: './images/pineapple.png',
        watermelon: './images/watermelon.png',
        kiwi: './images/kiwi.png',
        mango: './images/mango.png',
        onion: './images/onion.png',
        brocolli: './images/broccoli.png',
        tomato: './images/tomato.png',
        carrot: './images/carrot.png',
        cucumber: './images/cucumber.png',
        cauliflower: './images/cauliflower.webp',
        potato: './images/potato.png',
        beet: './images/beet.png',
        cabbage: './images/cabbage.png',
        milk: './images/milk.webp',
        yoghurt: './images/yoghurt.png',
        cheese: './images/cheese.png',
        butter: './images/butter.png',
        sourcream: './images/sourcream.png',
        egg: './images/egg.png',
        curd: './images/curd.avif',
        icecream: './images/ice cream.avif',
        cottagecheese: './images/cottagecheese.webp',
        beef: './images/beef.png',
        chicken: './images/chicken.png',
        pork: './images/pork.png',
        lamb: './images/lamb.jpg',
        salmon: './images/salmon.png',
        tuna: './images/tuna.png',
        shrimp: './images/shrimp.png',
        lobster: './images/lobster.png',
        crab: './images/crab.png',
        flour: './images/flour.png',
        sugar: './images/sugar.png',
        butter: './images/butter.png',
        eggs: './images/egg.png',
        baking_powder: './images/baking_powder.png',
        vanilla_extract: './images/vanilla_extract.png',
        salt: './images/salt.png',
        milk: './images/milk.webp',
        baking_soda: './images/baking_soda.png'
    };

    const cart = [];

    const orderForm = document.getElementById('products');
    const cartTableBody = document.querySelector('#cartTable tbody');
    const totalPriceElement = document.getElementById('totalPrice');

    document.getElementById('addToCart').addEventListener('click', () => {
        const inputs = orderForm.querySelectorAll('input');
        cart.length = 0; // Clear the cart

        inputs.forEach(input => {
            const value = input.value;
            const id = input.id;
            if (value && value > 0) {
                const amount = parseFloat(value);
                const price = prices[id] * amount;
                const unit = units[id];
                const image = images[id];
                cart.push({ item: id, amount, price, unit, image });
            }
        });

        updateCartTable();
    });

    document.getElementById('addToFavourites').addEventListener('click', () => {
        localStorage.setItem('favouriteOrder', JSON.stringify(cart));
        alert('Order saved as favourite!');
    });

    document.getElementById('applyFavourites').addEventListener('click', () => {
        const favouriteOrder = JSON.parse(localStorage.getItem('favouriteOrder'));
        if (favouriteOrder) {
            favouriteOrder.forEach(({ item, amount }) => {
                orderForm.querySelector(`#${item}`).value = amount;
            });
            cart.length = 0;
            cart.push(...favouriteOrder);
            updateCartTable();
        } else {
            alert('No favourite order found!');
        }
    });

    document.getElementById('buyNow').addEventListener('click', () => {
        const inputs = orderForm.querySelectorAll('input');
        let hasErrors = false;

        inputs.forEach(input => {
            if (!input.value) {
                hasErrors = true;
            }
        });

        if (!hasErrors) {
            const deliveryDate = new Date();
            deliveryDate.setDate(deliveryDate.getDate() + 3);
            alert(`Thank you for your purchase! Your order will be delivered on ${deliveryDate.toDateString()}.`);
        } else {
            alert('Please fill out all fields before proceeding.');
        }
    });

    function updateCartTable() {
        cartTableBody.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(({ item, amount, price, unit, image }, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${image}" alt="${item}" class="cart-image"></td>
                <td>${item}</td>
                <td>${amount} ${unit}</td>
                <td>$${price.toFixed(2)}</td>
                <td><button class="remove-button" data-index="${index}">Remove</button></td>
            `;
            cartTableBody.appendChild(row);
            totalPrice += price;
        });
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

        document.querySelectorAll('.remove-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                updateCartTable();
            });
        });
    }
});


// JavaScript to handle the Buy Now button click
document.getElementById('buynow-button').addEventListener('click', function() {
    // Navigate to order.html
    window.location.href = 'order.html';
});


function processPayment() {
    const fullName = document.getElementById('full-name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;

    if (fullName && address && email && cardNumber) {
        // Show thank you message and delivery date
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 3); // Assuming 3 days for delivery
        document.getElementById('delivery-date').textContent = deliveryDate.toDateString();

        document.getElementById('checkout-form').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
}
