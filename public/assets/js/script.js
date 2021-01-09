//news about the covid-19//
const APIkey = 'AexBs82F271plW5NYllpAgocdxd0Q2Dw';
var covidNewsURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=" + APIkey;
function covidNews() {
  $.ajax({
    url: covidNewsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var covidArticles = response.response.docs;
    for (var i = 0; i < 5; i++) {
      var newDiv = $("<div>")
      var newH3 = $("<h5>");
      var descriptionP = $("<p>");
      var urlP = $("<a>");

     newH3.text(covidArticles[i].headline.main)
     descriptionP.text(covidArticles[i].abstract);
     urlP.attr("href", covidArticles[i].web_url);
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
function seattleNews(event) {
  event.preventDefault();
  var userInput = $("#search-input").val()

  var localNewsURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput +"&api-key=" + APIkey;;
  console.log(userInput)
  $("#user-search").empty()
  
  
  $.ajax({
    url: localNewsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    var seattleArticles = response.response.docs;
    var newPNG = $("<img>");
    newPNG.attr("src", "./public/assets/images/social-your-search-logo.png" );
    newPNG.addClass("logo-top")
    // newH1Header.addClass("body-text")
    $(".row-big").prepend(newPNG);
    
  
    for (var i = 0; i < 5; i++) {
      var newDiv = $("<div>");
      var newH3 = $("<h5>");
      var descriptionP = $("<p>");
      var urlP = $("<a>");

     newH3.text(seattleArticles[i].headline.main)
     descriptionP.text(seattleArticles[i].abstract);
     urlP.attr("href", seattleArticles[i].web_url);


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

