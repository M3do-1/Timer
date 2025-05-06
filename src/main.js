const time = document.getElementById("time");
const timeReq = document.getElementById("time-text");


function reset() {
    
}

function start() {
    let inputValue = Number(timeReq.value);
    // time.textContent = inputValue;

        // for (let inputValue = Number(timeReq.value); inputValue >= 0 && inputValue < 3600; inputValue--) {
        //     console.log(inputValue);
        //     time.textContent = inputValue;
        // }
        // time.textContent = inputValue;
        // time.textContent = inputValue;
    let intervalId = setInterval(function() {
        if (inputValue <= 0) {
            clearInterval(intervalId);
            console.log("Time has ended");
            return;
        }
        console.log(inputValue--);
        time.textContent = `${inputValue}`;
    }, 1000)

    

    
    
}

function pause() {
    
}