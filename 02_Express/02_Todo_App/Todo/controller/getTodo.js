//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
        // Featch all todo items from database
        const todos = await Todo.find({});

        // Response 
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'Entire Todo data is fetched'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.getTodoById = async(req, res) => {
    try{
        // Extract todo items basis on ID
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // Given for data id not found
        if (!todo) {
            return res.status(404).json({
                success : false,
                message : "No data found with given Id"
            });
        }

        // Data for given id Found

        res.status(200).json({
            success : true,
            data : todo,
            message : `Todo ${id} data succedfully fetched`
        })
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}