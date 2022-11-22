import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {

    const { data: allDoctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json();
            return data;
        }
    });

    console.log(allDoctors);

    return (
        <div>
            manage doctors
        </div>
    );
};

export default ManageDoctors;