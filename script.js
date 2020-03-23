var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"

   $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
    })
