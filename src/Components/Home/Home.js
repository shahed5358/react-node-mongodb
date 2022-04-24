import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])

    return (
        <div>
            <h1>welcome to my react route node</h1>
            <h2>Available Users : {users.length}</h2>
            <ul>
                {users.map(user => <li
                key={user._id}
                >{user.name} :: {user.email}
                <button>X</button>
                </li>)}
            </ul>
        </div>
    );
};

export default Home;