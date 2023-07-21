import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsByPriceAction} from '../../store/reducers/productReducer';
import s from "./style.module.css"

export default function PriceFilterDiscount(){


  const dispatch = useDispatch();


  const filter_price = e => {
    
  
    const { min, max} = e.target.form;
    
   
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(filterProductsByPriceAction({min_value, max_value}))
  }

  return (
    
      <label className={s.form_container}>
           <span>Price</span>
            <form className={s.price_filter_container}>
              <div className={s.inputs_container}>
                <input
                  name = "min"
                  type="number"
                  placeholder="from"
                  onChange={filter_price}
                  
                />
                <input
                  name = "max"
                  type="number"
                  placeholder="to"
                  onChange={filter_price}
                />
                </div>
          </form>
        
      </label>
    
  );

  }
