import React from 'react';
import GoHomeBtn from './GoHomeBtn';

const ChocolateBar = () => {
    return (
        <div>
            <img style={{width: '500px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Green_and_Black%27s_dark_chocolate_bar_2.jpg"
                alt="Chocolate Bar"
            />
            <GoHomeBtn />
        </div>
    );
}

export default ChocolateBar;