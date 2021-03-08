import React,{useState} from 'react'
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Categorie from "./User";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import Users from "./Users";
import PriviteRoute from "./PriviteRoute"
import Admin from "./Admin";



function App() {

  const [isAuth, setisAuth] = useState(false);
  const Login =()=> setisAuth(true )
  const Logout=()=> setisAuth(false)
  return (
    <div style={{}}>
    <h1>Liste des clients </h1>
    <button style={{borderRadius:"2px ",}} onClick={isAuth ? Logout : Login}>{isAuth ? "logout": "login"}</button>

    
    <ul>
    <li >< Link to="/home">Home</ Link></li>

      <li><Link to="/admin">Admin</Link></li>
   <li><Link to="/User">Users</Link></li>
    </ul>
<Switch>
<Route path="/home"component={Home}></Route>
<Route exact path="/User"component={Data}></Route>
<Route path="/Data/user/:id" component={Users} ></Route>
<PriviteRoute path="/admin" component={Admin} isAuth={isAuth} message="!!"></PriviteRoute>

</Switch>    
</div>
  )

}
export default App;
