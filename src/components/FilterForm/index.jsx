import React from 'react'
import { sortProductAction } from "../../store/reducers/productReducer";
import s from "./style.module.css"
import { useDispatch } from 'react-redux';
import PriceFilter from '../PriceFilter';



export default function  FilterForm() {


  const dispatch = useDispatch();


  const sort = event => dispatch(sortProductAction(event.target.value))

  return (
  <div className={s.filters_container}>
    <div>
    <PriceFilter/>
    </div>
   
   <div className={s.sorting}>
        <label>
          <span>Sorted</span>
            <select onInput={sort} defaultValue={{value:"default"}}>
              <option value="default" hidden>by default</option>
              <option value="title">By titile</option>
              <option value="price_asc">By price ASC</option> 
              <option value="price_desc">By price DESC</option>
            </select>
        </label>
    </div>
  </div>
  )
  }
