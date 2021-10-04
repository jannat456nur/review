import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="row  nav ">


                <div className="col-lg-6 col-md-6 col-sm-12  ">
                    <h1 className="heading"> Learn quran</h1>

                    <Link className=" text-white link" to="/home">Home</Link>
                    <Link className=" text-white link " to="/service">Services</Link>
                    <Link className=" text-white link" to="/about">About</Link><br />
                    <button className="btn btn-secondary button">Enroll now</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <Link className=" text-white link " to="/signin">Sign in</Link>
                    <Link className=" text-white link " to="/signup">Sign up <i class="fas fa-sign-in-alt"></i></Link>

                </div>


                <div className="col-lg-6">
                    <img src="" alt="" />
                </div>
                <div className="col-lg-6">

                    <h1 className="text-white">Learn To Read Quran</h1>
                </div>

            </div>
            {/* <div className="row">
                <div className="col-lg-6">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime adipisci reprehenderit itaque voluptatum. Eum quam culpa necessitatibus, fugiat eveniet at explicabo sint dolorem, omnis in officia repellat asperiores iste fugit?</p>
                </div>
                <div className="col-lg-6">
                    <img src="./banner-3.jpg" alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default Header;