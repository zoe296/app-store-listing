import React from 'react';
import styled from 'styled-components';
import Listing from './components/Listing';
import Recommendation from './components/Recommendation';

const Header = styled.div`
  padding: 6px 12px;
  background-color: #f2f2f3;
  border-bottom: solid 1px #e2e3e4;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #e2e3e4;
  font-size: 16px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

const App = () => {
  return (
    <>
      <Header>
        <Input placeholder="搜尋" />
      </Header>
      <Recommendation />
      <Listing />
    </>
  );
};

export default App;
