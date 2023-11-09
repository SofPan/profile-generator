const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    console.log("Name: ", name, "Activity: ", activity);
    rl.close();
  });
});