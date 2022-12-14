import React from 'react'

const Mensajes = (({msg, bgColor}) => {
 let styles = {
        padding:"1rem",
        marginBottom:"1rem",
        textAlign: "center",
        color:"#fff",
        fontWeight:"boldt",
        backgroundColor: bgColor,
 
    };
  
 return (
            <div style={styles}>
              <p>{msg}</p>  
            </div>
     
 );
})


export default Mensajes;