const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Your Name: ${answer}`);

});

rl.question('What\'s an activity you like doing? ', (answer) => {
  console.log(`Your Name: ${answer}`);
  rl.close();
});