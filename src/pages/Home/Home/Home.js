import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            {/* <button className='bg-primary w-8 p-32'>hey</button>
            <button className='bg-secondary w-8 p-32'>hey</button>
            <button className='bg-accent w-8 p-32'>hey</button>
            <button className='bg-neutral w-8 p-32'>hey</button> */}
        </div>
    );
};

export default Home;