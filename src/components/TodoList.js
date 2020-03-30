import React from 'react';
import TodoListBlock from './TodoList.style';
import TodoItem from './TodoItem';

const TodoList = ()=>{
    return (
        <TodoListBlock>
            <TodoItem text='프로젝트 생성' done/>
            <TodoItem text='코드 작성하기' done/>
            <TodoItem text='버그 수정하기' done={false}/>
            <TodoItem text='리펙토링 하기' done={false}/>
        </TodoListBlock>
    )
};

export default TodoList;
