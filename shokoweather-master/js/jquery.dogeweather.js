//  wow
(function($) {
    //  such plugin
    $.doge = function(tings) {
        //  very jquery
        var doge = $('body').css('font-family', 'font-family: 'Oswald', sans-serif;');

        var suchcolors = [ 
            "#B5BD89", "#DFBE99",
        ];

        function randomFrom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
        }
        
        var r = function(arr) {
            if(!arr) arr = tings; return arr[Math.floor(Math.random() * arr.length)];
        };

        //Get Weather
        var id = $("#weather-id").text();
        var suchid = parseInt(id);
        var suchicon = $("#weather-icon").text();
        var suchdescription = $("#weather-desc").text();
        var temp = $("#degreesCelsius .number").text();
        var suchtemp = parseInt(temp);

        console.log(suchicon);
        console.log(suchtemp + "temp");

        console.log(suchtemp);

        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });
     
        interval = setInterval(function() {
            
            $('.such.overlay').append(
                '<span style="position: absolute; left: ' + Math.random()  *100 + '%;top: ' + Math.random()  *100 + '%;font-size: ' + Math.max(20, (Math.random() * 50 + 24)) + 'px; color:' + randomFrom(suchcolors) + ';">'
                    + r(dogefix) +
                '</span>');
                var suchnumber = $("span").length;
                if (suchnumber > 8 )
                {
                    $('.such span:nth-child(1)').remove();
                }
        }, 2300);

        $("#browser_geo" ).one('click', function(){
            console.log('clear');
            clearInterval(interval);
        });
    };
})(jQuery);