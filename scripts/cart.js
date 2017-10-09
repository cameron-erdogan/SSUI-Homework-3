//fake database right here
var database = [
    { "id": 0, "name": "Cat Harness", "price": 10, "imageURL": "./resources/images/cat_harness.jpg", "description": "Keep track of your cat using this harness." },
    { "id": 1, "name": "Dog Harness", "price": 12, "imageURL": "./resources/images/dog_harness.jpg", "description": "Keep track of your dog using this harness." },
    { "id": 2, "name": "Food and Water Storage Attachment", "price": 5, "imageURL": "./resources/images/food_harness.jpg", "description": "Holds extra food. For use with a dog or cat harness." },
    { "id": 3, "name": "GPS Tracker Collar", "price": 30, "imageURL": "./resources/images/gps_collar.jpg", "description": "Make sure your pet never gets lost!" }
];

var numItems = 2;
var subTotal = 22;

window.onload = function() {
    var removeButtons = document.getElementsByClassName("remove-item");
    for (var i = 0; i < removeButtons.length; i++) {
        var removeButton = removeButtons[i];
        removeButton.onclick = function() {
            var item = this.closest(".cart-item");
            removeItem(item);
        }
    }

    function removeItem(item) {
        var price = database[item.dataset.itemNum].price;
        subTotal = subTotal - price;
        document.getElementById("cart-subtotal").innerHTML = `Subtotal: $${subTotal}`;
        numItems = numItems - 1;
        document.getElementById("shopping-cart-items").innerHTML = numItems;

        item.parentNode.removeChild(item);
    }

}