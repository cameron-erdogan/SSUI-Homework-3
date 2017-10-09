window.onload = function() {
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.onclick = function() {
            var itemNum = this.dataset.itemNum;
            window.location.assign(`product_detail.html?id=${itemNum}`)
        }
    }

    document.getElementById("shopping-cart").onclick = function() {
        window.location.assign(`cart.html`)
    }
}