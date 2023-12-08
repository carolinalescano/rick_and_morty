const URL = `https://rickandmortyapi.com/api/character/`;

const axios = require("axios");

const getCharById = (req, res) => {
  const { id } = req.params;

  axios.get(`${URL}${id}`).then((response) => {
    const { data } = response;
    if (data.error) {
      return res.status(404).send(data.error);
    }
    res
      .status(200)
      .json({
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        gender: data.gender,
      })
      .catch((error) => {
        return res.status(500).send(error.message);
      });
  });
};

module.exports = getCharById;
