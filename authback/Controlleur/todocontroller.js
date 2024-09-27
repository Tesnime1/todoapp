const TodoModels = require("../Models/TodoModels")

module.exports.getTodo=async(req,res)=>{
    const todo=await TodoModels.find()
    res.send(todo)
}
module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body
    TodoModels
    .create({text})
    .then((data)=>{
        console.log("added succeffully ..")
        console.log(data)
        res.send(data)


    })
    .catch((err)=>{console.error("lerreur est ",err)})
}
module.exports.updateTodo=async(req,res)=>{
    const {_id,text}=req.body
    TodoModels.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("update successfully...."))
    .catch((err)=>console.log(err))
}
module.exports.deleteTodo=async(req,res)=>{
    const {_id,text}=req.body
    TodoModels.findByIdAndDelete(_id,{text})
    .then(()=>res.send("delete successfully...."))
    .catch((err)=>console.log(err))
}