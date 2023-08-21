import React from 'react'
import Videocontainer from './Videocontainer'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux';


const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={isMenuOpen?'col-span-11 ml-[16.2rem]':"ml-10"}>
  <ButtonList/>
      <Videocontainer/>
     
    </div>
  )
}

export default MainContainer
