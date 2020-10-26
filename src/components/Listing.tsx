import React, { FC, UIEvent, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { AppResponse, FeedResponse } from '../interfaces/response';
import fetcher from '../utils/fetcher';
import LoadingSpinner from './LoadingSpinner';
import StarRating from './StarRating';

interface IAppData {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  rating: number;
  comments: number;
  author: string;
  summary: string;
}

const Container = styled.div`
  height: calc(100vh - 272px);
  overflow-x: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: solid 1px #e2e3e4;
`;

const Number = styled.div`
  padding: 0 8px;
  margin: auto 0;
  width: 36px;
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

const LoadingWrapper = styled.div`
  padding: 8px;
  text-align: center;
`;

const Listing: FC<{ keyword: string }> = ({ keyword }) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [total, setTotal] = useState<number>(10);
  const [list, setList] = useState<IAppData[]>([]);

  const { data } = useSWR<FeedResponse>(
    `https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/${total}/explicit.json`,
    fetcher
  );
  const appList =
    data?.feed.results.slice(data?.feed.results.length - 10) || [];

  const ids = appList.map(app => app.id);
  const { data: appDetail } = useSWR<AppResponse>(
    ids.length ? `https://itunes.apple.com/hk/lookup?id=${ids}` : null,
    fetcher
  );

  if (
    data?.feed.results &&
    appDetail?.results &&
    appList.length &&
    list.length < data?.feed.results.length
  ) {
    const appDetails = appDetail.results;

    const res = appList.reduce((acc, app, idx) => {
      acc.push({
        id: app.id,
        name: app.name,
        category: app.genres[0].name,
        imageUrl: app.artworkUrl100,
        rating: appDetails[idx].averageUserRating,
        comments: appDetails[idx].userRatingCount,
        author: app.artistName,
        summary: appDetails[idx].description,
      });

      return acc;
    }, list);

    setList(res);
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const currentScrollTop = event.currentTarget.scrollTop;
    const direction = currentScrollTop > scrollTop ? 'DOWN' : 'UP';
    setScrollTop(currentScrollTop);

    if (
      total < 100 &&
      direction === 'DOWN' &&
      event.currentTarget.scrollTop ===
        event.currentTarget.scrollHeight - event.currentTarget.clientHeight
    ) {
      setTotal(total + 10);
    }
  };

  return (
    <Container onScroll={handleScroll}>
      {list
        .filter(
          app =>
            app.name.match(keyword) ||
            app.category.match(keyword) ||
            app.author.match(keyword) ||
            app.summary.match(keyword)
        )
        .map((app, idx) => (
          <Wrapper key={`listing_${app.id}_${idx}`}>
            <Number>{idx + 1}</Number>
            <Image isCircle={idx % 2 === 1} src={app.imageUrl} />
            <Content>
              <Name color="black">{app.name}</Name>
              <Genre color="#757575">{app.category}</Genre>
              <StarRating rating={app.rating} />
              <Count>({app.comments})</Count>
            </Content>
          </Wrapper>
        ))}
      {!data && (
        <LoadingWrapper>
          <LoadingSpinner size={32} />
        </LoadingWrapper>
      )}
    </Container>
  );
};

export default Listing;
