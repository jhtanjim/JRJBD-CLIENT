import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
    }, [users])
    return (
        <div className=''>
            {/* {users.map(user => <p>{user.length}</p>)} */}
        </div>
    );
};

export default Users;