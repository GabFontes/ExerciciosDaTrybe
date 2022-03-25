const verifyValues = (req, res, next) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || firstName.length === 0) {
    return res.status(400).json({
      error: true,
      message: "O campo 'firstName' é inválido"
    })
  }
  if (!lastName || lastName.length === 0) {
    return res.status(400).json({
      error: true,
      message: "O campo 'lastName' é inválido"
    })
  }
  if (!email || email.length === 0) {
    return res.status(400).json({
      error: true,
      message: "O campo 'email' é inválido"
    })
  }
  next();
}

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  next();
}

module.exports = {
  verifyPassword,
  verifyValues,
}