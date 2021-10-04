import React from 'react';
import { Link } from 'react-router-dom';
import '../Service/Service.css'

const Error = () => {
    return (
        <div>
            <h1 className="text-bold">404</h1>
            <h3>Not Found</h3>
            <Link to="/home"><button type="submit" className="btn secondary mb-2">Go back</button></Link>
        </div>
    );
};

export default Error;