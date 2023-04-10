import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import BannerSection from '../BannerSection/BannerSection';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const category = useLoaderData();

    // const [data, setData]= useState([]);
    // useEffect(()=>{
    //     fetch('jobdata.json')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])


    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([]);
    const [showMore, setShowMore] = useState(true);

    useEffect(() => {
        fetch('jobdata.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setDisplayedData(data.slice(0, 4));
            });
    }, [])

    const handleShowMore = () => {
        setDisplayedData(data); 
        setShowMore(false); 
    }


    return (
        <div className='mx-10 mt-10'>
            <div>
                <BannerSection></BannerSection>
            </div>

            <div className='text-center mt-24'>
                <h2 className='font-semibold text-3xl mb-5'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:flex justify-evenly mt-5 sm:mx-36 md:mx-5'>
                {
                    category.map(ct => <JobCategory
                        key={ct.id}
                        ct={ct}
                    ></JobCategory>)
                }
            </div>

            <div className='text-center mt-24'>
                <h2 className='font-semibold text-3xl mb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:grid grid-cols-2 gap-5 mx-10'>

                {
                    displayedData.map(dt => <FeaturedJobs
                        key={dt.id}
                        dt={dt}
                    ></FeaturedJobs>)
                }

            </div>
            <div className='text-center mt-5'>
                {showMore && (
                    <button className="btn btn-info" onClick={handleShowMore}>See All Jobs</button>
                )}
            </div>
        </div>

    );
};

export default Home;