import $ from 'jquery';
import Person from './Person';

$(document).ready(() => {
    console.log('meow');

    const newPerson = new Person('Scott', 'Bromander', 37);
    console.log(newPerson.sayName());
});