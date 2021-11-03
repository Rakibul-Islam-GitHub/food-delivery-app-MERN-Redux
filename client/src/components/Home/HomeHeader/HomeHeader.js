import React from 'react';
import {Link} from 'react-router-dom'
import './homeheader.css'

const HomeHeader = () => {
    return (
        <>
        <section className="home" id="home">
            
                <div className="home-wrapper d-grid">
                    <div className="col-left">
                        
                        <h1>Enjoy our <br/> majestic meals</h1>

                        <p>Vestibulum sed augue ac lorem rutrum congue. Donec cursus mollis sapien, non vulputate odio
                            congue id. Sed mattis, tortor nec facilisis laoreet, mauris magna finibus nisl, eu pulvinar
                            erat libero in turpis. </p>

                        <div className="search-food d-flex">
                            <input type="text" placeholder="Search food..."/>
                            <Link to="#" className="search-btn"> Search</Link>
                        </div>
                        <div className="social-icons d-flex">
                            <a href="https://linkedin.com/in/rakibul21" target="_blank" rel="noreferrer noopener"> <img src="images/facebook.svg" alt="facebook"/></a>
                            <a href="https://twitter.com/_rakibul" target="_blank" rel="noreferrer noopener"> <img src="images/twitter.svg" alt="twitter"/></a>
                            <a href="https://linkedin.com/in/rakibul21" target="_blank" rel="noreferrer noopener" > <img src="images/linkedin.svg" alt="Linkedin"/></a>
                        </div>

                    </div>
                    <div className="col-right">
                        <img data-tilt src="images/hero-img.png" alt="Home" className="img-fluid"/>
                    </div>
                </div>
            

        </section>
            
        </>
    );
};

export default HomeHeader;