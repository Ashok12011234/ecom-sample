import {Row, Col, Form, FormLabel, Button } from "react-bootstrap";

export default function Card(params) {
  return (
    <>
      <Col className="col-4 bg-primary p-4 text-white rounded-3">
        <h2>Card Details</h2>
        <Form>
          <Row>
            <Form.Group className="mb-3" controlId="formNameOnCard">
              <FormLabel>Name on Card</FormLabel>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCardNumber">
              <FormLabel>Card Number</FormLabel>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formExpirationDate">
                <FormLabel>Expiration Date</FormLabel>
                <Form.Control type="text" placeholder="Expiration Date" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formCVV">
                <FormLabel>CVV</FormLabel>
                <Form.Control type="text" placeholder="CVV" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="p-2">
            <Col>Subtotal</Col>
            <Col className="col-2 d-flex justify-content-right">$134.97</Col>
          </Row>
          <Row className="p-2">
            <Col>Shipping</Col>
            <Col className="col-2 d-flex justify-content-right">$20</Col>
          </Row>
          <Row className="p-2">
            <Col c>Tax</Col>
            <Col className="col-2 d-flex justify-content-right">$10.34</Col>
          </Row>

          <Row className="p-2">
            <Col>Total (inc. tax)</Col>
            <Col className="col-2 d-flex justify-content-right">$165.31</Col>
          </Row>
          <Row className="d-flex justify-content-center p-3">
            <Button variant="warning" type="submit" size="lg">
              Place Order
            </Button>
          </Row>
        </Form>
      </Col>
    </>
  );
}
