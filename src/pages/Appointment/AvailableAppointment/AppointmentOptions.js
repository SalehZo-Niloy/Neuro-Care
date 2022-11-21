import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card bg-accent shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'NO TIME SLOTS AVAILABLE'}</p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions">
                    <label onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-secondary text-white" disabled={slots.length === 0}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;