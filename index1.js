
let express=require("express")

let conn=require("task.js")

app.use(express.json())

let sqlQuery="create table employee (name varchar(10),age int,company varchar(50),salary int);"

app.get("/",(req,res)=>{

    conn,query(sqlQuery,(err,data)=>{
        console.log(data)
    })
})


app.get("/users",(req,res)=>{

    conn.query("insert into employee set ?",req.body,(err,data)=>{
        res.status(200).json({
            "status":200
        })
    })
})

app.listen(3002,()=>{
    console.log(`hello ${port} port`)
})