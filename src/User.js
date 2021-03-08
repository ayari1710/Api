import React from 'react'

const User = ({user}) => {
    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
         <h1>{user.name}</h1>
        < h1>{user.email}</h1>
        < h1>{user.username}</h1>
        < h1></h1>
        </div>
    )
}

export default User
