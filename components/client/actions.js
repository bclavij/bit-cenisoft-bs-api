const Client = require('./model')
const con = require('../../db')


exports.createClient = (req, res) => {
  const newClient = new Client(req.body)
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.send(clientSaved)
    }
  })
}

exports.getClient = (req, res) => {
  if (req.params.id) {
      Client.findById(req.params.id, function (err, unProducto) {
        if (err) {
            // Devolvemos el código HTTP 404, de producto no encontrado por su id.
            res.status(404).json({ status: "error", data: "No se ha encontrado el cliente con id: "+req.params.id});
        } else {
            res.status(200).json({ status: "ok", data: unProducto });
        }
    })
  } else {
      Client.find({}, function (err, todosProductos) {
        if (err){
          return (res.type('json').status(422).send({ status: "error", data: "No se puede procesar la entidad, datos incorrectos!" }));
        } else {
          res.status(200).json({ status: "ok", data: todosProductos });
        }
      })
  }
}

exports.updateClient = (req, res) => {
  Client.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, clienteActualizado) {
        if (err) {
            res.status(404).json({ status: "error", data: "No se ha encontrado el cliente con id: "+req.params.id+" err="+err});
        } else {
            res.status(200).json({ status: "ok", data: req.body });
        }
    })
}

exports.deleteClient = (req, res) => {
  Client.findByIdAndRemove(req.params.id, function (err, data) {
      if (err || !data) {
          res.status(404).json({ status: "error", data: "No se ha encontrado el cliente con id: "+req.params.id});
      } else {
          res.status(200).json({ status: "ok", data: "Se ha eliminado correctamente el cliente con id: "+req.params.id });
      }
  })
}