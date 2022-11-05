import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {

    const storedUser = useLoaderData();
    const [user, setuser] = useState(storedUser)
    const [displayName, setDisplayName] = useState(storedUser)

    const handlUpdateUser = (event) => {
        event.preventDefault();


        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Your data updated successfully');
                    console.log(data);
                    event.target.reset();
                }
            })

    }

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setuser(newUser);
        setDisplayName(newUser)
    }


    return (
        <div>
            <Link to='/'> <button>Home</button></Link>

            <h1>Please AddUser</h1>
            <p>Name : {displayName.name}</p>
            <form onSubmit={handlUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='name' />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.address} type="text" name='address' placeholder='address' />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="text" name="email" placeholder='email' />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;