var itemsData;
var shoppingCart = [];
/*var isItemsViewVisible = false;*/

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
function createUIFromLoadedItemsData() 
    {
    for(i = 0; i < itemsData.length; i++) 
        {
            var produktId = (itemsData[i].id);
            var produktName = (itemsData[i].prodName);
            var produktDesc = (itemsData[i].prodDesc);
            var produktImage = "images/" + (itemsData[i].image);
            var produktPrice = (itemsData[i].prodPrice);
            var produktCard = "";
                    
            var produktCard = '<div class="col-lg-3"><div class="card-deck"><div class="card text-center"><img class="card-img-top" src="' + produktImage + '"><div class="card-body"><h4 class="card-title">' + produktName + '</h4><div class="card-text"><p>' + produktPrice + ' kr</p><div class="btn btn-light"><a href="#" onclick="buttononclick()">SHOP NOW</a></div></div></div></div></div></div>';
            $('.main').append(produktCard);
        };
    }

/* fetched huvud kategorier */
fetch("assets/huvudkategorier.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        huvudKat = data;
        printHuvudKat();
    });

function printHuvudKat() {
        for(i = 0; i < huvudKat.length; i++) {

            var huvudKatId = (huvudKat[i].id);
            var huvudKatCat = (huvudKat[i].category);
            var printHuvudKat = "";

            var printHuvudKat = '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false" onclick= "showHKProdukter(' + [i] + ')">'+ huvudKat[i].category +'</a><ul class="dropdown-menu" id="hk'+ huvudKatId +'"></ul></li>';
            $('#huvudKat').append(printHuvudKat);

        };
    };

/* fetched under kategorier */
fetch("assets/underkategorier.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        underKat = data;
        
        printUnderKat();
    });

/* prints under kategorier */
function printUnderKat() {
    for(i = 0; i < underKat.length; i++) {

        var underKatId = (underKat[i].id);
        var underKatSub = (underKat[i].subcategory);
        var underKatHuvud = (underKat[i].huvudkategori);
        var underHuvudKat = '<a class="dropdown-item" href="#" onclick="showUKProdukter(' + [i] + ')">'+ underKat[i].subcategory +'</a>';
            
        if (underKatHuvud == 1) {
            $('#hk1').append(underHuvudKat);
            
        } else if (underKatHuvud == 2) {
            $('#hk2').append(underHuvudKat);
            
        } else if (underKatHuvud == 3) {
            $('#hk3').append(underHuvudKat);

        } else {
            $('#hk4').append(underHuvudKat);
            }

    };

/* prints huvud kategorier */    
showHKProdukter = function(val){
            
    $(".main").empty();
            
    var value = val + 1;
                            
    for(i = 0; i < itemsData.length; i++) {
            
        var produktId = (itemsData[i].id);
        var produktName = (itemsData[i].prodName);
        var produktDesc = (itemsData[i].prodDesc);
        var produktImage = "images/" + (itemsData[i].image);
        var produktPrice = (itemsData[i].prodPrice);
        var produktHK = (itemsData[i].huvudKat);
        var produktUK = (itemsData[i].underKat);
        var produktCard = "";
            
        var produktCard = '<div class="col-lg-3"><div class="card-deck"><div class="card text-center"><img class="card-img-top" src="' + produktImage + '"><div class="card-body"><h4 class="card-title">' + produktName + '</h4><div class="card-text"><p>' + produktPrice + ' kr</p><div class="btn btn-light"><a href="#" >SHOP NOW</a></div></div></div></div></div></div>';
            
                        
        // check value
        if ( produktHK == value) {
            $('.main').append(produktCard);
                }
                        
        };
    };
                
showUKProdukter = function(val){
    $(".main").empty();
    var value = val + 1;
                            
    for(i = 0; i < itemsData.length; i++) {
        var produktId = (itemsData[i].id);
        var produktName = (itemsData[i].prodName);
        var produktDesc = (itemsData[i].prodDesc);
        var produktImage = "images/" + (itemsData[i].image);
        var produktPrice = (itemsData[i].prodPrice);
        var produktHK = (itemsData[i].huvudKat);
        var produktUK = (itemsData[i].underKat);
        var produktCard = "";
                    
         var produktCard = '<div class="col-lg-3"><div class="card-deck"><div class="card text-center"><img class="card-img-top" src="' + produktImage + '"><div class="card-body"><h4 class="card-title">' + produktName + '</h4><div class="card-text"><p>' + produktPrice + ' kr</p><div class="btn btn-light"><a href="#" >SHOP NOW</a></div></div></div></div></div></div>';
                    
                                
        // check product undercatgory
        if ( produktUK == value) {
            
                $('.main').append(produktCard);
        }
                                
    };

function buttononclick() {
shoppingCart.push(itemData);
counter = document.querySelector("#counter");
counter.innerText = shoppingCart.length;
    };
};

    
};