import React, { useEffect } from 'react'
import { getCategories } from '../../async_actions/categories_req'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from '../CategoryItem';
import s from './index.module.css'

export default function CategoriesContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories)
  }, []);

  const categories_state = useSelector(state => state.categories);

  return (
    <div className={s.container}>
      {
        categories_state.map((el, index) => <CategoryItem key={index} category={el} />)
      }
    </div>
  )
}
