import React from 'react';
import '../Service/Service.css'

const Signin = () => {
    return (
        <div>
            <form>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="w-50" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="w-50" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                </div>
                <button type="submit" className="btn secondary mb-2">Submit</button>
            </form>

        </div>
    );
};

export default Signin;