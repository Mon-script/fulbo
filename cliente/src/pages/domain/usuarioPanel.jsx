import React from 'react';
import { CientePanel } from '../Component/administrators/clienteAdmin';
import { UserPanel } from '../Component/administrators/userAdmin';
import { Tabs } from 'antd';



const onChange = (key) => {
  console.log(`Tab key selected: ${key}`);
};

const PersonalPanel = () => {
  

  const items = [
    {
      key: '1',
      label: 'Panel de Clientes',
      children: (
        <CientePanel/>
      ),
    },
    {
      key: '2',
      label: 'Panel de Usuarios',
      children: (
        <UserPanel/>
      ),
    },
    
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default PersonalPanel;