import "./style.css";
import { useState } from "react";

import React from 'react'

const VisaCart = () => {
    const [checked, setChecked] = useState(false);
    
    const toggleCheck = () => {

        setChecked(!checked);
    }
  return (
    <>
    <div className="visa-cart">
        <div className="visa-text">
            <h1 className="visa-h1">Credit is the Fastest <br />
            Mobile <span className="visa-span">Banking <br />Solution.</span></h1>
            <p className="visa-p">Feels Great In Low-light Mood For Your Eye Protection <br />
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing <br /> Elit, Sed Do Eiusmod Tempor Incididunt</p>
            
        <div className="circle-container" onClick={toggleCheck}>
      <div className={`circle ${checked ? "checked" : ""}`}>
        {checked && <span className="checkmark">✔</span>}
      </div>
      <span className="circle-text">All your transaction</span>
    </div>
    <div className="circle-container" onClick={toggleCheck}>
      <div className={`circle ${checked ? "checked" : ""}`}>
        {checked && <span className="checkmark">✔</span>}
      </div>
      <span className="circle-text">Receipts transaction </span>
    </div>
    <div className="circle-container" onClick={toggleCheck}>
      <div className={`circle ${checked ? "checked" : ""}`}>
        {checked && <span className="checkmark">✔</span>}
      </div>
      <span className="circle-text"> Experience Smart App </span>
    </div>
        </div>
    
        <div >
            <img src="/visa.png" alt="visa" className="visa-cards"/>
        </div>

    </div>
    </>
  )
}

export default VisaCart