import React from 'react';
import '../Service/Service.css'

const Signup = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    {/* sign up form */}
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label p-2">Name</label>
                        <input type="password" className="w-50" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label p-2">Phone</label>
                        <input type="password" className="w-50" id="exampleInputPassword1" />
                    </div>

                    {/* <input type="email" className="" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label p-2">Email</label>
                    <input type="email" className="w-50" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label p-2">Password</label>
                    <input type="password" className="w-50" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label p-2"> Confirm Password</label>
                    <input type="password" className="w-50" id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                {/* submit buton */}
                <button type="submit" className="btn secondary mb-2">Submit</button>
            </form>



        </div>
    );
};

export default Signup;