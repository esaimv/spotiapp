CREATE TABLE cliente(
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  apellido VARCHAR(40) NOT NULL,
  direccion VARCHAR(70),
  fecha_nacimiento DATE,
  telefono VARCHAR(10),
  email VARCHAR(30)
);

CREATE TABLE modo_pago(
  num_pago INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  otros_detalles  VARCHAR(100)
);

CREATE TABLE categoria(
  id_categoria  INT AUTO_INCREMENT PRIMARY KEY,
  nombre  VARCHAR(40) NOT NULL,
  descripcion VARCHAR(100)
);

CREATE TABLE producto(
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  precio DOUBLE NOT NULL,
  id_categoria INT NOT NULL REFERENCES categoria (id_categoria)
              ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE factura(
  num_factura INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL REFERENCES cliente (id_cliente)
              ON DELETE CASCADE ON UPDATE CASCADE,
  fecha DATE NOT NULL,
  num_pago INT NOT NULL REFERENCES modo_pago (num_pago)
              ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE detalle(
  num_detalle INT NOT NULL,
  id_factura INT NOT NULL,
  id_producto INT NOT NULL REFERENCES producto (id_producto)
              ON DELETE CASCADE ON UPDATE CASCADE,
  cantidad INT NOT NULL,
  precio DOUBLE NOT NULL,
  PRIMARY KEY (num_detalle, id_factura)
);
