import React from 'react';
import TodoTemplateBlock from './TodoTemplate.style';

// TodoList 각종 Component들이 담길 Container 격 Component
const TodoTemplate = ({children})=>{
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
};

export default TodoTemplate;
