# 🏐 Volley Store

E-commerce Single Page Application desarrollado con **React** como proyecto final, orientado a la comercialización de productos relacionados con el vóley.

La aplicación permite visualizar un catálogo dinámico de productos, filtrarlos por categorías, consultar el detalle de cada producto, agregarlos a un carrito de compras y completar una orden mediante un formulario de checkout.

Los productos son obtenidos desde **Firebase Firestore**, mientras que las órdenes generadas por los usuarios son almacenadas también en Firestore.

---

## 📋 Descripción del proyecto

**Volley Store** es una aplicación web de tipo e-commerce desarrollada utilizando React.

El proyecto fue desarrollado aplicando conceptos fundamentales del ecosistema React, incluyendo:

- Componentización.
- Hooks.
- Manejo de eventos.
- Estado local.
- Estado global mediante React Context.
- Navegación mediante React Router.
- Renderizado condicional.
- Consumo de datos desde Firebase Firestore.
- Generación y almacenamiento de órdenes.
- Validación de stock.
- Formularios controlados.

La aplicación funciona como una **Single Page Application (SPA)**, permitiendo navegar entre las distintas vistas sin realizar recargas completas del navegador.

---

## 🎯 Objetivos

Los principales objetivos del proyecto fueron:

- Desarrollar el front-end de una aplicación e-commerce utilizando React.
- Aplicar buenas prácticas de componentización.
- Implementar navegación utilizando React Router.
- Administrar el estado global del carrito mediante React Context.
- Utilizar hooks de React para manejar estados y efectos.
- Implementar Firebase Firestore como fuente de datos.
- Obtener dinámicamente los productos desde Firestore.
- Generar órdenes de compra y almacenarlas en Firestore.
- Crear una experiencia de usuario clara mediante loaders, mensajes de error y estados vacíos.

---

## 🛒 Funcionalidades

### Catálogo

La página principal muestra dinámicamente el listado de productos disponibles.

Cada producto contiene información como:

- Nombre.
- Imagen.
- Precio.
- Categoría.
- Stock disponible.

Los productos son obtenidos directamente desde Firebase Firestore.

---

### Categorías

El usuario puede navegar por diferentes categorías de productos.

Las categorías se encuentran integradas en la barra de navegación y utilizan rutas dinámicas mediante React Router.

Ejemplo:

```text
/categoria/pelotas
/categoria/indumentaria
/categoria/accesorios