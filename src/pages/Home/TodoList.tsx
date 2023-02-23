import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='grid md:grid-cols-2 gap-5 md:gap-10 my-5'>
            {
                todos.map((todo) =>
                    <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
                )
            }
        </div>
    );
};

export default TodoList;