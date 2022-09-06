import React from 'react';
import "./Footer.css"

const Foot = (foot) => {
    return (
        <>
            <div className="container-footer">
                <p className="text-footer">{foot.text}</p>
            </div>
        </>
    ) 
}

export default Foot