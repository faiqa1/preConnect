import React from 'react'
import UserHeader from './UserHeader'
import CreatePost from './CreatePost'
import SideNavbar from './SideNavbar'
import SideContainer from './SideContainer'

export default function UserHomePage() {
  return (
    <div>
        <UserHeader/>
        <CreatePost/>
        <SideNavbar/>
        <SideContainer/>
    </div>
  )
}
