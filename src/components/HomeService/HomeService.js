import React from 'react';
import './HomeServices.css'

const HomeService = (props) => {
    const { title, p, taka, img } = props.homeService;
    return (
        <div>
            <div class="col cart ">
                <div class="card h-100">
                    <img src={img} alt="" />
                    <div class="card-body mt-2 ">
                        <h1 class="card-title">{title}</h1>
                        <p class="card-text">{p}</p>
                        <h1 class="card-text">{taka}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;