import Person from './person'

let person = new Person('test')
let greeter = document.getElementById('greeter')
let message = 'Hello ' + person.name

greeter.innerHTML = message
