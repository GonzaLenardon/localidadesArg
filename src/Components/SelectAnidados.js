import React, {useState} from 'react';
import SelectList from './SelectList';


const SelectAnidados = () => {

const [provincia, setProvincia] = useState("");
const [departamento, setDepartamento] = useState("");
const [municipios, setMunicipios] = useState("");
const [calle, setCalle] = useState("");
const [direccion, setDireccion] = useState("")

  return ( 
    <>
    
    <h2 className='rounded-3 p-4 my-3 bg-secondary text-white text-center'>Localidades Argentinas</h2>
               
    <br/>
    <SelectList 
      title="provincias"
      url="https://apis.datos.gob.ar/georef/api/provincias"
      handleChange={(e)=>{setProvincia(e.target.value);}}   />


     {provincia && (<SelectList 
      title="departamentos"
      url={`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia}&max=134`}
      handleChange={(e)=>{setDepartamento(e.target.value);}}             />)
     } 
     {departamento && (<SelectList 
      title="localidades"
      url={`https://apis.datos.gob.ar/georef/api/localidades?departamento=${departamento}&max=150`}
      handleChange={(e)=>{setMunicipios(e.target.value);}}             />)
     }
    
     {municipios && (<SelectList 
      title="calles"
      url={`https://apis.datos.gob.ar/georef/api/calles?localidad_censal=${municipios}&max=1900`}
      handleChange={(e)=>{setCalle(e.target.value);}}             />)
     }
     
     {calle && (<SelectList 
      title="direcciones"
      url={`https://apis.datos.gob.ar/georef/api/direcciones?direccion=${calle}%201233 &provincia=${provincia}&departamento=${departamento}&localidad_censal=${municipios}&localidad=${municipios}&aplanar=true&campos=estandar&max=10`}
      handleChange={(e)=>{setDireccion(e.target.value);}}             />)
     }
  



    </>




  )
}

export default SelectAnidados