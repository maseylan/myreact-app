import React from "react";

const TodoContext = React.createContext() ;

const TodayTodo = [ "GAMS Checking" , "VMS Checking" , "SDC Checking" ] ;

const TodoProvider = ( {children} ) => {

    const [Todo , setTodoList ] = React.useState(TodayTodo) ;

    return (
        <TodoContext.Provider value = {{Todo}} >
            {children}
        </TodoContext.Provider>
    ) ;
}

export const useTodoListContext = () => React.useContext(TodoContext) ;

export default TodoProvider ;
