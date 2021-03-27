import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { db } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
