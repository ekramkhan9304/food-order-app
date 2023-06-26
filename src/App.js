import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CardProvider from "./store/CardProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  }

  const hideCardHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CardProvider>
      {cartIsShown && <Cart onclose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main style={{ backgroundColor: "#383838", padding: " 0 0 20px" }}>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
