import React from 'react'
import iphone14pro from "../assets/iphone14pro.png"
import ipadmini from "../assets/ipadmini.png"
import airpodsmax from "../assets/airpodsmax.png"
import iphone13 from "../assets/iphone13.png"
import watchultra from "../assets/watchultra.png"
import airpodspro from "../assets/airpodspro.png"
import ipadpro from "../assets/ipadpro.png"
import macbookair from "../assets/macbookair.png"
import applelogo from "../assets/applelogo.png"







function Models() {
  return (
    <div className="cardsModels">


<div className="card bgLight mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">iPhone 14 Pro</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#5E746D", stroke: "blue"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={iphone14pro} alt="iPhone 14 Pro" className='hover:scale-110'/></figure>
</div>

<div className="card bgLight mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">iPad mini</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={ipadmini} alt="iPad Mini" className='hover:scale-110'/></figure>
</div>

<div className="card bgLight mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">AirPods Max</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={airpodsmax} alt="AirPods Max" className='hover:scale-110'/></figure>
</div>

<div className="card bgLight mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">iPhone 13</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={iphone13} alt="iPhone 13" className='hover:scale-110'/></figure>
</div>

<div className="card bgLight mr-2 mb-4 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle"><img src={applelogo} alt="Apple Logo"/>WATCH Ultra</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
    </div>
  </div>
  <figure><img src={watchultra} alt="Watch Ultra" className='hover:scale-110' /></figure>
</div>

<div className="card bgLight mr-2 mb-4 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">AirPods Pro</h2>
  </div>
  <figure><img src={airpodspro} alt="AirPods Pro" className='hover:scale-110'/></figure>
</div>

<div className="card bgLight mr-2 mb-4 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">iPad Pro</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={ipadpro} alt="iPad Pro" className='hover:scale-110'/></figure>
</div>

<div className="card bgLight mr-2 mb-4 modelCard">
  <div className="card-body">
    <h2 className="card-title modelTitle">Macbook Air</h2>
    <div className="colorsModel">
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-sm mr-1 border-white" style={{backgroundColor: "#6B6A6E"}}></div>
    </div>
  <figure><img src={macbookair} alt="Macbook Air" className="absolute right-0 bottom-4 hover:scale-110"/></figure>
  </div>
</div>











        
    </div>
  )
}

export default Models