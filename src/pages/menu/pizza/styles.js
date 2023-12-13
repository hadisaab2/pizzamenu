import styled from "styled-components";

export const Container = styled.div`
  /* height: 60vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Serving = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.3s ease-in-out;
`;
const findsize = (Size) => {
  switch (Size) {
    case "M":
      return "350px";
      break;
    case "L":
      return "380px";
      break;
    case "S":
      return "300px";
      break;
    default:
      break;
  }
};
export const ServingContainer = styled.div`
  height: ${props=>findsize(props.pizzaSize)};
  width:  ${props=>findsize(props.pizzaSize)};
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

`;

export const PlusContainer = styled.div`
  height: 33px;
  width: 33px;
  position: absolute;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  filter: drop-shadow(1px 1px 1px gray);
  z-index: 10;
`;
export const MinusContainer = styled.div`
  height: 33px;
  width: 33px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(1px 1px 1px gray);
  z-index: 10;
`;
