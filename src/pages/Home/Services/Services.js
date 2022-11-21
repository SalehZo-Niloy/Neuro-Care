import React from 'react';
import mri from '../../../assets/images/mri.png';
import eeg from '../../../assets/images/eeg.png';
import xRay from '../../../assets/images/spinal-column.png';
import ServiceCard from './ServiceCard';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'MRI',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: mri
        },
        {
            id: 2,
            name: 'EEG',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: eeg
        },
        {
            id: 3,
            name: 'Spinal X-Ray',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: xRay
        },
    ]


    return (
        <div className='w-11/12 mx-auto my-12'>
            <div className='text-center'>
                <h2 className='text-primary text-2xl font-bold'>OUR SERVICES</h2>
                <h3 className='text-white text-3xl'>Service We Provide</h3>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                {
                    servicesData.map(service => <ServiceCard
                        key={service?.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;