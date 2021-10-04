import React from 'react';
import './Header.css'
import '../Service/Service.css'
import { Link } from 'react-router-dom';
import img from "./Learn-online-quran.svg";
import logo from "./logo.jpg";

const Header = () => {
    return (
        <div>


            <div className="row ">



                <div className="col-lg-8 col-md-6 col-sm-12  ">
                    <i className="fas fa-book-open"><span className="special"> Al Quran </span> <span  >Recite</span></i>
                    {/* <p>Al Quran <span>Recite</span></p> */}
                    {/* <img className="logo" src={logo} alt="" /> */}
                    <Link className="  link" to="/home">Home</Link>
                    <Link className="  link " to="/service">Courses</Link>
                    <Link className="  link " to="/free">Free Courses</Link>
                    <Link className=" link" to="/about">About Us</Link><br />


                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <Link className="link " to="/signin">Sign in</Link>
                    <Link className="  link " to="/signup">Sign up <i className="fas fa-sign-in-alt"></i></Link>

                </div>


            </div>
            <div className="row">
                <div className="col-lg-4  heading">
                    <h1 className="text-bold fw-bold fs-1">Learn Quran online with <span className="special">AlQuranRecite</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime adipisci reprehenderit itaque voluptatum. Eum quam culpa necessitatibus, fugiat eveniet at explicabo sint dolorem, omnis in officia repellat asperiores iste fugit?</p>
                    <button className="btn button secondary">Enroll now</button>
                </div>
                <div className="col-lg-8">
                    <img className="image " src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;