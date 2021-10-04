import React from 'react';
import './Service.css';

const Service = (props) => {
    //distructuring
    const { title, p, img, taka } = props.service;
    return (
        <div>

            <div className="col container">
                {/* Show title id dinamically  */}
                {/* <div className="card h-100">
                    <img src={img} alt="" />
                    <div className="card-body mt-2  shadow p-3 mb-5 bg-body rounded explore-card">
                        <h1 className="card-title">{title}</h1>
                        <p className="card-text">{p}</p>
                        <button className="btn secondary">Learn more<i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div> */}
                <div className="col container   explore-card">
                    <div className="card h-100">
                        <img src={img} alt="" />
                        <div className="card-body mt-2 ">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{p}</p>
                            <h3 className="card-text">{taka}</h3>
                            <button className="btn secondary">Learn more<i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;