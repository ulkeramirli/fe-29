import "./style.css";

const CardWithImageOnRight = ({ imageSrc, title, description }) => {
    return (
      <>
      <div className="all-carts">
      <div className="card-with-image-on-right">
        <div className="card-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="card-image">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
      </div>
      </>
    );
  };

export default CardWithImageOnRight