import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Listing from './feature/Listing';
import Recommendation from './feature/Recommendation';

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
  const [keyword, setKeyword] = useState<string>('');
  const [scrollRate, setScrollRate] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleListScroll = (rate: number) => {
    setScrollRate(rate);
  };

  return (
    <>
      <Header>
        <Input
          type="input"
          placeholder="搜尋"
          value={keyword}
          onChange={handleChange}
        />
      </Header>
      <Recommendation keyword={keyword} scrollRate={scrollRate} />
      <Listing keyword={keyword} onListScroll={handleListScroll} />
    </>
  );
};

export default App;
