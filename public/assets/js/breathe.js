var breatheBtn = $("#breathe");
var timerSpan = $("#timer");
var timerBtnDiv = $("#timer-btn");
var exitBtnDiv = $("#exit-btn");
var exitBtn = $("#exit");
var dotDiv = $(".dot");
var counter = 1;
let randomNum;
let useSwitch = 0;

const breathText = [
    {
        inhale: 'inhale...',
        exhale: 'exhale...'
    }, {
        inhale: 'breathe in...',
        exhale: 'breathe out...'
    }, {
        inhale: 'in through the nose...',
        exhale: 'out through the mouth...'
    }, {
        inhale: 'in with the good...',
        exhale: 'out with the bad...'
    },
]

breatheBtn.on("click", function () {
    timerSpan.text(counter);
    $(".inhale").css('display','block');


    $(".drop-button").attr("style", "display: none;");
    exitBtn.attr("style", "margin-top: 70vh;")
    $("#breath-splash").attr("style", "display: none;");
    // exitBtnDiv.attr("style", "display: block;");

    countUp();

})


function countUp() {
    randomNum = ~~(Math.random()*breathText.length)

    useSwitch===0 ? $(".inhale").text(breathText[randomNum].inhale).css('display','block'):null;
    useSwitch++;
    
    var timerPage = $("#timer-page");
    timerPage.addClass("animate-circle");

    var counterInt = setInterval(timer, 1000);
    setTimeout(() => {
        $(".exhale").css('display', 'none')
        
        $(".inhale").text(breathText[randomNum].inhale).css('display','block');
        
    }, 1000);

    function timer() {
        if (counter < 4) {
            counter++;
            timerSpan.text(counter);
            console.log(counter);

        } else {
            clearInterval(counterInt);
            countDwn();
        }
   
    };

}

function countDwn() {
    var counterInt = setInterval(timer, 1000);

    setTimeout(() => {
        $(".inhale").css('display', 'none')
        
        $(".exhale").text(breathText[randomNum].exhale).css('display', 'block')
        
    }, 1000);

    function timer() {
        if (counter >= 1) {
            timerSpan.text(counter);
            counter--;
            console.log(counter);
        } else {
            clearInterval(counterInt);
            countUp();
        }

    };
}
