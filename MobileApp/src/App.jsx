import "./App.css";
import Header from "./assets/Components/Footer/Header";
import Create from "./assets/Components/Create";
import Payment from "./assets/Components/Payments";
import Cart from "./assets/Components/Cart";
import CardWithImageOnRight from "./assets/Components/CardWithImageOnRight";
import RatestList from "./assets/Components/RatestList";
import Awards from "./assets/Components/Awards";
import VisaCart from "./assets/Components/VisaCart";
import GetStarted from "./assets/Components/GetStarted";
import About from "./assets/Components/About";
import Features from "./assets/Components/Features";
import Pricing from "./assets/Components/Pricing";
import Blog from "./assets/Components/Blog";

// import DarkMode from "./assets/Components/DarkMode";
import { Routes, Route } from "react-router-dom";

function App() {
  const cardsData = [
    {
      imageSrc: './LPhone.png',
      title: 'Merchant account',
      description: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
    },
    {
      imageSrc: './wallet.png',
      title: 'Merchant account',
      description: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
    },
    {
      imageSrc: './cash.png',
      title: 'Fast get paid',
      description: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
    },
  ];

    const reviews = [
      {
        imgSrc: './susan.png',
        name: 'Susan Kare',
        role: 'Graphic Designer',
        rating: 5,
        text: "Susan Kare is one of the notable contemporary American graphic designers. During 1980s, she developed many of the interface elements for the Apple Macintosh. She worked as a creative director for the company NeXT that Steve Jobs founded after leaving Apple.",
      },
      {
        imgSrc: './guido.png',
        name: 'Guido van Rossum',
        role: 'Dutch programmer',
        rating: 5,
        text: `Response stopped Sent by Copilot: Guido van Rossum is a renowned Dutch programmer best known for creating the Python programming language. He was born on January 31, 1956, in the Netherlands. Van Rossum has had a significant impact on the world of programming and technology.`,
      },
      {
        imgSrc: './torvalds.png',
        name: ' Linus Torvalds',
        role: 'Product Designer At Uber.INC',
        rating: 5,
        text: `Linus Torvalds is best known for creating the Linux kernel, which is the core component of the Linux operating system. He began working on Linux in 1991 as a personal project, and it has since grown into one of the most widely used operating systems in the world, powering everything from servers and supercomputers to smartphones and embedded devices.`,
      },
    ];

    

  
  return (
    <>
      <Header />
      <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Blog" element={<Blog />} />
      </Routes>

      <section className="background">
        <div className="container">
          <div className="hero-section-content">
            <h1 className="hero-section-h1">Ready To Launch Your <br />
              Online <span className="color">Payment</span> Payment App</h1>
            <p className="hero-section-p">A Simple Yet Modern Solution To Showcase Your App</p>
            <button className="main-btn">Get Started</button>
          </div>    
        </div> 
      </section>

      <Create />
      <Payment />
      <Cart />

     <div className="cart-text">
        <h1>Why it is <br /> Worth Choosing <span className="cart-span">PrimePay.</span></h1>
      </div>

      <div className="cart-container">
        <CardWithImageOnRight
          imageSrc="./icones.png"
          title="Integration other"
          description="Lorem ipsum dolor sit amet, consectetur  adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam bibendum."
        />

        <Cart
          imageSrc="./fPrint.png"
          title="Safe & Security"
          description="Easily integrate with all your need favorite tools through and APIsing including automatic"
        />

        {cardsData.map((card, index) => (
          <Cart
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
     <div className="container"> 
     <div className="rating-bcg">
    {reviews.map((ratest, index) => (
        <RatestList
        key={index}
        imgSrc={ratest.imgSrc}
        name= {ratest.name}
        role={ratest.role}
        rating={ratest.rating}
        text= {ratest.text}
        />

      ))}

     </div>
     </div>
     <Awards/>
     <VisaCart/>
  
    <div className="container">
      <div className="get">
      <h2 className="getstarted-h2">Our payment services <br /> <span className="getstarted-span"> worldwide</span></h2>
      </div>
        
    </div>
        <div className="cards-container">
          <GetStarted 
            imageUrl="./basic.png" 
            price="$10.00" 
            month="Month" 
            description="Modern Design Easy to Customize Quickly Set Up A Website Another Feature 24/7 Customer Support"
          />
          <GetStarted 
            imageUrl="./standard.png" 
            price="$19.00" 
            month="Month" 
            description="Modern Design Easy to Customize Quickly Set Up A Website Another Feature 24/7 Customer Support"
          />
          <GetStarted 
            imageUrl="./premium.png" 
            price="$35.00" 
            month="Month" 
            description="Modern Design Easy to Customize Quickly Set Up A Website Another Feature 24/7 Customer Support"
          />
        </div>
    </>
  );
}

export default App;

