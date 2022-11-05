import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const [user, setuser] = useState({})

    const handlSubmit = (event) => {
        event.preventDefault();
        // console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setuser(data)
                console.log(data);
                if (data.acknowledged) {
                    alert('added successfully');
                    event.target.reset();
                }
            })
    }

    const onBlured = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setuser(newUser);
    }

    return (
        <div>
            <Link to='/'> <button>Home</button></Link>

            <h1>Please AddUser</h1>
            <form onSubmit={handlSubmit}>
                <input onBlur={onBlured} type="text" name='name' placeholder='name' />
                <br />
                <input onBlur={onBlured} type="text" name='address' placeholder='address' />
                <br />
                <input onBlur={onBlured} type="text" name="email" placeholder='email' />
                <br />
                <input type="submit" value="AddUser" />
            </form>
        </div>
    );
};

export default AddUser;