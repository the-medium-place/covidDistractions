function mediaQuery() {
    var mediaName = "outlander"
    var mediaSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + mediaName + "&country=uk",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "3590c78bbcmsh913547a9379e289p1403f9jsn1ab49f8ac3b7"
        };
    };
    $.ajax(mediaSettings).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.results.length; i++) {
            console.log(response.results[i].name);
            console.log(response.results[i].locations[0].display_name);
            console.log(response.results[i].locations[0].url);
        };


    });
};