let myFavorites = [];

const postFav = (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  myFavorites.push({ name, origin, status, image, species, gender });

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const filteredFavs = myFavorites.filter((fav) => fav.id !== id);

  return res.status(200).json(filteredFavs);
};
module.exports = {
  postFav,
  deleteFav,
};
