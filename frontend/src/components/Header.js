import React from "react";
import "../css/Style.css" ;

function Header(props){
    const headerStyle = {
        width : "fixed",
        margin : "20px",
        content : "left",
        h1 : 'grey',

    }

    return (
    <header className="headerStyle">
        <div >
            <h1 className="font"> {props.name} {props.color} </h1>
        </div>
    </header>
    );
}

export default Header ;
