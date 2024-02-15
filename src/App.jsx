import Navbar from "./components/Navbar.jsx";
import CartContainer from "./components/CartContainer.jsx";
import { calculateTotals } from "./features/cart/cartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
