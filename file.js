$(document).ready(function(){  
    var feed = new Instafeed ({
        get:"user",
        userId:"1531587193",
        limit: 12,
        sortBy: "most-recent",
        resolution: "standard_resolution",
        accessToken: "1531587193.1677ed0.a24077c78de34f6a9fcd7538c6fb6c98",
        template: '<div class="image-box col-lg-3 py-3"><a href="{{link}}" target="_blank"><div class="instafeed-image-square with-background" style="background-image:url({{image}}); filter:grayscale(100%); width="100%"></div></a></div>'
});
    feed.run(); 

    $('.nav-link').on('click', function(){
        $('#navbarNav').removeClass('show');
    });
});