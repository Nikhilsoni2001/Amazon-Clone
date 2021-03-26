import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
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
  margin: 0;
  background-color: #eaeded;
`;
