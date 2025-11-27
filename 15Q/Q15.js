const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question("Seconds to count down: ", (value) => {
  let sec = Number(value);

  let run = setInterval(() => {
    console.log(`Left: ${sec}s`);
    sec--;
    if (sec < 0) {
      clearInterval(run);
      console.log("Done");
      input.close();
    }
  }, 1000);

  function check() {
    input.question("Enter 'q' to stop or press Enter: ", (ans) => {
      if (ans === "q") {
        clearInterval(run);
        console.log("Stopped");
        input.close();
      } else {
        check();
      }
    });
  }

  check();
});
