import React from 'react'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa';
import DataContext from './context/DataContext';
import {useContext} from 'react';

const Header = ({title}) => {
  const {width}=useContext(DataContext)
  return (
    <header className='Header'>
        <h1>{title}</h1>
        {width<768 ?<FaMobileAlt/> 
        :width <992 ? <FaTabletAlt /> : <FaLaptop/>

/* to change the icons mobile,laptop based on the dimensions */
        }
    </header>
  )
}

export default Header