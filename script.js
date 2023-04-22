// Function will start learning as page will be loaded
window.onload = function(){
    var second = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSecond = document.getElementById("second");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function(){
        interval = setInterval(startTimer, 20);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        second = "00";
        appendTens.innerHTML = tens;
        appendSecond.innerHTML = second;
    }

    function startTimer(){
        tens++;
        
        if(tens <=  9){
            appendTens.innerHTML = "0"+tens;
            console.log(tens+"One");
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
            console.log(tens+"Two");
        }

        if(tens>99){
            console.log(tens+"Three");

            second++;
            appendSecond.innerHTML = "0" + second;
            tens = 0;
            appendTens.innerHTML = "0" + 0;

        }

        if(second>9){
            appendSecond.innerHTML = second;
            console.log(tens + "Four");
        } 



    }
}

