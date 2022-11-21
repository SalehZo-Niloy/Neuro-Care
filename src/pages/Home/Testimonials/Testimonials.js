import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Fisk',
            img: "https://i.ibb.co/Qbk1dRY/1000-F-361342769-X26d-Tcof-Zpukh-MGYWFcn1w-JNABEFt-NLH.jpg",
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Harleen Carrie',
            img: "https://i.ibb.co/MGcWP42/1000-F-244380850-H3xd2rrb9-Cf-CIc-Ty-Fcep-VL670vvu-TA0b.jpg",
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Kansas'
        },
        {
            _id: 3,
            name: 'Levar Burton',
            img: "https://i.ibb.co/Yk2f767/portrait-white-man-isolated-53876-40306.webp",
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Texas'
        },
    ]

    return (
        <section className='w-11/12 mx-auto my-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary text-xl font-semibold mb-2'>Reviews</h3>
                    <h2 className="text-3xl text-white font-semibold">Patients Opinion</h2>
                </div>
                <div>
                    <img src={quote} className='w-28 md:w-36 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                {
                    reviews.map(review => <Testimonial
                        key={review?._id}
                        review={review}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;