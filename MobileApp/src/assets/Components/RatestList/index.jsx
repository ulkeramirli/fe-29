import "./style.css";

const RatestList = ({ imgSrc, name, role, rating, text }) => {
    return (
        <>
         <div className="bg-white p-[40px_70px] w-[70%] rounded-[20px] shadow-[11px_-10px_10px_rgba(0,_0,_0,_0.1)] mb-[30px]" >
            <div className="mr-[20px] ">
                <img src={imgSrc} alt="foto"  className="rounded-full w-[80px] h-[80px]" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-2 cursor-pointer">
                    <div className="text-left">
                        <h3 className="text-lg font-bold m-0 text-[#3D3269] ">{name}</h3>
                        <a href="#" className="text-[#625FFB] cursor-pointer hover:underline">{role}</a>
                    </div>
                    <div className="text-4xl text-[#FFB545] mb-5">
                        {'★'.repeat(rating)}
                    </div>
                </div>
                <hr className="border-t border-[#e0e0e0] my-2.5" />
                <p className="text-base text-[#555] text-left">{text}</p>
            </div>
        </div>
        </>

    );
};
  
  export default RatestList;