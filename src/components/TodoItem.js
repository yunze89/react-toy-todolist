import React from 'react';
import TodoItemBlock, {Remove, CheckCircle, Text} from './TodoItem.style';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../context/TodoContext';   //context를 이용하여 dispatch를 import

//상위 컴포넌트에서 넘겨받을 props : id(한 항목 Component 고유 아이디), done(완료됬는지), text(할일 내용)
const TodoItem = ({id, done, text})=>{
    const dispatch = useTodoDispatch();
    const onToggle = ()=> dispatch({type:'TOGGLE', id});
    const onRemove = ()=> dispatch({type:'REMOVE', id});

    return (
        <TodoItemBlock>
            {/*체크 버튼*/}
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone/>}
            </CheckCircle>
            
            {/*할 일 텍스트*/}
            <Text done={done}>{text}</Text>
            
            {/*제거 버튼*/}
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
};

export default TodoItem;
