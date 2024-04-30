import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { POST_DETAIL_QUERY } from '../Queries';
import Navbar from '../Components/Navbar'

const Sobre = () =>{
  const { postId } = useParams(); 
  const { data, loading } = useQuery(POST_DETAIL_QUERY, {
    variables: { postsId: postId }
  });
  console.log(postId)
  if(loading){
      return <p>Loading ...</p>
  }
  return (
    <div className='bg-gray-800 w-full h-screen'>
      <Navbar/>
      <div className='container flex flex-col justify-center items-center m-auto'>
          
          <div className='w-full mt-48 flex flex-col justify-center items-center'>
              <h1 className='text-6xl text-gray-200'>Pagina Sobre</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-2'>
            {data.posts.map((item)=>(
          
            <div className="rounded overflow-hidden shadow-lg w-80" key={item._id}>
              <div className="relative">
                  <div className='overflow-hidden h-64'>
                      <img className="w-full" src={item.Image} alt={item.Image}/>
                  </div>
                  <div
                      className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Photos
                  </div>
                  <div
                      className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      <span className="font-bold">20</span>
                      <small>March</small>
                  </div>
              </div>
              <div className="px-6 py-4">
                  <span className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                      {item.Title}
                  </span>
                  <p className="text-gray-500 text-sm">The collection of best pizza images in Newyork city</p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span className="ml-1">3 mins read</span>
              </div>
            </div>
          ))}

          </div>

      </div>
    </div>
  );
}

export default Sobre;