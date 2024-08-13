import React from "react";
import '../App.css' ;

function ModeToggler(){
    let darkModeOn = true ;
    const darkMode = <h1>Dark Mode</h1>
    const lightMode = <h1>Light Mode</h1>
    
    function handleClick(){
        darkModeOn = !darkModeOn ;
        if (darkModeOn = true){
            console.log("Dark Mode Is On  ")
         } else {
            console.log("Light Mode Is On")
         }
    }

    return (
      <div className="font">
          <center >
          {darkModeOn ? darkMode : lightMode}
          <button className="button-63" onClick = {handleClick}>
            Change Mode
          </button>
          </center>
      </div>
    ) 
}

export default ModeToggler ;