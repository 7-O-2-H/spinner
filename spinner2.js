
const spinPosition = [ '|', '/', '-', '\\', '|', '/', '-', '\\', '|' ];
let i = 0;
for (let x = 100; x <= 1700; x += 200) {
      let output = spinPosition[i];
      setTimeout(() => {
        process.stdout.write(`\r${output}`);
    }, x);
  i++;
}


