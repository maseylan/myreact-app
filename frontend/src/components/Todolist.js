import { useTodoListContext } from "./Todolistprovider";

const TodoList = () => {
    
    const { Todo } = useTodoListContext() ;

    return (
        <div>
            <h1>
                Todo List Using Context API
            </h1>
                {Todo.map((todo, index) => (
                    <h2 key={index}>{todo} </h2>
                ))}
        </div>

    ) ;
}

export default TodoList ;
