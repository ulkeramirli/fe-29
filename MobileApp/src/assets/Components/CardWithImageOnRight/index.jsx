
const CardWithImageOnRight = ({ imageSrc, title, description }) => {
  return (
    <div className="flex border border-[#F8F8F8] rounded-[30px] shadow-[15px_-15px_2px_0px_rgba(0,_0,_0,_0.1)] w-full max-w-[800px] m-[10px] bg-[#F8F8F8] mt-[15px] p-[25px]">
      <div className="flex-1 p-[20px] bg-[#F8F8F8] mt-[10%] pl-[50px]">
        <h1 className="text-[35px] mb-[10px] text-[#3D3269] font-[500]">{title}</h1>
        <p className="text-[20px] m-0 text-[#4E4E4E] font-[400]">{description}</p>
      </div>
      <div className="flex-1 p-[20px]">
        <img src={imageSrc} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default CardWithImageOnRight;
