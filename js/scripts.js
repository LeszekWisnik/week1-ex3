(function($) {
    
    $(document).ready(function() {

        var state = 'hide';
        var menu = $('.menu');        
        var menuWidth = menu.outerWidth();

        function hideMenu() {
            menu.css('right', '-' + menuWidth + 'px');
        }
    
        hideMenu();

        function animate(state) {
            if(state == 'hide') {
                slide = '10' + 'px';
                menu.animate({
                    right: slide
                    }, 500, function() {
               
                });
            } else {
                slide = '-' + menuWidth + 'px';
                menu.animate({
                    right: slide
                    }, 500, function() {
               
                });
            }

        }

        
        function toggleMenu() {
            if(state == 'hide') {
                animate(state);
                state = 'show';
                           
            } else {
                animate(state);
                state = 'hide';
            }
        }




        $('.hamburger').on('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });




//        var button = $("<button></button>", {
//            "text":"Wyślij",
//            "class":"button"
//        });
      
      



    });

})(jQuery);