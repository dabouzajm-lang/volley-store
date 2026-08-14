🏐 Volley Store

E-commerce Single Page Application desarrollada con React, como proyecto final del curso de React.

Volley Store es una tienda online orientada a productos relacionados con el vóley. La aplicación permite visualizar un catálogo dinámico, navegar por categorías, consultar el detalle de cada producto, seleccionar cantidades, administrar un carrito de compras y completar una orden mediante un formulario de checkout.

La información de los productos y las órdenes se gestiona mediante Firebase Firestore, utilizado como servicio de persistencia en la nube.

📋 Índice

Descripción del proyecto

Tecnologías utilizadas

Estructura del proyecto

Estructura y responsabilidades de los componentes

Uso de React Context

Flujo del carrito

Firebase y Firestore

Ejemplos de documentos de Firestore

Decisiones de diseño

Dificultades encontradas y soluciones

Instalación

Ejecución

Flujo de prueba

Conclusión

Autor

📖 Descripción del proyecto

El objetivo del proyecto fue desarrollar una Single Page Application (SPA) de e-commerce utilizando React y aplicando los principales conceptos trabajados durante el curso.

La aplicación permite:

Visualizar un catálogo de productos.

Obtener los productos dinámicamente desde Firestore.

Filtrar productos por categoría.

Acceder al detalle individual de cada producto.

Consultar el stock disponible.

Seleccionar una cantidad mediante ItemCount.

Agregar productos al carrito.

Administrar el carrito mediante React Context.

Visualizar cantidades, subtotales y total.

Completar los datos del comprador.

Generar una orden en Firestore.

Obtener el ID generado por Firestore.

Mostrar al usuario la confirmación de la compra.

La navegación se realiza mediante React Router, manteniendo el comportamiento de una SPA y evitando recargas completas del navegador.

🛠️ Tecnologías utilizadas

Front-end

React

JavaScript

HTML5

CSS3

Librerías y herramientas

Vite

React Router DOM

Firebase

Cloud Firestore

Bootstrap

npm

Git

GitHub

Conceptos de React aplicados

Componentización.

Props.

Estado local.

useState.

useEffect.

useContext.

React Context API.

Manejo de eventos.

Renderizado condicional.

Formularios controlados.

Listados dinámicos mediante .map().

Navegación mediante React Router.

Consumo de datos externos.

Manejo de estados de carga y error.

📁 Estructura del proyecto

La estructura principal del proyecto fue organizada separando componentes según sus responsabilidades:

volley-store/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── Cart/
│   │   │   └── Cart.jsx
│   │   │
│   │   ├── CartWidget/
│   │   │   └── CartWidget.jsx
│   │   │
│   │   ├── Checkout/
│   │   │   └── Checkout.jsx
│   │   │
│   │   ├── Item/
│   │   │   └── Item.jsx
│   │   │
│   │   ├── ItemCount/
│   │   │   └── ItemCount.jsx
│   │   │
│   │   ├── ItemDetail/
│   │   │   └── ItemDetail.jsx
│   │   │
│   │   ├── ItemDetailContainer/
│   │   │   └── ItemDetailContainer.jsx
│   │   │
│   │   ├── ItemList/
│   │   │   └── ItemList.jsx
│   │   │
│   │   ├── ItemListContainer/
│   │   │   └── ItemListContainer.jsx
│   │   │
│   │   └── NavBar/
│   │       └── Navbar.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── App.jsx
│   ├── firebase.js
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

🧩 Estructura y responsabilidades de los componentes

Una de las decisiones principales del proyecto fue separar los componentes de acuerdo con la responsabilidad que cumple cada uno.

Se buscó evitar concentrar toda la lógica en App.jsx y mantener una estructura modular.

También se aplicó una separación entre componentes contenedores, responsables principalmente de manejar lógica y datos, y componentes de presentación, responsables principalmente de mostrar la información recibida.

App

App.jsx funciona como punto principal de composición de la aplicación.

Es responsable de configurar las rutas mediante React Router:

<Routes>

    <Route
        path="/"
        element={<ItemListContainer />}
    />

    <Route
        path="/categoria/:categoryId"
        element={<ItemListContainer />}
    />

    <Route
        path="/item/:itemId"
        element={<ItemDetailContainer />}
    />

    <Route
        path="/cart"
        element={<Cart />}
    />

</Routes>

De esta manera, cada URL determina qué componente se renderiza.

