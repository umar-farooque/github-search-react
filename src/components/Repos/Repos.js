import React from 'react';
import { RepoCard } from '../Cards';

export default React.memo(function Repos({ data, Card }) {
  return (
    <>
      {data?.items?.map((d) =>
        Card ? <Card data={d} key={d.id} /> : <RepoCard data={d} key={d.id} />
      )}
    </>
  );
});
