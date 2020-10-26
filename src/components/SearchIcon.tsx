import React from 'react';
import styled from 'styled-components';

interface IProps {
  size: number;
  color: string;
}

export const StyledSvg = styled.svg<IProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: ${({ color }) => color};
`;

const SearchIcon: React.FunctionComponent<IProps> = ({ size, color }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    size={size}
    color={color}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M13.32 12.551l3.52 3.523a.545.545 0 0 1-.769.77l-3.52-3.523a5.83 5.83 0 1 1 .77-.77zm-4.49 1.022a4.742 4.742 0 1 0 0-9.485 4.742 4.742 0 0 0 0 9.485z"
    />
  </StyledSvg>
);

export default SearchIcon;
