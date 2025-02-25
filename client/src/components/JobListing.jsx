import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations, jobsData } from "../assets/assets";
import JobCard from "./JobCard";

function JobListing() {
  const { searchFilter, isSearched ,setSearchFilter ,jobs } = useContext(AppContext);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* search filter from hero componants */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
            <h3 className="font-medium text-lg mb-4">Current Search</h3>
            <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                    <span className="mr-2 inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                        {searchFilter.title}
                        <img onClick={() => setSearchFilter(pre => ({...pre ,title : ""}))}src={assets.cross_icon} alt="" className="cursor-pointer"/>
                    </span>
                )}
                {searchFilter.location && (
                    <span className="inline-flex items-center gap-2.5 bg-red-50 border border-blue-200 px-4 py-1.5 rounded">
                        {searchFilter.location}
                        <img onClick={() => setSearchFilter(pre => ({...pre ,location : ""}))} src={assets.cross_icon} alt="" className="cursor-pointer"/>
                    </span>
                )}
            </div>
            </>
        )}
        {/* catogory filterd  */}
        <div className="max-lg:hidden">
        <h4 className="font-medium text-lg py-4">Search By Catogery</h4>
        <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category , index) => (
                <li key={index} className="flex gap-3 items-center">
                    <input type="checkbox" name="" id="" className="scale-125"/>
                    {category}
                </li>
            ))}
        </ul>
        </div>

        {/* location filterd  */}
        <div className="max-lg:hidden">
        <h4 className="font-medium text-lg py-4 pt-14">Search By Location</h4>
        <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location , index) => (
                <li key={index} className="flex gap-3 items-center">
                    <input type="checkbox" name="" id="" className="scale-125"/>
                    {location}
                </li>
            ))}
        </ul>
        </div>
      </div>
        {/* job listing ... */}
        <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
            <h3 className="font-medium text-3xl py-2">Latest Jobs</h3>
            <p className="mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
                {jobs.map((job,index) => (
                    <JobCard key={index} job={job}/>
                ))}
            </div>
        </section>
    </div>
  );
}

export default JobListing;
