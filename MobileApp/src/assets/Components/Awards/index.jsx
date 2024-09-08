const Awards = () => {
  return (
    <>
      <div  className="w-[90%] mx-auto">
        <div className="mt-[10%] flex items-center gap-[12%] mb-[15%]">
          <img src="/Awards.png" alt="awards" />
          <div className="flex gap-[20%]">
            <div>
              <h2 className="text-[80px] font-semibold text-[#231656]">4.5/5</h2>
              <span className="text-[40px] text-[#FFB545]">★★★★★</span>
              <p className="text-[20px] font-semibold text-[#231656]">On the iOS App Store</p>
            </div>
            <div>
              <h2 className="text-[80px] font-semibold text-[#231656]">4.8/5</h2>
              <span className="text-[40px] text-[#FFB545]">★★★★★</span>
              <p className="text-[20px] font-semibold text-[#231656]">On the Android Play Store.</p>
            </div>
          </div>
        </div>
        <div className="font-semibold text-[#8C8C8C] flex justify-center text-center mb-10 ">
          <h1 className="text-[50px] font-semibold">
            Feels great in low-light Mood <br />
            for your <span className="text-[#231656]">eye Protection</span>
          </h1>
        </div>
        <div className="flex flex-wrap">
          <img src="./signup.png" alt="phone" className="w-[32%] h-auto" />
          <img src="./password.png" alt="phone" className="w-[32%] h-auto" />
          <img src="./code.png" alt="phone" className="w-[32%] h-auto" />
        </div>
        <div>
          <p className="text-[#4E4E4E] text-[20px] font-medium">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do <br />
            Eiusmod Tempor Incididunt Dolore Magna Aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default Awards;
