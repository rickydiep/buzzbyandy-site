$(document).ready(function(){  
    var feed = new Instafeed ({
        get:"user",
        userId:"1531587193",
        limit: 12,
        sortBy: "most-recent",
        resolution: "standard_resolution",
        accessToken: "1531587193.1677ed0.a24077c78de34f6a9fcd7538c6fb6c98",
        template: '<div class="gallery col-lg-4"><a href="{{link}}" target="_blank"><img class="img-fluid" src="{{image}}" /></a></div>'
});
    feed.run(); 

    $('.nav-link').on('click', function(){
        $('#navbarNav').removeClass('show');
    });
});