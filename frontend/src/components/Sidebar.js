import React from 'react';

function Sidebar(props){
    const asideStyle = {
        width : "calc(30% - 10px)",
        margin : "10px",
        justifyContent : 'right',
        alignItems  : 'right',
        
    }
    
    return (<aside 
        style={asideStyle}
        className="sidebar-component">
        <h2 className='font'>Eylan</h2> 
    </aside>
    );

}

export default Sidebar ;
