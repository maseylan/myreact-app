import '../css/Style.css'

// function Btn(){
//     const clickHandler =
//     () => console.log('clicked')
//     return(
//         <button onClick={clickHandler}>
//             Click Me
//          </button>

//     )};

// export default Btn ;

function Btn(){
    const clickHandler =
    () => console.log('Clicked')
    return(
        <center><button className='button-63'
        onMouseOver={clickHandler}>
            Click Me
         </button></center>
    );
}

export default Btn ;