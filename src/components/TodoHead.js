import React from 'react';
import TodoHeadBlock from './TodoHead.style';

const TodoHead = () => {
  return (
      <TodoHeadBlock>
          <h1>2020년 3월 30일</h1>
          <div className='day'>월요일</div>
          <div className='tasks-left'>할 일 2개 남음</div>
      </TodoHeadBlock>
  )
};

export default TodoHead;
