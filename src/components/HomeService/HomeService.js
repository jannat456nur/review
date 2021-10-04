import React from 'react';
import './HomeServices.css'

const HomeService = (props) => {
    // distructuring
    const { title, p, taka, img } = props.homeService;
    return (
        <div>
            <div className="col container   explore-card">
                <div className="card h-100">
                    <img src={img} alt="" />
                    <div className="card-body mt-2 ">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{p}</p>
                        <h3 className="card-text">{taka}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;