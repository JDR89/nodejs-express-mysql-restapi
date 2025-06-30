# MySQL REST API

API REST con Node.js, Express y MySQL para gestionar empleados.

## 🚀 Características

- API REST completa para CRUD de empleados
- Conexión a base de datos MySQL
- Variables de entorno configuradas
- Lista para despliegue en Railway

## 📋 Requisitos

- Node.js 18+
- MySQL 8.0+
- npm o yarn

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd mysql_rest
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp env.example .env
# Editar .env con tus credenciales
```

4. **Configurar la base de datos**
```bash
# Ejecutar el script SQL en tu MySQL
mysql -u root -p < database/init.sql
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🌐 Despliegue en Railway

1. **Conectar repositorio a Railway**
2. **Crear servicio MySQL en Railway**
3. **Configurar variables de entorno**
4. **Desplegar automáticamente**

## 📚 Endpoints

- `GET /ping` - Health check
- `GET /api/employees` - Obtener todos los empleados
- `GET /api/employees/:id` - Obtener empleado por ID
- `POST /api/employees` - Crear nuevo empleado
- `PUT /api/employees/:id` - Actualizar empleado
- `DELETE /api/employees/:id` - Eliminar empleado

## 🔧 Variables de Entorno

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=admin
DB_DATABASE=company_db
```

## 📝 Scripts Disponibles

- `npm start` - Ejecutar en producción
- `npm run dev` - Ejecutar en desarrollo con nodemon
