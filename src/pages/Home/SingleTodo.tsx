import React from 'react';
import { Todo } from './model';
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const handleTodoDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    return (
        <div className='flex justify-between items-center bg-gray-700 rounded shadow-lg p-5'>
            {
                todo.isDone ?
                    <s className='bg-transparent focus:outline-none text-slate-100'> {todo.todo} </s> :
                    <span className='bg-transparent focus:outline-none text-slate-100'>{todo.todo} </span>
            }
            <div className='flex items-center text-slate-100'>
                <AiFillEdit className='cursor-pointer' size={30} />
                <AiOutlineCheck className='cursor-pointer mx-2' onClick={() => handleTodoDone(todo.id)} size={30}  />
                <FaTrashAlt className='cursor-pointer' size={25} />
            </div>
        </div>
    );
};

export default SingleTodo;