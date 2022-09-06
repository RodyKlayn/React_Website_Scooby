import React from 'react';
import "./Header.css"

const Header = (head) => {
    return ( 
        <>
            <div className="container-title">
                <a href="index.html" className="link-title">
                    <p className="title">{head.name}</p>
                </a>
            </div>
        </>
     );
}
 
export default Header;