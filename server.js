import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const API_URL = "http://localhost:5000/"



// app.use(stat)
app.get("/", (req,res)=>{
    res.render("index.ejs");
})

app.get("/login", (req,res)=>{

})


app.post("/register", async (req, res)=>{
    const name = res.username;
    const password = res.password;
    const email = res.email;
try{
    const response = await axios.get(API_URL + "/" + name + "/" + password + "/" + email);
    res.render("login.ejs",)
}catch(error){
    res.send("Error Occured");
}


})



































app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})