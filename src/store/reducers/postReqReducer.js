const initialState = {
    couponData: null,
    error: null,
  };
  
  const postReqReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_COUPON_REQUEST_SUCCESS':
        return {
          ...state,
          couponData: action.payload,
          error: null,
        };
      case 'SEND_COUPON_REQUEST_ERROR':
        return {
          ...state,
          couponData: null,
          error: action.payload,
        };
        case 'SEND_ORDER_SUCCESS':
            return {
              ...state,
              orderData: action.payload,
              error: null,
            };
          case 'SEND_ORDER_ERROR':
            return {
              ...state,
              orderData: null,
              error: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default postReqReducer;