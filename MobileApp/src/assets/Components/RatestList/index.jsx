import "./style.css";

const RatestList = ({ imgSrc, name, role, rating, text }) => {
    return (
        <>
         
            {/* <img src="/rating.png" alt="" /> */}
         <div className="ratest-list" >
            <div className="ratest-image">
                <img src={imgSrc} alt="foto" />
            </div>
            <div className="ratest-content">
                <div className="ratest-header">
                    <div>
                        <h3 className="ratest-name">{name}</h3>
                        <a href="#" className="ratest-role">{role}</a>
                    </div>
                    <div className="ratest-rating">
                        {'★'.repeat(rating)}
                    </div>
                </div>
                <hr className="ratest-divider" />
                <p className="ratest-text">{text}</p>
            </div>
        </div>
        </>

    );
};
  
  export default RatestList;