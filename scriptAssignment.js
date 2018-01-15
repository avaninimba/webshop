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
            //var produktHK = (itemsData[i].huvudKat);
            //var produktUK = (itemsData[i].underKat);
            var produktCard = "";
                    
            var produktCard = '<div class="col-lg-3"><div class="card-deck"><div class="card text-center"><img class="card-img-top" src="' + produktImage + '"><div class="card-body"><h4 class="card-title">' + produktName + '</h4><div class="card-text"><p>' + produktPrice + ' kr</p><div class="btn btn-light"><a href="#" >SHOP NOW</a></div></div></div></div></div></div>';
            $('.main').append(produktCard);
        };
    }

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

            var printHuvudKat = '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false" onclick= "visaHKProdukter(' + [i] + ')">'+ huvudKat[i].category +'</a><ul class="dropdown-menu" id="hk'+ huvudKatId +'"></ul></li>';
            $('#huvudKat').append(printHuvudKat);

        };
    };


fetch("assets/underkategorier.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        underKat = data;
        
        printUnderKat();
    });

    function printUnderKat() {
        for(i = 0; i < underKat.length; i++) {

            var underKatId = (underKat[i].id);
            var underKatSub = (underKat[i].subcategory);
            var underKatHuvud = (underKat[i].huvudkategori);

            /*var underHuvudKat = '<li id="uk'+ underKatId +'" onclick="visaUKProdukter('+ underKatId +')"><a href="#">'+ underKatPack +'</a></li>';
            
            var underHuvudKat = '<li class="dropdown-item" id="uk'+ underKatId +'" onclick="visaUKProdukter('+ underKatId +')"><a href="#">'+ underKat[i].subcategory +'</a></li>';
            */
            var underHuvudKat = '<a class="dropdown-item" href="#" onclick="visaUKProdukter('+ underKatId +'id="uk'+ underKat[i].subcategory +'>'+ underKatSub +'</a>';
            
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

        visaHKProdukter = function(val){
            
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
            
                        
                        // Skriv en IF sats som kollar att det bara skrivs ut rätt produkter
                        if ( produktHK == value) {
                        
                        //$('.allProducts').html(" ");
                        
                        $('.main').append(produktCard);
                        }
                        
                    };
                };
                
                visaUKProdukter = function(val){
                    
                            $(".main").empty();
                    
                            var value = val;
                            
                    
                            for(i = 0; i < produkter.length; i++) {
                    
                                var produktId = (itemsData[i].id);
                                var produktName = (itemsData[i].prodName);
                                var produktDesc = (itemsData[i].prodDesc);
                                var produktImage = "images/" + (itemsData[i].image);
                                var produktPrice = (itemsData[i].prodPrice);
                                var produktHK = (itemsData[i].huvudKat);
                                var produktUK = (itemsData[i].underKat);
                                var produktCard = "";
                    
                                var produktCard = '<div class="col-lg-3"><div class="card-deck"><div class="card text-center"><img class="card-img-top" src="' + produktImage + '"><div class="card-body"><h4 class="card-title">' + produktName + '</h4><div class="card-text"><p>' + produktPrice + ' kr</p><div class="btn btn-light"><a href="#" >SHOP NOW</a></div></div></div></div></div></div>';
                    
                                
                                // Skriv en IF sats som kollar att det bara skrivs ut rätt produkter
                                if ( produktUK == value) {
                                
                                //$('.allProducts').html(" ");
                                $('.main').append(produktCard);
                                }
                                
                            };
                        };

    
    };