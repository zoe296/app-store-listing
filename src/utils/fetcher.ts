const fetcher = (url: string) => {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  return fetch(`${CORS_PROXY}${url}`).then(_ => _.json());
};

export default fetcher;
