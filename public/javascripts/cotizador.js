const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

var completeForm = [false, false, false, false];

/*---Datos estadisticos de paises organizado para programación orientada a objetos---*/
const countries = {
    argentina: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    chile: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    paraguay: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    uruguay: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    brasil: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    bolivia: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    peru: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    ecuador: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    colombia: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    costaRica: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    mexico: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    eeuu: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    },
    espana: {
        cpm: 0,
        cpc: 0,
        rateLeads: 0,
        rateAppDownlaod: 0,
        rateOnlineSell: 0,
    }
}
/*--Así se accedería a cada valor de dicho objeto---*/
console.log(countries.mexico.cpc)

/*---Se captura el selector de país de los proveedores--*/
var countrySupplier = qs('#country-supplier');
    if (countrySupplier.value != '') {
        completeForm[0] = true;
    }

countrySupplier.addEventListener('change', function() {
    console.log(this.value)
    if (countrySupplier.value != '') {
        completeForm[0] = true;
    }
});
/*---Se capturan los checkboxes en conjunto, de los servicios requeridos---*/
var checkboxesServices = qsa('input[type=checkbox]');
var checkboxesValidate = [false, false, false, false, false, false, false, false, false];

checkboxesServices.forEach((checkboxService, i) => {
    checkboxService.addEventListener('change', function() {
        if (this.checked) {
            checkboxesValidate[i] = true;
        } else {
            checkboxesValidate[i] = false;
        }
    });
})

/*---Se capturan los checkboxes individualmente, de los servicios requeridos---*/
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

/*---Se captura el selector de país de los anuncios--*/
var countryAnnounce = qs('#country-announce');
    if (countryAnnounce.value != '') {
        completeForm[2] = true;
    }

countryAnnounce.addEventListener('change', function() {
    console.log(this.value)
    if (countryAnnounce.value != '') {
        completeForm[2] = true;
    }
});

/*---Se capturan los inputs radio que determinan el tipo de objetivo en la campaña de marketing---*/
var objectives = qsa('input[name="objetivo"]');
/*-Se recorren para detectar cuando alguno de los 3 es tildado-*/
objectives.forEach(objective => {
    objective.addEventListener('change', function() {
        if (this.checked) {
            completeForm[3] = true;
        }
    });
})

/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var resultsContainer = qs('#results-container');
/*--Evento general para validar si mostrar resultados o no, en base a lo seleccionado---*/
window.addEventListener('change', function() {
    if (checkboxesValidate.includes(true)) {
        completeForm[1] = true;
    } else {
        completeForm[1] = false;
    }
    if(completeForm.includes(false)) {
        resultsContainer.style.display = 'none';
    } else {
        resultsContainer.style.display = 'block';
    }
    console.log(completeForm)
});

/*---Se capturan los contenedores para inyectar luego los resultados---*/
var resultGoogleFacebookAds = qs('#result-googleads-facebookads');
var resultEmail = qs('#result-email');
var resultServiceFee = qs('#result-service-fee');
var resultServiceFee = qs('#result-once-fee');
var resultMonthlyTotal = qs('#monthly-total');
var resultEstimatedEarning = qs('#estimated-earning');
var resultAgencyOnceFee = qs('#agency-once-fee');

