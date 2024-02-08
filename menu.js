const products = [
    {product_code:1, product_name:"Cookies & Cream", product_image:"cookies-and-cream.png", product_prices:["P49.00", "P59.00"]}, 
    {product_code:2, product_name:"Chocolate", product_image:"chocolate.png", product_prices:["P49.00", "P59.00"]},
    {product_code:3, product_name:"Dark Chocolate", product_image:"dark-chocolate.png", product_prices:["P49.00", "P59.00"]},
    {product_code:4, product_name:"Okinawa", product_image:"okinawa.png", product_prices:["P49.00", "P59.00"]},
    {product_code:5, product_name:"Taro", product_image:"taro.png", product_prices:["P49.00", "P59.00"]},
    {product_code:6, product_name:"Wintermelon", product_image:"wintermelon.png", product_prices:["P49.00", "P59.00"]},
    {product_code:7, product_name:"Caramel Sugar", product_image:"caramel-sugar.png", product_prices:["P49.00", "P59.00"]},
    {product_code:8, product_name:"Cheesecake", product_image:"cheesecake.png", product_prices:["P59.00", "P69.00"]},
    {product_code:9, product_name:"Red Velvet", product_image:"red-velvet.png", product_prices:["P59.00", "P69.00"]},
    {product_code:10, product_name:"Matcha", product_image:"matcha.png", product_prices:["P59.00", "P69.00"]},
    {product_code:11, product_name:"Strawberry", product_image:"strawberry.png", product_prices:["P59.00", "P69.00"]},
    {product_code:12, product_name:"Cheesy Mango", product_image:"cheesy-mango.png", product_prices:["P59.00", "P69.00"]},
    {product_code:13, product_name:"Spanish Latte", product_image:"spanish-latte.png", product_prices:["P75.00"]},
    {product_code:14, product_name:"Caramel Macchiato", product_image:"caramel-macchiato.png", product_prices:["P75.00"]},
    {product_code:15, product_name:"Caffe Mocha", product_image:"caffe-mocha.png", product_prices:["P75.00"]},
    {product_code:16, product_name:"Hazelnut", product_image:"hazelnut.png", product_prices:["P75.00"]},
    {product_code:17, product_name:"Salted Caramel", product_image:"salted-caramel.png", product_prices:["P75.00"]},
    {product_code:18, product_name:"Special Carbonara", product_image:"special-carbonara.png", product_prices:["P99.00"]},
    {product_code:19, product_name:"Nachos", product_image:"nachos.png", product_prices:["P65.00"]},
    {product_code:20, product_name:"Fries", product_image:"fries.png", product_prices:["P55.00"]}
];
const regular = [1, 2, 3, 4, 5, 6, 7];
const premium = [8, 9, 10, 11, 12];
const coffee = [13, 14, 15, 16, 17];
const food = [18, 19, 20];

function default_menu() {
    var container = document.getElementById('card-container');
    var radios = document.getElementsByName('products');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (var i = 0; i < products.length; i++) {
        var new_img = document.createElement("img");
        var new_h4 = document.createElement("h4");
        var new_div = document.createElement("div");
        new_div.setAttribute("onclick", "show_details("+products[i].product_code+")");
        new_div.className = "card"
        new_img.src = products[i].product_image;
        new_h4.textContent = products[i].product_name;
        new_div.appendChild(new_img);
        new_div.appendChild(new_h4);
        container.appendChild(new_div);
    }   
}

default_menu();

function show_details(product_code) {
    var medium_price = document.getElementById('medium-price');
    var large_price = document.getElementById('large-price');
    var food_price = document.getElementById('food-price');
    var product_details = document.getElementById('product-details');
    
    medium_price.textContent = "Medium: ";
    large_price.textContent = "Large: ";
    food_price.textContent = "Food: ";

    var drink;
    for (var i = 0; i < products.length; i++) {
        if (products[i].product_code == product_code) {
            drink = products[i];
        }
    }
    
    medium_price.textContent = "Medium: " + (drink.product_prices[0] ? drink.product_prices[0] : 'N/A');
    if (drink.product_prices.length > 1 && drink.product_code != 13) {
        large_price.textContent = "Large: " + (drink.product_prices[1] ? drink.product_prices[1] : 'N/A');
        large_price.style.display = "block";
    } else {
        large_price.style.display = "none";
    }

    var foodTabSelected = document.getElementById('food-radio').checked;
    var anyCategorySelected = document.querySelector('input[name="products"]:checked');
    if (foodTabSelected && anyCategorySelected) {
        medium_price.style.display = "none";
        food_price.textContent = "Food: " + (drink.product_prices[0] ? drink.product_prices[0] : 'N/A');
        food_price.style.display = "block";
        product_details.style.display = "block";
    } else {
        medium_price.style.display = "block";
        food_price.style.display = "none";
        product_details.style.display = "block";
    }
}


function fil(category) {
    var container = document.getElementById('card-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    var list_category;
    if (category == "r") {
        list_category = regular;
    } else if (category == "p") {
        list_category = premium;
    } else if (category == "c") {
        list_category = coffee;
    } else if (category == "f") {
        list_category = food;
    }
    for (var i = 0; i < products.length; i++) {
        if (list_category.includes(products[i].product_code)){
            var new_img = document.createElement("img");
            var new_h4 = document.createElement("h4");
            var new_div = document.createElement("div");
            new_div.setAttribute("onclick", "show_details("+products[i].product_code+")");
            new_div.className = "card"
            new_img.src = products[i].product_image;
            new_h4.textContent = products[i].product_name;
            new_div.appendChild(new_img);
            new_div.appendChild(new_h4);
            container.appendChild(new_div);
        }
    }

}

function search(s) {
    var container = document.getElementById('card-container');
    var radios = document.getElementsByName('products');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (var i = 0; i < products.length; i++) {
        if (products[i].product_name.toLowerCase().includes(s.toLowerCase())){
            var new_img = document.createElement("img");
            var new_h4 = document.createElement("h4");
            var new_div = document.createElement("div");
            new_div.setAttribute("onclick", "show_details("+products[i].product_code+")");
            new_div.className = "card"
            new_img.src = products[i].product_image;
            new_h4.textContent = products[i].product_name;
            new_div.appendChild(new_img);
            new_div.appendChild(new_h4);
            container.appendChild(new_div);
        }
    }
}

window.addEventListener('resize', default_menu);