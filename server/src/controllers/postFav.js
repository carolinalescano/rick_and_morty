const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  try {
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }

    const favorite = await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });

    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postFav;
