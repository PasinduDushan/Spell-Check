import {reporter} from 'vfile-reporter'
import {retext} from 'retext'
import retextSpell from 'retext-spell'
import dictionary from 'dictionary-en-gb'

import readline from 'readline'

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Input your sentence ", function(answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for using our service");
    retext()
     .use(retextSpell, dictionary)
     .process(answer)
     .then((file) => {
        console.error(reporter(file))
    })
    
  
    rl.close();
});