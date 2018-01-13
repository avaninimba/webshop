var itemsData;
var shoppingCart = [];
var isItemsViewVisible = false;

/* Fetch data from the json file into a javascript object */
fetch("./assets/produkter.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    itemsData = data;
    createUIFromLoadedItemsData();
});

/* Use the data to create a list of these object on your website */
function createUIFromLoadedItemsData() {
    if (isItemsViewVisible) { return; }
    isItemsViewVisible = true;
    
    /* Create a list of the products */
    var list = document.createElement("ul");
    for(var index = 0; index < itemsData.length; index++) {
        list.appendChild(createListItem(itemsData[index], index));
    }

    /* Add the list to the DOM */
    var container = document.querySelector("#main");
    if (container.firstChild) {
        container.replaceChild(list, container.firstChild);
    } else {
        container.appendChild(list);
    }
}

function createListItem(itemData, index) {
    /* Title */
    var prodName = document.createElement("h3");
    prodName.innerText = itemData.prodName;
    
    /* prodDesc */
    var prodDesc = document.createElement("p");
    prodDesc.innerText = itemData.prodDesc;
    
    /* Image */
    var image = document.createElement("img");
    image.src = "./assets/" + itemData.image;

    /* Price */
    var prodPrice = document.createElement("span");
    prodPrice.innerText = "" + itemData.prodPrice + " kr";
    
    /* Button */
    var button = document.createElement("button");
    button.innerHTML = '<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>' + "&nbsp;&nbsp;&nbsp;" + "Lägg till i kundvagnen";
    button.onclick = function() {
        shoppingCart.push(itemData);
        counter = document.querySelector("#counter");
        counter.innerText = shoppingCart.length;
    };

    var item = document.createElement("li");
    item.appendChild(prodName);
    item.appendChild(prodDesc);
    item.appendChild(image);
    item.appendChild(prodPrice);
    item.appendChild(button);

    return item;
}