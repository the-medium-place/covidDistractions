var movie = 'titanic';

function MDBQuery() {
    var queryURLmovie = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"
    $.ajax({
        url: queryURLmovie, //movie ajax
        method: "GET"
    }).then(function (response) {
        var newDiv = $("<div>")
        var newH3 = $("<h3>");
        var imdbInfoP = $("<p>");
        var ratingP = $("<p>");
        var plotP = $("<p>");
        newH3.text(response.Title)
        imdbInfoP.text("IMDB rating: " + response.imdbRating + " // votes: " + response.imdbVotes)
        ratingP.text(response.Rated);
        plotP.text(response.Plot);
        newDiv.append(newH3);
        newDiv.append(imdbInfoP);
        newDiv.append(ratingP);
        newDiv.append(plotP);
        newDiv.addClass("content-box animated slideInRight")
        $("#corona").append(newDiv)
    });
};

function streamQuery() {

    var mediaSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + movie + "&country=uk",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "3590c78bbcmsh913547a9379e289p1403f9jsn1ab49f8ac3b7"
        }
    };
    $.ajax(mediaSettings).done(function (response) {
        console.log(response)
    }).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            console.log(response.results[i].name);
            console.log(response.results[i].picture);
            console.log(response.results[i].locations[0].display_name);
            console.log(response.results[i].locations[0].url);
            var newDiv = $("<div>")
            var newH3 = $("<h3>");
            var serviceP = $("<p>");
            var newImg = $("<img>");
            newH3.text(response.results[i].name);
            serviceP.attr("href", response.results[i].locations[0].url);
            serviceP.text(response.results[i].locations[0].display_name);
            newImg.attr("src", response.results[i].picture);
            newImg.attr("width", "300px");
            newImg.attr("height", "auto")
            newDiv.append(newH3);
            newDiv.append(serviceP);
            newDiv.append(newImg);
            // newDiv.append(urlP);
            newDiv.addClass("content-box animated slideInRight")
            $("#user-search").append(newDiv)
        };
    });


};

MDBQuery();
streamQuery();