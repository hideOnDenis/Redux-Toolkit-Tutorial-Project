import Navbar from "./components/Navbar.jsx";
import CartContainer from "./components/CartContainer.jsx";
import Modal from "./components/Modal.jsx";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
