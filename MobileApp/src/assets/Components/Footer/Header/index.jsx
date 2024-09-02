import "./style.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
   
//     <header>
//      <div className="container">
//         <nav className="header">
//         <span className>PrimePay.</span>
           
//             <button className="header-main-btn">LOGIN</button>
//         </nav>
//     </div>
// </header> 
<>
<nav className="navbar">
<Link to="/" ><img src="/primePay.png" alt="logo" className="navbar-logo1" /></Link>
  <Link to="/" className="navbar-logo">PrimePay.</Link>
<div className="navbar-container">
  <ul className="navbar-menu">
    <li className="navbar-item">
      <Link to="/" className="navbar-link">About us</Link>
    </li>
    <li className="navbar-item">
      <Link to="/Features" className="navbar-link">Features</Link>
    </li>
    <li className="navbar-item">
      <Link to="/Pricing" className="navbar-link"> Pricing</Link>
    </li>
    <li className="navbar-item">
      <Link to="/Blog" className="navbar-link">Blog</Link>
    </li>
  </ul>
  <button className="header-main-btn">LOGIN</button>
</div>
</nav>
</>


    
  );
};

export default Header