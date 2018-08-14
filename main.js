$(document).ready(function(){
    // var response = [];
    
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json', 
        
        success : function(response) {
                for(var i=0; i< response.products.length; i++){
                  
                    // $('.flex-container').append("<div id='image'>" + "<img src="+ response.products[i].images[0].src +"/></div>");                  
                    // $('.flex-container').append("<div id='product'>" + response.products[i].title + "</div>");
                    // $('.flex-container').append("<button type= 'button'>"+ "Add to Cart"+"</button>");

                    $(".flex-container").append(
                        "<div class='details'>" +
                        "<div class ='image'><img src=' " + response.products[i].images[0].src + "'></div>" +
                        "<div class='product'>" + response.products[i].title+ "</div>" +    
                        "<div class='price'>$"+response.products[i].variants[0].price+"</div>"+
                        "<button type= 'button' class='button'>"+ "Add to Cart"+"</button>"+
                        "</div>"
                        )    
                }
                
        }
    })
})
