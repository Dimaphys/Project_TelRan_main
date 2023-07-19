import Host from "../common/Host";

const sendCouponRequestSuccess = (data) => ({
    type: 'SEND_COUPON_REQUEST_SUCCESS',
    payload: data,
  });
  
  // Действие, которое будет вызвано в случае ошибки при отправке заявки на купон
  const sendCouponRequestError = (error) => ({
    type: 'SEND_COUPON_REQUEST_ERROR',
    payload: error,
  });

  const sendOrderSuccess = (data) => ({
    type: 'SEND_ORDER_SUCCESS',
    payload: data,
  });
  
  // Действие, которое будет вызвано в случае ошибки при отправке заказа на сервер
  const sendOrderError = (error) => ({
    type: 'SEND_ORDER_ERROR',
    payload: error,
  });
  
  export const sendCouponRequest = (couponData) => (dispatch) => {
    fetch([Host(),'/sale/send'].join(""), {
      method: 'POST',
      body: JSON.stringify(couponData),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('POST-request sent!');
        dispatch(sendCouponRequestSuccess(data));
      })
      .catch((error) => {
        console.error('Error in POST-request:', error.message);
        dispatch(sendCouponRequestError(error.message));
      });
  };



  
  // POST-запрос на отправку заказа на сервер
  export const sendOrder = (orderData) => (dispatch) => {
    fetch([Host(),'/order/send'].join(""), {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Order sent successfully!');
        dispatch(sendOrderSuccess(data));
      })
      .catch((error) => {
        console.error('Error in sending order:', error.message);
        dispatch(sendOrderError(error.message));
      });
  };