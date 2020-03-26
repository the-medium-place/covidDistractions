

// top News articles in the US//
var newsUrl ="http://newsapi.org/v2/top-headlines?country=us&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
$.ajax({
    url: newsUrl,
    method: "GET"
  }).then(function (response) {
      console.log(response);

  });



//news about the covid-19//
var covidNews= "http://newsapi.org/v2/everything?q=covid19&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
$.ajax({
    url: covidNews,
    method: "GET"
  }).then(function (response) {
      console.log(response);

  });




//seattle news//
var localNews="http://newsapi.org/v2/everything?q=Seattle&apiKey=d775fffd012c44ec8001a6ace97e7e1f";


 
  $.ajax({
    url: localNews,
    method: "GET"
  }).then(function (response) {
      console.log(response);

  });
  var videoGameUrl= "https://api.rawg.io/api/games?dates=2020-01-01,2020-03-25&ordering=-added&cnt=10";
  $.ajax({
    url: videoGameUrl,
    method:"GET"
  }).then(function(response){
    console.log(response);
    var gameList= $(".game-list");
    var listI1=$("<li>");
    var listI2=$("<li>");
    var listI3=$("<li>");
    var listI4=$("<li>");
    var listI5=$("<li>");
    var vidUrl=$("<a>");
    
    var gameResults = response.results[0];
    var game2= response.results[1];
    var game3= response.results[2];
    var game4= response.results[3];
    var game5=response.results[4];



    
    
    var gameName= gameResults.name;
    var gameName2= game2.name;
    var gameName3= game3.name;
    var gameName4= game4.name;
    var gameName5= game5.name;
    
    gameList.append(listI1);
    gameList.append(listI2);
    gameList.append(listI3);
    gameList.append(listI4);
    gameList.append(listI5);

    listI1.append(gameName);
    listI2.append(gameName2);
    listI3.append(gameName3);
    listI4.append(gameName4);
    listI5.append(gameName5);
    
    
    


  
  
      
    
  
      console.log(gameName2);
    
      
      // var gameConsole=gameResults.platforms.platform;
      var gameVid=gameResults.clip.clip;
      var gameVid2=gameResults[1].clip.clip;
      var gameRating= " | Rating: " + gameResults.rating;
      




 
    
    

      vidUrl.attr("href", gameVid);
      vidUrl.text("Clip1");
      gameList.append(vidUrl);
    
  
  
      
      console.log(gameVid);
      // console.log(gameName);
      // console.log(gameConsole);
      // console.log(gameRating);
      
      // console.log(newRelease[i]);
  
      // $("<ul>")
  
  
      
    });
    var gameSpotUrl= "https://www.gamespot.com/api/articles/&format=publish_date:2020?api_key=481d777bc7c84b3483d92e2ccf4bec23113e2032";


    
      
    
    
  
  
  
  // });
  
  



