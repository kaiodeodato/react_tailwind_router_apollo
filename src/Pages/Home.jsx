import React from 'react';
import { useQuery } from '@apollo/client';
import { POST_QUERY_LIMIT } from '../Queries';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';
const Home = () =>{
  const { data, loading } = useQuery(POST_QUERY_LIMIT, {
    variables: { limit: 10 }
  });


  if(loading){
      return <p>Loading ...</p>
  }
  return (
    <div className='bg-gray-800 w-full'>
    <Navbar/>
      <div className='container flex flex-col justify-center items-center m-auto'>
          <div className='w-full flex flex-col justify-center items-center'>
              <h1 className='text-6xl text-gray-300'>Pagina Home</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
            {data.posts.map((item)=>(
          
          <Link to={`/sobre/${item._id}`} key={item._id}>
            <div className="rounded overflow-hidden shadow-lg w-full">
              <div className="relative">
                  <div className='overflow-hidden max-h-52'>
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
              <div className="px-6 py-4 bg-gray-200" >
                  <span className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                      {item.Title.substring(0,20)}...
                  </span>
                  <p className="text-gray-500 text-sm">The collection of best pizza images in Newyork city</p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center bg-gray-100">
                <span className="ml-1">3 mins read</span>
              </div>
            </div>
          </Link>

          ))}

          </div>
      </div>
    </div>
  );
}

export default Home;