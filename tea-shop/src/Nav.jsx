import "./Nav.css";

function Nav({ cartCount, cart, toggleCart, showCart, isLoggedIn, toggleLogin, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <div className="logo"><img src="../public/tghar logog.png"/></div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contacts</a></li>
           <li><a href="#">Search</a></li>


        </ul>
        <div className="nav-right">
          <div className="cart-icon" onClick={toggleCart}>
            🛒 <span>{cartCount}</span>
          </div>
          <button className="login-btn" onClick={toggleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>

      {showCart && (
        <div className="cart-dropdown">
          <h4>Your Cart</h4>
          {cart.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item, i) => (
                  <li key={i}>
                    <strong>{item.name}</strong> × {item.quantity} — ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p className="total">Total: ${total}</p>
              <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Nav;
