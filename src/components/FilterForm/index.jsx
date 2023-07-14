import React from 'react'
import { getDiscountProductsAction, sortProductAction } from "../../store/reducers/productReducer";
import s from "./style.module.css"
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import PriceFilter from '../PriceFilter';



export default function FilterForm({onPriceChange}) {
  // const [ checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  // const handleChange = () => setChecked(!checked);

  // const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked))

  const sort = event => dispatch(sortProductAction(event.target.value))

  return (
  <div className={s.filters_container}>
    <div>
    <PriceFilter onPriceChange={onPriceChange}/>
    </div>
   
   <div>
        <label>
          <span>Sort:</span>
            <select onInput={sort} defaultValue={{value:"default"}}>
              <option value="default" hidden>---</option>
              <option value="title">By titile</option>
              <option value="price_asc">By price ASC</option>
              <option value="price_desc">By price DESC</option>
            </select>
        </label>
    </div>
  </div>
  )
  }
