import {useEffect, useState} from 'react'

/* Si no exportamos el hook por defecto cdo importamos debemos utilizar el mismo nombre del hook  
   si exportamos con default cdo lo invocamos podemos ponerle el nombre que queramos
*/



export const useFetch = (url) => {

console.log(url)

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);


useEffect(() => {
 const abortController = new AbortController();
 const signal = abortController.signal;


 const fetchData = async() => {
    setLoading(true);
  
    try {
        const res = await fetch(url);
        if(!res.ok) {
           let err = new Error ("Error en la peticion");
           err.status = err.status || "00";
           err.statusText = err.statusText || "Ocurrio un error";    
           throw err;
             }    
        
        const json = await res.json();
        
        if(!signal.aborted) {
            setData(json);
            setError(null);
        }

    } catch (error) {
        
         if(!signal.aborted){
             setData(null);
             setError(error);
            } 

    }
    finally {
         if(!signal.aborted) 
             {setLoading(false)};  

    }

 } 



fetchData();
/* Los hooks personalizados tienen esta caracteristica
   de cada vez que el efecto termine se ejecuta esta funcion
   de retorno (como una face de desmonataje)
   esto es igual a abortar la peticion luego de unos segundos
   como hicimos en los ej anteriores helpHttp.js
   el abortController es cdo la API no responde entonces nosotros abortamos la peticion
   ver vide minuto 17:30 lo diferencia del error que se puede ocacionar con el fetch al enviar un enpoint 
   que no existe 

   https://www.youtube.com/watch?v=B4BBH3sbGoY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=43
  
   */
return () => abortController.abort();   

}, [url])




return {data, error, loading};


 
}

