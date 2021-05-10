const indexController = {
    home: function(req, res, next) {
      res.render('index', {title: "Cotizador Marketing Digital"})
        
      }
}

module.exports = indexController;