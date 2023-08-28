import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'

const Body = () => {
    
  return (
  <>
  <Header/>
    <div className='flex'>
     <div className='w-64 fixed '>
     <SideBar/>
     </div>
     
     <Outlet/>
     
    </div>
    </>
  )
}

export default Body
