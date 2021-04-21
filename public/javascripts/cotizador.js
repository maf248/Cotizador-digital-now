const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

/*---Se capturan los checkboxes de los servicios requeridos---*/
var googleFacebookAds = qs('#google-facebook-ads');
var seo = qs('#seo');
var wordpress = qs('#wordpress');
var tiendaNube = qs('#tienda-nube');
var woocommerce = qs('#woocommerce');
var redesSociales = qs('#redes-sociales');
var email = qs('#email');
var logoMarca = qs('#logo-marca');
var mantenimiento = qs('#mantenimiento');

/*---Se captura el bloque que pide cantidad de contactos EMAIL al tildar dicho checkbox mediante evento cambio---*/
var emailAmmountContainer = qs('#email-ammount-container');

email.addEventListener('change', function() {
    if (this.checked) {
      emailAmmountContainer.style.display = 'block';
    } else {
      emailAmmountContainer.style.display = 'none';
    }
  });

var resultsContainer = qs('#results-container');
resultsContainer.style.display = 'none';

