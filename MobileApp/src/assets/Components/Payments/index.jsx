import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay  } from '@fortawesome/free-solid-svg-icons';


const Payment = () => {
  return (
   
     <div className="w-[90%] mx-auto">
            <div className='flex flex-col md:flex-row mt-[100px]'>
        <div className='flex-1 pr-5'>
          <h2 className='text-[#B5B5B5] text-[55px] font-semibold leading-[55px]'>
            Send and receive <br />
            <span className='text-[#231656]'>payments</span> easily
          </h2>
          <p className='text-[#4E4E4E] text-[20px] font-normal leading-[32px] mt-[20px]'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,<br />
            Sed Do Eiusmod Tempor Incididunt<br /><br />
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,<br />
            Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br />
            Magna Aliqua.
          </p>
          <hr className='h-[2px] w-[530px] bg-[#d8d8d897] my-[30px]' />
          <div className='flex gap-[30px] items-center'>
            <div className='w-[80px] h-[80px] bg-[#FFC173] rounded-full flex items-center justify-center border-2 border-[#FFC173]'>
              <FontAwesomeIcon icon={faPlay} className='text-white text-[20px]' />
            </div>
            <span className='text-[20px] font-bold leading-[30px] cursor-pointer'>
              Lorem Ipsum Dolor Sit <br />
              <a href="#" className='text-[#7D5FFF] hover:underline'>Amet, Consectetur</a>
            </span>
          </div>
        </div>
        <div className='flex-1 relative'>
          <img src="/mobileImage.png" alt="mobile" className="w-full absolute z-10 mr-0 " />
        </div>
      </div>

      <div className='bg-[#F5F5F5] rounded-[30px] p-[5%] mt-[100px] mb-[20%]'>
        <div className='flex gap-[100px] items-center'>
          <div className='text-center'>
            <h3 className='text-[#231656] text-[40px] font-semibold'>12.000 +</h3>
            <p className='text-[#4E4E4E] text-[20px] font-normal mt-[10px]'>Downloaded</p>
          </div>
          <div className='text-center'>
            <h3 className='text-[#231656] text-[40px] font-semibold'>$10 M</h3>
            <p className='text-[#4E4E4E] text-[20px] font-normal mt-[10px]'>Transactions</p>
          </div>
          <div className='text-center'>
            <h3 className='text-[#231656] text-[40px] font-semibold'>1.000 +</h3>
            <p className='text-[#4E4E4E] text-[20px] font-normal mt-[10px]'>Feedback</p>
          </div>
        </div>
      </div>

      <hr className='h-[2px] w-full bg-[#d8d8d897] my-[30px]' />

        </div>
        
   
  );
};

export default Payment