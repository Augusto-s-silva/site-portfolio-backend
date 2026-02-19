require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Conexão mongo
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado ao mongoDB!'))
.catch(err => console.log('Erro ao conectar!', err));

//Rotas
app.use('/projects', projectRoutes);
app.use('/', authRoutes);

// Teste api
app.get('/', (req, res) => {
    res.send("API do portfólio está funcionando");
});

//manter ligado online
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

//Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});