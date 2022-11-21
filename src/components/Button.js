import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="btn border-none text-black bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l">{children}</button>
    );
};

export default Button;