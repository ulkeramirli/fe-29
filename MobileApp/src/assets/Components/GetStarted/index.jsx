import "./style.css";



const GetStarted = ({ imageUrl, price, month, description }) => {
    return (
        <>
    <div className="getstarted-card">
        <img src={imageUrl} alt="Card Image" className="getstarted-image" />
        <div className="getstarted-content">
          <div className="getstarted-price-month">
            <span className="getstarted-price">{price}</span>
            <span className="getstarted-month">{month}</span>
          </div>
          <p className="getstarted-description">{description}</p>
          <button className="getstarted-button">Get Started</button>
        </div>
      </div>  
      </>
    );
  };

export default GetStarted