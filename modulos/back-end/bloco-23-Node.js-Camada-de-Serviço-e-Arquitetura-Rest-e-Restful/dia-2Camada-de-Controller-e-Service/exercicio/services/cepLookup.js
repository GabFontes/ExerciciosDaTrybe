const { getAddressByCep, createAddress } = require('../models/cepLookup');

const findByCep = async (cep) => {
  const address = await getAddressByCep(cep)
  if (address.length === 0) return {
    error: {
      code: "Not Found",
      message: "CEP não encontrado",
    }
  }
  return address;
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const isFound = await findByCep(cep)
  if (isFound) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  return createAddress({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  findByCep,
  create,
}