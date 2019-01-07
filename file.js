$(document).ready(function(){  

    $(this).scrollTop(0);    
    var scroll_start = 0;
    var startchange = $('#bio');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#mynav').css('opacity', '1');
            $("#mynav").css('background-color', 'white');
            } else if(scroll_start == 0){
                $('#mynav').css('opacity', '1');
                $('#mynav').css('background-color', 'transparent');
                
            }
            else{
                $('#mynav').css('opacity', '0');
            }
        });
    }
    //remove mobile nav after click
    $('#navContents a').on('click', function(){
        $('#navbarNavAltMarkup').removeClass('show');
    });



    var feed = new Instafeed ({
        get:"user",
        userId:"5633662768",
        limit: 4,
        sortBy: "most-recent",
        resolution: "standard_resolution",
        accessToken: "5633662768.1677ed0.29cb19df5c6e4acf97847e48a1456562",
        template: '<li class="image-box col-lg-3 col-md-4 col-6 py-3"><a href="{{link}}" target="_blank"><div class="instafeed-image-square with-background" style="background-image:url({{image}}); width="100%"></div></a></li>'
    });
    feed.run();

    
});

