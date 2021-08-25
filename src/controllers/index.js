const indexController = {
  home: function (req, res, next) {
    res.redirect('/esp');
  },
  esp: function (req, res, next) {
    res.render('index-esp', {
      title: "Estimador de precios de marketing digital"
    });
  },
  eng: function (req, res, next) {
    res.render('index-eng', {
      title: "Digital Marketing Budget Calculator"
    });
  }

};

module.exports = indexController;