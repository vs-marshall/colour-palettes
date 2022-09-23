function chColour(){

    var colour = document.getElementById("colourChoose").value;

    $.getJSON('http://www.colourlovers.com/api/palettes/new?keywords=search+' + colour + '&jsonCallback=?&numResults=50', function(data) {

    var element = data[Math.floor(Math.random()*50)];

    document.getElementById("colour").innerText = element.colors;

    $('body').css({
        "background-image": "url("+ element.imageUrl +")"
    });
});
}



