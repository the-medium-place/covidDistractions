var breatheBtn = $("#breathe");
var timerSpan = $("#timer")

var counterBool = true;
var counterInt;
breatheBtn.on("click", countUp);


// function myTimer() {
//     var timer = setInterval(timer, 1300);

//     // !** MAIN BREATH TIMER **! //
//     var counter = 0;

//     // COUNTER COUNTS AND LINKS TO TEXT ON PAGE
//     function timer() {

//         do {
//             if (counter < 5) {
//                 counter++;
//                 timerSpan.text(counter);
//             } else {
//                 clearInterval();
//                 counterBool = false;
//             }
//         } while (counterBool === true)

//         do {
//             if (counter > 0) {
//                 counter--;
//                 timerSpan.text(counter);
//             } else {
//                 counterBook = true;
//             }
//         } while (counterBool === false);


//     }

// }
var counter = 0;
function countUp() {
    var counterInt = setInterval(timer, 1300);

   

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
    var counterInt = setInterval(timer, 1300);

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

// define function for counter outside of event then functions call each other
