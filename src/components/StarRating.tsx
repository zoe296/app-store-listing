import React, { FC } from 'react';
import styled from 'styled-components';

const Star = styled.span`
  font-size: 12px;
  color: #fe9205;
`;

const StarRating: FC<{ rating: number }> = ({ rating }) => (
  <>
    {Array.from(Array(5)).map((_, idx) => (
      <Star key={idx}>{rating > idx ? '★' : '☆'}</Star>
    ))}
  </>
);

export default StarRating;
