import { ChevronDown, ChevronUp } from "../assets/icons.js";
import { removeItem, increase, decrease } from "../features/cart/cartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        {amount > 0 ? (
          <button
            className="amount-btn"
            onClick={() => dispatch(decrease({ id }))}
          >
            <ChevronDown />
          </button>
        ) : (
          <button className="amount-btn">
            <ChevronDown />
          </button>
        )}
      </div>
    </article>
  );
};

export default CartItem;
