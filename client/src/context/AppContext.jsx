import {createContext, useState} from "react"


export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const [searchFilter,  setSearchFilter] = useState({
        title : "",
        location : ""
    });
    const [isSearched ,setIssearched] = useState(false)
    const value = {
        searchFilter,
        isSearched,
        setSearchFilter,
        setIssearched
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}