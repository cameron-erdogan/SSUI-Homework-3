//fake database right here
var database = [
    { "id": 0, "name": "Cat Harness", "price": 10, "imageURL": "./resources/images/cat_harness.jpg", "description": "Keep track of your cat using this harness." },
    { "id": 1, "name": "Dog Harness", "price": 12, "imageURL": "./resources/images/dog_harness.jpg", "description": "Keep track of your dog using this harness." },
    { "id": 2, "name": "Food and Water Storage Attachment", "price": 5, "imageURL": "./resources/images/food_harness.jpg", "description": "Holds extra food. For use with a dog or cat harness." },
    { "id": 3, "name": "GPS Tracker Collar", "price": 30, "imageURL": "./resources/images/gps_collar.jpg", "description": "Make sure your pet never gets lost!" }
];

var numCartItems = 0;

window.onload = function() {

    var pos = location.href.indexOf("?");
    if (pos == -1) {
        //means no url params, should show a 404 error ideally
    } else {
        query = location.href.substr(pos + 1);
        //query should be id=2
        var itemID = query.split("=")[1];

        //find item in our "database" with the id in our url
        item = database[itemID];

        document.getElementById("detail-title").innerHTML = item.name;
        document.getElementById("detail-price").innerHTML = "Price: $" + item.price;
        document.getElementById("detail-caption").innerHTML = item.description;
        document.getElementById("detail-image").src = item.imageURL;
    }

    document.getElementById("add-to-cart-button").onclick = function() {
        addToCart(this);
    }

    document.getElementById("shopping-cart").onclick = function() {
        window.location.assign(`cart.html`)
    }
}

function addToCart(item) {
    numCartItems++;
    document.getElementById("shopping-cart-items").innerHTML = numCartItems;
}