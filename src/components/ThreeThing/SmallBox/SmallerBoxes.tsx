import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type SmallBoxProps = {
    expanded: boolean
    animated? : boolean
    length : number
    rangeZ : number
    overallDeg: number
}

type AnimatedElementProps = {
  translateZ: string;
  animated : boolean;
  delay: string;
};

// const spin = (translateZ: string) => keyframes`
//   0% {
//     transform: ${translateZ} rotate(0deg);
//   }
//   100% {
//     transform: ${translateZ} rotate(360deg);
//   }
// `;

const spin = (translateZ: string) => keyframes`

  @-webkit-keyframes spinAnimation {
    0% {
      transform: ${translateZ} rotate(0deg);
    }
    100% {
      transform: ${translateZ} rotate(360deg);
    }
  }

  @keyframes spinAnimation {
    0% {
      transform: ${translateZ} rotate(0deg);
    }
    100% {
      transform: ${translateZ} rotate(360deg);
    }
  }
`;

const generateSpinAnimation = (translateZ: string) => keyframes`
  0% {
    transform: ${translateZ} rotate(0deg);
  }
  100% {
    transform: ${translateZ} rotate(360deg);
  }
`;


// Define the styled component outside of the component function
const AnimatedElement = styled.div<AnimatedElementProps>`
  ${({ translateZ, animated, delay }) => css`
    transform: ${translateZ};
    animation: ${animated ? generateSpinAnimation(translateZ): "NONE"} 3s ease-in-out infinite ${delay};
    position: absolute;
    border: 1px solid #cacfd65e;
    transition: all 0.3s ease-in-out;
    width: 60px;
    height: 60px;
  `}
`;


const SmallerBoxes = ({ expanded, animated = false, length, rangeZ, overallDeg  } : SmallBoxProps) => {
  // Define the keyframes outside of the component function

  return Array.from({length: length},(_, index) => {
    const translateZ = expanded
      ? `translateZ(${index * (rangeZ / length)}px) rotate(${index * (overallDeg / length)}deg)`
      : ``;

    const animation = expanded && animated ? css`${spin(translateZ)} 1s easy-in-out` : 'none';
    // const animation = expanded && animated ? `spinAnimation 1s ease-in-out` : 'none';

    const delay = `${index/25}s`

    return <AnimatedElement key={index} translateZ={translateZ} animated={animated} delay={delay}/>;
  });
};

export default SmallerBoxes;
