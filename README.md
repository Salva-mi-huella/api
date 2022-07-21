# PARA LEVANTAR BACK...
__IMPORTANTE:__ Recuerden colocar en el archivo index.js ("force: false"), para que las tablas no se borren cuando su servidor se caiga.
- NPM install
- Crear archivo .env
- Crear variables en archivo .env
```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=your_name_db
```
- Crear database (nombre recomendable: "salva_mi_huella").
- Levantar servidor con comando npm start
- Instalar extensión "REST client".
- Correr archivos que esten en carpeta "requests", para crear foundations/news/pets, dando click en cada petición
- Listo!, ya pueden interactuar con la base de datos :)
