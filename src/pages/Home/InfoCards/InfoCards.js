import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 10.00 am to 4.00pm everyday',
            icon: clock,
            bgClass: 'bg-accent text-white'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Boshundhora, Block-D, Dhaka',
            icon: marker,
            bgClass: 'bg-neutral text-white'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '+0123456789',
            icon: phone,
            bgClass: 'bg-accent text-white'
        },
    ]

    return (
        <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {
                cardData.map(card => <InfoCard
                    key={card?.id}
                    card={card}
                ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;