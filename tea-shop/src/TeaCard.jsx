import { useState } from "react";
import "./TeaCard.css";
import PropTypes from 'prop-types';

function TeaCard({ name, price, image, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const add = () => {
    onAddToCart({ name, price, image, quantity });
    setQuantity(1);
  };

  return (
    <div className="tea-card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>${price}</p>
      <div className="quantity">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button onClick={add} className="add-btn">Add to Cart</button>
    </div>
  );

}
TeaCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default TeaCard;
