import { useReducer } from "react";


const reducer = ( state , action ) => {
    if ( action.type === 'increase' ) return { val_ : state.val_ + 10}
    if ( action.type === 'decrease') return { val_ : state.val_ -10 }
    return new Error() ;
}

function Incdec() {


    let initialState = { val_ : 100 } ;
    const [ state , dispatch] = useReducer( reducer , initialState )


    return (
        <div className="App">
            <h1> Value : { state.val_ }</h1>
            <div> 
                <button onClick={() => dispatch({type : 'increase' })} className="button-63"> Increase Value 
                </button>
                <br></br>
                <button onClick={() => dispatch({type : 'decrease' })} className="button-63"> Decreae Value
                </button>
            </div>
        </div>

    ) ;
}

export default Incdec ;