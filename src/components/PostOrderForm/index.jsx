import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrder } from '../../async_actions/post_req';
import s from "./style.module.css"

const PostOrderForm = () => {
  const [orderData, setOrderData] = useState({});
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orderData);
  const error = useSelector((state) => state.order.error);

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendOrder(orderData));
  };

  return (
    <div className={s.order_form}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="field1" value={orderData.field1} onChange={handleChange} />
        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default PostOrderForm;