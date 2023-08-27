import {useState ,useEffect} from 'react'

export const GestinarCentros = () => {

  const [centros, setCentros] = useState([]);

  useEffect(() => {

   

    fetch("http://localhost:1337/api/centros")
    .then((response)=> response.json())
    .then(data => {
      const centros = data.data;
      setCentros(centros)
     
      console.log(centros)})
      
      
}, []);

  
  return (
    <div className="grid grid-cols-3 gap-4 flex p-4 m-3 " >
    {centros.map((centro, index) => (
      <div  className="bg-gray-100 shadow-md rounded-lg p-4" key={index}>
        
        <ul>
            <li>Provincia: {centro.attributes.Provincia}</li>
            <li>Direccion Territorial: {centro.attributes.DireccionTerritorial}</li>
            <li>Municipio: {centro.attributes.Municipio}</li>
            <li>Nombre: {centro.attributes.Nombre}</li>
            
          </ul>
          
      </div>
    ))}
  </div>
  )
}
