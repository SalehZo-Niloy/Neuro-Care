import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, review: patientReview, location } = review;

    return (
        <div className="card bg-neutral shadow-xl">
            <div className="card-body">
                <p>{patientReview}</p>
                <div className="card-actions mt-2 items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-2'>
                        <h2>{name}</h2>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;