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
                        <h3 class="card-title">{title}</h3>
                        <p class="card-text">{p}</p>
                        <h3 class="card-text">{taka}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;