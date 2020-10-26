import React from 'react';
import styled, { keyframes, Keyframes } from 'styled-components';

const rotate: Keyframes = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(450deg);
  }
`;

const line: Keyframes = keyframes`
  0% {
    stroke-dasharray: 2, 85.964;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    transform: rotate(90deg);
  }
`;

interface IProps {
  size?: number;
}

const Loading = styled.svg<IProps>`
  > circle {
    fill: none;
    stroke: #596480;
    box-sizing: border-box;
    stroke-width: 0.1875rem;
    transform-origin: 50%;
    animation: ${line} 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      ${rotate} 1.6s linear infinite;
  }
`;

const LoadingSpinner: React.FunctionComponent<IProps> = ({ size = 24 }) => (
  <Loading viewBox="0 0 32 32" width={size} height={size}>
    <circle cx="16" cy="16" r="14" />
  </Loading>
);

export default LoadingSpinner;
