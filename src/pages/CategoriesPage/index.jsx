import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import Container from '../../components/UI/Container'
import s from "./style.module.css"

export default function CategoriesPage() {
  return (
   
    <div className={s.categories_container}>
      <h2 className={s.categories_title}>Categories</h2>
      <CategoriesContainer />
    </div>
    
  )
}
