import React, { useState } from 'react';
import InputBox from './InputBox';
import { Todo } from './model';
import TodoList from './TodoList';

const Home: React.FC = () => {
    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo('')
        }
    }
    console.log(todos)
    return (
        <div className=''>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold uppercase pb-5 text-slate-100'>Taskify</h1>
            <InputBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <div>
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </div>
    );
};

export default Home;