import { useTodoListContext } from "./Todolistprovider";

const Counter = () => {

    const{ Todo } = useTodoListContext() ;
    
    return (
        <div>
            <h3> Number of Todo Remaining  : { Todo.length } </h3>
        </div>

    ) ;
}

export default Counter ;
