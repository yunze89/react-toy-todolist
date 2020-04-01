import React from 'react';
import TodoHeadBlock from './TodoHead.style';
import {useTodoState} from '../context/TodoContext';    //context를 이용해 todo 상태 값 import

const TodoHead = () => {
    const todos = useTodoState();   //context api로 전역으로 관리하는 todo state를 가져온다.
    const undoneTasks = todos.filter(todo => !todo.done);   //처리하지 않은 todo 목록

    //오늘 날짜 표시위한 처리
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
};

export default TodoHead;
