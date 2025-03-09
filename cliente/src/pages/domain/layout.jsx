import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import Sidebar from '../Component/saideMenu/sidermenu';
import HeaderBar from '../Component/headers/header';

const { Content, Footer } = Layout;

const LayoutBase = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false); //  para detectar pantallas pequeñas
  const [entidad, setEntidad] = useState('Home');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setIsMobile={setIsMobile} // Pasamos la función para cambiar `isMobile`
        setEntidad ={setEntidad}
        isMobile ={isMobile}
      />
      <Layout>
        <HeaderBar
          colorBgContainer={colorBgContainer}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile} // Pasamos el estado para controlar la visibilidad del botón
          entidad={entidad}
        />
        <Content
          style={{
            margin: '16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            textAlign: 'center',
          }}
        >
          {/* Aquí se renderizan dinámicamente las rutas por outlet component */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Repo privado ©{new Date().getFullYear()} Todos los derechos reservados.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutBase;

