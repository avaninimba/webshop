var itemsData;
var shoppingCart = [];
var isItemsViewVisible = false;

/* Fetch data from the json file into a javascript object */
fetch("assets/produkter.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    itemsData = data;
    createUIFromLoadedItemsData();
});

/* Use the data to create a list of these object on your website */
function createUIFromLoadedItemsData() {
    for(i = 0; i < itemsData.length; i++) {
        
        
                    var produktId = (itemsData[i].id);
                    var produktName = (itemsData[i].prodName);
                    var produktDesc = (itemsData[i].prodDesc);
                    var produktImage = "images/" + (itemsData[i].image);
                    var produktPrice = (itemsData[i].prodPrice);
                    //var produktHK = (itemsData[i].huvudKat);
                    //var produktUK = (itemsData[i].underKat);
                    var produktCard = "";
                    
                    
                    
        
                    var produktCard = '<div class="col-lg-3"><div class="card"><img class="card-img-top" src="' + produktImage + '"><div class="card-body"><h4 class="card-title">' + produktName + '</h4><div class="card-text"><p>' + produktPrice + '</p></div></div></div></div>';
                    $('.main').append(produktCard);
                    
                    
                    
        
                };
        
    
}