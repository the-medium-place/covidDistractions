// top News articles in the US//
var newsUrl = "http://newsapi.org/v2/top-headlines?country=us&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
function topNews() {
  $.ajax({
    url: newsUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var topArticles = response.articles;
    for (var i = 0; i < topArticles.length; i++) {
      console.log(topArticles[i].title);
      console.log(topArticles[i].description);
      console.log(topArticles[i].source.name);
      console.log(topArticles[i].url);
    }
  });
};
// topNews();

//news about the covid-19//
var covidNewsURL = "http://newsapi.org/v2/everything?q=covid19&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
function covidNews() {
  $.ajax({
    url: covidNewsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var covidArticles = response.articles;
    for (var i = 0; i < covidArticles.length; i++) {
      console.log(covidArticles[i].title);
      console.log(covidArticles[i].description);
      console.log(covidArticles[i].source.name);
      console.log(covidArticles[i].url);
    }
  });
};
// covidNews();

//seattle news//
var localNewsURL = "http://newsapi.org/v2/everything?q=Seattle&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
function seattleNews() {
  $.ajax({
    url: localNewsURL,
    method: "GET"
  }).then(function (response) {
    var seattleArticles = response.articles;
    for (var i = 0; i < seattleArticles.length; i++) {
      console.log(seattleArticles[i].title);
      console.log(seattleArticles[i].description);
      console.log(seattleArticles[i].source.name);
      console.log(seattleArticles[i].url);
    }
  });
};
// seattleNews();




   $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
    });

    //meant to be user inputs
var ingredientOne = "banana"; 
var ingredientTwo = "tomato";
var ingredientThree = "milk";
var movie = 'titanic';

var queryURLrecipes = "https://api.edamam.com/search?q=" + ingredientOne + "," + ingredientTwo + "," + ingredientThree + "&app_id=e051d977&app_key=8185235f4070e8bff9a51c85891e2ca1&from=0&to=3&calories=591-722&health=alcohol-free"
    $.ajax({
        url: queryURLrecipes, //recipe ajax
        method: "GET"
    }).then(function (response){
        console.log(response)
        console.log(response.hits[0].recipe.label); //find name of recipe
        console.log(response.hits[0].recipe.url); //goes to the recipe site
        console.log(response.hits[0].recipe.healthLabels) //health facts like nut free, vegan, etc.
    });

var queryURLmovie = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"
$.ajax({
        url: queryURLmovie, //movie ajax
        method: "GET"
    }).then(function (response){
        console.log(response.Title); //grabs title
        console.log(response.Rated); // grabs rating
        console.log(response.Plot); // grabs plot
    });

    
//NYTimes
var NYTqueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"

function nytimesArticles() {
  $.ajax({
    url: NYTqueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var nyttimesArticles = response.response.docs;
    for (var i = 0; i < nyttimesArticles.length; i++) {
      console.log(nyttimesArticles[i].headline.main);
      console.log(nyttimesArticles[i].abstract);
      console.log(nyttimesArticles[i].web_url);
    }
  });
};
// nytimesArticles();

