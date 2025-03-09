import React, { useEffect, useState } from 'react';
import {Form, Select, Button} from 'antd';
const {Option}= Select

const RegistroUsuario = ({showForm,setShowForm,update}) => {
  const [rol, setRol] = useState([])
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    id_rol: '',
    contrasena: '',
    usuario: '',
    email_usuario:'',
    telefono_usuario:'',
    fecha_inicio: '' // Agregar el campo fecha_inicio
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRol = await fetch ("http://localhost:3000/rolGet");
        const rol = await resRol.json()
        console.log(rol)
        setRol(rol);
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  },[])

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));

  


}
  
const agregarUsuario= async (e) => {
  e.preventDefault();
  console.log(formData)
  try{
    const response = await fetch("http://localhost:3000/registroUser",
      {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      if (!response.ok) {
        message.error(`Algo salio mal: ${response.status}`)
        throw new Error(`Error en la solicitud: ${response.status}`);
    }
    if (response.ok) {
        message.success("Operacion exitosa")
    } 
  } catch (error) {
    console.error("Error al enviar datos:", error);
}

    
    console.log(formData);
    setFormData({
      nombre: '',
      apellido: '',
      id_rol: '',
      contrasena: '',
      usuario: '',
      email_usuario:'',
      telefono_usuario:'',
      fecha_inicio: '' // Limpiar el campo después del submit
    });
  };

  return (
    <div className="flex flex-col items-center justify-center items-center  bg-gray-100">
      <div className="bg-gray-100 m-4 p-4 shadow-md w-full flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-blue-700">Agregar Usuario</h2>
        <Button
        ghost
          type="primary"
          onClick={() => {
            setShowForm(true);
          }}
          hidden={showForm}
        >
          Agregar
        </Button>
      </div>
      {showForm&&(
         <form
         
         className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
       >
         <h2 className="text-2xl font-bold text-center mb-6">Registrar Usuario</h2>
         
         {/* Campo para el nombre */}
         <div className="mb-4">
           <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
             Nombre
           </label>
           <input
             type="text"
             name="nombre"
             id="nombre"
             value={formData.nombre}
             onChange={(e) => handleInputChange('nombre', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         {/* Campo para el apellido */}
         <div className="mb-4">
           <label htmlFor="apellido" className="block text-gray-700 font-medium mb-2">
             Apellido
           </label>
           <input
             type="text"
             name="apellido"
             id="apellido"
             value={formData.apellido}
             onChange={(e) => handleInputChange('apellido', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         {/* Campo para el rol */}
          <div className="mb-4">
                   <Form.Item label="Rol">
                     <Select
                       value={formData.id_rol}
                       onChange={(value) => handleInputChange('id_rol', value)}
                       placeholder="Seleccione un Rol">
                       {rol.map((Rol) => ( <Option key={Rol.id_rol} value={Rol.id_rol}>{Rol.nombre_rol}</Option>))}</Select>
                   </Form.Item>
                 </div>
         
 
         {/* Campo para el usuario */}
         <div className="mb-4">
           <label htmlFor="usuario" className="block text-gray-700 font-medium mb-2">
             Usuario
           </label>
           <input
             type="text"
             name="usuario"
             id="usuario"
             value={formData.usuario}
             onChange={(e) => handleInputChange('usuario', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
              {/* Campo para la contraseña */}
         <div className="mb-6">
           <label htmlFor="contrasena" className="block text-gray-700 font-medium mb-2">
             Contraseña
           </label>
           <input
             type="password"
             name="contrasena"
             id="contrasena"
             value={formData.contrasena}
             onChange={(e) => handleInputChange('contrasena', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         {/* Campo para el email */}
         <div className="mb-4">
           <label htmlFor="email_usuario" className="block text-gray-700 font-medium mb-2">
             Correo Electronico
           </label>
           <input
             type="text"
             name="email_usuario"
             id="email_usuario"
             value={formData.email_usuario}
             onChange={(e) => handleInputChange('email_usuario', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         {/* Campo para el Telefono */}
         <div className="mb-4">
           <label htmlFor="telefono_usuario" className="block text-gray-700 font-medium mb-2">
             Telefono:
           </label>
           <input
             type="number"
             name="telefono_usuario"
             id="Telefono"
             value={formData.telefono_usuario}
             onChange={(e) => handleInputChange('telefono_usuario', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         {/* Campo para la fecha de inicio */}
         <div className="mb-4">
           <label htmlFor="fecha_inicio" className="block text-gray-700 font-medium mb-2">
             Fecha de inicio
           </label>
           <input
             type="date"
             name="fecha_inicio"
             id="fecha_inicio"
             value={formData.fecha_inicio}
             onChange={(e) => handleInputChange('fecha_inicio', e.target.value)}
             required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
        
         
         <button
           
           className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
           onClick={agregarUsuario}
         >
           Registrar
         </button>
         <br />
         <button
           onClick={()=> setShowForm(false)}
           className="w-full bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
         >
           Cnacelar
         </button>
       </form>
      )}
     
    </div>
  );
};

export default RegistroUsuario;
