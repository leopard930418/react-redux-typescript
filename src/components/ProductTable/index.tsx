import { ProductData, ProductDataset } from "data/product_data";
import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { setProductData } from "../../store/reducers/productReducer";
import { ChildrenProps } from "types";

import "./ProductTable.css";

const Table = ({ children }: ChildrenProps) => (
  <div className="table" data-testid="table">
    {children}
  </div>
);
const Column = ({ children }: ChildrenProps) => (
  <div className="column" data-testid="column">
    {children}
  </div>
);
const Cell = ({ children }: ChildrenProps) => (
  <div className="cell" data-testid="cell">
    {children}
  </div>
);
const EditableCell = ({
  value,
  onChange,
}: {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => (
  <input
    className="cell"
    value={value}
    onChange={onChange}
    data-testid="cell"
  />
);

export const ProductTable = () => {
  var productData = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: ProductData,
    dataIndex: number,
    name: "quantity" | "price" | "shipping"
  ) => {
    const value = e.target.value;
    dispatch(
      setProductData(
        productData.map((item, itemIndex) =>
          itemIndex === dataIndex ? { ...item, [name]: value } : item
        )
      )
    );
  };

  return (
    <Table>
      <Column>Product SKU</Column>
      <Column>Quantity</Column>
      <Column>Price</Column>
      <Column>Subtotal</Column>
      <Column>Shipping</Column>
      <Column>Tax (7%)</Column>
      <Column>Total</Column>
      {productData.map((item, itemIndex) => {
        return (
          <React.Fragment key={itemIndex}>
            <Cell>{item.sku}</Cell>
            <EditableCell
              value={item.quantity}
              onChange={(e) => handleChange(e, item, itemIndex, "quantity")}
            />
            <EditableCell
              value={item.price}
              onChange={(e) => handleChange(e, item, itemIndex, "price")}
            />
            <Cell>{item.quantity * item.price}</Cell>
            <EditableCell
              value={item.shipping}
              onChange={(e) => handleChange(e, item, itemIndex, "shipping")}
            />
            <Cell>{item.quantity * item.price * 0.07}</Cell>
            <Cell>{item.quantity * item.price * 1.07 + Number(item.shipping)}</Cell>
          </React.Fragment>
        );
      })}
    </Table>
  );
};
