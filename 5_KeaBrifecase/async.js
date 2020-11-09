// promises has to stage : pending and fulfilled .Fulfilled has to stage : resolve and reject


new Promise((resolve, reject)=> {
    try {
        setTimeout(() => {
            resolve(" Everything went well");
        }, 3000);
    } catch {
        reject(" Everything went wrong");
    }
})
    .then(output=> console.log(output))
    .catch(output=> console.log(output));
  // create a function that return a promise after 5 seconds

function myPromiseFunction() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("Not every Promise work this way");
            }, 5000);
        });
    }
    //try to call myPromiseFunction and show the output in a new function

/* (async function callMyPromise() {
   // myPromiseFunction().then(console.log)
    const output=await myPromiseFunction()
    console.log(output);
})(); */
//callMyPromise()

// do like the above but with an arrow function

 //const asyncArrowFunction= async()=>{ // async function
(async()=>{
    try{
    const output=await myPromiseFunction()
console.log(output);
} catch{
    //
    }
})();
//other way
 /* const asyncArrowFunction= async()=>{
  output=await myPromiseFunction()
      console.log(output);
}
asyncArrowFunction() */