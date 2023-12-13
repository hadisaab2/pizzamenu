import React, { useState, useRef } from "react";
import { Container, CarouselContainer, Pizza } from "./styles";
import $ from "jquery";

export default function Carousel({ pizza,currentIndex,setCurrentIndex,rotateAndHandle,handleleft,handleright }) {
  const divRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };


  const handleTouchMove = (event) => {
    if (startX) {
      const currentX = event.touches[0].clientX;
      const deltaX = currentX - startX;


      if (deltaX > 5) {
        currentIndex - 1 >= 0 && rotateAndHandle(25, handleright);
      } else if (deltaX < -5) {
        currentIndex + 1 < pizza.length && rotateAndHandle(-25, handleleft);
      }

      setStartX(null);
    }
  };
  return (
    <Container>
      <CarouselContainer
        ref={divRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {pizza.map((p, index) => (
          <Pizza index={index} currentIndex={currentIndex} src={p.image} />
        ))}
      </CarouselContainer>
    </Container>
  );
}
