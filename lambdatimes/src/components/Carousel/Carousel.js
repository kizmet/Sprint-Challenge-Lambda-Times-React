import React, { useState, useEffect } from "react";
//import { x } from "./Alert";
import styled from 'styled-components';
import { carouselData } from '../../data'

const CarouselW = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 1280px;
`;
const Flex = styled.div`
display:flex;
flex-direction: column;
`;


const Carousel = () => {
  const [image, setImage] = useState(carouselData);
  const [count, setCount] = useState(2);

  return (
    <CarouselW>

      <Flex>
        <button onClick={() => setCount(count - 1)}>{"<"} </button>

      </Flex>
      <Flex>
        <img
          src={image[count]}
        >
        </img>
      </Flex>
      <Flex>
        <button onClick={() => setCount(count + 1)}>{">"} </button>
      </Flex>

    </CarouselW>
  )
}

export default Carousel;