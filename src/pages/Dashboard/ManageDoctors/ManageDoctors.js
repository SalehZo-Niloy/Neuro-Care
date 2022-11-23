import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: allDoctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (e) {
                console.error(e);
            }
        }
    });

    const handleModalClose = () => {
        setDeletingDoctor(null);
    }

    const handleDoctorDelete = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('acessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Doctor ${doctor?.name}'s information deleted successfully`);
                    refetch();
                }
            })
            .catch(e => {
                console.error(e);
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-2xl font-semibold text-primary mt-2 mb-5'>Manage Doctors</h3>
            <div className="overflow-x-auto my-8">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDoctors?.map((doctor, i) => <tr
                                key={doctor?._id}
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor?.photo} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmationModal" className="btn btn-sm btn-error">Delete Doctor</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={"Do you want to Delete the Doctor's info?"}
                    message={`If you delete ${deletingDoctor?.name}'s Information, it can't be retrieved anymore`}
                    closeModal={handleModalClose}
                    deleteModal={() => handleDoctorDelete(deletingDoctor)}
                    successMessage={'Delete'}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;