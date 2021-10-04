import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="row  nav ">


                <div className="col-lg-6 col-md-6 col-sm-12  ">
                    {/* <h1 className="heading"> Learn quran</h1> */}

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
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum distinctio accusamus corrupti dolore deserunt sed culpa at quia in.</p> */}
                    <h1 className="text-white">Learn To Read Quran</h1>
                </div>

            </div>



            {/* 
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="container-fluid">

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" href="#">Services</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" href="#">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" href="#">Log In</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" href="#">Sign In</Link>
                                </li>



                            </ul>

                        </div>
                    </div>
                </nav>
            </header> */}

        </div>
    );
};

export default Header;