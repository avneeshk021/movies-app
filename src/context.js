import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

// const API_URL =`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}& s=`
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  // useEffect(() => {
  //   let timeout =setTimeout(() =>
  //   {
  //     getMovies(`${API_URL}&s=${query}`);
  //   }, 800
  //   );
  //   return () => clearTimeout(timeout)
  
  //   },[query]);

 
  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => 
{
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };