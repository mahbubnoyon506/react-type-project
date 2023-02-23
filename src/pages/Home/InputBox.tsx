import React from 'react';
interface Props = {
    todo: String;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputBox = ({todo, setTodo}: Props) => {
    return (
        <div>
            <form className='flex justify-center py-5'>
                <div className='flex items-center relative'>
                    <input className='py-5 px-10 w-full md:w-96 rounded-full focus:outline-none text-lg text-slate-900' type="text" name="todoName" id="" placeholder='Type your todo' />
                    <button className='bg-slate-900 rounded-full ml-[-130px] py-2 px-5 text-slate-100'>Add to List</button>
                </div>
            </form>
        </div>
    );
};

export default InputBox;