// var Emitter = require('./emitter');
//
// var emtr = new Emitter();
//
// emtr.on('greet', function() {
//   console.log('somewhere, someone said hello');
// });
//
// emtr.on('greet', function() {
//   console.log('a greeting occurred!')
// })
//
// console.log('hello');
// emtr.emit('greet');

//server.js


// function Emitter() {
//   this.events = {};
// }
//
// Emitter.prototype.on = function(type, listener) {
//   this.events[type] = this.events[type] || [];
//   this.events[type].push(listener);
// }
//
// Emitter.prototype.emit = function(type){
//   if(this.events[type]){
//     this.events[type].forEach(function(listener){
//       listener();
//     });
//   }
// }
//
// module.exports = Emitter;

//emitter.js

// var person = {
//   firstname: '',
//   lastname: '',
//   greet: function() {
//     return this.firstname + ' ' + this.lastname;
//   }
// }

// var john = Object.create(person);
// john.firstname = 'jonathan';
// john.lastname = 'ortiz';
//
//
//
// var jane = Object.create(person);
// jane.firstname = 'jane';
// jane.lastname = 'doe';
//
// console.log(john.greet());
// console.log(jane.greet());

// var EventEmitter = require('events');
// var util = require('util');
//
// function Greetr(){
//   this.greeting = 'Hello Son!';
// }
//
// util.inherits(Greetr, EventEmitter);
//
// Greetr.prototype.greet = function(data) {
//   console.log(this.greeting + ' ' + data);
//   this.emit('greet', data);
// }
//
// var greeter1 = new Greetr();
//
// greeter1.on('greet', function() {
//   console.log('someone greeted!');
// });
//
// greeter1.greet('Tony');
