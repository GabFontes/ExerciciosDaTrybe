const connection = require('./connection');

const getAddressByCep = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?;', [cep]
  )
  console.log(result);
  return result;
};

const createAddress = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');
  await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
     VALUES (?, ?, ?, ?, ?)`, [cep, logradouro, bairro, localidade, uf]
  )
  return { cep: rawCep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getAddressByCep,
  createAddress,
};