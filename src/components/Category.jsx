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
    
    <div className="categoryMenu">

<div className="card card-compact w-30 categoryCard">
  <figure><img src={todos} alt="All items" className='categoryImg' /></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">Todos</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={mac} alt="All items" className='categoryImg' /></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">Mac</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={ipad} alt="All items" className='categoryImg' /></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">iPad</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={iphone} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">iPhone</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={watch} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">Apple Watch</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={airpods} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">AirPods</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={appletv} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">Apple TV 4K</p>
  </div>
</div>
<div className="card card-compact w-30 categoryCard">
  <figure><img src={accessories} alt="All items" className='categoryImg'/></figure>
  <div className="card-body">
    <p class="hover:text-black-500 hover:underline">Accessories</p>
  </div>
</div>
    














    </div>
  )
}

export default Category