const getDB = require('../database/db');

const getColaboraciones = async (req, res, next) => {
  let conexion;
  //   const idservices = req.params.id;
  const { id } = req.isUser;
  try {
    conexion = await getDB();

    const [colaboraciones1] = await conexion.query(
      `SELECT * FROM servicios WHERE users_id=?`,
      [id]
    );

    const [colaboraciones2] = await conexion.query(
      `SELECT * FROM comentarios WHERE users_id=?`,
      [id]
    );

    return res.send({
      status: 'ok',
      data1: colaboraciones1,
      data2: colaboraciones2,
    });
  } catch (error) {
    console.error(error);
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};

module.exports = getColaboraciones;
