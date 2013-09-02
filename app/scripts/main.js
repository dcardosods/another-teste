(function() {

    var moveSlider = function() {
        var elements = document.querySelectorAll('.slider article'),
        i = 0,
        length = elements.length;

        for ( ; i < length; i++ ) {
            elements.item(i).classList.toggle('hide');
        }
    };

    [].forEach.call( document.querySelectorAll('.slider .control'), function( element ) {
       element.addEventListener( 'click', moveSlider, false );
    });

})();
