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
            $("#mynav").css('background-color', 'red');
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
        userId:"1531587193",
        limit: 12,
        sortBy: "most-recent",
        resolution: "standard_resolution",
        accessToken: "1531587193.1677ed0.a24077c78de34f6a9fcd7538c6fb6c98",
        template: '<li class="image-box col-lg-3 col-md-4 col-6 py-3"><a href="{{link}}" target="_blank"><div class="instafeed-image-square with-background" style="background-image:url({{image}}); filter:greyscale(100); width="100%"></div></a></li>'
    });
    feed.run();

    
});

