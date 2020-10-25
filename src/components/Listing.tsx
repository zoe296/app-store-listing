import React, { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { AppResponse, FeedResponse } from '../interfaces/response';
import fetcher from '../utils/fetcher';
import StarRating from './StarRating';

const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: solid 1px #e2e3e4;
`;

const Number = styled.div`
  padding: 0 8px;
  margin: auto 0;
  width: 23px;
  height: 23px;
  font-size: 20px;
  text-align: center;
  color: #757575;
`;

const Image = styled.div<{ src: string; isCircle: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '12px')};
  background-position: center;
  background-size: cover;
  background-image: ${({ src }) => `url(${src})`};
`;

const Content = styled.div`
  padding: 4px 8px;
`;

const Name = styled.div<{ color: string }>`
  font-size: 14px;
  color: ${({ color }) => color};
`;

const Genre = styled(Name)`
  padding: 4px 0;
`;

const Count = styled.span`
  color: #757575;
  font-size: 12px;
`;

const Listing: FC = () => {
  const { data } = useSWR<FeedResponse>(
    'https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/10/explicit.json',
    fetcher
  );
  const ids = data?.feed.results.map((app) => app.id);

  const { data: appDetail } = useSWR<AppResponse>(
    ids ? `https://itunes.apple.com/hk/lookup?id=${ids}` : null,
    fetcher
  );
  const apps = appDetail?.results || [];

  return (
    <>
      {data?.feed.results.map((app, idx) => (
        <Wrapper key={app.id}>
          <Number>{idx + 1}</Number>
          <Image isCircle={idx % 2 === 1} src={app.artworkUrl100} />
          <Content>
            <Name color="black">{apps[idx]?.trackCensoredName}</Name>
            <Genre color="#757575">{apps[idx]?.genres[0]}</Genre>
            <StarRating rating={apps[idx]?.averageUserRating} />
            <Count>({apps[idx]?.userRatingCount})</Count>
          </Content>
        </Wrapper>
      ))}
    </>
  );
};

export default Listing;
