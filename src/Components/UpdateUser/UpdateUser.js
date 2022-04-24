import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const id = useParams();
    const [user, setUser] = useState();
    useEffect( () => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = {name, email};

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data => {
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div>
            <h1>update user : {user.name}</h1>
            <form onSubmit={handleUpdateUser }>
                <input type="text" name="name" placeholder="Name" required/><br/>
                <input type="text" name="email" placeholder="Email" required/><br/>
                <input type="submit" value="Update User"/>
            </form>
        </div>
    );
};

export default UpdateUser;