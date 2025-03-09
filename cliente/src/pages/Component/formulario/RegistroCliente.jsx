import React, { useEffect, useState } from 'react';
import { Form, Select, Button, message } from 'antd';

const RegistroCliente = ({ showForm, setShowForm, update }) => {
  const [provincias, setProvincias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email_cliente: '',
    dni_cliente: '',
    cuil_cliente: '',
    genero_cliente: '',
    telefono_cliente: '',
    direccion_cliente: '',
    nombre_provincia: '',
    id_usuario: '',
    nombre_empresa: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProvincias = await fetch("http://localhost:3000/provinciasGet");
        setProvincias(await resProvincias.json());

        const resUsuarios = await fetch("http://localhost:3000/getUsuarios");
        setUsuarios(await resUsuarios.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const agregarCliente = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch("http://localhost:3000/registroCliente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        message.error(`Algo salió mal: ${response.status}`);
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      message.success("Cliente registrado exitosamente");
      update(true);
      setShowForm(false);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center items-center  bg-gray-100">
      <div className="bg-gray-100 m-4 p-4 shadow-md w-full flex justify-between items-center">
              <h2 className="text-3xl font-semibold text-blue-700">Agregar Cliente</h2>
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
      {showForm && ( <form
          
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Registrar Cliente</h2>

          {/* Nombre */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={(e) => handleSelectChange('nombre', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Apellido */}
          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-700 font-medium mb-2">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={formData.apellido}
              onChange={(e) => handleSelectChange('apellido', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email_cliente" className="block text-gray-700 font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email_cliente"
              id="email_cliente"
              value={formData.email_cliente}
              onChange={(e) => handleSelectChange('email_cliente', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* DNI */}
          <div className="mb-4">
            <label htmlFor="dni_cliente" className="block text-gray-700 font-medium mb-2">
              DNI
            </label>
            <input
              type="number"
              name="dni_cliente"
              id="dni_cliente"
              value={formData.dni_cliente}
              onChange={(e) => handleSelectChange('dni_cliente', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CUIL */}
          <div className="mb-4">
            <label htmlFor="cuil_cliente" className="block text-gray-700 font-medium mb-2">
              CUIL
            </label>
            <input
              type="number"
              name="cuil_cliente"
              id="cuil_cliente"
              value={formData.cuil_cliente}
              onChange={(e) => handleSelectChange('cuil_cliente', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Género */}
          <div className="mb-4">
            <label htmlFor="genero_cliente" className="block text-gray-700 font-medium mb-2">
              Género
            </label>
            <input
              type="text"
              name="genero_cliente"
              id="genero_cliente"
              value={formData.genero_cliente}
              onChange={(e) => handleSelectChange('genero_cliente', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Teléfono */}
          <div className="mb-4">
            <label htmlFor="telefono_cliente" className="block text-gray-700 font-medium mb-2">
              Teléfono
            </label>
            <input
              type="number"
              name="telefono_cliente"
              id="telefono_cliente"
              value={formData.telefono_cliente}
              onChange={(e) => handleSelectChange('telefono_cliente', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dirección */}
          <div className="mb-4">
            <label htmlFor="direccion_cliente" className="block text-gray-700 font-medium mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="direccion_cliente"
              id="direccion_cliente"
              value={formData.direccion_cliente}
              onChange={(e) => handleSelectChange('direccion_cliente', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Provincia */}
          <div className="mb-4">
            <Form.Item label="Provincia">
              <Select
                value={formData.nombre_provincia}
                onChange={(value) => handleSelectChange('nombre_provincia', value)}
                placeholder="Seleccione una provincia"
              >
                {provincias.map((provincia) => (
                  <Select.Option key={provincia.id_provincia} value={provincia.id_provincia}>
                    {provincia.nombre_provincia}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          {/* nombre de empresa */}
          <div className="mb-4">
            <label htmlFor="direccion_cliente" className="block text-gray-700 font-medium mb-2">
              Nombre de la Empresa
            </label>
            <input
              type="text"
              name="nombre_empresa"
              id="nombre_empresa"
              value={formData.nombre_empresa}
              onChange={(e) => handleSelectChange('nombre_empresa', e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Usuario */}
          <div className="mb-4">
            <Form.Item label="Vendedor">
              <Select
                value={formData.id_usuario}
                onChange={(value) => handleSelectChange('id_usuario', value)}
                placeholder="Seleccione un vendedor"
              >
                {usuarios.map((usuario) => (
                  <Select.Option key={usuario.id_usuario} value={usuario.id_usuario}>
                    {usuario.nombre}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          {/* Submit Button */}
          <button
          
           className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
           onClick={agregarCliente}
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
        </form>)}
    </div>
  )
}
export default RegistroCliente
