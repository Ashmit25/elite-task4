 //PROBLEM 1 (NODE.JS)
 //Write a simple Node.js program that takes the name from a command-line
//argument and fetches the person’s nationality using this API.
//For eg. node index.js Angad
//Angad → Name
//url -> 'https://api.nationalize.io?name=michael

var myArgs = process.argv.slice(2);

var myname;
var mycountry;
myname = myArgs[0];


const country_api = 'https://api.nationalize.io?name=';

//npm install node-fetch@2.6.6  << to support reqquire
  //to fech country
  const fetch = require('node-fetch');
 
  fetch(country_api+ myname)
  .then(response => response.json())
  .then(response => {
        mycountry =response.country[0].country_id;
        if (mycountry > '') {
        console.log('Natioanlity of < ', myname , ' >  is << ', mycountry +' >>');
        }
        else {
            Console.log ('Name < '+ myname + ' > could not found under API')
        }

  });
 // MADE BY ASHMIT KAUSHIK 10-D
