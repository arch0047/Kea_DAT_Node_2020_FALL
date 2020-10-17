

function myFirstfunction(){

    return "Hello World";
}
console.log(myFirstfunction());

const myVariableFunction = function () {
    console.log(" Hi there")
};

 console.log(typeof myVariableFunction);

 // other way of doing same ting

const myArrowfunction = ()=>{
    console.log(" Hi there")
};

  function sayHiLater(anyFactionReference) {

      // calling the method here
      anyFactionReference();
}
// only give the reference to this method myArrowfunction vi do not write ()
// with this method  as we do not call it now and call later it is called call back

    sayHiLater(myArrowfunction);

// Give an argument to interact line 39
// define parameter in to interact on line 37
// define the body of interaction
// still use the interaction function but this time hug + name ;
const poke = (name)=> "poke"+ name ;

function interact(genericInteraction, name ) {
 console.log(genericInteraction (name));
} interact(poke," Anders");

 const hug= (name)=> "hug"+ name;
interact(hug," Anders");

// other way of doing the same in one line
// interact(genericInteraction,( name)=> "hug"+ name, Anderson );