import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUser, setDisplayUser] = useState(users);

    const handleDelete = (user) => {
        const agree = window.confirm('Are you sure you want to delete');
        if (agree) {
            // console.log('Delete', user._id);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted');

                        const remainingUsers = displayUser.filter(usr => usr._id !== user._id);
                        setDisplayUser(remainingUsers);

                    }
                })
        }
    }

    const handleUpdatae = () => {
        console.log('lkdjfkldjsfklj');
    }

    return (
        <div>
            <Link to='users'> <button>add user</button></Link>
            <h1>Home HOME Home</h1>
            <div>
                {
                    displayUser.map((user) => <p key={user._id}>{user.email}


                        <Link to={`/update/${user._id}`}>
                        <button
                            onClick={() => handleUpdatae(user)}
                        >Updatae</button>
                       
                        </Link>

                        <button

                            onClick={() => handleDelete(user)}
                        >X</button>
                    </p>)
                }
            </div>
        </div >
    );
};

export default Home;