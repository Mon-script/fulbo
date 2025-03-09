DROP database IF EXISTS Donpollo;
CREATE DATABASE Donpollo ;

USE Donpollo;

-- Tabla ROL
CREATE TABLE ROL (
  id_rol INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre_rol VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO ROL (nombre_rol) VALUES ('ADMIN'), ('VENDEDOR'), ('DEPOSITO');


-- Tabla USUARIO
CREATE TABLE USUARIO (
  id_usuario BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  usuario VARCHAR(50) NOT NULL,
  contrasena TEXT NOT NULL,
  id_rol INT NOT NULL,
  email_usuario VARCHAR(50),
  telefono_usuario BIGINT NOT NULL,
  fecha_inicio DATE NOT NULL,
  activo BOOLEAN NOT NULL,
  FOREIGN KEY (id_rol) REFERENCES ROL(id_rol)
);

insert into  USUARIO (nombre,apellido,usuario,contrasena,id_rol,email_usuario,telefono_usuario,fecha_inicio,activo)
VALUES('octavio','balverdi','octavio','$2b$10$.Wnz22IMsp0hmqF92qEJbeCCJB3nSvbzi5jcittV2XwWqx8azwHIS',1,'soyoctavio@gmil.com',3816442730,'2024-07-24',1),
('Luis', 'García', 'luisg', '$2b$10$.Wnz22IMsp0hmqF92qEJbeCCJB3nSvbzi5jcittV2XwWqx8azwHIS', 1, 'luisg@gmail.com', 9876543210, '2022-01-01', 1),
('María', 'Rodríguez', 'mariaR', '$2b$10$.Wnz22IMsp0hmqF92qEJbeCCJB3nSvbzi5jcittV2XwWqx8azwHIS', 1, 'mariaR@gmail.com', 5551234567, '2022-01-01', 1),
('Carlos', 'Martinez', 'carlosM', '$2b$10$.Wnz22IMsp0hmqF92qEJbeCCJB3nSvbzi5jcittV2XwWqx8azwHIS', 2, 'carlosM@gmail.com', 1234567891, '2022-01-01', 1),
('Gabriel', 'Gómez', 'gabrielG', '$2b$10$.Wnz22IMsp0hmqF92qEJbeCCJB3nSvbzi5jcittV2XwWqx8azwHIS', 3, 'gabrielG@gmail.com', 9876543210, '2022-01-01', 1);

select * from USUARIO;


-- Tabla MARCA
CREATE TABLE MARCA (
  id_marca BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre_marca TEXT NOT NULL,
  detalle TEXT,
  activo BOOLEAN NOT NULL
);
INSERT INTO MARCA (nombre_marca, detalle, activo) VALUES ('Yamaha', 'Motorcicleta de alta calidad',1),
('Honda', 'Automóvil de lujo',1),
('BMW', 'Coche deportivo',1),
('Mercedes', 'Coche de lujo',1),
('Ford', 'Automóvil familiar',1);

select * from marca;


-- Tabla PRODUCTO
CREATE TABLE PRODUCTO (
  id_producto BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  id_marca BIGINT NOT NULL,
  nombre_producto VARCHAR(50) NOT NULL,
  img LONGBLOB ,
  precio_costo DECIMAL(10, 2) NOT NULL,
  precio_mayorista DECIMAL(10, 2) NOT NULL,
  precio_minorista DECIMAL(10, 2) NOT NULL,
  id_precio_especial decimal(10, 2),
  detalle_producto TEXT NOT NULL,
  activo BOOLEAN NOT NULL,
  FOREIGN KEY (id_marca) REFERENCES MARCA(id_marca)
);

insert INTO PRODUCTO (id_marca, nombre_producto, precio_costo, precio_mayorista, precio_minorista, id_precio_especial, detalle_producto, activo) values 
(1, 'Yamaha FJR1300', 10000.00, 15000.00, 12000.00, NULL, 'Motorcicleta de alta calidad', 1),
(2, 'Honda Civic', 5000.00, 8000.00, 7000.00, NULL, 'Automóvil de lujo', 1),
(3, 'BMW 3 Series', 8000.00, 12000.00, 10000.00, NULL, 'Coche deportivo', 1),
(4, 'Mercedes S-Class', 12000.00, 20000.00, 18000.00, NULL, 'Coche de lujo', 1),
(5, 'Ford Mustang', 3000.00, 5000.00, 4500.00, NULL, 'Automóvil familiar', 1);

-- Tabla PROVINCIA
CREATE TABLE PROVINCIA (
  id_provincia INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre_provincia VARCHAR(50) NOT NULL,
  codigo_postal INT NOT NULL
);

INSERT INTO PROVINCIA (nombre_provincia, codigo_postal)
VALUES 
('Buenos Aires', 1000),
('Cordoba', 500),
('Santa Fe', 300),
('Tucuman', 400),
('Jujuy', 440),
('Salta', 450),
('Catamarca', 460),
('San Juan', 470),
('La Rioja', 480),
('Mendoza', 510),
('Santa Cruz', 520),
('Chubut', 610),
('Neuquen', 620),
('Tierra del Fuego', 640),
('Patagonia', 650),
('Rio Negro', 660),
('Chaco', 670),
('Formosa', 680),
('Misiones', 690),
('Entre Rios', 700),
('Corrientes', 710),
('Santa Cruz', 720),
('La Pampa', 730),
('Santa Fe', 740),
('Cordoba', 750),
('Buenos Aires', 760);

select * from PROVINCIA;
-- Tabla CLIENTE
CREATE TABLE CLIENTE (
  id_cliente BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  email_cliente VARCHAR(50) NOT NULL,
  dni_cliente bigint,
  cuil_cliente bigint,
  genero_cliente VARCHAR(50),
  telefono_cliente bigint NOT NULL,
  direccion_cliente VARCHAR(50) NOT NULL,
  id_provinciafk INT NOT NULL,
  nombre_empresa VARCHAR(50),
  id_usuario BIGINT NOT NULL,
  activo BOOLEAN NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario),
  FOREIGN KEY (id_provinciafk) REFERENCES PROVINCIA(id_provincia)
);

