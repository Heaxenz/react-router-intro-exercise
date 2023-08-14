import {Link} from 'react-router-dom';
import React from 'react';


const GoHomeBtn = () => {
    return (
        <nav>
            <Link to="/">
                 Go Back
             </Link>
        </nav>
        
    );
}

export default GoHomeBtn;