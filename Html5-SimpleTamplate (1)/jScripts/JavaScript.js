function calculatePrice() {
    var prices = document.getElementsByClassName("price");
    var quantities = document.getElementsByClassName("quantity");
    var totalPrice = 0;
    var maxQuantity = 0;
    var productCount = 0;

    for (var i = 0; i < prices.length; i++) {
        var price = parseFloat(prices[i].value);
        var quantity = parseInt(quantities[i].value);

        if (!isNaN(price) && !isNaN(quantity)) {
            totalPrice += price * quantity;

            if (quantity > maxQuantity) {
                maxQuantity = quantity;
            }

            productCount++;
        }
    }

    var averagePrice = totalPrice / productCount;

    document.getElementById("totalPrice").innerHTML = "מחיר קניה הסופי: " + totalPrice;
    document.getElementById("maxQuantity").innerHTML = "כמות גדולה: " + maxQuantity;
    document.getElementById("averagePrice").innerHTML = "מחיר ממוצר למוצר: " + averagePrice;
}

function addProductFields() {
    var container = document.getElementById("productsContainer");
    var count = container.getElementsByClassName("productFields").length;

    if (count < 10) {
        var div = document.createElement("div");
        div.className = "productFields";

        var priceLabel = document.createElement("label");
        priceLabel.innerHTML = "מחיר: ";
        var priceInput = document.createElement("input");
        priceInput.type = "text";
        priceInput.className = "price";

        var quantityLabel = document.createElement("label");
        quantityLabel.innerHTML = "כמות: ";
        var quantityInput = document.createElement("input");
        quantityInput.type = "text";
        quantityInput.className = "quantity";

        div.appendChild(priceLabel);
        div.appendChild(priceInput);
        div.appendChild(quantityLabel);
        div.appendChild(quantityInput);

        container.appendChild(div);
    } else {
        alert("ניתן להזין עד 10 מוצרים בלבד");
    }
}