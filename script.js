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
var localNews = "http://newsapi.org/v2/everything?q=Seattle&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
function seattleNews() {
  $.ajax({
    url: localNews,
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


//NYTimes
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"
function nytimesArticles() {
  $.ajax({
    url: queryURL,
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
