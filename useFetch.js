/*
custom hook for fetching data from api
*/


import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setApiData(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      }
  
      fetchData(url);
    }, []);


  return {apiData,loading};
};
