const time = document.getElementById("time");
const timeReq = document.getElementById("time-text");

let intervalId = null;
let inputValue = 0;

console.log("if you see this I'm working on a V2 so you'll see it soon.")


function start() {
    inputValue = Number(timeReq.value);
    // time.textContent = inputValue;

        // for (let inputValue = Number(timeReq.value); inputValue >= 0 && inputValue < 3600; inputValue--) {
        //     console.log(inputValue);
        //     time.textContent = inputValue;
        // }
        // time.textContent = inputValue;
        // time.textContent = inputValue;
        // if (inputValue !== null) return;
    intervalId = setInterval(function() {
        if (inputValue <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            console.log("Time has ended");
            return;
        }
        console.log(inputValue--);
        time.textContent = `${inputValue}`;
    }, 1000);

    // if (!intervalId) {
    //     intervalId = setInterval(() => {
    //         if (inputValue <= 0) {
    //             intervalId = null;
    //             return;
    //         }
    //         console.log(inputValue--);
    //         time.textContent = inputValue;
    //     }, 1000)
    // }
    

    
    
}

function pause() {
    if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Timer paused");
    }
}

function resume() {
 if (intervalId === null) {
    intervalId = setInterval(() => {
                console.log(inputValue--);
                time.textContent = inputValue;
            }, 1000)
        }
}

