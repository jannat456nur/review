import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <footer className="row bg-black text-white p-5 mt-5 ">
                {/* <i class="fab fa-whatsapp "></i>
                <i class="fab fa-instagram-square "></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i> */}
                <div className="col-lg-12 col-md-6 col-sm-12">
                    <i class="fab fa-whatsapp p-2 "></i>
                    <i class="fab fa-instagram-square p-2 "></i>
                    <i class="fab fa-facebook p-2"></i>
                    <i class="fab fa-twitter p-2"></i>
                    <p>Info.Support.Learning</p>
                    <p>Terms of Use.private policy</p>
                    <p> ©  copyright 2021</p>

                </div>

            </footer>

        </div>
    );
};

export default Footer;