# Guía para crear la app del parte del servidor

- Se debe instalar las dependencias: 
    * dotenv express
    * npm i -D typescript @types/express @types/node ts-node

## Typescript
Para ejecutar typescript utilizamos el transpilador TSC, el cual se ejecutará con la siguiente línea de comando:

<code>npx tsc --init</code>

## Webpack

<code>npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin</code>

## Eslint
<code>npm i -D eslint jest ts-jest @types/jest supertest</code>

Posteriormente, se procede a configurar el eslint:
<code>npx eslint --init</code>

## Jest

<code>npx jest --init</code>
<code>npm i -D serve</code> 
Para visualizar el uncoverage, modifica el package.json 
{
    "serve:coverage": "cd coverage/lcov-report && npx serve"
}



