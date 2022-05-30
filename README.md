# Taller9_VirtualBingo

Aplicación básica Full Stack usando Java con el módulo Spring Boot de Spring, MySQL, MongoDb, Express, React y NodeJs.
Esta aplicación guarda el nombre completo, nombre de usuario, email y contraseña y almacena esta información por medio de la base de datos Mongo Atlas. Una vez registrado la aplicación, redirige hacia la ventada de inicio de sesión. Una vez dentro se redirecciona hacia una sala de espera donde se encuentra el contador de 5 minutos, antes de iniciar el juego

## Requerimientos 
1. [IntelliJ IDEA Ultimate](https://www.jetbrains.com/es-es/idea/download/#section=windows)
2. [NodeJs](https://nodejs.org/es/download/)
3. [MySQL](https://dev.mysql.com/downloads/workbench/)
## Ejecución
1. Descargar el código del repositorio
2. Ejecutar el script de la base de datos que se encuentra en la carpeta baseDeDatosMySQL
3. Abrir la carpeta Bingo con IntelliJ IDEA Ultimate
4. Ir hasta el archivo application.properties que se encuentra en la carpeta main/resources
5. Cambiar la configuración de la base de datos
```python
spring.datasource.username =#### (Colocar su nombre de usuario)
spring.datasource.password = #### (Colocar su contraseña)
```
6. Correr la aplicación ingresando al archivo BingoApplication.java y darle al botón **RUN**
7. Ahora abra la carpeta userFront en VScode, ingrese hasta la sub carpeta signupbackend
8. Abra una nueva terminal dentro de esa carpeta y ejecute los siguientes comandos:
```python
npm install
npm start
```
9. Ahora abra una nueva terminal dentro de la carpeta userFront y ejecute los siguientes comandos:
```python
npm install
npm start
```
10. Se abrirá la aplicación en la ruta **http://localhost:3000/**
