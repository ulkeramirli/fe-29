// import "./App.css";
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
        imgSrc: './linus2.png',
        name: ' Linus Torvalds',
        role: 'Product Designer At Uber.INC',
        rating: 5,
        text: `Linus Torvalds is best known for creating the Linux kernel, which is the core component of the Linux operating system. He began working on Linux in 1991 as a personal project, and it has since grown into one of the most widely used operating systems in the world, powering everything from servers and supercomputers to smartphones and embedded devices.`,
      },
    ];

    

  
  return (
    <>
      {/* <Header /> */}
      <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Blog" element={<Blog />} />
      </Routes>

      <section  className="bg-cover bg-center bg-no-repeat h-[150vh] w-[99vw] flex justify-center items-center mb-[100px]"
  style={{ backgroundImage: "url('./bcg.png')" }}>
        <div  className="w-[90%] mx-auto">
          <div className="text-center leading-[80px] mb-[200px]">
            <h1 className="text-[#231656] text-[80px] font-semibold leading-[80px] text-center md:text-[60px] md:leading-[70px] sm:text-[40px] sm:leading-[50px]">Ready To Launch Your <br />
              Online <span className="text-white">Payment</span> Payment App</h1>
        <p className="text-[#231656] text-[25px] font-semibold font-sans md:text-[20px] sm:text-[18px]">A Simple Yet Modern Solution To Showcase Your App</p>
            <button className="py-[5px] px-[70px] rounded-full bg-[#231656] text-white cursor-pointer text-[20px] font-semibold md:px-[50px] md:py-[4px] md:text-[18px] sm:px-[30px] sm:py-[3px] sm:text-[16px]">Get Started</button>
          </div>    
        </div> 
      </section>

      <Create />
      <Payment />
      <Cart />

   
<div className="text-center text-gray-400 mt-20 text-4xl font-semibold sm:text-3xl md:text-5xl mb-7 ">
  <h1>Why it is <br /> Worth Choosing <span className="text-blue-900">PrimePay.</span></h1>
</div>


<div className="flex flex-wrap justify-around p-10 gap-5 sm:gap-4 md:gap-6">
  <CardWithImageOnRight
    imageSrc="./icones.png"
    title="Integration other"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam bibendum."
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


<div className="w-[90%] mx-auto">
  <div className="text-center bg-[url('/rating.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center rounded-[20px] p-[90px_30px] mt-[10%] w-full h-auto">
    <h1 className="text-4xl font-semibold text-white mb-5 sm:text-3xl md:text-5xl">
      “Say goodbye to clutter and <br /><span className="text-blue-900">bounce rates.</span>
    </h1>

    {reviews.map((ratest, index) => (
      <RatestList
        key={index}
        imgSrc={ratest.imgSrc}
        name={ratest.name}
        role={ratest.role}
        rating={ratest.rating}
        text={ratest.text}
      />
    ))}
  </div>
</div>

<Awards />
<VisaCart />


<div className="w-[90%] mx-auto">
  <div className="text-center">
    <h2 className="text-4xl font-semibold text-gray-400 sm:text-3xl md:text-5xl">
      Our payment services <br /> <span className="text-blue-900">worldwide</span>
    </h2>
  </div>
</div>


<div className="flex flex-wrap justify-between mt-5 gap-5 sm:gap-4 md:gap-6">
  <GetStarted 
    imageUrl="./basic.png" 
    price="$10.00"
    discount="Only $5.99" 
    month="Month" 
    description="Modern Design Easy to Customize Quickly Set Up A Website Another Feature 24/7 Customer Support"
  />
  <GetStarted 
    imageUrl="./standard.png" 
    price="$19.00"
    discount="Only $12.99"  
    month="Month" 
    description="Modern Design Easy to Customize Quickly Set Up A Website Another Feature 24/7 Customer Support"
  />
  <GetStarted 
    imageUrl="./premium.png" 
    price="$35.00"
    discount="Only $20.99"  
    month="Month" 
    description="Modern Design Easy to Customize Quickly Set Up A Website Another Feature 24/7 Customer Support"
  />
</div>

    </>
  );
}

export default App;

