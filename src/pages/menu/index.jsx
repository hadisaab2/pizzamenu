import React, { useState } from "react";
import {
  Container,

} from "./styles";
import pizza1 from "../../static/pizza1.png";
import pizza2 from "../../static/pizza2.png";
import pizza3 from "../../static/pizza3.png";
import pizza4 from "../../static/pizza4.png";
import Pizza from "./pizza";
import Details from "./details";
import Header from "./header";


export default function Index() {
  const pizza = [
    { type: "Pepperoni", image: pizza1,price:9.8 },
    { type: "Pepperoni", image: pizza2,price:12 },
    { type: "Pepperoni", image: pizza3,price:13 },
    { type: "Pepperoni", image: pizza4,price:10 },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);
  const [pizzaSize, setpizzaSize] = useState("M");

  return (
    <Container>
        <Header/>
        <Pizza pizzaSize={pizzaSize} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} pizza={pizza}/>
        <Details price = {pizza[currentIndex].price}pizzaSize={pizzaSize} setpizzaSize={setpizzaSize}/>
    </Container>
  );
}
