// const Todo = require('../models/todoModel');


// exports.addTodo = async (req, res) => {
//   const { task } = req.body;
//   const userId = req.user.id; 

//   try {
//     const newTodo = await Todo.create({ task, user: userId });
//     res.status(201).json(newTodo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// exports.getTodos = async (req, res) => {
//   try {
//     const todos = await Todo.find({ user: req.user.id });
//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// exports.updateTodo = async (req, res) => {
//   const { id } = req.params;
//   const { task, completed } = req.body;

//   try {
//     const updatedTodo = await Todo.findByIdAndUpdate(
//       id,
//       { task, completed },
//       { new: true }
//     );
//     if (!updatedTodo) return res.status(404).json({ message: "Task not found" });
//     res.status(200).json(updatedTodo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// exports.deleteTodo = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedTodo = await Todo.findByIdAndDelete(id);
//     if (!deletedTodo) return res.status(404).json({ message: "Task not found" });
//     res.status(200).json({ message: "Task deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
