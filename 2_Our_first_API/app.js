
 const express= require("express"); // using require function to implement(load)
 // the package(module) express which returns a function called const express
 // instantiate
 const app = express();
 const fetch = require("node-fetch");
 const encoding = require("encoding")



//const app = require("express")(); // writing line 5 and 6 lines as in one line.
 app.use(express.urlencoded());
 app.use(express.json());   // parser body some json

 app.get("/",(req,res) => {

      // sending response
   // return res.send("Hello");
         // sending object
   //  return res.send({"Hello": "There"});


     //vi vil get error with numbers as it is integer not string.
    // return res.send(123);

        // sending html
   // return res.send("<h1> Hi<h1>");

      // sending a file
     return res.sendFile(__dirname +"/index.html");

 })

   /*if (false){
       console.log(" Error starting the server") ;
    }*/

 // call back function req and res is arguments not parameters
 app.get("/me",(req, res) =>{
     return res.send({name:"Anders"})
 });

 // give me / time that shows the current time
 app.get("/time",(req, res)=>{
     const date = new  Date();
   const time = date.getHours()+":"+ date.getMinutes()+ ":"+ date.getSeconds()+":" + (date.getMonth()+1);
    return res.send({time});
     // other way
    // return res.send({time.getTime});
 });
 // implement months now

 const months={

     0: "January",
     1: "February",
     2: "March",
     3: "April",
     4: "May",
     5: "June",
     6: "July",
     7: "August",
     8: "September",
     9: "October",
     10: "November",
     11: "December"
 };



 app.get("/month",(req, res)=>{

    const date= new Date();
    const month = date.getMonth();
    return res.send({month: months[month]});
 });

 const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday" ,"Friday"," Saturday"];


 app.get("/day",(req, res)=> {

  const date = new Date();
    const day = date.getDay();
     return res.send({ day:days[day] });

 });


 app.get("/querystring", (req, res)=> {

    // console.log( res.query)
     return res.send({query: req.query });

 });
  // create a request handler on the path message that takes a path variables
  // from the client and return it directly to the client in the response


 app.get("/message/:personalMessage",(req, res)=> { //  this : means dynamics variable

     // console.log( res.query)
     // return res.send({message: res.params.personalMessage }); // res.params returns jason data type
     return res.send({
         message: req.params.personalMessage,
     queryString: req.query }); // this way we can see both personal message and querystring
 });

app.post("/showmethebody", (req,res) =>{
     return res.send(req.body);

 });

app.get("/catfacts",(req,res)=>{
return res.sendFile(__dirname,"/catfacts.html")
});

app.get("/proxy",(req,res)=> {
    fetch("http://www.google.com")
        .then(result.textConverted()) // when we go to the site there are some words which looks wired
        //  so we use textConverted to convert the page in to a nice format so we can see all nicely
        .then(body => {
            // const page=encoding.convert(body); //convert the page in to a format so we can see all nicely
            return res.send(body);
        });


    app.get("/documentation", (req, res) => {
        return res.sendFile(__dirname + "/documentation.html");
    });

    app.get("/documentation2", (req, res) => {
        return res.sendFile(__dirname + "/documentation2.html");
    });

    // defining a call back with this ()=>{}
    app.listen(8080, (error) => {

        if (error) {
            console.log(" Error starting the server");
        }
        console.log("Server is running on port", 8080);


    });
})

 // extra learned by my self
    /* const port= process.env.PORT || 8080
 app.listen(port ,() =>console.log(`Server is running on port ${port}...`)); */


 // PORT =3000 nodemon aap.js