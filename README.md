# Liteflix | Litebox challenge :punch:

### Tabla de contenido :rocket:

- [Demo](#demo-bulb)
- [Instalación](#instalación-wrench)
- [Estructura del proyecto](#estructura-del-proyecto-file_folder)
- [Librerías](#librerías-package)

### Demo :bulb:

[![Deployed in Netlify](https://www.netlify.com/img/deploy/button.svg)](https://keen-brattain-571cc1.netlify.app/)

### Instalación :wrench:

Recomiendo usar [yarn](https://yarnpkg.com/) a la hora de iniciar el proyecto por ser más rápido y seguro que sobre [npm](https://www.npmjs.com/), de igual forma siéntase libre de usar el que guste, para efectos de esta guía estaré usando *yarn*.

#### Scripts disponibles:

Antes de ejecutar cualquier script del proyecto es necesario *instalar las dependencias* del mismo:

bash
yarn install


##### Dev

Para desarrollo, se hace uso de `webpack-dev-server`, con watchers que actualizan el navegador ante cualquier cambio.

bash
yarn dev


##### Start

Con este script usamos `webpack-dev-server` pero con un bundle optimizado para producción, también cuenta con watchers activos.

bash
yarn start


##### Build

Este script usa webpack para crear un empaquetado del proyecto en la carpeta *build* listo para ser puesto en producción

bash
yarn build


##### Lint

Se usa para detectar errores de formato con [ESlint](https://eslint.org/).

bash
yarn lint


##### Lint:fix

Se usa para darle el formato correcto al proyecto.

bash
yarn lint:fix


### Estructura del proyecto :file_folder:

A continuación una breve introducción al proyecto:

1. `/config`: Aquí se encuentran los archivos de configuración de [Webpack](https://webpack.js.org/).
2. `/public`: Contiene el template `index.html` que usará [Webpack](https://webpack.js.org/) para incrustrar los links al JS y CSS luego de optimizar.
3. `/src`: Tiene la mayor parte del proyecto:<br>
   3.1. `|-/api`: Contiene un archivo donde están los endpoints a usar por la app.<br>
   3.2. `|-/components`: Aquí están los componentes de [React](https://es.reactjs.org/) a usar en toda la app, están ordenados por carpetas para cada componente junto a los estilos específicos de cada uno.<br>
   3.2.1. `|--/containers`: Aquí coloco aquellos componentes que despachan acciones o actualizan estado global de la app, ej: forms.<br>
   3.2.2. `|--/global`: En esta se encuentran aquellos componentes globales, muy reutilizados por toda la app.<br>
   3.2.3. `|--/Home`: Contiene componentes específicos de la página/pantalla del HOME.<br>
   3.3. `|-/constants`: Contiene constantes globales con datos y opciones a usar por toda la app.<br>
   3.4. `|-/context`: Aquí están aquellos componentes que manejan toda la lógica del estado (por ahora solo uno) y los datos a consumir desde otros componentes, haciendo uso de Context de [React](https://es.reactjs.org/), si la app crece más se recomienda cambiar a [redux](https://es.redux.js.org/) o un manejaor de estado para apps más complejas.<br>
   3.5. `|-/services`: Tiene todas aquellas funciones que se usarán para consumir datos externos.<br>
   3.6. `|-/styles`: Contiene todos los archivos de estilos globales.<br>
   3.7. `|-/app.jsx`: Archivo que contiene el componente principal (es el punto de entrada de [Webpack](https://webpack.js.org/)).<br>
4. `/.babelrc`: Archivo de configuración de [Babel](https://babeljs.io/).
5. `/eslintrc.json`: Archivo de configuración de ESlint para mantener una estructura en cuanto a la sintáxis del código.
6. `/.gitignore`: Usado por git para ignorar ciertas rutas y archivos.
7. `/.prettierrc`: Archivo de configuración de [Prettier](https://prettier.io/), se usa para formatear el código.
8. `/package.json`: Registro de las dependencias del proyecto.
9. `/readme.md`: Este archivo que estás leyendo.
10. `/yarn.lock`: Archivo de [yarn](https://yarnpkg.com/) para congelar las versiones de las dependencias del proyecto.

### Librerías :package:

Librerías usadas en el proyecto:

- [React](https://es.reactjs.org/), librería de Javascript para la creación de interfaces de usuario. Se usó para crear los distintos componentes que requería la app.
- [React-hook-form](https://react-hook-form.com/), librería de React para la validación de formularios, en su página oficial muestran su rendimiento frente a otras populares como Formik o Redux-form.
- [Axios](https://github.com/axios/axios), cliente http para Javascript, empleado para hacer llamadas a servicios externos, ahorra mucho trabajo.
- [Framer motion](https://www.framer.com/motion/), librería para React de animaciones, es genial.
- [Styled Components](https://styled-components.com/), librería para la creación de componentes de estilos con Javascript.

Como dependecias de desarrollo tenemos:

- [Webpack](https://webpack.js.org/), un empaquetador de módulos estáticos para aplicaciones de Javascript modernas, sirve para automatizar tareas, procesar, minificar y optimizar archivos quedando listos para producción.
- [Babel](https://babeljs.io/docs/en/), es un transpilador de Javascript moderno (ES10) a versiones con mayor compatibilidad (ES5).
- [ESlint](https://eslint.org/), herramienta de análisis de código estático, ayuda a escribir código consistente a lo largo del proyecto.
- [Prettier](https://prettier.io/), herramienta para formatear el código de forma automática.