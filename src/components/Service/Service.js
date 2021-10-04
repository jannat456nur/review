import React from 'react';

const Service = (props) => {
    const { title, p } = props.service;
    return (
        <div>
            <div class="col">
                <div class="card h-100">

                    <div class="card-body mt-2">
                        <h1 class="card-title">{title}</h1>
                        <p class="card-text">{p}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;