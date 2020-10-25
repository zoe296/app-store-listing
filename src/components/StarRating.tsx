import React, { FC } from 'react';
import styled from 'styled-components';

const Star = styled.span`
  font-size: 12px;
  color: #fe9205;
`;

const StarRating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      <Star>☆</Star>
      <Star>☆</Star>
      <Star>☆</Star>
      <Star>☆</Star>
      <Star>☆</Star>
    </>
  );
};

export default StarRating;
