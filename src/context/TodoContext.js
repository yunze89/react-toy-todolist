import React, {createContext, useReducer} from 'react';
//별도로 Context API와 useReducer를 이용해 상태 관리를 전담하는 Component

//초기 todo list 값
const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성',
        done: true
    },
    {
        id: 2,
        text: '코드 작성하기',
        done: true
    },
    {
        id: 3,
        text: '버그 수정하기',
        done: true
    },
    {
        id: 4,
        text: '리팩토링 하기',
        done: true
    },
];

//state와 action 객체를 넘겨 받는 reducer 함수
const todoReducer= (state, action) =>{
    
    //action type에 따른 state 변경
    switch(action.type){
        
        //새로운 todo 항목을 추가
        case 'CREATE':
            return state.concat(action.todo);

        //해당 id의 todo 항목을 찾아 done값을 toggle
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ?
                {...todo, done: !todo.done} : todo
            );

        //해당 id가 아닌 것만 필터링하여 todo 항목 제거
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        //예외 상황
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

//다른 Component에서 사용할 수 있도록 Context
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

//useReducer를 사용하여 상태를 관리하는 ToDoProvider 컴포넌트
export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        /*Context 에서 사용 할 값은 value로 지정*/
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext value={dispatch}>
                {/*props로 전달받은 children 값을 내부에 렌더링*/}
                {children}
            </TodoDispatchContext>
        </TodoStateContext.Provider>
    );
}
