import { CartIcon } from "../assets/icons.js";
import { useSelector } from "react-redux";
function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h1>redux toolkit</h1>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
