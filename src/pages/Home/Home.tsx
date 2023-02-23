import React, { useState } from 'react';
import InputBox from './InputBox';

const Home : React.FC = () => {
    const [todo, setTodo] = useState<string>('')
    return (
        <div className=''>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold uppercase pb-5 text-slate-100'>Taskify</h1>
            <InputBox todo={todo} setTodo={setTodo} />
        </div>
    );
};

export default Home;