# Documentación de la API

Esta sección describe las rutas y funcionalidades disponibles en la API del servicio **Spring Boot Service**.

## Endpoints principales

### **GET /usuarios**

- **Descripción**: Obtiene la lista de todos los usuarios registrados en el sistema.
- **Respuesta**:
  ```json
  [
    {
      "id": 1,
      "nombre": "Usuario Ejemplo",
      "email": "usuario@ejemplo.com"
    }
  ]
