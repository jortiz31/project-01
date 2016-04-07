var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('somewhere, someone said hello');
});

emtr.on('greet', function() {
  console.log('a greeting occurred!')
})

console.log('hello');
emtr.emit('greet');

// //object properties and methods
// var obj = {
//   greet: 'hello'
// }
//
// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'greet';
// console.log(obj[prop]);
//
// //functions and arrays
// var arr = [];
//
// arr.push(function(){
//   console.log('hello world 1');
// })
//
// arr.push(function(){
//   console.log('hello world 2');
// })
//
// arr.push(function(){
//   console.log('hello world 3');
// })
//
// arr.forEach(function (item){
//   item();
// })
