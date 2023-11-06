import {useState} from 'react'
import Card from "../components/Card";
import {BsChevronCompactDown} from 'react-icons/bs';
import { Data } from "../data/data";



export default function Section() {

  

  return (
    <>
    {
        Object.keys(Data).map(categoria => (
            <div key={categoria}>
            <h6 className="text-2xl font-semibold mt-8">{Data[categoria].nombre}</h6>

           
            <hr />
            
        <div className="mt-8 grid gap-8 sm:grid-cols-5">
            
            {Data[categoria].elementos.map(elemento => (
        
                <Card key={elemento.nombre} elemento={elemento.nombre} icon={elemento.icon}/>

            ))}
          
                </div>
  


            </div>

        ))
    }
    
    

   
    </>
  )
}
