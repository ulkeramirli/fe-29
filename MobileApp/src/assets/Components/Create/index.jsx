

const Create = () => {
  return (
    <div className='bg-[#F5F5F5] rounded-[30px] h-[130vh] flex flex-col justify-center items-center'>
      <div className='w-[90%] mx-auto'>
        <div className='relative w-full h-[100vh]'>
          <img className='w-[80%] h-auto absolute left-[50%] bottom-[75%] transform -translate-x-[50%] translate-y-[50%]' src="/Phone.png" alt="phone" />
        </div>
        <div className='flex justify-around items-center text-center gap-[50px] mb-[30%]'>
          <div className='text-center'>
            <img className='mx-[100px] mb-[20px]' src="/icon1.png" alt="user" />
            <h1 className='text-[30px] font-[500] text-[#231656] my-[10px]'>Create An Account</h1>
            <p className='text-[20px] font-[400] text-[#4E4E4E] leading-[1.6] '>
              Aspernatur Sit Adipisci Quaerat Unde Redug<br />
              Lagre Dolor Sit Amets Consectetus.<br />
              Agencies Define Their New Business
            </p>
          </div>

          <div className='text-center px-[5px]'>
            <img className='mx-[100px] mb-[20px]' src="/icon2.png" alt="bank" />
            <h1 className='text-[30px] font-[500] text-[#231656] my-[10px]'>Attach Bank Accounts</h1>
            <p className='text-[20px] font-[400] text-[#4E4E4E] leading-[1.6] '>
              Aspernatur Sit Adipisci Quaerat Unde Redug<br />
              Lagre Dolor Sit Amets Consectetus.<br />
              Agencies Define Their New Business
            </p>
          </div>

          <div className='text-center px-[5px]'>
            <img className='mx-[100px] mb-[20px]' src="/icon3.png" alt="money" />
            <h1 className='text-[30px] font-[500] text-[#231656] my-[10px]'>Send Money</h1>
            <p className='text-[20px] font-[400] text-[#4E4E4E] leading-[1.6]'>
              Aspernatur Sit Adipisci Quaerat Unde Redug<br />
              Lagre Dolor Sit Amets Consectetus.<br />
              Agencies Define Their New Business
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create;
