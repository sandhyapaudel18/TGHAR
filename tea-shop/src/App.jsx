import { useState } from "react";
import TeaCard from "./Teacard";
import './App.css';
import Nav from './Nav';
import Footer from "./Footer";


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddToCart = (tea) => {
    const exists = cart.find((item) => item.name === tea.name);
    if (exists) {
      setCart(cart.map((item) =>
        item.name === tea.name
          ? { ...item, quantity: item.quantity + tea.quantity }
          : item
      ));
    } else {
      setCart([...cart, tea]);
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const toggleCart = () => setShowCart(!showCart);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert("Please login to place order");
    } else {
      alert("Order placed!");
      setCart([]);
      setShowCart(false);
    }
  };

  return (
    <>
      <Nav
        cart={cart}
        cartCount={cartCount}
        toggleCart={toggleCart}
        showCart={showCart}
        isLoggedIn={isLoggedIn}
        toggleLogin={toggleLogin}
        onCheckout={handleCheckout}
      />

      <div className="tea-section">
        <TeaCard
         
          name="Butterfly Pea Flower Tea"
          price={5}
           image="../public/btea.png"
          onAddToCart={handleAddToCart}
        />
        <TeaCard
       
          name="Spearmint Tea"
          price={6}
           image="../public/stea.png"
          onAddToCart={handleAddToCart}
        />
        <TeaCard
    
          name="English Black Tea"
          price={7}
          image="../public/etea.png"
          onAddToCart={handleAddToCart}
        />
         <TeaCard
          name="Lavendar Tea"
          price={7}
          image="../public/ltea.png"
          onAddToCart={handleAddToCart}
        />
         <TeaCard
          name="Chamomile Tea"
          price={7}
          image="../public/Ctea.png"
          onAddToCart={handleAddToCart}
        />
         <TeaCard
          name="Matcha Tea"
          price={7}
          image="../public/mtea.png"
          onAddToCart={handleAddToCart}
        />
         <TeaCard
          name="Green Tea"
          price={7}
          image="../public/gtea.png"
          onAddToCart={handleAddToCart}
        />
         <TeaCard
          name="Hibiscus Tea"
          price={7}
          image="../public/htea.png"
          onAddToCart={handleAddToCart}
        />
         <TeaCard
          name="Tulsi Tea"
          price={7}
          image="../public/tulsi.png"
          onAddToCart={handleAddToCart}
        />
       
      </div>
       <Footer/>
    </>
  );
}

export default App;
