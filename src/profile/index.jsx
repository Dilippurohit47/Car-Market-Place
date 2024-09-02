import React from 'react'
import Headers from '../components/Headers'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import MyListing from './components/MyListing'

const Profile = () => {
  return (
    <div>
        <Headers/>
    
    <div className="px-10 md:px-20 my-10 " >
       <MyListing/>
    </div>
    </div>
  )
}

export default Profile
