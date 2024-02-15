
var express=require("express");
var app=express();
var port=3002;
let fs=require("fs");
var bcrypt=require("bcrypt")
var jwt=require("jsonwebtoken")
const secretKey = 'yourSecretKey';
app.use(express.json())
let array=[]

app.get("/user",(req,res)=>{

    fs.readFile("index1.json",(err,data)=>{
        
        res.json(JSON.parse(data));
        
    })


})


app.post("/register",async(req,res)=>{
    // console.log(req.body)
    const {username,password}=req.body
    const hash= await bcrypt.hash(password,13)
    const token = jwt.sign(username,secretKey);
    fs.readFile("index1.json",(err,data)=>{
        // console.log(JSON.parse(data))
        if(data==undefined){
            array.push({
                username,
                password:hash,
                token
               })
               fs.writeFile("index1.json",JSON.stringify(array),(err,data)=>{
                res.json("Successfully Data Stored");
            })
        }
       
        else{
            var file=JSON.parse(data)
            // console.log(file)
            // console.log(username)
            const user = file.find(u => u.username === username);
            // console.log(user)
            if(!user){
                array.push({
                    username,
                    password:hash,
                    token
                   })
                //    console.log(array)
                fs.writeFile("index1.json",JSON.stringify(array,null,2),(err,data)=>{
                    res.json("Successfully Data Stored");
                })
                // res.json("Login Credentials are Correct")
            }else{
                res.json("Wrong Credentials")
            }

        }
      
    })
   
    
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    const {username,password}=(req.body)
    
    fs.readFile("index1.json",(err,data)=>{
        let file=JSON.parse(data)
        console.log(file)

        const user = file.find(u => u.username === username)
        console.log(user)
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                res.json(result)
            })
        }else{
            res.json("Wrong Credentials")
        }

    })
   

})

app.listen(port,()=>{
    console.log(`hello ${port} port`)
})