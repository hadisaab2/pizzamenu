import styled from 'styled-components';


export const Container = styled.div`
height: 60%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
`;
export const Serving = styled.img`
width: 100%;
height: 100%;
position: relative;
transition:transform 0.3s ease-in-out;
`;
export const ServingContainer = styled.div`
height: 400px;
width: 400px;
position: absolute;
z-index: 1;
display: flex;
align-items: center;


`;

export const PlusContainer = styled.div`
height: 33px;
width: 33px;
position: absolute;
right: 10px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color:white;
filter:drop-shadow(1px 1px 1px gray);
z-index: 10;

`;
export const MinusContainer = styled.div`
height: 33px;
width: 33px;
border-radius: 50%;
background-color:white;
position: absolute;
left: 10px;
display: flex;
align-items: center;
justify-content: center;
filter:drop-shadow(1px 1px 1px gray);
z-index: 10;


`;