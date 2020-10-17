// --------------------------------------
// Objects
// --------------------------------------
/*
<object>
    <key>value</key>
    <anotherKey>another value</anotherKey>
</object>
*/

// Exercise 1 - Retrieve value from object by key

 const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message

 /*const myObj = {
    key = "message",
     value = "Hello, earthling! I bring peace."
}*/
    console.log(myObj.message);



// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age.

const user = {"MyName" : "Archana Maurya",
             "MyAge": " 39 years"};

console.log("My name is: " +user.MyName +" and" );
console.log("I am "+ user.MyAge + " Years old.");


// --------------------------------------
// Exercise 3 - Add a property

const stackOverflow = {};

stackOverflow.name = 'Ole';
stackOverflow.age = '40';
stackOverflow.work = 'It professional';

console.log(stackOverflow.work);

function isAllowed() {
   console.log(this); // isAllowed rule with no value
    this.value = true;
    console.log(this); // isAllowed rule with a value
}
      new isAllowed(); // new isAllowed rule with no value

// make a rule called isAllowed and let the value be true



// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = {"description": "The best song in the world."}
// removing a property and printing the log
delete thisSong.description;
console.log(thisSong);

// adding the property and printing the log.
 thisSong.about= "Just a tribute.";
console.log(thisSong);

// remove the property "description" and add a property called "about" that should say "Just a tribute."


// --------------------------------------











