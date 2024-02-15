
var express=require("express")
var app=express()
var {LocalStorage}=require("node-localstorage");

app.use(express.json())

var localstorage=new LocalStorage("./datafile")

app.get("/login",(req,res)=>{
    const data=[]
    // localstorage.setItem('data',data)

    console.log(localstorage.getItem("value"))
    console.log(req.body)
    data.push(req.body)

    localstorage.setItem("value",JSON.stringify(data,null,2))

    res.send("Login Sucessfully")
    
})

app.listen(3002,()=>{
    console.log("hello")
})