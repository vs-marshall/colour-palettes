$.getJSON('https://www.colourlovers.com/api/palettes/random?jsonCallback=?&numResults=1', function(data) {

    var element = data[0];

    document.getElementById("colour").innerText = element.colors;

    $('body').css({
        "background-image": "url("+ element.imageUrl +")"
    });
});