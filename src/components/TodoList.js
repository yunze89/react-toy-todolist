import React from 'react';
import TodoListBlock from './TodoList.style';
import TodoItem from './TodoItem';
import {useTodoState} from '../context/TodoContext';    //todo 상태 값을 context를 이용해 import

const TodoList = ()=>{
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {
                //todo 항목을 todos 값을 가지고 랜더링
                todos.map(todo=>(
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                  ></TodoItem>
                ))
            }
        </TodoListBlock>
    )
};

export default TodoList;
