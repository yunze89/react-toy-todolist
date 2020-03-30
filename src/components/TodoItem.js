import React from 'react';
import TodoItemBlock, {Remove, CheckCircle, Text} from './TodoItem.style';
import { MdDone, MdDelete } from 'react-icons/md';

//상위 컴포넌트에서 넘겨받을 props : id(한 항목 Component 고유 아이디), done(완료됬는지), text(할일 내용)
const TodoItem = ({id, done, text})=>{
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
};

export default TodoItem;
