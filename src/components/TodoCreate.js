import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import {CircleButton, InsertFormPositioner, InsertForm, Input} from './TodoCreate.style';
import {useTodoDispatch, useTodoNextId} from '../context/TodoContext';

const TodoCreate = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');     //input 값 저장하기 위한 state

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);                 //toggle 함수
    const onChange = e => setValue(e.target.value);        //input 값 change event listener 함수
    const onSubmit = e => {
        e.preventDefault();
        //새로운 todo 항목 추가하는 dispatch 실행
        dispatch({
            type:'CREATE',
            todo:{
                id:nextId.current,
                text: value,
                done:false
            }
        });
        setValue('');       //input 창 비우기
        setOpen(false);     //todo 추가 창 닫기
        nextId.current+=1;       //다음 id 값 증가
    };

    return (
        <>
            { /*open이 true일 때 rendering*/
                open && (
                    <InsertFormPositioner>
                        <InsertForm onSubmit={onSubmit}>
                            <Input autoFocus placeholde='할 일을 입력 후, Enter를 누르세요' onChange={onChange} value={value}/>
                        </InsertForm>
                    </InsertFormPositioner>
                )
            }
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    );
};

export default TodoCreate;
