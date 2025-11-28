
function runTimer(timeInMs, doneCallback) {
    setTimeout(function () {
        const result = "Timer of " + timeInMs + " ms finished";
        doneCallback(result);   
    }, timeInMs);
}
function showCompletion(text) {
    console.log(text);
}


runTimer(1000, showCompletion);
