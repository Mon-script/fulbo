import React from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderBar = ({ colorBgContainer, collapsed, setCollapsed, isMobile, entidad }) => {
  return (
    <Header
      style={{
        margin: '1rem',
        padding: '1px 1px 1px 16px',
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '15px',
        overflow:'hidden',
        fontSize: '3rem'
      }}
    >
      <h3>{entidad}</h3>
      
    </Header>
  );
};

export default HeaderBar;
