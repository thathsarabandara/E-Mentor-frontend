import React, { useState } from 'react'
import AuthHome from './Auth/Home'
import AnonHome from './Anon/Home'

function Home() {
    const [isAuth,setAuth] = useState(true);
  return (
    <>
    {isAuth?(
        <div>
            <AuthHome />
        </div>
    ):(
        <div>
            <AnonHome />
        </div>
    )}
    </>
  )
}

export default Home