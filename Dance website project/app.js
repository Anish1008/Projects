const express = require("express");
const path= require("path");
const app = express();
const port = 80;

//Serving static files
app.use("/static", express.static("static"));
//Setting up pug
app.set("view engine","pug");

app.set("views",path.join(__dirname,"./components"));


app.get("/", (req,res)=>{
    res.status(200).render("index");
});

app.get("/services",(req,res)=>{
    res.status(200).render("services")
})
app.listen(port, ()=>{
    console.log(`Listening on localhost at port ${port}`)
});