# Guía para crear la app del parte del servidor

## Dependencias

* ##### Express
<code>npm i express</code>

Express es un framework de Nodejs para estructurar las aplicaciones más fácilmente.

* #### Dotenv
<code>npm i dotenv</code>

Dotenv nos permite cargar a través del método <code>config()</code> y el objeto <code>path</code>, el archivo <code>.env</code> que necesitamos de acuerdo al entorno deseado.

### Dependencias de Desarollo

* #### Typescript
<code>npm i -D typescript ts-node @types/express @types/node</code>

Typescript es un lenguaje de programación libre y de código abierto desarrollado e implementado por Microsoft. Es un superconjunto de Javascript, que esencialmente añade tipos estáticos y objetos basados en clases. 

Para ejecutar typescript utilizamos el transpilador TSC, el cual se ejecutará con la siguiente línea de comando:

<code>npx tsc --init</code>

* #### eslint
Es una herramienta de "linting", que permite comprobar si hay errores en el código basándose en un análisis estático del código fuente. 

<code>npm i -D eslint jest ts-jest @types/jest supertest</code>

Posteriormente, se procede a configurar el eslint:
<code>npx eslint --init</code>

* #### Webpack
Webpack es una herramienta de compilación o empaquetador de módulos cuyo fin es generar un archivo único con todos aquellos módulos que necesite la aplicación.

<code>npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin</code>

* #### Jest
Es un marco de prueba de Javascript desarrollado por Meta(antiguo Facebook)

<code>npm i -D jest ts-jest @types/jest</code>

<code>npx jest --init</code>

* #### Serve

<code>npm i -D serve</code> 

Permite "servir" sitios estáticos.

<code>Para visualizar el uncoverage, modifica el package.json 
{
    "serve:coverage": "cd coverage/lcov-report && npx serve"
}</code>

* #### CORS

<code>npm i cors </code>
<code>npm i -D @types/cors</code>

Intercambio de Recursos de Origen Cruzado (CORS) es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador.

* #### Helmet
<code>npm i helmet</code>

Es una colección de nueve funciones de middleware mas paquetes que establecen cabeceras HTTP relacionadas con las seguridad.

* #### Mongoose
<code>npm i mongoose</code>

Es una librería para node.js que nos permite escribir consultas para una base de datos de MongoDB, con característias como validaciones, construcciones de queries, middlewares, conversión de tipos, entre otras...


## Scripts

<code>
"scripts": {<br>
    "build": "npx tsc",<br>
    "start": "node dist/index.js",<br>
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",<br>
    "test": "jest",<br>
    "serve:coverage": "cd coverage/lcov-report && npx serve"<br>
  }
</code>

* *build*: Permite compilar el proyecto definido por un tsconfig.json 

* *start*: Ejecuta el archivo javascript ya compilado

* *dev*: Hace la compilación y mantiene activo el servidor usando nodemon

* *test*: Activa el jest

* *serve:coverage*: Se dirige al archivo donde se encuentra el reporte que da el test y lo sirve en el puerto que disponga.


## Variables de Entorno
Necesitas tener estas variables en un archivo .env

<code>
PORT=8000
</code>