Navbar

Navbar contiene la navegación principal.

Incluye:

Acceso al catálogo.

Acceso a categorías.

Acceso al carrito.

CartWidget.

Se utiliza Link de React Router para navegar sin recargar el navegador.

ItemListContainer

Es el componente contenedor responsable de obtener los productos desde Firestore.

Sus responsabilidades principales son:

Consultar Firestore.

Detectar la categoría seleccionada.

Administrar el estado de carga.

Administrar posibles errores.

Preparar los datos para ItemList.

El flujo es:

ItemListContainer
        │
        │ consulta Firestore
        ↓
    productos
        │
        ↓
     ItemList
        │
        ↓
      Item

Esta separación evita que el componente encargado de mostrar los productos tenga que conocer cómo se obtienen los datos.

ItemList

ItemList es un componente principalmente presentacional.

Recibe un listado de productos y lo recorre mediante .map():

products.map(product => (
    <Item
        key={product.id}
        product={product}
    />
))

Su responsabilidad es generar la lista de componentes Item.

Item

Item representa una tarjeta individual del catálogo.

Muestra:

Imagen.

Nombre.

Precio.

Botón para acceder al detalle.

El enlace utiliza el ID del producto:

<Link to={`/item/${product.id}`}>
    Ver detalle
</Link>

ItemDetailContainer

Es el componente contenedor encargado de obtener un producto individual desde Firestore.

Utiliza el ID recibido desde la URL:

/item/:itemId

El flujo es:

URL
 ↓
itemId
 ↓
Firestore
 ↓
Producto
 ↓
ItemDetail

ItemDetail

Es el componente encargado de presentar la información completa del producto.

Muestra:

Imagen.

Nombre.

Precio.

Categoría.

Stock.

ItemCount.

También consume CartContext para poder utilizar addItem().

Una vez agregado el producto, ItemDetail utiliza renderizado condicional para ocultar ItemCount y ofrecer al usuario las opciones de continuar comprando o ir al carrito.

ItemCount

ItemCount administra la cantidad que el usuario desea agregar.

Recibe:

<ItemCount
    stock={product.stock}
    initial={1}
    onAdd={handleAdd}
/>

Sus responsabilidades son:

Mostrar la cantidad actual.

Incrementar.

Decrementar.

Respetar el mínimo permitido.

No superar el stock.

Ejecutar onAdd() cuando el usuario confirma.

CartWidget

CartWidget muestra el estado resumido del carrito dentro del Navbar.

Consume CartContext para obtener la cantidad total de unidades.

Ejemplo:

🛒 0

Cuando se agregan productos:

🛒 3

El valor se actualiza automáticamente porque depende del estado global del contexto.

Cart

Cart muestra el contenido completo del carrito.

Permite visualizar:

Producto.

Cantidad.

Precio.

Subtotal.

Total.

También permite:

Eliminar productos.

Vaciar el carrito.

Ir al checkout.

Consume directamente las funciones y datos proporcionados por CartContext.

Checkout

Checkout administra el formulario final de compra.

Recibe:

Nombre.

Teléfono.

Email.

Al confirmar la compra:

Obtiene los productos del carrito.

Construye el objeto order.

Calcula el total.

Envía la orden a Firestore.

Obtiene el ID generado.

Muestra la confirmación al usuario.

Vacía el carrito.

🌐 Uso de React Context

¿Por qué se utilizó Context?

El carrito es un estado que necesita ser consultado y modificado por diferentes componentes de la aplicación.

Por ejemplo:

App
│
├── Navbar
│    └── CartWidget
│
├── ItemDetail
│
└── Cart

ItemDetail necesita agregar productos.

CartWidget necesita conocer la cantidad total.

Cart necesita mostrar, eliminar y vaciar productos.

Pasar el estado mediante props desde App hacia todos estos componentes generaría prop drilling, haciendo que componentes intermedios reciban información que realmente no necesitan utilizar.

Para evitarlo se implementó CartContext.

🧠 CartContext

El archivo:

src/context/CartContext.jsx

contiene la lógica global del carrito.

El estado principal es:

const [cart, setCart] = useState([]);

El carrito comienza vacío:

[]

y cada elemento contiene la información necesaria para representar un producto agregado.

Conceptualmente:

{
    id: "producto123",
    name: "Pelota de Voley",
    price: 120000,
    stock: 10,
    quantity: 2
}

Provider

