var breatheBtn = $("#breathe");
var timerSpan = $("#timer");
var timerBtnDiv = $("#timer-btn");
var exitBtnDiv = $("#exit-btn");
var exitBtn = $("#exit");
var dotDiv = $(".dot");
var counter = 0;

var counterInt;


breatheBtn.on("click", function(){
    $(".drop-button").attr("style", "display: none;");
    exitBtn.attr("style", "margin-top: 70vh;")
    $("#breath-splash").attr("style", "display: none;");
    // exitBtnDiv.attr("style", "display: block;");
  
  


    countUp();

})


// exitBtn.on("click", function() {

//     $("#timer-page").removeClass("animate-circle");
//     exitBtnDib.attr("style", "display: none;");
//     timerBtnDiv.attr("style", "display: block;");
//     dotDiv.attr("style", "display: block;");

// })




function countUp() {
    var counterInt = setInterval(timer, 1000);

    var timerPage = $("#timer-page");
    timerPage.addClass("animate-circle");

    
    $(".inhale").attr("style", "display: block;");
    $(".inhale").addClass("scroll-up");
    function timer() {
        if (counter <4) {
            counter++;
            console.log(counter);
            timerSpan.text(counter);

        } else {
            clearInterval(counterInt);
            countDwn();
        }
    };
    $(".inhale").attr("style", "display: none;");
   
    $(".inhale").removeClass("scroll-up")
}

function countDwn() {
    var counterInt = setInterval(timer, 1000);
    
    $(".exhale").attr("style", "display: block;");
    $(".exhale").addClass("scroll-down");
    function timer() {
        if (counter > 0){
            counter--;
            console.log(counter);
            timerSpan.text(counter);
        } else {
            clearInterval(counterInt);
            countUp();
        }
};
$(".exhale").removeClass("scroll-down");

$(".exhale").attr("style", "display: none;");

}
