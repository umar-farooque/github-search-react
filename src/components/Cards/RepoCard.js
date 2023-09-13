import React from 'react';
import Language from './components/Language';
import Stars from './components/Stars';
import Forks from './components/Forks';
import { Avatar } from '../Avatar';
import Heading from '../Heading/Heading';
import Body from '../Body/Body';

let dummyDesc =
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'";
export default function RepoCard({ data }) {
  return (
    <section
      className='w-full md:w-1/4
             flex-grow rounded
              mb-2 border border-slate-200 p-4 hover:shadow-sm hover:border-slate-300'
    >
      <div className='flex gap-2 items-center'>
        <Avatar src={data?.owner?.avatar_url} />
        <Heading>{data?.name}</Heading>
      </div>
      <div className='my-2 h-12'>
        <Body className='line-clamp-2'>{data.description || dummyDesc}</Body>
      </div>
      <div className='my-2 flex gap-3 items-center'>
        <Language language={data.language} />
        <div className='flex items-center gap-1'>
          <Stars stars={data.stargazers_count} />
        </div>
        <div className='flex items-center gap-1'>
          <Forks forks={data.forks} />
        </div>
      </div>
    </section>
  );
}
