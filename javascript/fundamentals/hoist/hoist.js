// GIVEN - 1
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";



// GIVEN - 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// THE FUNCTION IS BEING CALLED BEFORE IT EXISTS
// var needle 
// var needle
// test()
// function test(){
// needle = 'magnet'
// console.log(needle)
// }


// GIVEN - 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// WILL LOG : 'super cool' / print() function is never run

// var brendan 
// brendan = 'super cool'
// var brendan
// function print() {
// brendan = 'only okay'
// console.log(brendan);
// }
// console.log(brendan);



// GIVEN - 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//  WILL LOG :  'chicken' and 'half-chicken'

// var food
// food = 'chicken'
// console.log(food);
// eat();
// function eat() {
// food = 'half-chicken';
// console.log(food);
// var food
// food = 'gone';
// }



// GIVEN - 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// WILL LOG :  mean() is not a function

// var mean
// mean();
// console.log(food);
// mean = function (){
// var food
// food = "chicken";
// console.log(food);
// food = "fish"
// console.log(food);
// }
// console.log(food);


// GIVEN - 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// WILL LOG : undefined, rock, &b, disco

// var genre
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
// var genre
// genre = "rock";
// console.log(genre);
// genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);


// GIVEN - 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// WILL LOG : san jose, seattle, burbank, san jose

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);



// GIVEN - 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo.hiring = "closed for now";
    }
    return dojo;
}


// WILL LOG : TypeError: Assignment to constant variable. / fixed with dojo.hiring = "closed for now"

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo.hiring = "closed for now";
//     }
//     return dojo;
// }