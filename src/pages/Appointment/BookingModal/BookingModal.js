import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';



const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        // console.log(date, slot, name, email, phone);

        const bookingInfo = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone
        }

        // console.log(bookingInfo);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    notify();
                    form.reset();
                    setTreatment(null);
                    refetch();
                }
                else {
                    toast.error(data.message);
                    form.reset();
                    setTreatment(null)
                }
            })
            .catch(e => {
                console.error(e);
            })

    };

    const notify = () => toast.success('Appointment booking successful');


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-neutral">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled required />
                        <select name='slot' className="select select-bordered w-full" required>
                            {
                                slots.map((slot, idx) => <option
                                    key={idx}
                                >{slot}</option>
                                )
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full bg-transparent" disabled required />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full bg-transparent" disabled required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full bg-transparent" required />
                        <input type="submit" value="Submit" className='btn btn-accent w-full text-white' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;