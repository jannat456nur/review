import React from 'react';
import './Service.css';

const Service = (props) => {
    const { title, p } = props.service;
    return (
        <div>
            <div class="col">


                <div class="card-body mt-2 cart">
                    <h1 class="card-title">{title}</h1>
                    <p class="card-text">{p}</p>
                    <button className="btn secondary">Learn more<i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Service;