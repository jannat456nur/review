import React from 'react';
import '../Service/Service.css'

const Signup = () => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label p-2">Name</label>
                        <input type="password" class="w-50" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label p-2">Phone</label>
                        <input type="password" class="w-50" id="exampleInputPassword1" />
                    </div>

                    {/* <input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label p-2">Email</label>
                    <input type="email" class="w-50" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label p-2">Password</label>
                    <input type="password" class="w-50" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label p-2"> Confirm Password</label>
                    <input type="password" class="w-50" id="exampleInputPassword1" />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn secondary mb-2">Submit</button>
            </form>

        </div>
    );
};

export default Signup;