import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const { data: myBookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(myBookings);

    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-2xl font-semibold text-primary mt-2 mb-5'>My Appoinments</h3>
            <div className="overflow-x-auto my-12">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map((booking, index) => <tr
                                key={booking?._id}
                            >
                                <th>{index + 1}</th>
                                <td>{booking?.patient}</td>
                                <td>{booking?.treatment}</td>
                                <td>{booking?.appointmentDate}</td>
                                <td>{booking?.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;