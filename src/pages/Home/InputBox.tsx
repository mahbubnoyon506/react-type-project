import React, { useRef } from 'react';
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputBox: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
   const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <form className='flex justify-center py-5' onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
                }} >
                <div className='flex items-center relative'>
                    <input className='py-5 px-10 w-full md:w-96 rounded-full focus:outline-none text-lg text-slate-900' ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} type="text" name="todoName" id="" placeholder='Type your todo' />
                    <button className='bg-slate-900 rounded-full ml-[-130px] py-2 px-5 text-slate-100' type="submit" >Add to List</button>
                </div>
            </form>
        </div>
    );
};

export default InputBox;