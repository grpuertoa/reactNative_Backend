const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config(); 


const app = express();

//Parse the request body to json
app.use(express.json());

//Routes
app.use('/api', taskRoutes);

// Mongo connection fom env file
const PORT = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

if (!PORT || !mongoUrl) {
    console.error('Error: Las variables de entorno PORT y MONGO_URL son necesarias.');
    process.exit(1); // Ends app if they are not defined 
  }

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

   //Error Handler 
  app.use(errorHandler);    

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});