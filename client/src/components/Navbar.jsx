import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
function Navbar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  console.log(user);
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between">
        <img src={assets.logo} alt="" />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={'/applications'}>Apply Jobs</Link>
            <p>Hi , {user.firstName + " " + user.lastName}</p>
            <UserButton/>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600">Recruiter Login</button>
            <button
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
              onClick={() => openSignIn()}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
