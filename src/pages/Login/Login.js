import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginError('');
                notify();
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                setLoginError(e.message);
            })
    };

    const notify = () => toast.success('Login successful');


    return (
        <div className='flex justify-center items-center'>
            <div className='w-full md:w-3/5 lg:w-1/3 p-8 my-4 lg:my-12 rounded-xl'>
                <h2 className='text-4xl font-semibold text-center'>login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            required: "⚠ Password is required"
                        })} className="input input-bordered w-full" />

                        {/* <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label> */}
                    </div>
                    {errors.password && <p className='text-error mt-3' role="alert">{errors.password?.message}</p>}
                    {loginError && <p className='text-error mt-3' role="alert">{loginError}</p>}
                    <input className='btn btn-accent w-full my-4' value='login' type="submit" />
                </form>
                <p className='text-sm text-center'>New to Neuro Care? <Link to='/register' className='text-primary hover:underline hover:text-secondary'>Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-primary w-full">Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;