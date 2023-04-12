import React from 'react';

const JobCategory = ({ ct }) => {
    const { category_logo, category_name, jobs_available } = ct;
    return (
        <div className='mt-5'>
            <div className="card card-compact w-80 h-full bg-slate-100 shadow-xl p-5 mx-auto">
                <img className='w-1/4 mx-24' src={category_logo} />
                <div>

                </div>

                <div className="card-body ml-10">

                    <h2 className="card-title">{category_name}</h2>
                    <p>{jobs_available}</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;