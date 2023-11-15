import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type SmallBoxesProps = {
    expanded: boolean
    count: number
    rangeTranslateZ: number
    overallDeg: number
    color: string,
    sizeMin: number
    animated? : boolean
    sizeIndexMultiplier?: number
    transitionDelayIndexSub?: number
    indexStart?: number
    indexEnd?: number
}

type AnimatedElementProps = {
  translateZ: string;
  animated : boolean;
  color: string;
  sizeMin: number
  sizeIndexMultiplier: number
  transitionDelayIndexSub: number
  delay: number;
  index: number;
};


const generateSpinAnimation = (translateZ: string) => keyframes`
  0% {
    transform: ${translateZ} rotate(0deg);
  }
  // 50% {
  //   transform: ${translateZ} rotate(180deg) scale(0.7);
  // }
  100% {
    transform: ${translateZ} rotate(360deg);
  }
`;


// Define the styled component outside of the component function
const AnimatedElement = styled.div<AnimatedElementProps>`
  ${({ translateZ, animated, color, sizeMin, sizeIndexMultiplier, transitionDelayIndexSub, delay, index }) => css`
    transform: ${translateZ};
    animation: ${animated ? generateSpinAnimation(translateZ): "NONE"} 2s ease-in-out infinite ${index/delay}s;
    position: absolute;
    border: ${color};
    transition: all 0.3s ease-in-out ${index/transitionDelayIndexSub}s;
    width: ${index*sizeIndexMultiplier + sizeMin}px;
    height: ${index*sizeIndexMultiplier + sizeMin}px;
  `}
`;


const SmallerBoxes = ({ 
  expanded, 
  count, 
  rangeTranslateZ, 
  overallDeg,
  sizeMin,
  color,
  sizeIndexMultiplier = 1,
  transitionDelayIndexSub = 9999,
  indexStart = 0,
  indexEnd = count-1,
  animated = false, 
} : SmallBoxesProps) => {

  return Array.from({length: count},(_, index) => {
    if (index < indexStart || index > indexEnd) return null;

    const translateZ = expanded
      ? `translateZ(${index * (rangeTranslateZ / count)}px) rotate(${index * (overallDeg / count)}deg)`
      : ``;
      
    return (
    <AnimatedElement 
      key={index} 
      translateZ={translateZ} 
      animated={animated} 
      sizeMin={sizeMin}
      sizeIndexMultiplier={sizeIndexMultiplier}
      color={color} 
      delay={25}
      transitionDelayIndexSub={transitionDelayIndexSub} 
      index={index}
    />
    );
  });
};

export default SmallerBoxes;
