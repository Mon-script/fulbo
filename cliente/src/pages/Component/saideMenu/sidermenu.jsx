import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { RightOutlined, LeftOutlined, PoweroffOutlined, TeamOutlined } from '@ant-design/icons';
import { Storefront, ArrowCircleLeft, StackOverflowLogo, ArrowCircleRight } from "phosphor-react";
import { useContext } from 'react';
import { UserContext } from '../../../userContext';
import { useNavigate } from 'react-router-dom'; // Importar correctamente 'useNavigate'
import Logo from '../../../assets/fondedemanu.jpeg';
import Logo1 from '../../../assets/fondomenu3.png';

const { Sider } = Layout;

const menuItemsAd = [
  { label: 'Producto', key: 'producto', icono: <Storefront size={32} /> },
  { label: 'Stock', key: 'stock', icono: <StackOverflowLogo size={32} /> },
  { label: 'Entrada', key: 'entrada', icono: <ArrowCircleRight size={32} /> },
  { label: 'Salida', key: 'salida', icono: <ArrowCircleLeft size={32} /> },
  { label: 'Personal', key: 'personal', icono: <TeamOutlined size={32} /> },
  { label: 'Salir', key: 'salir', icono: <PoweroffOutlined size={32} />, danger: true },
];

const Sidebar = ({ collapsed, setCollapsed, setIsMobile, setEntidad, isMobile }) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate(); // Corrección: cambiar 'navegador' a 'navigate'

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="md"
      collapsedWidth={80}
      onBreakpoint={(broken) => setIsMobile(broken)}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundImage: 'url("/src/assets/fondosider.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}
    >
      {/* Logo */}
      <div style={{
        height: 100,
        margin: "16px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src={Logo1} alt="Logo" style={{
          width: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          borderRadius: "25px",
        }} />
      </div>

      {/* Menú */}
      <Menu
        onClick={({ key }) => {
          if (key === "salir") {
            localStorage.removeItem('token');
            window.location.href = "http://localhost:6969";
            setUser(null);
          } else {
            navigate(`/${key}`);  // Corrige la interpolación de la ruta
            setEntidad(key.toLocaleUpperCase());
          }
        }}
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={user && user.rol === 1 ? menuItemsAd : menuItemsAd}
        style={{ flex: 1, backgroundImage: `url(${Logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center', }} // Para que ocupe el espacio disponible
      />

      {/* Botón de colapso */}
      <div style={{ padding: 16, textAlign: 'center' }}>
        <Button
          type="primary"
          onClick={() => setCollapsed(!collapsed)}
          style={{
            transition: 'transform 0.3s ease',
            transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)',
            borderRadius: '50%', 
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
