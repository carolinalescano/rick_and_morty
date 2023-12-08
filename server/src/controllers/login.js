module.exports = (req, res) => {
  const { email, password } = req.query;
  const users = require("../utils/users");

  const usersFilter = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (usersFilter) {
    return res.status(200).json({ access: true });
  } else return res.status(403).json({ access: false });
};
