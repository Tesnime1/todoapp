// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// const UserProfile = () => {
 
  
//   return (
//     <div className="container">
//       <h2>Bienvenue</h2>
//     </div>
//   );
// };

// export default UserProfile;
import { useEffect, useState } from 'react';
import TodoApp from '../Todoapp/Todoapp'; 
import { getAllTodo ,addtodo,updateTodo, deleteTodo} from '../Utils/HandleApi';


export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');  
  const[isUpdating,setIsUpdating]= useState(false)
  const[todoId,setTodoId]=useState("")
  useEffect(() => {
    getAllTodo(setTodos);
  }, []);
  const updateMode =(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  
  }
  
 
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input 
            type="text" 
            placeholder="Add todos..." 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <div className="add" onClick={isUpdating ?
           ()=>updateTodo(todoId , text ,setTodos,setText,setIsUpdating):
            ()=>addtodo(text,setText,setTodos)}>{isUpdating ?"Update":"Add"}</div> 
        </div>
        <div className='list'> 
          {todos.map((item) => (
            <TodoApp
             key={item._id}
            text={item.text}
            updateMode={()=>updateMode(item._id, item.text)}
            deleteTodo={()=>{deleteTodo(item._id, setTodos)}}
              />
          ))}
        </div>
      </div>
    </div>
  );
}


