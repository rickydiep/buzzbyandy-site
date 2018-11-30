$(document).ready(function(){  
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

    
    $('.nav-link').on('click', function(){
        $('#navbarNav').removeClass('show');
    });

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });


});