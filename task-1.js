var express=require("express");
var app=express();
var fs=require("fs")
var {LocalStorage} = require('node-localstorage') 
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })


app.use(express.json());

var localstorage=new LocalStorage("./datastore")
app.get("/users",(req,res)=>{
  let store=[]
  console.log(localstorage.getItem("value"))
    store=JSON.parse(localstorage.getItem("value"))
console.log(req.body)
 store.push(req.body)
  localstorage.setItem("value",JSON.stringify(store,null,2))
   
  // const storedata=localstorage.getItem("value")
  res.send("storedata")
// }

})

app.listen(3002,()=>{
    console.log("hello")
})