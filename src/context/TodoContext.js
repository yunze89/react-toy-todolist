import React, {createContext, useContext, useReducer, useRef} from 'react';
//별도로 Context API와 useReducer를 이용해 상태 관리를 전담하는 Component

//초기 todo list 값 (하드코딩)
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
        done: false
    },
    {
        id: 4,
        text: '리팩토링 하기',
        done: false
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

//다른 Component에서 사용할 수 있도록 Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

//useReducer를 사용하여 상태를 관리하는 ToDoProvider 컴포넌트
export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        /*Context의 Provider component를 이용, Context 에서 사용 할 값은 value로 지정*/
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {/*props로 전달받은 children 값을 내부에 렌더링*/}
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

//커스텀 Hooks를 만들어 내보내준다. (외부 컴포넌트에서 useContext를 직접 할 필요 없도록)
export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    //TodoProvider로 감싸져 있지 않은 경우의 에러 처리
    if(!context){
        throw new Error('cannot find TodoProvider');
    }
    return context;
};
export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    //TodoProvider로 감싸져 있지 않은 경우의 에러 처리
    if(!context){
        throw new Error('cannot find TodoProvider');
    }
    return context;
};
export const useTodoNextId = ()=> {
    const context = useContext(TodoNextIdContext);
    //TodoProvider로 감싸져 있지 않은 경우의 에러 처리
    if(!context){
        throw new Error('cannot find TodoProvider');
    }
    return context;
};
