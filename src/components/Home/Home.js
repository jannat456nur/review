import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';


const Home = () => {
    //load data
    const [homeServices, setHomeServices] = useState([])
    //fetch api
    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [])
    return (
        <div>


            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    //pass array of object
                    homeServices.map(homeService => <HomeService
                        key={homeService.id}
                        homeService={homeService}

                    ></HomeService>)
                }
            </div>

        </div>
    );
};

export default Home;