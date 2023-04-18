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


<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">iPhone 14 Pro</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={iphone14pro} alt="iPhone 14 Pro" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">iPad Mini</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={ipadmini} alt="iPad Mini" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">AirPods Max</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={airpodsmax} alt="AirPods Max" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">iPhone 13</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={iphone13} alt="iPhone 13" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title"><img src={applelogo} alt="Apple Logo"/>WATCH Ultra</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
    </div>
  </div>
  <figure><img src={watchultra} alt="Watch Ultra" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">AirPods Pro</h2>
  </div>
  <figure><img src={airpodspro} alt="AirPods Pro" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">iPad Pro</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#5E746D"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EFE2E0"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#C8D6DF"}}></div>
    </div>
  </div>
  <figure><img src={ipadpro} alt="iPad Pro" /></figure>
</div>

<div className="card bg-base-100 shadow-xl mr-2 mb-2 modelCard">
  <div className="card-body">
    <h2 className="card-title">Macbook Air</h2>
    <div className="colorsModel">
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#EDEDED"}}></div>
        <div className="badge badge-xs mr-1" style={{backgroundColor: "#6B6A6E"}}></div>
    </div>
  <figure><img src={macbookair} alt="Macbook Air" className="absolute right-0 bottom-4"/></figure>
  </div>
</div>











        
    </div>
  )
}

export default Models