import React from 'react';
import { Table } from 'antd';
import './muestratable.css'

const ResponsiveTable = () => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      responsive: ['xs', 'sm', 'md', 'lg'], // Visibilidad por tamaño de pantalla
    },
    {
      title: 'Edad',
      dataIndex: 'age',
      key: 'age',
      responsive: ['sm', 'md', 'lg'], // Oculta en pantallas muy pequeñas
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
      responsive: ['md', 'lg'], // Solo visible en dispositivos medianos o grandes
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Juan Pérez',
      age: 32,
      address: '10 Downing Street, London',
    },
    {
      key: '2',
      name: 'Ana López',
      age: 28,
      address: '1600 Pennsylvania Ave, Washington',
    },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }} // Hace la tabla desplazable horizontalmente
      />
    </div>
  );
};

export default ResponsiveTable;
