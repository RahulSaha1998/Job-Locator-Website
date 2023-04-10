import React from 'react';

const BannerSection = () => {
    return (
        <div className='md:grid grid-cols-2 justify-center p-5 card shadow-xl bg-slate-100'>
            <div className=''>
                <div className='lg:mt-20 lg:grid grid-rows-1 justify-center'>
                    <h4 className='text-start text-4xl font-semibold'>One Step <br /> Closer To Your <br /> <span className='text-cyan-500'>Dream job</span></h4>
                    <p className='mt-3 text-start'>
                        Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>
                    <div className='text-start mt-3'>
                        <button className="btn btn-info">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='sm:mt-5 md:mt-0 lg:py-5'>
                    <img className='rounded w-5/6' src="1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;