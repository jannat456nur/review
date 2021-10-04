import React from 'react';

const HomeService = (props) => {
    const { title, id, p, taka } = props.homeService;
    return (
        <div>
            <div class="col">
                <div class="card h-100">

                    <div class="card-body mt-2">
                        <h1 class="card-title">{title}</h1>
                        <p class="card-text">{p}</p>
                        <p class="card-text">{taka}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;