El CartProvider envuelve la aplicación desde main.jsx:

<React.StrictMode>

    <CartProvider>

        <App />

    </CartProvider>

</React.StrictMode>

Esto hace que todos los componentes que se encuentran dentro de CartProvider puedan acceder al contexto.

➕ addItem()

La función addItem() se encarga de agregar productos.

Antes de incorporar el producto se comprueba si ya existe:

const productInCart = cart.find(
    item => item.id === product.id
);

Si no existe:

Producto
   ↓
Nuevo elemento
   ↓
cart

Si ya existe:

Producto existente
       ↓
Actualizar quantity

Esto evita tener varias entradas del mismo producto y permite manejar la cantidad desde un único elemento.

📦 Control de stock en el Context

El control de stock no se limita al componente ItemCount.

También se considera la cantidad que el usuario ya tiene agregada.

Ejemplo:

Stock disponible: 10

Cantidad en carrito: 6

Usuario intenta agregar: 5

6 + 5 = 11

Como:

11 > 10

la operación no debe permitirse.

Este control es importante porque un usuario podría volver a ingresar al detalle y tratar de agregar más unidades aunque ItemCount individualmente respete el stock.

➖ removeItem()

Permite eliminar completamente un producto del carrito.

La función recibe el ID:

removeItem(product.id)

y actualiza el array eliminando ese elemento.

🗑️ clearCart()

Vacía el carrito:

setCart([]);

Se utiliza desde Cart y también después de completar correctamente una compra.

Esto evita que los productos de una orden anterior permanezcan en el carrito después de finalizar la operación.

🔢 getTotalQuantity()

Calcula la cantidad total de unidades del carrito.

Conceptualmente:

cart.reduce(
    (total, item) => total + item.quantity,
    0
);

Ejemplo:

Pelota       x 2
Rodilleras   x 1
Camiseta     x 2
-----------------
Total           5

El resultado 5 es utilizado por CartWidget.

🔄 Flujo del Context

El funcionamiento general es:

                    CartProvider
                         │
             ┌───────────┼───────────┐
             │           │           │
             ↓           ↓           ↓
        ItemDetail   CartWidget     Cart
             │           │           │
             ↓           ↓           ↓
          addItem   getTotalQuantity removeItem
                         │           │
                         │        clearCart
                         │           │
                         └─────┬─────┘
                               ↓
                              cart

La principal ventaja de esta arquitectura es que todos los componentes trabajan sobre el mismo estado sin necesidad de pasar props a través de componentes intermedios.

🔥 Firebase y Firestore

Firebase se utiliza como servicio de persistencia.

La aplicación utiliza específicamente Cloud Firestore para almacenar:

products
orders

La configuración se encuentra en:

src/firebase.js

La instancia de Firestore se exporta como db y se utiliza desde los componentes que necesitan consultar o escribir información.

📚 Colección products

La colección products contiene el catálogo.

Cada documento representa un producto.

Ejemplo:

{
    "name": "Pelota Mikasa V200W",
    "price": 120000,
    "category": "pelotas",
    "image": "https://ejemplo.com/mikasa.jpg",
    "stock": 10
}

Otro ejemplo:

{
    "name": "Rodilleras de Voley",
    "price": 45000,
    "category": "accesorios",
    "image": "https://ejemplo.com/rodilleras.jpg",
    "stock": 15
}

Los ejemplos anteriores representan la estructura de los documentos. Los valores deben coincidir con los productos realmente cargados en el proyecto de Firebase.

🧾 Colección orders

Cada compra confirmada genera un nuevo documento en la colección orders.

Ejemplo:

{
    "buyer": {
        "name": "Juan",
        "phone": "1123456789",
        "email": "juan@email.com"
    },
    "items": [
        {
            "id": "producto123",
            "name": "Pelota Mikasa V200W",
            "price": 120000,
            "quantity": 2
        },
        {
            "id": "producto456",
            "name": "Rodilleras de Voley",
            "price": 45000,
            "quantity": 1
        }
    ],
    "total": 285000,
    "date": "Timestamp"
}

Firestore genera automáticamente el ID del documento.

Por ejemplo:

orders
└── X8kP2mQa7Lz91

Ese ID se obtiene después de ejecutar addDoc() y se muestra al usuario como identificación de su orden.

🛍️ Ejemplo de una compra

Supongamos que el usuario agrega:

Pelota Mikasa V200W
Cantidad: 2
Precio unitario: $120000

