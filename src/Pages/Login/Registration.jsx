import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()

    const [error, setError] = useState();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast.success("User created successfully")
                                    navigate('/')
                                }
                            })
                    }

                    )
                return toast.success("Registration Successful")
            })
            .catch(error => {
                console.log(error)
                setError(toast.error('Already Register this email'))
            })
    }
    return (
        <div className=" shadow-2xl bg-base-200 pt-20">
            <div className="hero-content">

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Registration Form </h1>
                        <form onSubmit={onSubmit}>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text text-2xl">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text text-2xl">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type Your Email" required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text text-2xl">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Type password" required className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Registration" />
                            </div>
                        </form>
                        <p>Already have an Account <Link className='link text-red-400 font-bold' to="/login"> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;