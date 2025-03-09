import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col } from 'antd';
import './muestracard.css'

const { Meta } = Card;

const ResponsiveCard = () => {
  return (
    <Row
      gutter={[16, 16]} // Espaciado entre columnas y filas
      justify="center" // Centra el contenido horizontalmente
    >
      <Col
        xs={60} // Ocupa todo el ancho en pantallas extra pequeñas
        sm={48} // Ocupa la mitad en pantallas pequeñas
        md={32} // Ocupa un tercio en pantallas medianas
        lg={24} // Ocupa un cuarto en pantallas grandes
      >
        <Card
          style={{
            width: '90%%',
            margin:'2em',
            marginRight:'2em',
            marginLeft:'2em',// Ajusta al tamaño del contenedor
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ResponsiveCard;
