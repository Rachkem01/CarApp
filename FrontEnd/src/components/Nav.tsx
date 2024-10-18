

import React,{useState} from 'react'
import './Nav.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
const Nav:React.FC = () => {
const [menu, setMenu] = useState("menu")



const items =useSelector((state:any)=>state.cart.items)




  return (
    <>
    <div className='main-nav'>
    <h1>Auto<span>Vec</span></h1>
    <div>
    <ul className='navbar'>
    <Link to ='/'  >
      <li>
    
    <a onClick={()=>setMenu("Home")} className={menu==="Home"?"active":"" }>
 Home

 
    </a>

    </li>    </Link>

    <li>
    <a onClick={()=>setMenu("Services")}  className={menu ==="Services"?"active":""}>
        Services
    </a>
    </li>

    <li  >
    <a onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>
    Contact
    </a>
    </li>
   

   <li>
    <Link to ={'/Cart'}  >
    <a >
   <FaShoppingCart/>
    </a>
    <sup><button className='cart-button'>{items.length}</button></sup>
    </Link>
    </li>
    
    </ul>
    </div>
    </div>

    
   
    </>
  )
}

export default Nav
