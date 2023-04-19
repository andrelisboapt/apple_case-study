import React from 'react'
import todos from '../assets/todos.png'
import mac from '../assets/mac.png'
import ipad from '../assets/ipad.png'
import iphone from '../assets/iphone.png'
import watch from '../assets/watch.png'
import airpods from '../assets/airpods.png'
import appletv from '../assets/appletv.png'
import accessories from '../assets/accessories.png'


function Category() {
  return (
    
    <div className="categoryMenu mt-5">

<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={todos} alt="All items" className='categoryImg' /></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">Todos</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={mac} alt="All items" className='categoryImg' /></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">Mac</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={ipad} alt="All items" className='categoryImg' /></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">iPad</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={iphone} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">iPhone</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={watch} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">Apple Watch</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={airpods} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">AirPods</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={appletv} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">Apple TV 4K</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard hover:scale-110">
  <figure><img src={accessories} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline categoryText">Accessories</p>
  </div>
</div>
    














    </div>
  )
}

export default Category