const express = require('express');
const router = express.Router();
const { criarPaciente, listarPacientes } = require('../controllers/pacientes');

router
  .route('/')
  .post(criarPaciente)
  .get(listarPacientes)


  module.exports = router;