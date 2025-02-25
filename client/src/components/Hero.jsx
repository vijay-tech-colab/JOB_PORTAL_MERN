import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

function Hero() {
  const { setSearchFilter, setIssearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = (event) => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });

    setIssearched(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white text-center py-16 mx-2 rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,0000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          architecto nesciunt blanditiis illum facere asperiores
        </p>
        <div className="flex items-center justify-between p-1 rounded text-gray-600 max-w-xl mx-auto sm:mx-auto bg-white">
          <div className="flex items-center">
            <img src={assets.search_icon} alt="" className="h-4 sm:h-5" />
            <input
              ref={titleRef}
              type="text"
              placeholder="search more jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <div className="flex items-center">
            <img src={assets.location_icon} alt="" className="h-4 sm:h-5" />
            <input
              ref={locationRef}
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 px-6 py-2 rounded text-white"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">TrustedBy </p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
