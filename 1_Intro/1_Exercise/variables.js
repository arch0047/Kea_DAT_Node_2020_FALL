

 /*
 accessing let before initialization throws an error
 console.log(name);
   let name= "Andres";

{
    {
        let scopedVar= 123;
    }
    // let sticks to its scope or below
   console.log(scopedVar);
}*/


// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// many ways to do it
 // const introduction= "My first name is" + " " + firstName+" " +"and my last name is"+ " " + lastName ;

   const introduction= `My first name is ${firstName} and my last name is ${lastName}.`;
   console.log (introduction);

  // console.log (firstName,lastName);

 // Below can be seen many ways to write string in nodejs. All are correct.

const stringTypeOne = "";
const stringTypeTwo ='';
const stringTypeThree =``;




// --------------------------------------
// Exercise 2 - Numbers and Strings
 // Add the year plus the number
 // The result should be 2020
 // You cannot touch line 1 or 2

const year = "2019";
const number = 1;

    // answer 2 ways to do it

  //console.log(parseInt(year)+ number);
  const currentYear = Number(year) +number;
console.log(currentYear);

    // Extra about parseInt()
// can only print int
 const testParsing = "123abc";
 console.log(parseInt(testParsing));