Rodilleras
Cantidad: 1
Precio unitario: $45000

El cálculo es:

$120000 × 2 = $240000
$45000 × 1  = $45000
-----------------------
Total       = $285000

La orden almacenada en Firestore contendrá:

{
    "buyer": {
        "name": "Juan",
        "phone": "1123456789",
        "email": "juan@email.com"
    },
    "items": [
        {
            "id": "producto123",
            "name": "Pelota Mikasa V200W",
            "price": 120000,
            "quantity": 2
        },
        {
            "id": "producto456",
            "name": "Rodilleras",
            "price": 45000,
            "quantity": 1
        }
    ],
    "total": 285000,
    "date": "Timestamp"
}

🔄 Flujo completo de compra

Catálogo
   ↓
Seleccionar producto
   ↓
Detalle
   ↓
Seleccionar cantidad
   ↓
Agregar al carrito
   ↓
CartContext
   ↓
CartWidget actualiza cantidad
   ↓
Carrito
   ↓
Finalizar compra
   ↓
Checkout
   ↓
Datos del comprador
   ↓
Crear objeto order
   ↓
addDoc()
   ↓
Firestore / orders
   ↓
ID de orden
   ↓
Mostrar confirmación
   ↓
clearCart()

🎨 Decisiones de diseño

Temática

Se eligió el vóley como temática del proyecto para construir un catálogo coherente de productos deportivos.

La elección permite trabajar con productos de diferentes categorías y aplicar los conceptos de catálogo, detalle, stock y compra.

Bootstrap

Se decidió utilizar Bootstrap como herramienta de estilado.

La elección permitió:

Construir rápidamente una interfaz responsive.

Utilizar el sistema de grillas.

Crear cards de productos.

Utilizar botones y formularios consistentes.

Mantener una interfaz clara sin dedicar la mayor parte del desarrollo al CSS.

De esta manera, el foco principal pudo estar en React, la lógica de la aplicación y la integración con Firestore.

Componentización

Se decidió dividir la aplicación en componentes pequeños y con responsabilidades concretas.

Por ejemplo:

ItemListContainer
        ↓
    ItemList
        ↓
      Item

El contenedor obtiene los datos.

ItemList organiza la lista.

Item representa cada producto.

Esta separación facilita el mantenimiento y evita componentes excesivamente grandes.

Context solamente para el estado global necesario

No todos los estados de la aplicación se llevaron a Context.

Se decidió mantener localmente estados como:

loading
error
added
formData
quantity

porque pertenecen a componentes específicos.

En cambio, el carrito sí se convirtió en estado global porque diferentes componentes necesitan acceder a él.

Esto mantiene el Context enfocado en su responsabilidad principal.

React Router

React Router fue utilizado para implementar una navegación SPA.

Las rutas principales son:

/
/categoria/:categoryId
/item/:itemId
/cart
/checkout

La navegación mediante Link permite cambiar de vista sin realizar una recarga completa del documento.

⚠️ Dificultades encontradas y soluciones

Durante el desarrollo se presentaron diferentes errores relacionados principalmente con la configuración de Vite, las rutas, los imports, React Router y Firebase.

1. Missing script: "dev"

Al intentar ejecutar:

npm run dev

apareció:

npm error Missing script: "dev"

Causa

El comando se estaba ejecutando desde una carpeta que no contenía el package.json correspondiente al proyecto Vite.

También apareció:

Could not read package.json
ENOENT

Solución

Se verificó la ubicación del proyecto y se ejecutó el comando desde:

volley-store/

donde se encontraba:

package.json

2. Uso de Live Server

Inicialmente se intentó visualizar el proyecto abriendo el index.html con Live Server.

Problema

Una aplicación creada con Vite debe ejecutarse mediante su servidor de desarrollo, ya que Vite se encarga del procesamiento de los módulos, JSX y demás recursos.

Solución

Se utilizó:

npm run dev

y se accedió a la URL proporcionada por Vite.

3. Identifier App has already been declared

Vite/OXC mostró:

Identifier `App` has already been declared

El problema estaba en main.jsx, donde existían dos imports de App:

import App from "./App.jsx";

Solución

Se eliminó la declaración duplicada y se mantuvo una única importación.

4. Error al importar products

Apareció:

Failed to resolve import "../../data/products"

Causa

La ruta utilizada para importar el archivo no coincidía con la estructura real de carpetas.

