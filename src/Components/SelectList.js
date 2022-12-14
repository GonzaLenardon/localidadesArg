import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Mensajes from './Mensajes';

const SelectList = ({title, url, handleChange}) => {
  
  const {data, error, loading} = useFetch(url);
 
  
 
  if(!data) return null; /* evitar renderizados innecesarios */

  if(error){
    return (
      <Mensajes msg = {`Error : ${error.status}: Texto:${error.statusText}` } bgColor="#DC3545" />)

  }

//  let {provincias} = data;
  let datos = data[title];
  console.log(datos);
   

 
  return (
        <>
         <h4>{title.toUpperCase()}</h4>
         <select className='custom-select bg-success p-2 text-dark bg-opacity-50' name={title} onChange={handleChange}>
             <option value="">{title}</option>
             {datos.map((el)=>(<option value={el.nombre} key={el.id}>{el.nombre}</option>))}
         </select>
    
      </>
    )}
 export default SelectList