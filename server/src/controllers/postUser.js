const { User } = require("./../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    }

    const id = 0;
    const user = await User.findOrCreate({
      where: {
        id: id + 1,
        email,
        password,
      },
    });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = postUser;
