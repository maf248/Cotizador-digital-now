const indexController = {
    home: function(req, res, next) {
      res.render('index', {title: "Cotizador marketing digital"})
        
      }
}

module.exports = indexController;