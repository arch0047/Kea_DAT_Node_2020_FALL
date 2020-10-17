const express =require("express");

const app = express();
app.use(express.json()); // we need to parse the body to jason ( Body parser)

let cars = [
    {  id:1, name: "brom brom" },
    {  id:2, name: " Mazda" },
    {  id:2, model:"Mitsubishi" }
];
 let nextCarId = 3;
// Get // cars

app.get("/",(req,res)=>{
    return res.send({ data:"Welcome to the car AIP version 0.0.1"})

});

// get the car by id
app.get("/cars/:id",(req,res)=>{
  // const car = cars[res.param.id];  // this method will  return string and id will be shown in the url and [] this will give index.
   // Type correction ===
    const car = cars.find(car=> car.id ===Number(req.param.id)); // we used Number method as it is string
    // console.log(car); // to debug
    return res.send({data: car}) ;


});


app.post ("/cars", ( req,res)=>{
     // console.log(req.body);
    const newCar = res.body;
     car.push(newCar)
   // cars.push(res.body); // adding cars in the array other way

    // here add ID
   // newCar.id= car.length+1; // this is not good as we will get two cars by same id
    // so use instead this
    newCar.id= nextCarId ++;
    car.push(newCar)

    return res.send({data:cars})


});
const car ={"Horsepower": "40"};
const moreCarInfo = {" btand": "Audi"," horsepower": 2};


 app.patch("/cars/:id", (req,res)=>{
// find car -> get id-> overwrite in array

  // cars =cars.map(car => car);   // map returns a new array
// we can write other way as well
    cars= cars.map(car => {
if (car.id ===Number(res.param.id)){
       // return car;
    //patch update object in a row and put update one row


    return {...car, ...req.body, id:car.id}; // here we spreads the object car
    }
  return car;
});
    return res.send({data: cars});
});

// filter, splice, findIndex
  app.delete("/cars/:id" ,(req,res)=>{
      cars= cars.filter(car=> car.id !==Number(req.param.id));
      return res.send({data:cars})

     // const filteredContent= cars.filter(car=> car.id===Number(req.param.id)); // filteredContent returns a new array  filter
    //  const foundIndex =car.findIndex(car => car.id=== Number(res.param.id));
     // console.log(foundIndex);
     // return res.send({data: null});

});



app.get("/cars", (req, res) => {
    return res.send({ data: cars });
});

// environment variable
console.log(process.env.PORT);
// Tarnary statment

        app.listen(8080,( error)=>{

            if (error){
                console.log(" Error starting the server") ;
            }
            console.log("Server is running on port", 8080);
        });