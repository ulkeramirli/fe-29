
import "./style.css";

const Cart = ({ imageSrc, title, description }) => {

    if (!imageSrc || !title || !description) {
        return null; 
      }
    return (
        <>

      <div className="cart">
        <img src={imageSrc} alt={title} className="cart-image" />
        <div className="cart-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
    
    );
  };

export default Cart