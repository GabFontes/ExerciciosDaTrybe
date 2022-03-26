const express = require('express');
const app = express();

app.use(express.json());

const cepLookup = require('./controllers/cepLookup');
const { cepValidation, addressValidation } = require('./middlewares/validations');

const PORT = 3000;

app.get('/ping', cepLookup.ping);
app.get('/cep/:cep', cepValidation, cepLookup.getCep)
app.post('/cep', addressValidation, cepLookup.createAddress)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));