//news about the covid-19//
var covidNewsURL = "https://newsapi.org/v2/everything?q=covid19&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
function covidNews() {
  $.ajax({
    url: covidNewsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var covidArticles = response.articles;
    for (var i = 0; i < 5; i++) {
      var newDiv = $("<div>")
      var newH3 = $("<h5>");
      var descriptionP = $("<p>");
      var urlP = $("<a>");

     newH3.text(covidArticles[i].title)
     descriptionP.text(covidArticles[i].description);
     urlP.attr("href", covidArticles[i].url);
     urlP.text("Link to article")
     newDiv.append(newH3);
     newDiv.append(descriptionP);
     newDiv.append(urlP);
     newDiv.addClass("content-box animated slideInRight")
     $("#corona").append(newDiv)
    }
  });
};
covidNews();

//seattle news//
function seattleNews() {
  event.preventDefault();
  var userInput = $("#search-input").val()

  var localNewsURL = "https://newsapi.org/v2/everything?q="+ userInput + "&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
  console.log(userInput)
  $("#user-search").empty()
  
  
  $.ajax({
    url: localNewsURL,
    method: "GET"
  }).then(function (response) {
    var seattleArticles = response.articles;
    var newPNG = $("<img>");
    newPNG.attr("src", "./images/social-your-search-logo.png" );
    newPNG.addClass("logo-top")
    // newH1Header.addClass("body-text")
    $(".row-big").prepend(newPNG);
    
  
    for (var i = 0; i < 5; i++) {
      var newDiv = $("<div>");
      var newH3 = $("<h5>");
      var descriptionP = $("<p>");
      var urlP = $("<a>");

     newH3.text(seattleArticles[i].title)
     descriptionP.text(seattleArticles[i].description);
     urlP.attr("href", seattleArticles[i].url);


     urlP.text("Link to article")
     newDiv.append(newH3);
     newDiv.append(descriptionP);
     newDiv.append(urlP);
     newDiv.addClass("content-box animated slideInRight")
     $("#user-search").append(newDiv)

    }
  });
};


//NYTimes
// var NYTqueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"

// function nytimesArticles() {
//   $.ajax({
//     url: NYTqueryURL,
//     method: "GET"
//   }).then(function (response) {
//     console.log(response);
//     var nyttimesArticles = response.response.docs;
//     for (var i = 0; i < nyttimesArticles.length; i++) {
//       console.log(nyttimesArticles[i].headline.main);
//       console.log(nyttimesArticles[i].abstract);
//       console.log(nyttimesArticles[i].web_url);
//     }
//   });
// };

$("#search").on("click", seattleNews)

