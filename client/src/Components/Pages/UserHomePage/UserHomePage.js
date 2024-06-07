import React from 'react'
import UserHeader from './UserHeader'
import CreatePost from './CreatePost'
import SideNavbar from './SideNavbar'

export default function UserHomePage() {
  return (
    <div>
        <UserHeader/>
        <CreatePost/>
        <SideNavbar/>
    </div>
  )
}
