import React from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderBar = ({ colorBgContainer, collapsed, setCollapsed, isMobile, entidad }) => {
  return (
    <Header
      style={{
        margin: '0.3rem',
        padding: '1px 1px 1px 16px',
        //background: colorBgContainer,
        background: 'rgba(39, 255, 39, 0.77)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '7px',
        overflow:'hidden',
        fontSize: '3rem',
        color: 'rgb(3, 199, 3)'
      }}
    >
      <h3>{entidad}</h3>
      
    </Header>
  );
};

export default HeaderBar;
