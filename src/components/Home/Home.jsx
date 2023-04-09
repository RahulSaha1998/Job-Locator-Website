import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import BannerSection from '../BannerSection/BannerSection';

const Home = () => {
    const category = useLoaderData();

    return (
        <div className='mx-10 mt-10'>
            <div>
                <BannerSection></BannerSection>
            </div>

            <div className='text-center mt-24'>
                <h2 className='font-semibold text-3xl mb-5'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:flex justify-evenly mt-5'>
                {
                    category.map(ct => <JobCategory
                        key={ct.id}
                        ct={ct}
                    ></JobCategory>)
                }
            </div>
        </div>

    );
};

export default Home;