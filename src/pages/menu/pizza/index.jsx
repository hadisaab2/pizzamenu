import React, { useState } from "react";
import {
  Container,
  Serving,
  PlusContainer,
  MinusContainer,
  ServingContainer,
} from "./styles";
import serving from "../../../static/serving.png";
import Carousel from "./carousel";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import $ from "jquery";

export default function Pizza({currentIndex,setCurrentIndex,pizza,pizzaSize}) {


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
      <ServingContainer pizzaSize={pizzaSize}>
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
        pizzaSize={pizzaSize}
      />
    </Container>
  );
}
