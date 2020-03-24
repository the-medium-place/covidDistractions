


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





var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw";

   $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response);
    });

    


// var videoGameKey="658189deaf2d44e2844c10f9832acbcc8f09ee43";
var videoGameUrl="https://api.rawg.io/api/games?dates=2020-03-03,2020-10-10&ordering=-added";

$.ajax({
  url: videoGameUrl,
  method:"GET"
}).then(function(response){
  console.log(response);
  var newRelease = response.results;
  for (var i = 0; i < newRelease.length; i++) {
    var list= newRelease[i].name;
    console.log(list);
    
    console.log(newRelease[i]);

    $

  }
    
  });
  
    
  
  



// });

