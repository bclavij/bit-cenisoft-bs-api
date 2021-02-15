const Venta = require('./model')

exports.createVenta = (req, res) => {
  const newVenta = new Venta(req.body)
  newVenta.save((error, ventaGuardada) => {
    if (error) {
      console.error('Error guardando venta ', error)
      res.status(500).send(error)
    } else {
      res.send(ventaGuardada)
    }
  })
}

exports.getVenta = (req, res) => {
  if (req.params.id) {
      Venta.findById(req.params.id, function (err, venta) {
        if (err || !venta) {
            res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id});
        } else {
            res.status(200).json({ status: "ok", data: venta });
        }
    })
  } else {
      Venta.find({}, function (err, ventas) {
        if (err){
          return (res.type('json').status(422).send({ status: "error", data: "No se puede procesar la entidad, datos incorrectos!" }));
        } else {
          res.status(200).json({ status: "ok", data: ventas });
        }
      })
  }
}
exports.getVentaDetalle = (req, res) => {


  Detalle.find({
    'detalles': {
      $elemMatch : {
        '_id': req.params.idDetalle
      }
    }
  },function(err,detalle){
    if(err){
      return done(err);
    }
    if(detalle){
      res.status(200).json({ data: detalle });
    }
  });


  /*if (req.params.id) {
      Venta.findById(req.params.id, function (err, venta) {
        if (err || !venta) {
            res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id});
        } else {
          if (req.params.idDetalle) {
            let detalle = Venta.find({
              'detalles._id':req.params.idDetalle
            })
            res.status(200).json({ status: "ok", data: detalle });
          } else {
            res.status(200).json({ status: "ok", data: venta.detalles });
          }
          
            
        }
    })
  } else {
      Venta.find({}, function (err, ventas) {
        if (err){
          return (res.type('json').status(422).send({ status: "error", data: "No se puede procesar la entidad, datos incorrectos!" }));
        } else {
          res.status(200).json({ status: "ok", data: ventas });
        }
      })
  }*/
}

exports.updateVenta = (req, res) => {
  Venta.updateOne({"_id":req.params.id}, {$set: req.body}, function (err, ventaActualizada) {
        if (err || !ventaActualizada) {
            res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id+" err="+err});
        } else {
            res.status(200).json({ status: "ok", data: req.body });
        }
    })
}

exports.deleteVenta = (req, res) => {
  Venta.findByIdAndRemove(req.params.id, function (err, data) {
      if (err || !data) {
          res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id});
      } else {
          res.status(200).json({ status: "ok", data: "Se ha eliminado correctamente la venta con id: "+req.params.id });
      }
  })
}

exports.deleteVentaDetalle = (req, res) => {
  Venta.updateOne({ "_id": req.params.id }, { "$pull": { "detalles": {"_id":req.params.idDetalle} } }, function (err, ventaActualizada) {
    if (err || !ventaActualizada) {
        res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id+" err="+err});
    } else {
        res.status(200).json({ status: "ok", data: req.body });
    }
})
}

exports.insertDetalleVenta = (req, res) => {
  /* El body contiene un objeto tipo detalle 
    idLibro: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'libros' },
    libro: { type: String, required: true }, 
    valorUnitario: { type: Number, required: true, min: 0 },
    Cantidad:{ type: Number, required: true, min: 1 }
    */
  Venta.updateOne({ "_id": req.params.id }, { "$push": { "detalles": req.body } }, function (err, ventaActualizada) {
      if (err || !ventaActualizada) {
          res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id+" err="+err});
      } else {
          res.status(200).json({ status: "ok", data: req.body });
      }
  })
}

exports.updateDetalleVenta = (req, res) => {
  /* El body contiene un objeto tipo detalle 
    idLibro: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'libros' },
    libro: { type: String, required: true }, 
    valorUnitario: { type: Number, required: true, min: 0 },
    Cantidad:{ type: Number, required: true, min: 1 }
    */
  Venta.updateOne({ "_id": req.params.id }, { "$push": { "detalles": req.body } }, function (err, ventaActualizada) {
      if (err || !ventaActualizada) {
          res.status(404).json({ status: "error", data: "No se ha encontrado la venta con id: "+req.params.id+" err="+err});
      } else {
          res.status(200).json({ status: "ok", data: req.body });
      }
  })
}