import {createContext, useEffect, useState} from "react"
import { jobsData } from "../assets/assets";


export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const [searchFilter,  setSearchFilter] = useState({
        title : "",
        location : ""
    });
    const [isSearched ,setIssearched] = useState(false);
    const [jobs ,setJobs] = useState([]);

    // function to fetch data 

    const fetchjobs = async ( ) => {
        setJobs(jobsData);
    }
    useEffect(() => {
        fetchjobs();
    }, []);
    const value = {
        searchFilter,
        isSearched,
        setSearchFilter,
        setIssearched,
        jobs,
        setJobs
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}