const Paciente = require('../models/Paciente');

exports.criarPaciente = async (req, res, next) => {
  const paciente = await Paciente.create(req.body);
  res.status(201).send(`Paciente criado com sucesso`);
}

