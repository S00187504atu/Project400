import React from 'react'
import bgImg from '../../assets/home/gaa-banner.jpg';

const Banner = () => {
  return (
    <div className='min-h-screen bg-cover' style= {{backgroundImage: `url(${bgImg})` }}>
        <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black bg opacity-60'>
            <div>
                <div className='space-y-4'>
                    <p className='md:text-4xl text-2xl'>We provide the</p>
                    <h1 className='md:text-7xl text-4xl font-bold'>Best sports classes online </h1>
                    <div className='md:w-1/2'>
                        <p> Sample text goes here, please ignore. This is a placeholder</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-5'>
                        <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Start Now</button>
                        <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase'>View our classes</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Banner