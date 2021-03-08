import React from 'react'
import { Redirect,Route } from 'react-router-dom'

const PriviteRoute = ({component:Component,isAuth,...props}) => {
    if (!isAuth){
        return <Redirect to="/home"></Redirect>
    }
    return (
 
 <div>
     <Route render={()=> <Component{...props} />} ></Route>
     </div>
    )
}

export default PriviteRoute
