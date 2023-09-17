import express from 'express';
import { Model } from 'objection';
import Knex from 'knex';
import knexfile from './knexfile';
import usuarioRouter from './app/routes/UsuarioRoute';

const knex = Knex(knexfile.development);
Model.knex(knex);

const app = express();
app.use(express.json());
app.use(usuarioRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
