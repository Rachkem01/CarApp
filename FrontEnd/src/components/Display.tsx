

import React, { useState } from 'react'
import './Display.css'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'
import car5 from '../assets/car5.jpg'
import car6 from '../assets/car6.jpg'
import car7 from '../assets/car7.jpg'
import car8 from '../assets/car8.jpg'
import car9 from '../assets/car9.jpg'

import { IoAddCircle } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cart'
import { CartModel } from '../store/cart'

type CarModel = {
    id:number,
    name:string,
    image:any, 
    category:string,                                  
    model: number,
    price:string,
  

}

const Display:React.FC = () => {
const dispatch = useDispatch()

const addToCart =(car:CartModel )=>{
dispatch(addItem(car))
}

const [cars, setCars] = useState<CarModel[]>([
   {
    id:1,
    name:"Crystal Gold",
    image:car1,
    category:'Honda',
    model:2024,
    price:'4,000,700'


   } 
,
{
    id:4,
    name:"Silver Bird",
    image:car4,
    category:'Toyota',
    model:2022,
    price:'8,900,900'


   } 
   ,
   {
    id:2,
    name:"Green Veer",
    image:car3,
    category:'Camry',
    model:2022,
    price:'7,501,896'


   } ,
   
   {
    id:2,
    name:"Peach Toyota",
    image:car2,
    category:'Camry',
    model:2021,
    price:'5,000,700'


   },
   {
    id:5,
    name:"Rocky Black",
    category:'Camry',
    image:car5,
    model:2022,
    price:'14,000,700'


   } ,
   {
    id:6,
    name:"Red Bae",
    category:"Toyota",
    image:car6,
    model:2024,
    price:'8,070,900'


   } ,
   {
    id:7,
    name:"Blue Ray",
    category:'Camry',
    image:car7,
    model:2020,
    price:'3,800,700'


   }
   , 
   {
    id:8,
    name:"Gray Kin",
    category:'Honda',
    image:car8,
    model:2021,
    price:'4,400,800'


   } ,
   {
    id:9,
    name:"Yellow Star",
    category:'Toyota',
    image:car9,
    model:2015,
    price:'2,500,700'


   } 
    
])
  return (
<main>
<div className="category">
    <h1>Cars in Store</h1>
<button>Toyota</button>
<button>Camry</button>
<button>Honda</button>
    </div> 
<div className="products">
{
    cars.map((car)=>(
        <div key={car.id}>
<img src={car.image} alt='car'/> <span className='add' ><IoAddCircle  onClick={()=>addToCart(car)}  /></span>
<p className='car-name'>{car.name}</p>
<p>{car.model}</p>
<p>#{car.price}</p>
            </div>
    ))
}
</div>
</main>
  )
}

export default Display