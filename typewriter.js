// const sentence = "hello there from lighthouse labs";

const typewriter = (sentence) => {
  let time = 0;
  for (const char of sentence) {
    time += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, time); //could do time+50 but not necessary as it will execute after the for loop has set up all of it's timeouts first, so setting timeout the same as the timeout for the last character is okay.
};

typewriter("I hate eating bananas.");