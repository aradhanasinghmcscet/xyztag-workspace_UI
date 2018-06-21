//var myTemplate = require("./myTemplate.hbs");
//https://learnwebcode.github.io/json-example/pets-data.json
//https://s3.amazonaws.com/viome-cdn/Temp/recs1_7.json
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
myRequest.onload = function() {
  if (myRequest.status >= 200 && myRequest.status < 400) {
    var data = JSON.parse(myRequest.responseText);
    createHTML(data);
    console.log(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

myRequest.onerror = function() {
  console.log("Connection error");
};

myRequest.send();

function createHTML(myData) {
  //var petsContainer = document.getElementById("pets-container");
  //petsContainer.innerHTML = myTemplate(petsData);
  var myTemplate= document.getElementById('firstTemplate').innerHTML;
  var compileTemplate = Handlebars.compile(myTemplate);
  var myGeneratedHTML = compileTemplate(myData);

  var tempDataContainer = document.getElementById('tempdataContainer');
  tempDataContainer.innerHTML = tempDataContainer;
}