import React from 'react';
import Button from '../../../components/Button';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero p-2 lg:p-8 bgi w-11/12 mx-auto my-4 md:my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/3swXwjx/high-angle-ct-scan-machine-room-23-2149341486.webp" className="w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-xl lg:text-5xl font-bold text-white">Specialization in the evaluation & treatment of disorders affecting the Nervous System</h1>
                    <p className="py-3 md:py-6 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;