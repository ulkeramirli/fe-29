import './style.css';
import { useState } from 'react';

const options = [
  { id: 1, text: "All your transaction" },
  { id: 2, text: "Receipts transaction" },
  { id: 3, text: "Experience Smart App" },
];


const CircleOption = ({ text, checked, onClick }) => {
  return (
    <div className="circle-container" onClick={onClick}>
      <div className={`circle ${checked ? 'checked' : ''}`}>
        {checked ? <span className="checkmark">✔</span> : null}
      </div>
      <span className="circle-text">{text}</span>
    </div>
  );
};

const VisaCart = () => {
  const [selected, setSelected] = useState(null);

  const toggleCheck = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {  
      setSelected(index);
    }
  };


  return (
    <div className="visa-cart">
      <div className="visa-text">
        <h1 className="visa-h1">
          Credit is the Fastest <br />
          Mobile <span className="visa-span">Banking <br /> Solution.</span>
        </h1>
        <p className="visa-p">
          Feels Great In Low-light Mood For Your Eye Protection <br />
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing <br /> Elit, Sed Do Eiusmod Tempor Incididunt
        </p>

        {/* Отображение опций */}
        {options.map((option) => (
          <CircleOption
            key={option.id}
            text={option.text}
            checked={selected === option.id}
            onClick={() => toggleCheck(option.id)}
          />
        ))}
      </div>  

      <div>
        <img src="/visa.png" alt="visa" className="visa-cards" />
      </div>
    </div>
  );
};

export default VisaCart;