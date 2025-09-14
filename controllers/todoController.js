const Todo = require("../models/todoModels");

//get all todos
exports.getAllTodos = async(req,res) => {
    try{
        const todos= await Todo.find();
        res.status(200).json({
            status: "success",
            results: todos.length,
            data: {
                todos
            }
        });
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.createTodo = async(req,res) => {
    try{
        const todos= await Todo.create(req.body);
        res.status(200).json({
            status: "success",
            results: todos.length,
            data: {
                todos
            }
        });
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.updateTodo = async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("Params:", req.params);

    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: { todo }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message
    });
  }
};



exports.deleteTodo = async(req,res) => {
    try{
        const todos= await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            results: todos.length,
            data: {
                todos
            }
        });
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

