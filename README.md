# Componente: Screenshot

Este componente nos permite hacer capturas de pantalla directamente desde la aplicacion, muy util para compartir transferencia bancarias. 

### Pre-requisitos 📋

Antes de comenzar debemos crear un componente en ionic, esto nos permite poder reutilizar en cualquier pagina que deseemos 

```
ionic generate component componentes/screenshot
```

### Instalación 🔧

Bueno lo primero que debemos hacer es instalar el componente  

```
npm install com.darktalker.cordova.screenshot
```

```
npm install @ionic-native/screenshot
```

```
ionic cap sync
```

Una ves tenemos descargado nuestro componente, hay que editar el app.module.ts, para ello importamos lo siguiente:

```
import { Screenshot } from '@ionic-native/screenshot/ngx';
```
Y luego en los providers ponemos:

```
Screenshot
```

Por ultimos debemos recordar implementar el metodo en la pagina que querramos usarlo editando su module.ts y por ultimo colocamos el componente en el html:

```
<app-screeshot></app-screeshot>
```


## Codigo del componente ⚙️

Para el componente en la parte de html creamos el siguiente codigo  <br> 
![alt text](https://fotos.subefotos.com/e4d700fd79744e2ddf25a1af4224a6e6o.png) <br> 
El cual posee dos botones para invocar los metodos, una variable output para poder mostrar la imagen en la pantalla y por ultimo otra variable que nos da la URL de la imagen la cual nos permitira integrarla con otros componente si deseamos. <br> 

En el screenshot.component.ts programamos los dos metodos que invocamos en el html: <br> 
![alt text](https://fotos.subefotos.com/b7c841ac5d652f290d33526ea8a1bb5eo.png) <br> 
Aca presentamos dos metodos el primero el cual permite crear y guardar la imagen, para ello le pasamos los parametros el cual son la extension de la imagen y el nombre que tendra, por ultimos mandamos a presentarla y con su URL tambien, tenemos otro metodo que se llama reset() el cual resetea estos parametros pasado 4 segundos <br> 

Por ultimo tenemos un metodo el cual nos permite recuperar la ultima de pantalla que se realizo, de igual manera este metodo tambien presenta en la pantalla la imagen y su URL <br> 
![alt text](https://fotos.subefotos.com/564be82cd6283845ebec7eadeabea7f6o.png) <br> 


## Despliegue 📦




## Autores ✒️


* **Angel Ruiz** - *Programacion* - [Angel Ruiz](https://github.com/facquer)
* **Angel Ruiz** - *Documentación*

