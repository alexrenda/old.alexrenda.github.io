function onload() {
    let body = document.body;

    let highres_background_image = new Image();
    highres_background_image.onload = function() {
        document.body.style.backgroundImage = 'url(' + highres_background_image.src + ')';
        document.getElementsByClassName("background-small")[0].style.opacity = 0;
    };
    highres_background_image.src = 'img/background.jpg';
}

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", onload, false);
} else {
    window.onload = onload;
}
