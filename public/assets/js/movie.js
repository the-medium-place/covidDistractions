var movie = 'Goodfellas'
var searchBTN = $("#search");
var searchFieldEl = $("#search-input");
var imdbEL = $("#IMDB");
var streamEL = $("#stream");

//button click
//clear content for subsequent search
$("#search").on("click", function () {
    event.preventDefault();
    movie = searchFieldEl.val();
    MDBQuery();
    streamQuery();
});

//query IMDB by title
function MDBQuery() {
    imdbEL.empty();
    var queryURLmovie = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"
    $.ajax({
        url: queryURLmovie, //movie ajax
        method: "GET"
//build response
    }).then(function (response) {
        console.log(response);
        var newDiv = $("<div>")
        var newH3 = $("<h3>");
        var imdbInfoP = $("<p>");
        var newIMG = $("<img>");
        newH3.text(response.Title)
        imdbInfoP.html("IMDB rating: " + response.imdbRating + " // votes: " + response.imdbVotes + "<br>" + response.Year + "<br>" + response.Rated + "<br>" + response.Plot)
        newIMG.attr("class", "poster");
        newIMG.attr("src", response.Poster);
        newDiv.append(newH3);
        newDiv.append(imdbInfoP);
        newDiv.append(newIMG);
        newDiv.addClass("content-box animated slideInRight")
        imdbEL.append(newDiv);
    });
};

//query api to find content and where it's avaiable for streaming
function streamQuery() {
    streamEL.empty();
    var mediaSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + movie + "&country=us",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "3590c78bbcmsh913547a9379e289p1403f9jsn1ab49f8ac3b7"
        }
    };
    $.ajax(mediaSettings).done(function (response) {
        console.log(response)
        //build response
    }).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            var newDiv = $("<div>")
            var newH3 = $("<h3>");
            var newP = $("<p>");
            var serviceA = $("<a>");
            var newIcon = $("<img>")
            var newImg = $("<img class = 'poster'>");
            newH3.text(response.results[i].name);
            serviceA.attr("href", response.results[i].locations[0].url);
            serviceA.attr("target", "blank");
            newIcon.attr("src", response.results[i].locations[0].icon);
            newImg.attr("src", response.results[i].picture);
            newDiv.append(newH3);
            serviceA.append(newIcon);
            newP.append(serviceA);
            newDiv.append(newP);
            newDiv.append(newImg);
            newDiv.addClass("content-box animated slideInRight linkDiv");
            streamEL.append(newDiv)
        };
    });
};

MDBQuery();
streamQuery();