import React from 'react'
import Container from '../../components/UI/Container'
import not_found from "../../media/not_found.png"
import s from "./style.module.css"


export default function NotFoundPage() {
  return (
    <Container className={s.container}>
        <img src={not_found} alt="404 not found page img" />
    </Container>
  )
}
