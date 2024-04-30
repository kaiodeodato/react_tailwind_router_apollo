import React from 'react';
import Navbar from '../Components/Navbar';
import { useQuery } from '@apollo/client';
import { POST_QUERY } from '../Queries';

const Sobre = () =>{
  const { data, loading } = useQuery(POST_QUERY);
  console.log(data)

  if(loading){
      return <p>Loading ...</p>
  }
  return (
    <div className=''>
        <Navbar/>
        <div className='w-full mt-48 flex flex-col justify-center items-center'>
            <h1 className='text-6xl text-gray-200'>Pagina Sobre</h1>
        </div>
    </div>
  );
}

export default Sobre;