Solución

Se revisó la ubicación del archivo y se corrigió el path.

Posteriormente, con la integración de Firestore, el catálogo pasó a obtenerse directamente desde la base de datos.

5. Error de JSX en Navbar

Durante la construcción del Navbar apareció:

Expected corresponding JSX closing tag for 'nav'

Causa

Existía una estructura incorrecta de etiquetas JSX, con etiquetas de apertura y cierre que no coincidían.

Solución

Se revisó la estructura del componente y se corrigieron las etiquetas:

<nav>
    ...
</nav>

Luego el proyecto volvió a compilar correctamente.

6. Las rutas cambiaban pero se mostraba el catálogo

Uno de los problemas más importantes ocurrió cuando la URL cambiaba correctamente:

/item/123

o:

/categoria/pelotas

pero la aplicación continuaba mostrando el catálogo.

Solución

Se revisó la configuración de:

<BrowserRouter>
    <Routes>
        ...
    </Routes>
</BrowserRouter>

y las rutas dinámicas.

También se realizaron pruebas temporales dentro de los componentes para comprobar si React Router estaba renderizando realmente cada vista.

Finalmente se verificó correctamente:

/
/categoria/:categoryId
/item/:itemId
/cart

7. Error de exportación db en Firebase

Apareció:

The requested module '/src/firebase.js'
does not provide an export named 'db'

Causa

firebase.js no estaba exportando correctamente la instancia de Firestore.

Solución

Se corrigió la configuración para exportar:

export const db = getFirestore(app);

A partir de ese momento los componentes pudieron importar db.

8. getFirestore is not defined

Luego apareció:

ReferenceError: getFirestore is not defined

Causa

La función getFirestore no había sido importada desde Firebase.

Solución

Se agregó:

import { getFirestore } from "firebase/firestore";

y posteriormente:

const db = getFirestore(app);

Con esto la conexión con Firestore quedó funcionando correctamente.

9. Control del stock acumulado

Se detectó que no era suficiente con limitar ItemCount al stock individual.

Ejemplo:

Stock: 10

Carrito:
6 unidades

Nueva operación:
5 unidades

El resultado sería:

6 + 5 = 11

superando el stock disponible.

Solución

Se implementó una validación en CartContext considerando la cantidad existente:

cantidad actual en carrito
+
nueva cantidad
≤
stock disponible

De esta manera, el control se mantiene incluso cuando el usuario agrega el mismo producto en diferentes operaciones.

10. Ocultar ItemCount después de agregar

La consigna requería ocultar ItemCount después de agregar correctamente el producto.

Solución

Se utilizó estado local:

const [added, setAdded] = useState(false);

Después de agregar:

setAdded(true);

y se utilizó renderizado condicional para mostrar otras acciones en lugar del selector.

11. Estados de carga y error

Durante las consultas a Firestore se necesitó evitar que la interfaz pareciera congelada.

Solución

Se implementaron estados como:

const [loading, setLoading] = useState(true);

y se utilizaron condiciones para mostrar:

Cargando productos...

Mientras que ante errores o productos inexistentes se muestran mensajes específicos.

12. Generación de órdenes

Durante la implementación del checkout fue necesario controlar la creación de órdenes y evitar que una operación fallida dejara al carrito en un estado incorrecto.

Solución

La generación de la orden se maneja dentro de una estructura try/catch.

El carrito solamente se vacía después de que Firestore confirma correctamente la creación del documento.

El flujo es:

Formulario
   ↓
Validación
   ↓
Crear order
   ↓
addDoc()
   ↓
Firestore confirma
   ↓
Obtener ID
   ↓
Mostrar ID
   ↓
clearCart()

De esta manera, un error en la generación de la orden no elimina prematuramente los productos del carrito.

📦 Instalación

Para ejecutar el proyecto es necesario contar con:

Node.js

npm

Git

1. Clonar el repositorio

git clone URL_DEL_REPOSITORIO

2. Ingresar al proyecto

cd volley-store

3. Instalar dependencias

npm install

Este comando instala las dependencias definidas en package.json.

🔥 Configuración de Firebase

El proyecto requiere una configuración válida de Firebase para poder consultar productos y generar órdenes.

La configuración se encuentra en:

src/firebase.js

La aplicación utiliza una instancia de Firestore exportada como:

db

Las colecciones utilizadas son:

products
orders

