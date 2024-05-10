$(document).ready(function() {
   
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

       
    $("#image_list a").click(function(evt) {
        evt.preventDefault(); // cancel the default action of the link

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

       
        $("#caption").fadeOut(1000);
        $("#image").fadeOut(1000, function() {
          
            $("#image").attr("src", imageURL).fadeIn(1000);
            $("#caption").text(caption).fadeIn(1000);
        });
    }); 

    
    $("li:first-child a").focus();
}); 
