import React from 'react';
import './container.css';

const Container = (props) => {
    return (
        <div className="main-container">
        <div className="container">
            <div className="container-card">
                <div className="titel-section">
                <h1>{props.title}</h1><br></br>
                </div>
                {props.children}
                </div>
        </div>
        </div>);

}
export default Container;