const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index]);
    if (Number(index) === sentence.length - 1) {
      console.log("\n");
    }
  }, delay);

  delay += 50;
}
