import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

`;
export const Pizza = styled.img`
  position: absolute;
  width:${(props)=>props.index==props.currentIndex?"380px":"150px"};   
  height:${(props)=>props.index==props.currentIndex?"380px":"150px"};
  transition: height 0.5s ease, transform 0.5s ease, opacity 0.5s ease, width 0.5s ease;
  overflow: hidden;
  z-index: 9;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  /* transform: ${(props) =>
    `translateX(${(props.index - props.currentIndex) * 120}%)`}; */

  transform:${(props)=>props.index==props.currentIndex?`translateX(${(props.index - props.currentIndex) * 200}%) rotate(180deg)`:`translateX(${(props.index - props.currentIndex) * 200}%) rotate(0deg)`}   
`;
