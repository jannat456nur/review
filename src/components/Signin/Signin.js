import React from 'react';

const Signin = () => {
    return (
        <div>
            <form>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="w-50" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="w-50" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>

        </div>
    );
};

export default Signin;