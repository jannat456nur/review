import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    const [homeServices, setHomeServices] = useState([])
    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [])
    return (
        <div>


            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    homeServices.map(homeService => <HomeService
                        key={homeService.id}
                        homeService={homeService}

                    ></HomeService>)
                }
            </div>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;