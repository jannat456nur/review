import React from 'react';
import './Service.css';

const Service = (props) => {
    //load data
    const { title, p } = props.service;
    return (
        <div>
            <div className="col">


                <div className="card-body mt-2 cart">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{p}</p>
                    <button className="btn secondary">Learn more<i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Service;