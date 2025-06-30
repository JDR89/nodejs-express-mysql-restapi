-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS company_db;
USE company_db;

-- Crear tabla de empleados
CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar algunos datos de ejemplo
INSERT INTO employees (name, salary) VALUES 
    ('Juan Pérez', 50000),
    ('María García', 60000),
    ('Carlos López', 55000); 