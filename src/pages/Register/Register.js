import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signup, profileUpdater } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();


    const handleSignUp = data => {
        // console.log(data);

        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setSignupError('');
                notify();

                const userInfo = {
                    displayName: data.name
                }
                profileUpdater(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(e => {
                        console.error(e);
                    })
            })
            .catch(e => {
                console.error(e);
                setSignupError(e.message);

            })
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                createToken(email);
            })
            .catch(e => {
                console.error(e);
            })
    };

    const createToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                localStorage.setItem('accessToken', data.accessToken);
                navigate('/');
            })
            .catch(e => {
                console.error(e);
            })
    }

    const notify = () => toast.success('Sign Up successful');


    return (
        <div className='flex justify-center items-center'>
            <div className='w-full md:w-3/5 lg:w-1/3 p-8 my-4 lg:my-12 rounded-xl'>
                <h2 className='text-4xl font-semibold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "⚠ Password is required",
                            // minLength: {
                            //     value: 6,
                            //     message: "Password should be at least 6 characters"
                            // }
                        })} className="input input-bordered w-full" />

                        {/* <label className="label">
                        <span className="label-text-alt">Forgot Password?</span>
                    </label> */}
                    </div>
                    {errors.password && <p className='text-error mt-3' role="alert">{errors.password?.message}</p>}
                    {signupError && <p className='text-error mt-3' role="alert">{signupError}</p>}
                    <input className='btn btn-accent w-full my-4' value='Sign Up' type="submit" />
                </form>
                <p className='text-sm text-center'>Already have an account? <Link to='/login' className='text-primary hover:underline hover:text-secondary'>Go to Login</Link></p>
                {/* <div className="divider">OR</div>
                <button className="btn btn-outline btn-primary w-full">Continue With Google</button> */}
            </div>
        </div>
    );
};

export default Register;