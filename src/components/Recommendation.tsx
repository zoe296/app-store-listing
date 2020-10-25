import React, { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { FeedResponse } from '../interfaces/response';

const Container = styled.div`
  padding: 16px 0 16px 24px;
  border-bottom: solid 1px #e2e3e4;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 16px;
`;

const Listing = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1092px) {
    justify-content: flex-start;
  }
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  > div:not(:first-child):not(:last-child) {
    padding: 0 8px;
  }
  > div:first-child {
    padding-right: 8px;
  }
  > div:last-child {
    padding: 0 24px 0 8px;
  }
`;

const Image = styled.div<{ src: string }>`
  width: 90px;
  height: 90px;
  border-radius: 16px;
  background-position: center;
  background-size: cover;
  background-image: ${({ src }) => `url(${src})`};
`;

const Name = styled.div<{ color: string; paddingTop: string }>`
  width: 90px;
  font-size: 14px;
  color: ${({ color }) => color};
  padding-top: ${({ paddingTop }) => paddingTop};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Recommendation: FC = () => {
  const { data } = useSWR<FeedResponse>(
    'https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json',
    fetcher
  );

  return (
    <Container>
      <Title>推介</Title>
      <Listing>
        {data?.feed.results.map((app) => (
          <div key={app.id}>
            <Image src={app.artworkUrl100} />
            <Name color="black" paddingTop="12px">
              {app.name}
            </Name>
            <Name color="#757575" paddingTop="4px">
              {app.genres[0].name}
            </Name>
          </div>
        ))}
      </Listing>
    </Container>
  );
};

export default Recommendation;