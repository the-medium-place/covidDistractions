var breatheBtn = $("#breathe");
var timerSpan = $("#timer");
var timerBtnDiv = $("#timer-btn");
var exitBtnDiv = $("#exit-btn");
var exitBtn = $("#exit");
var counter = 0;

var counterInt;


breatheBtn.on("click", function(){
    timerBtnDiv.attr("style", "display: none;");
    exitBtnDiv.attr("style", "display: block;")

    countUp();

})


exitBtn.on("click", function() {

    $("#timer-page").removeClass("animate-circle");
    exitBtnDib.attr("style", "display: none;");
    timerBtnDiv.attr("style", "display: block;");

})




function countUp() {
    var counterInt = setInterval(timer, 1000);

    var timerPage = $("#timer-page");
    timerPage.addClass("animate-circle");

    function timer() {
        if (counter <4) {
            counter++;
            console.log(counter);
            timerSpan.text(counter);

        } else {
            clearInterval(counterInt);
            countDwn();
        }
    }
}

function countDwn() {
    var counterInt = setInterval(timer, 1000);

    function timer() {
        if (counter > 0){
            counter--;
            console.log(counter);
            timerSpan.text(counter);
        } else {
            clearInterval(counterInt);
            countUp();
        }
}

}
