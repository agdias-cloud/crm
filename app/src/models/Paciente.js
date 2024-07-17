const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const PacienteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  whatsapp: String,
  email: String,
  cpf: Number,
  dataNascimento: String,
  endereco: String,
  cep: Number
})

module.exports = model('Paciente', PacienteSchema );