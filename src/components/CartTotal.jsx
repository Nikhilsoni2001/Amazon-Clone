import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const CartTotal = ({ total, count }) => {
  return (
    <Container>
      <Subtotal>
        Subtotal ({count} items):
        <NumberFormat
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Subtotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.2;
  padding: 20px;
`;

const Subtotal = styled.h2``;
const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid#a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ddb347;
  }
`;
