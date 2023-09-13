import React, { useState, lazy, Suspense } from 'react';
import { Search } from '../Search';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { EmptyResult } from '../EmptyResult';
import useSearchQuery from '../../hooks/useSearchQuery';
import useDebounce from '../../hooks/useDebounce';

const Repos = lazy(() => import('../Repos/Repos'));
export default function SearchRepos() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState('desc');

  const defSearch = useDebounce(search, 1000);
  const { data, isError, isFetching } = useSearchQuery(defSearch, sort, order);
  const handleSearchText = (e) => setSearch(e.target.value);
  const handleOrder = () =>
    setOrder((state) => (state === 'desc' ? 'asc' : 'desc'));
  const handleSort = (e) => setSort(e.target.value);
  const isEmpty = !data?.items?.length && !isError && !isFetching;
  const msgCond = !defSearch && !data?.length;
  const msg = msgCond ? 'Please Enter Query' : 'Repository Not Found';

  return (
    <div className=' p-2 md:container mx-auto mt-16'>
      <Search
        search={search}
        handleSort={handleSort}
        handleOrder={handleOrder}
        handleSearchText={handleSearchText}
        sort={sort}
        order={order}
      />

      <hr className='my-5' />
      {isFetching && <Loading />}
      {isError && <Error />}
      {isEmpty && <EmptyResult msg={msg} />}
      <div className={`flex flex-wrap gap-3`}>
        <Suspense fallback={<p>Loading Repos</p>}>
          <Repos data={data} />
        </Suspense>
      </div>
    </div>
  );
}
