const Joi = require('joi');

const cepValidation = async (req, res, next) => {
  const { cep } = req.params;
  const cepRegex = /\d{5}-\d{3}/;
  const isValid = cepRegex.test(cep);
  if (!isValid) {
    return res.status(400).json({ code: "invalidData", message: "CEP inválido" })
  }
  next()
}

const addressValidation = async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) {
    console.log(error);
    return res.status(400).json({ error: { code: "invalidData", message: error } })
  }
  next();
}

module.exports = {
  cepValidation,
  addressValidation,
}