import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import User from '../User';
import Navbar from './Navbar';

const Data = () => {
  const [user, setuser] = useState([])
  const [Isloading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
    const url=  'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
    .then(response =>{ setuser(response.data);setIsloading(false)})
   }, []);
  return (
    <div>
      <h1>Bienvenu nos clients </h1>
      
      {Isloading ? <Loading/ >
    :
    <div>
    {user.map(el=> 
    <Link to={`/Data/user/${el.id}`} key={el.id} >
<User user={el} />
        </Link>
      
      
      )}
      </div>
 
    }
        </div>
  )
}

export default Data
