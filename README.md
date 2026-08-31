# 🏐 Volley Store

E-commerce desarrollado con **React** que implementa catálogo dinámico, navegación SPA, carrito de compras, checkout e integración con **Firebase Firestore**.

🔗 **Demo:** https://volley-store-vert.vercel.app/

---

## 📖 Sobre el proyecto

**Volley Store** es una Single Page Application (SPA) orientada a la venta de productos relacionados con el vóley.

El proyecto fue desarrollado originalmente como proyecto final de mi formación en React y posteriormente utilizado para profundizar conceptos de arquitectura de componentes, manejo de estado global, navegación e integración con servicios externos.

La aplicación permite recorrer un catálogo almacenado en Firestore, filtrar productos por categoría, consultar el detalle de cada producto, seleccionar cantidades según el stock disponible, administrar un carrito y completar una compra generando una orden en la base de datos.

---

## ✨ Funcionalidades principales

- Catálogo dinámico obtenido desde **Firestore**
- Filtrado de productos por categoría
- Vista de detalle de cada producto
- Selección de cantidades mediante `ItemCount`
- Validación de stock disponible
- Carrito global mediante **Context API**
- Agregado y eliminación de productos
- Opción para vaciar el carrito
- Cálculo de cantidades, subtotales y total
- Checkout mediante formulario
- Generación de órdenes en Firestore
- Confirmación de compra mediante ID de orden
- Navegación SPA con **React Router**
- Estados de carga y manejo de errores
- Renderizado condicional
- Diseño responsive

---

## 🛠️ Tecnologías utilizadas

### Frontend

- React
- JavaScript
- HTML5
- CSS3
- Bootstrap

### Librerías y herramientas

- Vite
- React Router DOM
- React Context API
- Firebase
- Cloud Firestore
- npm
- Git
- GitHub

---

## ⚛️ Conceptos de React aplicados

Durante el desarrollo se aplicaron conceptos como:

- Componentización
- Props
- Estado local
- `useState`
- `useEffect`
- `useContext`
- Context API
- Manejo de eventos
- Renderizado condicional
- Formularios controlados
- Listados dinámicos
- Rutas dinámicas
- Manejo de estados de carga y error

---

## 🧩 Arquitectura

La aplicación está organizada mediante componentes con responsabilidades específicas.

Los componentes contenedores se encargan principalmente de obtener y preparar los datos, mientras que los componentes de presentación se encargan de mostrarlos.

```text
App
│
├── Navbar
│   └── CartWidget
│
├── Routes
│   │
│   ├── ItemListContainer
│   │   └── ItemList
│   │       └── Item
│   │
│   ├── ItemDetailContainer
│   │   └── ItemDetail
│   │       └── ItemCount
│   │
│   ├── Cart
│   │
│   └── Checkout
│
└── CartContext
        │
        └── Estado global del carrito

Firestore
│
├── products
└── orders
```

Esta separación permite mantener la lógica distribuida y evitar concentrar todas las responsabilidades en un único componente.

---

## 🛒 Manejo del carrito

El estado global del carrito se administra mediante **React Context API**.

`CartContext` permite que distintos componentes puedan acceder y modificar el carrito sin necesidad de pasar información mediante props a través de componentes intermedios.

Entre sus responsabilidades se encuentran:

- Agregar productos
- Actualizar cantidades
- Eliminar productos
- Vaciar el carrito
- Calcular la cantidad total de unidades
- Calcular el total de la compra
- Validar las cantidades respecto del stock disponible

Componentes como `ItemDetail`, `CartWidget` y `Cart` trabajan sobre el mismo estado global.

Los estados que pertenecen únicamente a un componente se mantienen como estado local.

---

## 🔥 Firebase / Firestore

La aplicación utiliza **Cloud Firestore** como servicio de persistencia.

Se utilizan principalmente dos colecciones:

```text
products → catálogo de productos
orders   → órdenes generadas durante el checkout
```

Los productos se obtienen dinámicamente desde Firestore.

Cuando el usuario completa correctamente una compra, se genera una nueva orden con la información del comprador, los productos seleccionados y el total.

Firestore genera un ID único para la orden, que luego se muestra al usuario como confirmación de la compra.

---

## 🔄 Flujo de compra

```text
Catálogo
   ↓
Seleccionar producto
   ↓
Detalle del producto
   ↓
Seleccionar cantidad
   ↓
Agregar al carrito
   ↓
CartContext
   ↓
Carrito
   ↓
Checkout
   ↓
Datos del comprador
   ↓
Generar orden
   ↓
Firestore
   ↓
ID de compra
   ↓
Confirmación
```

---

## 🗺️ Navegación

La navegación se implementa mediante **React Router**, manteniendo el comportamiento de una SPA y evitando recargas completas del navegador.

Las principales rutas de la aplicación incluyen:

```text
/
/categoria/:categoryId
/item/:itemId
/cart
/checkout
```

---

## 📦 Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/dabouzajm-lang/volley-store.git
```

### 2. Ingresar al proyecto

```bash
cd volley-store
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto tomando como referencia `.env.example`.

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Completar los valores con la configuración correspondiente al proyecto de Firebase.

> El archivo `.env` no debe ser incluido en el repositorio.

### 5. Ejecutar el proyecto

```bash
npm run dev
```

Vite iniciará el servidor de desarrollo y mostrará la dirección local correspondiente.

---

## 🏗️ Build de producción

Para generar una versión optimizada de producción:

```bash
npm run build
```

Para probar el build localmente:

```bash
npm run preview
```

---

## 🌐 Demo

La aplicación se encuentra desplegada online:

**https://volley-store-vert.vercel.app/**

---

## 📚 Documentación del proyecto original

Volley Store fue desarrollado originalmente como **proyecto final del curso de React**.

La documentación correspondiente a la entrega académica —incluyendo explicación detallada de componentes, Context API, Firestore, decisiones de diseño, dificultades encontradas y requisitos cumplidos— se conserva en:

👉 **[Documentación de la entrega CoderHouse](./docs/ENTREGA-CODERHOUSE.md)**

De esta manera, el repositorio mantiene tanto la documentación técnica original como una presentación actual orientada al proyecto.

---

## 👨‍💻 Autor

**Juan Manuel da Bouza**

Frontend Developer

🌐 Portfolio  
https://dabouzajm-lang.github.io/portfolio-daBouza/

💻 GitHub  
https://github.com/dabouzajm-lang

🔗 LinkedIn  
https://www.linkedin.com/in/juan-manuel-da-bouza-58a952249/

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de portfolio.