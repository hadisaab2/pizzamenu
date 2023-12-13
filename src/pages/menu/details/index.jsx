import React, { useState } from 'react'
import { Container,Price,Size,SizeContainer } from './styles'

export default function Details({price,setpizzaSize,pizzaSize}) {

    const handlesize = (size) =>{
        setpizzaSize(size)
    }
  return (
    <Container>
        <Price>{price}$</Price>
        <SizeContainer>
            <Size active={pizzaSize=="L"} onClick={()=>handlesize("L")}>L</Size>
            <Size active={pizzaSize=="M"} onClick={()=>handlesize("M")}>M</Size>
            <Size active={pizzaSize=="S"} onClick={()=>handlesize("S")}>S</Size>

        </SizeContainer>
    </Container>
  )
}
