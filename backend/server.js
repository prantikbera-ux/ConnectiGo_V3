const express = require("express")
const router = require("./routes/route")
const dotenv  = require("dotenv")

dotenv.config({path : '.env-local'});
const app = express();
PORT = process.env.PORT || '8001';


//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes

app.get("/",(req,res)=>{
    res.status(200).json({name : 'tammim', title : 'hq'})
})

app.use("/user",router)

app.listen(PORT,()=>{
    console.log(`sever is running on ${PORT}`);
})