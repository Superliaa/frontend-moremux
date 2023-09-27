import {useState, useEffect} from 'react'

export function useFetch (url){

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
    
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const dataApi = data.data;
            setData(dataApi);
          })
          .finally(() => setLoading(false));
      }, []);
    
      return { data, loading };
    };
    