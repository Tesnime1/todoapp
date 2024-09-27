import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

export default function TodoApp({ text, updateMode, deleteTodo }) {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className='icon' onClick={updateMode} />
        <AiFillDelete className='icon' onClick={deleteTodo} />
      </div>
    </div>
  );
}
