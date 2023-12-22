const { User } = require("./../DB_connection");

const postUser = async (req, res) => {
  const { name, email, password, birthdate, sex } = req.body;

  try {
    if (!name || !email || !password || !birthdate || !sex) {
      return res.status(400).send("Faltan datos");
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).send("El usuario ya existe");

    const user = await User.findOrCreate({
      where: {
        name,
        email,
        password,
        birthdate,
        sex,
      },
    });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = postUser;
