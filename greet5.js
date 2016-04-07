//revealing module pattern
//exposing only the properties and methods you want via a returned object
var greeting = "hello world!!! I am revealing myself via returned object!!!"

function greet(){
  console.log(greeting);
}

module.exports = {
  greet: greet
}
