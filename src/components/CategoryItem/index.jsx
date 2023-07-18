import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';
import Host from '../../common/Host';


export default function CategoryItem({ category}) {

    const category_route = `/categories/${category.id}`
    const img_link = [Host(),category.image].join("");
  return (
      <div className={s.category_item}>
        <Link className={s.category_item_link} to={category_route}>
          <img src={img_link} alt={category.title} className={s.card_img}/>
        <p>{category.title}</p>
      </Link>
      </div>

  )
}
