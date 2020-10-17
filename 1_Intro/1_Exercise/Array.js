// --------------------------------------
// Arrays, for loops
// --------------------------------------

/* we can also add different kinds of variables in one sack fx.
const fruits= [{},1,2,3,"apple","banana"];

 to declare a variables below:
 const fruits= ["apple","banana"];

 use push to add in array
 fruits.push("pear");

 use pop to remove from the array
 fruits.pop();
 fruits.pop();
 to print a statement
console.log(fruits[0]); */


// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console

console.log("Exercise 1: " + letters[1]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];
// What a lonely array. Add at least 3 friend objects to it.
friends.push({"boy":"Ole",
    "girl":"Sine",
    "adult" : "Gitte" });

console.log("Exercise 2: " + friends);




// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value.

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).


const significantMathNumbers = [0, 2.718, 3.14159, 1729];
console.log("Exercise 3: " + significantMathNumbers.indexOf(1729));




// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

 diet.splice(2,0,"hamburger", "soda", "pizza");
 console.log("Exercise 4: " + diet);



// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

// removes only last item from the list.
   diet.pop();
console.log(diet);
// this removes the second item from the list.
//diet.pop();

// another way of removing LAST element of the array.
const removed = diet.splice(5,1);
console.log("Exercise 5: " + diet);



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.
const dinnerTray = diet;
 diet == dinnerTray;
console.log("Exercise 6: " + dinnerTray)


// --------------------------------------
// Exercise 7 - For loop

const letters1 = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

  //for (var i =0; i <letters1.length; i+2) {
// console.log(letters1[i]);
//}
console.log("Exercise 7: ")
var i;
for (i = 1; i < letters1.length; i += 2) // (i = i+2 ) ( increment by one)
{
 console.log(letters1[i]+ ",");
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
const newNumbers = [];
const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(let i = 0; i < numbers.length; i++)
{
 if (numbers[i] > 6 || numbers[i] < 0)
 {
  newNumbers.push(numbers[i]);
 }
else
 {
  discardedNumbers.push(numbers[i]);
 }
}
console.log("Exercise 8")
console.log("number above 6 or less than 0 are :")
console.log(newNumbers.sort());

console.log ("discarded number:")
console.log(discardedNumbers.sort());

// --------------------------------------
