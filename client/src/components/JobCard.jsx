import React from 'react'
import { assets } from '../assets/assets'

function JobCard({job}) {
  return (
    <div className='border p-6 shadow rounded '>
        <div className='flex justify-between items-center'>
            <img src={assets.company_icon} alt="" className='h-8'/>
        </div>
        <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
        <div className='flex items-center gap-3 mt-2 text-xs'>
            <span className='bg-blue-50 border border-blue-200 px-4 py-1.5'>{job.location}</span>
            <span className='bg-blue-50 border border-blue-200 px-4 py-1.5'>{job.level}</span>
        </div>
            <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{__html : job.description.slice(0,150)}}></p>
            <div className='flex mt-4 gap-4 text-sm'>
                <button className='bg-blue-600 text-white px-4 py-2  rounded'>Apply Now </button>
                <button className='border border-gray-500 text-gray-500 px-4 py-2  rounded'>Learn more</button>
            </div>
    </div>
  )
}

export default JobCard