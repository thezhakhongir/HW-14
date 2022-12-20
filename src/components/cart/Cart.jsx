import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import ChangeColor from "../../store/ChangeColor";
import CartItem from "../cart-item/CartItem";
import Modal from "../UI/modal/Modal";
import cls from "./Cart.module.css";

const Cart = () => {
  const { closeModal } = useContext(ChangeColor);
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  console.log(items);

  const cartItemREmoveHandler = (id) => { // for remote item
    removeItem(id);
  };

  const cartitemAddHandler = (item) => { // for add item
    addItem(item);
  };

  const cartItems = (
    <ul className={cls["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemREmoveHandler}
          onAdd={cartitemAddHandler}
          item={item}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}  { /* after map */}
      <div className={cls.total}>
        <span>Total Amount</span>
        <span>$ {+totalAmount.toFixed(2)}</span>
      </div>
      <div className={cls.actions}>
        <button className={cls["button--alt"]} onClick={closeModal}>
          Close
        </button>
        <button className={cls.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
