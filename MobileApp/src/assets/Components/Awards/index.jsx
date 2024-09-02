import "./style.css";


const Awards = () => {
  return (
    <>
     <div className="container">
       <div className="awards-img">
       <img src="/Awards.png" alt="awards" />
       <div className="awards-text">
      <div>
      <h2 className="awards-h2">4.5/5</h2>
       <span className="awards-span">★★★★★</span>
       <p className="awards-p">On the iOS App Store</p>
      </div>
      <div>
      <h2 className="awards-h2">4.8/5</h2>
       <span className="awards-span">★★★★★</span>
       <p className="awards-p">OOn the Android Play Store.</p>
      </div>
       </div>
       </div>
       <div className="awards-h1">
        <h1>Feels great in low-light Mood <br />for your <span className="awards-span2"> eye Protection</span></h1>
       </div>
       <div className="awards-phones">
        <img src="./signup.png" alt="phone" className="awards-phone"/>
        <img src="./password.png" alt="phone" className="awards-phone"/>
        <img src="./code.png" alt="phone" className="awards-phone"/>

       </div>
       <div>
        <p className="awards-p2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do <br />Eiusmod Tempor Incididunt Dolore Magna Aliqua.</p>
       </div>

     </div>
     </>
  );
};

export default Awards