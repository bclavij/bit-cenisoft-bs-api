const Libro = require('./model')
const con = require('../../db')


exports.createLibro = (req, res) => {
  const newLibro = new Libro(req.body)
  newLibro.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.send(clientSaved)
    }
  })
}

exports.getLibro = (req, res) => {
  if (req.params.id) {
      Libro.findById(req.params.id, function (err, unProducto) {
        if (err || !unProducto) {
            res.status(404).json({ status: "error", data: "No se ha encontrado el libro con id: "+req.params.id});
        } else {
            res.status(200).json({ status: "ok", data: unProducto });
        }
    })
  } else {
      Libro.find({}, function (err, todosProductos) {
        if (err){
          return (res.type('json').status(422).send({ status: "error", data: "No se puede procesar la entidad, datos incorrectos!" }));
        } else {
          res.status(200).json({ status: "ok", data: todosProductos });
        }
      })
  }
}

exports.updateLibro = (req, res) => {
  Libro.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, libroActualizado) {
        if (err || !libroActualizado) {
            res.status(404).json({ status: "error", data: "No se ha encontrado el libro con id: "+req.params.id+" err="+err});
        } else {
            res.status(200).json({ status: "ok", data: req.body });
        }
    })
}

exports.deleteLibro = (req, res) => {
  Libro.findByIdAndRemove(req.params.id, function (err, data) {
      if (err || !data) {
          res.status(404).json({ status: "error", data: "No se ha encontrado el libro con id: "+req.params.id});
      } else {
          res.status(200).json({ status: "ok", data: "Se ha eliminado correctamente el libro con id: "+req.params.id });
      }
  })
}