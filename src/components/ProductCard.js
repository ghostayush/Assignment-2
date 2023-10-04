import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
import {IoLocationOutline,IoBedOutline} from 'react-icons/io5'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {LiaBathSolid} from 'react-icons/lia'
import {BsArrowsMove} from 'react-icons/bs'

const ProductCard = ({Data}) => {
  return (
    <Link to={`/property/${Data.id}`} className="mb-6 bg-white w-80 xl:w-96 h-[32rem] p-2 rounded-xl">
      <div className='relative '>
        <img src={Data.url} alt='pic' className='w-full h-60 rounded-xl'/>
        <div className='flex w-11/12 flex-row justify-between absolute top-3 ml-2 '>
          <div className='bg-white h-8 pl-3 pr-3 rounded-3xl flex items-center text-blue-500 font-bold'>For Rent</div>
          <AiOutlineHeart className='bg-white h-8 w-8 pl-1 pr-1 rounded-3xl text-blue-500'/>
        </div>
      </div>

      <div className='flex flex-row items-center mt-4 ml-4'>  
      <IoLocationOutline className='text-amber-700'/>{Data.location}</div>
      <div className='text-xl ml-3 mt-2 font-semibold'>{Data.address}</div>
      
      <ul className='flex flex-row gap-4 ml-5 mt-3 border-b-2 border-dotted '>
        <li><HiOutlineBuildingOffice2/> 3 ROOM</li>
        <li className='border-dotted border-l-2 pl-4 pb-2'><IoBedOutline/> 4 Bed</li>
        <li className='border-l-2 border-dotted pl-4 pb-2'><LiaBathSolid/> 1 Bath</li>
        <li className='border-l-2 border-dotted pl-4 pb-2'><BsArrowsMove/> 732 sft</li>
      </ul>

      <div className='flex flex-row justify-between pt-2 xl:pt-4'>
        <div className='text-blue-700 text-2xl'>${Data.price}<span className='text-lg text-black'>/month</span></div>
        <div className='border-2 border-blue-500 h-10 pl-6 pr-6 flex items-center rounded-3xl text-blue-700'>Read More</div>
      </div>
    </Link>
  )
}

export default ProductCard