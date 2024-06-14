import { useState, useEffect } from "react";

// API link
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: false, msg: "" });
      } else {
        setIsLoading(false);
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError({ show: true, msg: error.message });
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&${apiParams}`);
    }, 500);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
