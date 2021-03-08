import React from 'react'

const Home = ({history,location}) => {
    return (
        <div>
              <h1>Home</h1>
              <button onClick={()=>history.goBack()}>go back </button>
              <button onClick={()=>history.push("/User")}>go Users</button>
        </div>
    )
}

export default Home
