import React,{useEffect,useState}from "react";
import RegistroCliente from "../formulario/RegistroCliente";
import { TablaCliente } from "../tabla/tablaCliente";
export const CientePanel = ()=>{
    const [update, setUpdate] = useState(false)
    const [dataArray, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/getClientes', {
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

        <RegistroCliente update={setUpdate} setShowForm={setShowForm} showForm={showForm}/>
        <TablaCliente dataArray={dataArray}/>
        
        </>
    )

}