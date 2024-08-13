import React, { useState } from 'react';

function Promo(props){
    const[word, setWord] = React.useState('0%')

    function handleClick() {
      setWord('30%')
    }
    return(
        <div className='font'>
        <Promo messeage = {word + useState}/>
        <button onClick={handleClick}> test </button>
        </div>
    ) ;
}

export default Promo ;