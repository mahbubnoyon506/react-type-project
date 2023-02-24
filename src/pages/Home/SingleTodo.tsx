import React, { useEffect, useRef, useState } from 'react';
import { Todo } from './model';
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);

    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleTodoDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleSubmit = (e: React.FormEvent, id:number) => {
       e.preventDefault();
       setTodos(todos.map((todo) => (todo.id === id ? {...todo, todo:editTodo} : todo)));
       setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect( () => {
      inputRef.current?.focus()
    }, [edit])

    return (
        <div className='flex justify-between items-center bg-gray-700 rounded shadow-lg p-5'>
            {
                edit ? (
                    <form className='flex justify-center items-center relative' onSubmit={ (e) => handleSubmit( e, todo.id)}>
                        <input ref={inputRef} className='w-96 py-2 pl-2 focus:outline-none rounded shadow-lg' type="text" name="" id="" value={editTodo} onChange={ (e) => setEditTodo(e.target.value) } />
                        <button className='uppercase px-2 rounded bg-slate-900 text-slate-100 text-lg absolute right-2'>Edit</button>
                    </form>
                ) :
                    (
                        todo.isDone ?
                            <s className='bg-transparent focus:outline-none text-slate-100'> {todo.todo} </s> :
                            <span className='bg-transparent focus:outline-none text-slate-100'>{todo.todo} </span>
                    )

            }
            <div className='flex items-center text-slate-100'>
                <AiFillEdit className='cursor-pointer' size={30} onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }} />
                <AiOutlineCheck className='cursor-pointer mx-2' onClick={() => handleTodoDone(todo.id)} size={30} />
                <FaTrashAlt className='cursor-pointer' onClick={() => handleDelete(todo.id)} size={25} />
            </div>
        </div>
    );
};

export default SingleTodo;