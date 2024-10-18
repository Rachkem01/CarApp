import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/cart'
import { RootState } from '../store/store'
import './Cart.css'
import { CartModel } from '../store/cart'
const Cart:React.FC = () => {
const items =useSelector((state:RootState)=>state.cart.items)
const dispatch = useDispatch()

const RemoveFromCart = ()=>{
dispatch(removeItem())
}

  return (
    <div className='cart-Product'>
      <h2>
        Your Cart
      </h2>
    <div >
   {items.length ===0 ?(<p>Your Cart is Empty</p>):(
    <ul className='cart' >
      {items.map((item)=>(
        <div key={item.id} >
          <img src={item.image}/>
          <p>{item.name}</p>
          <p>#{item.price}</p>
      <button onClick={()=>RemoveFromCart()}>Delete From Cart</button>
        </div>
      ))}
    </ul>
   )}
    </div>
   </div>
  )
}

export default Cart
