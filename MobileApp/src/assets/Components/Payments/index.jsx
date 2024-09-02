import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay  } from '@fortawesome/free-solid-svg-icons';
// import { faArrow  } from '@fortawesome/free-solid-svg-icons';


const Payment = () => {
  return (
   
     <div className='container'>
        <div className='pay-content'>
            <div className='pay-text'>
                <div className='text'>
                <h2 className='pay-h2'> Send and receive <br /> <span className='pay-span'>payments</span> easily</h2>
                <p className='pay-p'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,<br /> Sed Do Eiusmod Tempor Incididunt <br />
                <br />
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,<br /> Sed Do Eiusmod Tempor Incididunt Ut 
                    Labore Et Dolore <br />Magna Aliqua. </p>
                    <hr className="rec" ></hr>
                   
                   <div className='pay-a'>
                    <div className='play-button'><FontAwesomeIcon icon={faPlay} /></div>
                    <span className='span'>Lorem Ipsum Dolor Sit <br /><a >Amet, Consectetur</a></span>

                    </div>
                </div>
                    <div className='pay-img'>
                        <img src="/Background.png" alt="bcg" />
                    </div>

            </div>
                   </div>
       
       
       <div className='bcg2'>
                <div className='bcg2-number'>
                    <div>
                        <h3 className='bcg2-h3'>12.000 +</h3>
                        <p className='bcg2-p'>Downloaded</p>
                    </div>
                    <div>
                        <h3 className='bcg2-h3'>$10 M</h3>
                        <p className='bcg2-p'>Transactions</p>
                    </div>
                    <div>
                        <h3 className='bcg2-h3'>1.000 +</h3>
                        <p className='bcg2-p'>Feedback</p>
                    </div>

                </div>

                <img className='pay-img2' src="/Phone2.png" alt="phone2" />

            </div>
                <hr className='rec2'></hr>

        </div>
        
   
  );
};

export default Payment