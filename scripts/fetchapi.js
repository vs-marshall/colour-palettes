$.getJSON('http://www.colourlovers.com/api/palettes/random?jsonCallback=?&numResults=1', function(data) {

    var element = data[0];

    $('body').css({
        "background-image": "url("+ element.imageUrl +")"
    });
});