INSERT INTO CLIENTE (nombre, apellido, email_cliente, dni_cliente, cuil_cliente, genero_cliente, telefono_cliente, direccion_cliente, id_provinciafk, nombre_empresa, id_usuario, activo)
VALUES ('Jesús', 'Martinez', 'jesusM@gmail.com', 1234567890, 1234567890, 'Masculino', 1234567891, 'Calle 123', 1, 'Empresas de México',  1, 1),
('Ana', 'Gómez', 'anaG@gmail.com', 9876543210, 9876543210, 'Femenino', 1234567890, 'Calle 456', 2, 'Empresas de Guadalajara',  2, 1),
('Pedro', 'Rodríguez', 'pedroR@gmail.com', 5551234567, 5551234567, 'Masculino', 9876543210, 'Calle 789', 3, 'Empresas de Puebla',  3, 1),
('Sofía', 'Martinez', 'sofiaM@gmail.com', 1234567891, 1234567891, 'Femenino', 1234567890, 'Calle 101', 4, 'Empresas de León',  4, 1),
('Hugo', 'Gómez', 'hugoG@gmail.com', 9876543210, 9876543210, 'Masculino', 1234567891, 'Calle 111', 5, 'Empresas de Toluca',  5, 1);


-- Tabla ENTRADA
CREATE TABLE ENTRADA (
  id_entrada BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  id_productofk BIGINT NOT NULL,
  cantidad_producto INT UNSIGNED,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  FOREIGN KEY (id_productofk) REFERENCES PRODUCTO(id_producto)
);

INSERT INTO ENTRADA (id_productofk, cantidad_producto, fecha, hora) VALUES (1, 10, '2022-01-01', '10:00:00'),
(2, 20, '2022-01-02', '11:00:00'),
(3, 30, '2022-01-03', '12:00:00'),
(4, 40, '2022-01-04', '13:00:00'),
(5, 50, '2022-01-05', '14:00:00');

-- Tabla SALIDA
CREATE TABLE SALIDA (
  id_salida BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  id_productofk BIGINT NOT NULL,
  id_usuario BIGINT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  FOREIGN KEY (id_productofk) REFERENCES PRODUCTO(id_producto),
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario)
);

INSERT INTO SALIDA (id_productofk, id_usuario, fecha, hora) VALUES (1, 1, '2022-01-01', '15:00:00'),
(2, 2, '2022-01-02', '16:00:00'),
(3, 3, '2022-01-03', '17:00:00'),
(4, 4, '2022-01-04', '18:00:00'),
(5, 5, '2022-01-05', '19:00:00');

-- Tabla VENTA
CREATE TABLE VENTA (
  id_venta BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_usuario BIGINT NOT NULL,
  id_cliente BIGINT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  total DECIMAL(10, 2),
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario),
  FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id_cliente)
);

INSERT INTO VENTA (id_usuario, id_cliente, fecha, hora, total) VALUES (1, 1, '2022-01-01', '10:00:00', 10000.00),
(2, 2, '2022-01-02', '11:00:00', 20000.00),
(3, 3, '2022-01-03', '12:00:00', 30000.00),
(4, 4, '2022-01-04', '13:00:00', 40000.00),
(5, 5, '2022-01-05', '14:00:00', 50000.00);


-- Tabla DETALLE_VENTA
CREATE TABLE DETALLE_VENTA (
  id_detalle BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_venta BIGINT NOT NULL,
  id_productofk BIGINT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED,
  FOREIGN KEY (id_venta) REFERENCES VENTA(id_venta),
  FOREIGN KEY (id_productofk) REFERENCES PRODUCTO(id_producto)
);

INSERT INTO DETALLE_VENTA (id_venta, id_productofk, cantidad, precio_unitario) VALUES (1, 1, 10, 1000.00),
(2, 2, 20, 1000.00),
(3, 3, 30, 1000.00),
(4, 4, 40, 1000.00),
(5, 5, 50, 1000.00);