//=== ARROW FUNCTION ===
const sum = (a, b) => a + b;
const objectFunction = (a, b) => ({ a: a, b: b }); //return object
console.log(sum(2, 2));
console.log(objectFunction(2, 2));

//==
const logger = log => console.log(log); 
logger('Have a nice day...')

//==
const course = {
    name: 'Javascript',
    getName: function(){
        return this.name;
    }
};
console.log(course.getName());
// Output: Javascript

//==
const courses = {
    name: 'Javascript',
    getName: () => {
        return this;
    }
};
console.log(courses.getName());
// Output: undefined => arrow function can’t use function constructor

