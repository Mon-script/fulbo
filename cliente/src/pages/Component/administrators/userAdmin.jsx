import React,{useEffect,useState}from "react";
import RegistroUsuario from "../formulario/FormularioDeRegistro";
import {TablaUsuario} from "../tabla/TablaUsuario";
export const UserPanel = ()=>{
    const [update, setUpdate] = useState(false)
    const [dataArray, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/getUsuarios', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(result => {
            setData(result);
            console.log(result);
          })
          .catch(error => {
            console.log(error);
          });
          
          setUpdate(false)
      }, [update]);

    return(
        <>

        <RegistroUsuario update={setUpdate} setShowForm={setShowForm} showForm={showForm}/>
        <TablaUsuario dataArray={dataArray}/>
        
        </>
    )

}