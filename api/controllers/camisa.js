import { db } from "../db.js";

export const getcamisas = (_, res) => {
  const q = "SELECT * FROM camisa";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addcamisa = (req, res) => {
  const q =
    "INSERT INTO camisa(`marca`, `time`, `tamanho`, `cor`) VALUES(?)";

  const values = [
    req.body.marca,
    req.body.time,
    req.body.tamanho,
    req.body.cor,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Camisa criada com sucesso!");
  });
};

export const updatecamisa = (req, res) => {
  const q =
    "UPDATE camisa SET `marca` = ?, `time` = ?, `tamanho` = ?, `cor` = ? WHERE `id` = ?";

  const values = [
    req.body.marca,
    req.body.time,
    req.body.tamanho,
    req.body.cor,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Camisa atualizada com sucesso!");
  });
};

export const deletecamisa = (req, res) => {
  const q = "DELETE FROM camisa WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Camisa deletada com sucesso.");
  });
};