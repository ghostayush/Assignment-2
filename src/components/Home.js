import React, { Fragment,useState } from 'react'
import Data from './Data';
import ProductCard from './ProductCard';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {CgSandClock} from 'react-icons/cg'

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setVisibleCards(3); 
  };

  const handleShowMoreClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };
  return (
    <div className='bg-gray-300 min-h-screen h-auto p-4'>
        <div className='flex flex-col items-center'>
           <h1 className='text-center text-4xl font-bold'>Featured Listed Property</h1>
           <p className='w-[30rem] text-center mt-4'>Real estate can be bought,sold,leased or rented ,and can be a 
           valuable Investment opportunity. The value of real estate can be...</p>
        </div>

        <div className='flex flex-row justify-between pt-12'>
            <ul className='flex flex-row gap-4'>
            {['New York', 'Mumbai', 'Paris', 'London'].map((city, index) => (
            <li
              key={index}
              className={`h-10 pl-6 pr-6 rounded-3xl flex items-center cursor-pointer ${
                activeTab === index ? 'bg-blue-500 text-white' : 'bg-slate-400'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {city}
            </li>
          ))}
            </ul>
            <div className='border-2 border-blue-500 h-10 pl-6 pr-6 flex flex-row items-center rounded-3xl gap-2'>View All<AiOutlineArrowRight/></div>
        </div>

        <div className='mt-6 w-full flex flex-wrap justify-center flex-row gap-6'>
        {Data &&
            Data.filter((propertyData) => propertyData.tag === ['New York', 'Mumbai', 'Paris', 'London'][activeTab])
            .slice(0, visibleCards).map(
              (filteredData) => (
                <Fragment key={filteredData.id}>
                  <ProductCard Data={filteredData} />
                </Fragment>
              )
            )}
        </div>

        <div className='flex justify-center w-full'>
        <button onClick={handleShowMoreClick}
        className='bg-blue-500 h-10 pl-6 pr-6 flex flex-row items-center rounded-3xl gap-2 text-white'><CgSandClock/>Show More</button>
        </div>
    </div>  
  )
}

export default Home