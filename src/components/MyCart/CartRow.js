import { InputNumber, InputGroup } from "rsuite";

export default function CartRow(props) {
  return (
    <>
      <tr>
        <td>{props.order["Name"]}</td>
        <td width="120px">
          <InputGroup>
            <InputGroup.Button onClick={props.handleMinus}>-</InputGroup.Button>
            <InputNumber value={props.qty} defaultValue={props.qty} onChange={props.setQty} />{" "}
            <InputGroup.Button onClick={props.handlePlus}>+</InputGroup.Button>
          </InputGroup>
        </td>
        <td width="120px" className="text-center">
          { props.order["Price"]}
        </td>
        <td width="120px" className="text-center">
          {props.order["Price"]}
        </td>
      </tr>
    </>
  );
}