Para utilizar el proyecto con otra cuenta de Firebase, se debe configurar un proyecto de Firebase propio y reemplazar los datos de configuración correspondientes.

En un entorno de producción se recomienda utilizar variables de entorno para evitar exponer directamente la configuración en el código fuente.

▶️ Ejecución

Una vez instaladas las dependencias:

npm run dev

Vite iniciará el servidor de desarrollo.

La terminal mostrará una dirección similar a:

http://localhost:5173/

Abrir esa dirección en el navegador.

No se recomienda abrir index.html directamente con Live Server para ejecutar este proyecto. Al tratarse de una aplicación Vite + React, debe utilizarse npm run dev.

🏗️ Build de producción

Para generar la versión optimizada:

npm run build

Se generará:

dist/

Para probar localmente la versión de producción:

npm run preview

🧪 Flujo recomendado para probar la aplicación

1. Catálogo

Ingresar a:

/

Verificar que los productos se carguen correctamente desde Firestore.

2. Categorías

Seleccionar una categoría desde el Navbar.

3. Detalle

Seleccionar:

Ver detalle

4. Cantidad

Seleccionar una cantidad válida sin superar el stock.

5. Carrito

Agregar el producto y verificar que CartWidget actualice la cantidad.

6. Checkout

Ingresar al carrito y seleccionar la opción para finalizar la compra.

7. Formulario

Completar:

Nombre
Teléfono
Email

8. Confirmación

Enviar el formulario.

9. Firestore

Verificar que se haya creado un documento dentro de:

orders

10. ID

Verificar que la aplicación muestre el ID generado por Firestore.

🔄 Resumen de arquitectura

La arquitectura final puede resumirse de la siguiente manera:

                         App
                          │
                ┌─────────┴─────────┐
                │                   │
             Navbar              Routes
                │                   │
          CartWidget       ┌────────┼────────────┐
                           │        │            │
                           ↓        ↓            ↓
                     ItemList   ItemDetail     Cart
                        │           │            │
                        ↓           ↓            ↓
                       Item     ItemCount     Context
                                     │            │
                                     └─────┬──────┘
                                           │
                                           ↓
                                     CartContext
                                           │
                                           ↓
                                       Checkout
                                           │
                                           ↓
                                      Firestore
                                      /       \
                                products      orders

✅ Requisitos principales cumplidos

Requisito

Estado

React

✅

SPA

✅

Componentización

✅

Hooks

✅

useState

✅

useEffect

✅

useContext

✅

React Context

✅

Manejo de eventos

✅

React Router

✅

Catálogo dinámico

✅

Categorías

✅

Detalle de producto

✅

ItemListContainer

✅

ItemList

✅

ItemDetailContainer

✅

ItemDetail

✅

ItemCount

✅

Validación de stock

✅

CartWidget

✅

Carrito

✅

Subtotales

✅

Total

✅

Checkout

✅

Firebase

✅

Firestore

✅

Colección products

✅

Colección orders

✅

Datos del comprador

✅

Productos adquiridos

✅

Cantidades

✅

Precio total

✅

Fecha

✅

ID de orden

✅

Loaders

✅

Manejo de errores

✅

Renderizado condicional

✅

🎓 Conclusión

El desarrollo de Volley Store permitió aplicar de forma práctica los principales conceptos de React trabajados durante el curso.

La estructura de componentes fue diseñada buscando separar responsabilidades entre componentes contenedores y de presentación.

El uso de React Context permitió centralizar el estado del carrito y evitar el prop drilling, mientras que los estados locales se reservaron para información específica de cada componente.

La integración con Firebase Firestore permitió reemplazar datos estáticos por información persistente en la nube y almacenar las órdenes generadas por los usuarios.

Uno de los principales desafíos fue integrar correctamente React Router, Context y Firestore manteniendo una estructura modular. Durante el desarrollo surgieron problemas relacionados con imports, rutas, JSX, configuración de Vite y Firebase. Cada uno fue resuelto revisando la estructura del proyecto y separando progresivamente las responsabilidades.

El resultado final es una SPA funcional que permite completar el flujo:

Catálogo
   ↓
Categoría
   ↓
Detalle
   ↓
Selección de cantidad
   ↓
Carrito
   ↓
Checkout
   ↓
Firestore
   ↓
Orden generada
   ↓
ID de compra

👨‍💻 Autor

Juan Manuel da Bouza

Proyecto final — Curso de React

Volley Store
