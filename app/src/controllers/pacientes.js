const Paciente = require('../models/Paciente');

exports.criarPaciente = async (req, res, next) => {
 try {
  const paciente = await Paciente.create(req.body);
  res.status(201).send(paciente);
 } catch (error) {
   next(error);
 }
}

exports.listarPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).send(pacientes);

  } catch (error) {
    next(error);
  }
}

