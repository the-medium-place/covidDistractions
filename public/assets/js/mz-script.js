const now = new Date();

// FUNCTION TO ADD A 0 TO VALUES LESS THAN 10
// HELPS DATE DISPLAY WITH 2-DIGIT MONTH AND DATE IN QUERY URL
function addZ(n) { return n < 10 ? '0' + n : '' + n; }

//query IMDB by title
function videoGame() {
  const videoGameURL = `https://api.rawg.io/api/games?dates=${now.getFullYear() - 1}-${addZ(now.getMonth() + 1)}-${addZ(now.getDate())},${now.getFullYear()}-${addZ(now.getMonth() + 1)}-${addZ(now.getDate())}&ordering=-added`

  $.ajax({
    url: videoGameURL,
    method: "GET"
    //build response
  }).then(function (response) {
    // console.log(response);

    // DISPLAY TOP 10 RESULTS FROM LAST YEAR
    for (var i = 0; i < response.results.length; i++) {

      var gameDiv = $("#game-div");

      var newDiv = $("<div>", {
        class: 'content-box animated slideInRight',
      });

      var newH3 = $("<h3>", {
        style: 'font-weight: bold;'
      });
      newH3.text(response.results[i].name);
      newDiv.append(newH3);

      var ratingInfoP = $("<p>");
      response.results[i].esrb_rating ? 
      ratingInfoP.text('ESRB Rating: ' + response.results[i].esrb_rating.name) : ratingInfoP.text('No ESRB rating data available')
      newDiv.append(ratingInfoP);

      //if statement to get the vid clips of the object
      if (response.results[i].clip) {
        var video = $('<video>', {
          class: 'video',
          width: 640,
          height: 360,
          controls: true,
          text: 'Sorry, your browser doesn\'t support embedded videos.'
        });
        const videoSrc = $('<source>', {
          src: response.results[i].clip.clip,
          type: 'video/mp4',
        });

        video.append(videoSrc)
        newDiv.append(video);

      } else {
        var img = $('<img>');
        $(img).width(640);
        $(img).height(360);

        img.attr('src', response.results[i].background_image);
        img.appendTo(newDiv);

      }
      // var platformP = $("<p>");

      let newSpan;
      const platformDiv = $("<div>", {
        style: 'width: 100%; display: flex; justify-content: center;'
      })

      response.results[i].platforms.forEach(platform => {
        newSpan = $("<span>", {
          text: platform.platform.name,
          style: 'margin: 5px; font-size: 2.3rem; font-weight: bold; background: lightpink; padding: 8px;'
        })

        platformDiv.append(newSpan);
      })

      // ratingInfoP.prepend(platformP);
      // ratingInfoP.text(response.results[i].rating);

      newDiv.append(platformDiv);
      newDiv.addClass("content-box animated slideInRight");
      gameDiv.append(newDiv);

    }
  });
}
videoGame();













































// $.ajax({
//   url: localNews,
//   method: "GET"
// }).then(function (response) {
//     console.log(response);

// });
// var videoGameUrl= "https://api.rawg.io/api/games?dates=2020-01-01,2020-03-25&ordering=-added&cnt=10";
// $.ajax({
//   url: videoGameUrl,
//   method:"GET"
// }).then(function(response){
//   console.log(response);
//   var game1= $("#game-div"); 


//   var gameTitle1=$("<h1>");
//   gameTitle1.append(gameName);
//   game1.append(gameTitle1);






// var gameTitle2=$("<h1>");


// var listI3=$("<li>");
// var listI4=$("<li>");
// var listI5=$("<li>");
// var vidUrl=$("<a>");
// var vidUrl3=$("<a>");
// var vidUrl4=$("<a>");


// var gameResults = response.results[0];
// var game2= response.results[1];
// var game3= response.results[2];
// var game4= response.results[3];
// var game5=response.results[4];





// var gameName= gameResults.name;
// var gameName2= game2.name;
// var gameName3= game3.name;
// var gameName4= game4.name;
// var gameName5= game5.name;

// gameList.append(listI1);
// gameList.append(listI2);
// gameList.append(listI3);
// gameList.append(listI4);
// gameList.append(listI5);

// listI1.append(gameName);
// listI2.append(gameName2);
// listI3.append(gameName3);
// listI4.append(gameName4);
// listI5.append(gameName5);










//   //video game clips//


//   // var gameConsole=gameResults.platforms.platform;
//   var gameVid=gameResults.clip.clip;
//   // var gameVid2=game2.clip.clip;// some reason breaks the code//
//   var gameVid3=game3.clip.clip;
//   var gameVid4=game4.clip.clip;
//   // var gameVid5=game5.clip.clip;// 


//   console.log(gameVid3);
//   console.log(gameVid4);

//   // game ratings//


//   var gameRating2=" | Rating: " + game2.rating;
//   var gameRating3=" | Rating: " + game3.rating;
//   var gameRating4=" | Rating: " + game4.rating;
//   var gameRating5=" | Rating: " + game5.rating;

//   console.log(gameRating);









// vidUrl.attr("href", gameVid);
// vidUrl.text(gameName);
// listI1.append(vidUrl);

// // vidUrl2.attr("href", gameVid2);
// // vidUrl2.text(gameName2);
// // listI2.append(vidUrl2);

// vidUrl3.attr("href", gameVid3);
// vidUrl3.text(gameName3);
// listI3.append(vidUrl3);

// vidUrl4.attr("href", gameVid4);
// vidUrl4.text(gameName4);
// listI4.append(vidUrl4);

// vidUrl5.attr("href", gameVid5);
// vidUrl5.text(gameName5);
// listI5.append(vidUrl5);








// console.log(gameVid);
// console.log(gameName);
// console.log(gameConsole);
// console.log(gameRating);

// console.log(newRelease[i]);

// $("<ul>")



// });
// // var giantBombUrl= "https://www.giantbomb.com/api/reviews/?api_key=658189deaf2d44e2844c10f9832acbcc8f09ee43";

// function videoGameArticles(){


//   $.ajax({
//     url: giantBombUrl,
//     method:"GET"
//   }).then(function(response){
//     console.log(response);






//   }

//