let sql=require("mysql");

let con=sql.connection({
    host:"localhost",
    user:"mani",
    password:"mani@2805",
    database:"mani"
})

con.connect(()=>{
    console.log("connect databse success")
})

module.exports=con