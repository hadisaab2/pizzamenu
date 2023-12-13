import React, { useState } from "react";
import {
  Container,
  Serving,
  PlusContainer,
  MinusContainer,
  ServingContainer,
} from "./styles";
import serving from "../../static/serving.png";
import pizza1 from "../../static/pizza1.png";
import pizza2 from "../../static/pizza2.png";
import pizza3 from "../../static/pizza3.png";
import pizza4 from "../../static/pizza4.png";
import Carousel from "./carousel";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import $ from "jquery";

export default function Index() {
  const pizza = [
    { type: "Pepperoni", image: pizza1,price:9.8 },
    { type: "Pepperoni", image: pizza2,price:12 },
    { type: "Pepperoni", image: pizza3,price:13 },
    { type: "Pepperoni", image: pizza4,price:10 },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);

  const rotateAndHandle = (degrees, callback) => {
    $("#serving").css("transform", `rotate(${degrees}deg)`);
    setTimeout(() => {
      $("#serving").css("transform", "rotate(0deg)");
    }, 180);
    setTimeout(callback, 250);
  };

  const handleleft = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleright = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handlemove = (direction) => {
    if (direction == "right") {
        currentIndex - 1 >= 0 && rotateAndHandle(25, handleright);
    } else {
        currentIndex + 1 < pizza.length && rotateAndHandle(-25, handleleft);
    }
  };
  return (
    <Container>
      <ServingContainer>
        <Serving src={serving} id="serving" />
      </ServingContainer>
      <PlusContainer onClick={() => handlemove("right")}>
        <FiPlus />
      </PlusContainer>
      <MinusContainer onClick={() => handlemove("left")}>
        <FiMinus />
      </MinusContainer>
      <Carousel
        pizza={pizza}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        rotateAndHandle={rotateAndHandle}
        handleleft={handleleft}
        handleright={handleright}
      />
    </Container>
  );
}
