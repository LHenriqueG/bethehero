const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    //desestruturação
    const { name, email, whatsapp, city, uf } = req.body;

    //gerando o id
    const id = crypto.randomBytes(4).toString("HEX");

    //Inserindo dados
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    return res.json({ id });
  },
};
