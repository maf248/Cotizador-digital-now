const indexController = {
  home: function (req, res, next) {
    res.redirect('/esp');
  },
  esp: function (req, res, next) {
    res.render('index-esp', {
      title: "Cotizador: Precios de Marketing Digital"
    });
  },
  eng: function (req, res, next) {
    res.render('index-eng', {
      title: "Digital Marketing Services Budget Calculator"
    });
  }

};

module.exports = indexController;