const services = require('../services/cepLookup');

const ping = async (req, res) => {
  return res.status(200).send({ message: "pong!" })
}

const getCep = async (req, res) => {
  const { cep } = req.params;
  const address = await services.findByCep(cep)
  if (address.error) {
    return res.status(404).json(address.error);
  }
  return res.status(200).send(address)
}

const createAddress = async (req, res) => {
  const newAddres = await services.create(req.body)

  if (newAddres.error) {
    return res.status(409).json(newAddres.error);
  }
  return res.status(201).json(newAddres);
}

module.exports = {
  ping,
  getCep,
  createAddress,
}