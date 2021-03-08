import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Users = ({match,history}) => {
const [user, setuser] = useState({})


    useEffect(() => {
    const url=`https://jsonplaceholder.typicode.com/users/${match.params.id}`
axios.get(url)
.then(response =>setuser (response.data ))

}, [])
    return (
        <div>
           <h1>{user.name}</h1> 
           <h1>{user.phone}</h1>
           <button onClick={()=> history.goBack()}>Goback</button>
        </div>
    )
}

export default Users
