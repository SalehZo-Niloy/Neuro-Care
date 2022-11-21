import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../assets/images/doc1.png'
import Button from '../../../components/Button';

const MakeAppointment = () => {
    return (
        <section className='w-11/12 mx-auto mb-12 mt-12 md:mt-40 bgi-appointment px-4 md:px-8 lg:px-16'>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row-reverse p-0">
                    <img src={doctor} className="hidden md:block md:w-2/5 lg:w-1/3 rounded-lg -mt-16 lg:-mt-32" alt='' />
                    <div className='py-4'>
                        <h3 className='text-primary text-xl font-semibold mb-1 lg:mb-4'>Appointment</h3>
                        <h1 className="text-2xl lg:text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="text-sm lg:text-base py-2 lg:py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;