import React from 'react';

const Home = () => {
    return (
        <div className='md:grid grid-cols-2 justify-center mx-10 mt-5 p-5 card shadow-xl'>
            <div className=''>
                <div className='lg:mt-20 lg:grid grid-rows-1 justify-center'>
                    <h4 className='text-start text-4xl font-semibold'>One Step <br /> Closer To Your <br /> <span className='text-cyan-500'>Dream job</span></h4>
                    <p className='mt-3 text-start'>
                        Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>
                    <div className='text-start mt-3'>
                        <button class="btn btn-info">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='mt-5'>
                    <img className='rounded w-5/6' src="1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;