# DULCE MAICENITA STORE | E-COMMERCE
Dulce Maicenita Store es un Ecommerce creado para llevar a cabo administracion y gestion de los productos y clientes de un microemprendimiento Tucumano de golosinas.

![Logo](https://res.cloudinary.com/dhvawrags/image/upload/v1732987315/dulcemaicenita-ecommerce/a4h4q912ykuhxvkdznej.png)
## Getting Started
El proyecto esta dividido en dos partes, la carpeta /client donde se encuentra todo lo relacionado al frontend y la carpeta /server donde se encuentra todo lo relacionado al backend

Para comenzar, en necesario disponer de Node en su version mas estable instalado en nuestra computadora. Si no lo tenes instalado, te dejo unos links que podrian serte utiles aqui abajo 👇: 

- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)

Una vez instalado lo que necesitamos, podemos continuar.
## Correr el proyecto de forma local
El proyecto consta de dos partes separadas por carpetas, una para el cliente Frontend `client/` y otra para el servidor Backend `server/`. Para correr el proyecto es necesario iniciar ambas partes:
 
**Clonar el proyecto**

```bash
  git clone https://github.com/Tanti14/DM-Ecommerce.git
```

- **Para arrancar el cliente del lado del frontend**

Ir a la carpeta del Frontend

```bash
  cd client/
```

Instalar las dependencias

```bash
  npm install
```

Iniciar el cliente

```bash
  npm run dev
```

- **Para arrancar el servidor del lado del backend**

Ir a la carpeta del servidor

```bash
  cd server/
```

Instalar las dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run dev
```

## Variables de entorno
Para iniciar el proyecto, es necesario agregar las siguientes variables de entorno a tu archivo .env: 

`MONGODB_URI`

`PORT`

`JWT_SECRET`


    
## API Reference

#### Obetener todos los productos

```http
  GET /api/products
```

#### Obtener un producto especifico

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id del item solicitado |

#### Crear un producto

```http
  POST /api/products
```
| Key            | Value Type      | 
| :--------------| :-------------- | 
| `name`         | `string`        | 
| `description`  | `string`        |
| `price`        | `number`        |
| `category`     | `string`        |
| `imageUrl`     | `string`        |

#### Modificar un producto

```http
  PUT /api/products/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id del item a modificar |

#### Eliminar un producto

```http
  DELETE /api/products/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id del item a eliminar |

---
---
---
---
---

#### Obetener todos las categorias

```http
  GET /api/categories
```

#### Crear una categoria

```http
  POST /api/categories
```
| Key            | Value Type      | 
| :--------------| :-------------- | 
| `categoryName` | `string`        | 

#### Modificar una categoria

```http
  PUT /api/categories/${id}
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :--------------------------------------------|
| `id`      | `string` | **Required**. Id de la categoria a modificar |

#### Eliminar una categoria

```http
  DELETE /api/categories/${id}
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :--------------------------------------------|
| `id`      | `string` | **Required**. Id de la categoria a modificar |

## Project Stack

**Client:** React Vite, TailwindCSS

**Server:** Node, Express, MongoDB
