import {useState, useEffect} from 'react'

export function useFetch (url){

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(() => {
        setLoading(true);
    
        fetch(url)
          .then((response) =>{
            if (!response.ok) {
              throw new Error('Error en la solicitud: ' + response.status);
            } 
            return response.json();
          })
          .then((data) => {
            const dataApi = data.data;
            setData(dataApi);
          })
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      }, []);
    
      return { data, loading , error };
    };
    