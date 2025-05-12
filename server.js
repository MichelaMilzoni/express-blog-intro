// importo express e path
const express = require('express');
const path = require('path');

// assegno express a una costante
const app = express();

// assegno la porta 3000 (di solito lasciata libera) a una costante
const port = 3000;

// assegno http://localhost: a una costante
const localhost = "http://localhost:";

// uso 
app.use('/img', express.static(path.join(__dirname, 'images')));
//* app.use() → Configura un middleware in Express.
//* '/img' → Indica che tutti gli URL che iniziano con /images devono essere gestiti da questo middleware.
//* express.static() → Middleware di Express che serve file statici.
//* path.join(__dirname, 'images') → Indica il percorso della cartella images
//* (__dirname → Rappresenta la cartella dove si trova server.js.
//* path.join(__dirname, 'images') → Crea il percorso completo della cartella images.)


// importo le rotte
const indexRoutes = require('./routes/index');
const bachecaRoutes = require('./routes/bacheca');

// uso le rotte
app.use(indexRoutes);
app.use(bachecaRoutes);


// avvio del server
app.listen(port, () => {
    console.log(`Server avviato su ${localhost}${port}`);
});