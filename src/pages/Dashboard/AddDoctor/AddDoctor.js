import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const imgbbKey = process.env.REACT_APP_imgbb_key;

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/specialtyOptions');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data, e) => {
        const photo = data.photo[0];
        const name = data.name;
        // console.log(photo);
        const formData = new FormData();
        formData.append('image', photo);
        // console.log(formData);
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        photo: imgData.data.url
                    }

                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success(`${name} added as a Doctor`);
                                e.target.reset();
                                navigate('/dashboard/manageDoctors');
                            }
                        })
                }
            })
            .catch(e => {
                console.error(e);
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-2xl font-semibold text-primary mt-2 mb-5'>Add Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)} className='w-1/2'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", {
                        required: "⚠ Name is required"
                    })} className="input input-bordered w-full" />

                </div>
                {errors.name && <p className='text-error mt-3' role="alert">{errors.name?.message}</p>}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", {
                        required: "⚠ Email address is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            ,
                            message: "⚠ Invalid email address"
                        }
                    })} className="input input-bordered w-full" />

                </div>
                {errors.email && <p className='text-error mt-3' role="alert">{errors.email?.message}</p>}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty', {
                        required: "⚠ Choose Doctor's specialty"
                    })} className="select select-bordered w-full">
                        {
                            specialties?.map(specialty => <option
                                key={specialty?._id}
                            >{specialty?.name}</option>
                            )
                        }
                    </select>
                </div>
                {errors.specialty && <p className='text-error mt-3' role="alert">{errors.specialty?.message}</p>}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("photo", {
                        required: "⚠ Photo is required"
                    })} className="input input-bordered w-full" />

                </div>
                {errors.photo && <p className='text-error mt-3' role="alert">{errors.photo?.message}</p>}
                {/* {signupError && <p className='text-error mt-3' role="alert">{signupError}</p>} */}
                <input className='btn btn-accent w-full my-6' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;