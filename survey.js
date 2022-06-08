const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable.", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite? ", (favMeal) => {
        rl.question("Which sport is your absolute favourite? ", (favSport) => {
          rl.question("What is your superpower? ", (superpower) => {
            let response = `${name} likes ${activity}, while listening to ${music}. ${name} also love ${favMeal} and ${favSport}. ${name}'s superpower is ${superpower}. `;
            console.log(response);
            rl.close();
          })
        })
      })
    })
  })  
});



