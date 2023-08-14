import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <img style={{width: '400px'}}
                src="https://content.syndigo.com/asset/d6690171-11c6-476e-aa53-273cd368be1f/1920.png"
                alt="vending Machine"
            />
            <nav>
                <Link to="/cookie">
                    Cookie
                </Link>
                <Link to="/chips">
                    Chips
                </Link>
                <Link to="/chocolate-bar">
                    Chocolate Bar
                </Link>
            </nav>
         </div>
    )
    
}

export default Home;