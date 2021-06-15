const indexController = {
  home: function (req, res, next) {
    res.render('index', {
      title: "Precios de Marketing Digital"
    })

  }
}

module.exports = indexController;