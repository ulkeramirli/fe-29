import "./style.css";

const Cart = ({ imageSrc, title, description }) => {

  if (!imageSrc || !title || !description) {

    return null; 
  }

  return (
    <div className="w-[400px] border border-[#F8F8F8] rounded-[30px] shadow-[15px_-15px_2px_0px_rgba(0,_0,_0,_0.1)] m-[20px] bg-[#F8F8F8]">
      <img src={imageSrc} alt={title} className="pt-[20px] pl-[20px]" />
      <div className="p-[40px]">
        <h1 className="mb-[10px] text-[35px] text-[#3D3269] font-[500]">{title}</h1>
        <p className="m-0 text-[20px] text-[#4E4E4E] font-[400]">{description}</p>
      </div>
    </div>
  );
};

export default Cart;
