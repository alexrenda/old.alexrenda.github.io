window.onload = function() {
    let body = document.body;
    let highres_loaded = false;

    let lowres_background_image = new Image();
    lowres_background_image.onload = function() {
        console.log("Loaded low res!");
        if (!highres_loaded) {
            /*
            document.body.style.backgroundImage =
                'url(' + lowres_background_image.src + ')';
            */
        }
    };
    lowres_background_image.src = 'img/background_small.jpg';

    let highres_background_image = new Image();
    highres_background_image.onload = function() {
        console.log("Loaded high res!");
        highres_loaded = true;
        /*
        document.body.style.backgroundImage =
            'url(' + highres_background_image.src + ')';
        */
    };
    highres_background_image.src = 'img/background.jpg';
}
