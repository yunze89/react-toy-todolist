import React, { useState } from 'react';
import {MdAdd} from 'react-icons/md';
import {CircleButton, InsertFormPositioner, InsertForm, Input} from './TodoCreate.style';

const TodoCreate = ()=>{
  const [open, setOpen] = useState(false);
  const onToggle = ()=> setOpen(!open);                 //toggle 함수

  return (
      <>
          { /*open이 true일 때 rendering*/
            open && (
                  <InsertFormPositioner>
                      <InsertForm>
                          <Input autoFocus placeholde='할 일을 입력 후, Enter를 누르세요'/>
                      </InsertForm>
                  </InsertFormPositioner>
            )
          }
          <CircleButton onClick={onToggle} open={open}>
              <MdAdd />
          </CircleButton>
      </>
  );
};

export default TodoCreate;
