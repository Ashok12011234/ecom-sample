import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.js";
import "../../index.css";
import "./inputnumber.less";
import CartRow from "./CartRow.js";
import Card from "./Card.js";

export default function MyCart() {
  useEffect(() => {
    document.title = "My Cart";
  }, []);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setOrders(data["Orders"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [qty1, setQty1] = useState(orders.length > 0 ? orders[0]["Qty"] : 0);
  const [qty2, setQty2] = useState(orders.length > 1 ? orders[1]["Qty"] : 0);

  // State to keep track of the number of items in the cart
  const [value, setValue] = React.useState(0);
  const handleMinus = () => {
    setValue(parseInt(value, 10) - 1);
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };

  // Number of items in the cart
  let numItems = orders.length > 0 ? orders.length : 0;
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <p>Checking out items - You have {numItems} items in your cart</p>
            <table className="table align-middle">
              <thead>
                <tr className="text-center">
                  <th scope="col"></th>
                  <th scope="col">QTY</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              
                {
                  orders.length > 0 ? (<tbody><CartRow order={orders[0]} handleMinus={handleMinus} handlePlus={handlePlus} qty={qty1} setQty={setQty1}></CartRow>
                  <CartRow order={orders[1]} handleMinus={handleMinus} handlePlus={handlePlus} qty={qty2} setQty={setQty2}></CartRow></tbody>) :<></>
                }
                
            </table>
          </Col>
          <Card/>
        </Row>
      </Container>
    </>
  );
}
