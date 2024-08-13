import React from 'react';

function Main(props){
    const mainStytle = {
        width : "calc(30% - 10px)",
        margin : "10px",
    }

    return (<main 
        style={mainStytle} 
        className="main-component"> 
        <h1 className='button-63'> Eylan {props.sidename}</h1> 
    </main>);

}

export default Main ;
