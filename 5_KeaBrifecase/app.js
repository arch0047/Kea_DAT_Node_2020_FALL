const express= require("express");
const app =express();

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//read and upload the page and serve it on
const fs= require("fs") ;// til file system

const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();
const header=fs.readFileSync(__dirname + "/public/header/header.html").toString();


//const uploadPage= fs.readFileSync(__dirname +"/public/upload/upload.html","utf-8");
// other way
const uploadPage= fs.readFileSync (__dirname +"/public/upload/upload.html").toString();
const aboutPage = fs.readFileSync(__dirname + "/public/about/about.html").toString();
const downloadPage = fs.readFileSync(__dirname + "/public/download/download.html").toString();

app.get("/", (req, res) => {
    return res.send(header + uploadPage + footer);
});
app.get("/about", (req, res) => {
    return res.send(header + aboutPage + footer);
});

/* app.get("/about", (req, res) => {
    return res.sendFile(__dirname + "/public/about/about.html");
}); */

app.get("/download/:id", (req, res) => {
    return res.send(header + downloadPage + footer);
});
/* app.get("/download", (req, res) => {
    return res.sendFile(__dirname + "/public/download/download.html");
}); */

const uploadRouter = require("./routes/upload.js");
app.use(uploadRouter);

const port  = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Server couldn't start :( ", error);
    }
    console.log("Server started on port", Number(port));
});