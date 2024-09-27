import axios from 'axios';
 const baseurl="http://localhost:5000"

export const getAllTodo = async (setTodos) => {
  axios.get(baseurl).then(({data})=>{console.log('data--->',data)
    setTodos(data)
  })
};
export const addtodo =  (text, setText, setTodos) => {
  try {
      axios.post(`${baseurl}/save`, { text });
      setText("");
     getAllTodo(setTodos); // Attendre que getAllTodo ait fini
  } catch (err) {
      console.log(err);
  }
};

export const updateTodo =(todoId, text, setTodos, setText, setIsUpdating) => {
    try {
         axios.post(`${baseurl}/update`, { _id: todoId, text }).then((data)=>{
          setText("");
          setIsUpdating(false);
         getAllTodo(setTodos); 
         }); 
        
    } catch (err) {
        console.log(err);
    }
};
export const deleteTodo=(_id, setTodos)=>{
  axios.post(`${baseurl}/delete`,{_id})
  .then((data)=>{getAllTodo(setTodos)})
  .catch((err)=>console.log(err))
}
