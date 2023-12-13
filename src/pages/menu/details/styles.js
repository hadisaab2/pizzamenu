import styled from 'styled-components';


export const Container = styled.div`
/* height: 10vh; */
display: flex;
align-items: center;
justify-content: center;
position: relative;
width:100%;
flex-direction: column;
gap:30px;
`;


export const Price = styled.span`
font-size:40px;
font-weight: bold;
color:#3f4045;
`;

export const SizeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap:10px;
`;

export const Size = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:50px;
height:50px;
background-color: ${props=>props.active?"#fb4303":"white"};
color:${props=>props.active?"white":"#fb4303"};
border-radius:50%;
filter:drop-shadow(1px 1px 1px gray);
transition: all 0.3s ease-in-out;
font-size: bold;

`;
