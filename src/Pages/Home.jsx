import React from 'react';
import Navbar from '../Components/Navbar';
import { useQuery } from '@apollo/client';
import { POST_QUERY_LIMIT } from '../Queries';

const Home = () =>{
  const { data, loading } = useQuery(POST_QUERY_LIMIT, {
    variables: { limit: 5 }
  });
  console.log(data)

  if(loading){
      return <p>Loading ...</p>
  }
  return (
    <div className=''>
        <Navbar/>
        <div className='w-full mt-48 flex flex-col justify-center items-center'>
            <h1 className='text-6xl text-gray-300'>Pagina Home</h1>
        </div>
    </div>
  );
}

export default Home;