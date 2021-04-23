const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

var completeForm = [false, false, false, false];

/*---Datos estadisticos de paises organizado para programación orientada a objetos---*/
const countries = {
    argentina: {
        facebook: {
            cpm: 1.08,
            cpc: 0.04,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    chile: {
        facebook: {
            cpm: 0.9,
            cpc: 0.05,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    paraguay: {
        facebook: {
            cpm: 0.68,
            cpc: 0.02,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    uruguay: {
        facebook: {
            cpm: 0.68,
            cpc: 0.02,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    brasil: {
        facebook: {
            cpm: 1.02,
            cpc: 0.04,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    bolivia: {
        facebook: {
            cpm: 0.71,
            cpc: 0.01,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    peru: {
        facebook: {
            cpm: 0.85,
            cpc: 0.02,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    ecuador: {
        facebook: {
            cpm: 0.55,
            cpc: 0.02,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    colombia: {
        facebook: {
            cpm: 0.42,
            cpc: 0.02,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    costaRica: {
        facebook: {
            cpm: 1.20,
            cpc: 0.08,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    mexico: {
        facebook: {
            cpm: 0.76,
            cpc: 0.03,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    eeuu: {
        facebook: {
            cpm: 2.29,
            cpc: 0.13,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    },
    espana: {
        facebook: {
            cpm: 2.42,
            cpc: 0.09,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0,
        },
        google: {
            cpm: 0,
            cpc: 0,
            rateLeads: 0,
            rateAppDownlaod: 0,
            rateOnlineSell: 0, 
        }
    }
}
/*--Así se accedería a cada valor de dicho objeto---*/
console.log(countries.espana.facebook.cpc)

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

/*---Se captura el bloque que pide cantidad de contactos EMAIL y el contenedor de resultados mail---*/
var emailAmmountContainer = qs('#email-ammount-container');
var emailResultContainer = qs('#email-result-container');

/*---Se captura la cantidad de mails seleccionados para Marketing digital , y se actualiza el resultado---*/
var emailAmmount = qs('#email-ammount');

emailAmmount.addEventListener('change', function() {

    resultEmail.innerHTML = `USD ${emailAmmount.value}`

});

/*---Se captura el contenedor de resultados de Google y Facebook ads---*/
var googleFacebookAdsResultContainer = qs('#result-googleads-facebookads-container')

/*---Se captura el selector de país de los anuncios--*/
var countryAnnounce = qs('#country-announce');
    if (countryAnnounce.value != '') {
        completeForm[2] = true;
    }

countryAnnounce.addEventListener('change', function() {
    /*---Accede a los datos del pais que se elija---*/
    console.log(countries[this.value])
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
    /*---Se valida que esten todas las etapas seleccionadas, para mostrar los resultados u ocultarlos---*/
    if (!completeForm.includes(false)) {
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
    /*---Se muestran los resultados particulares de email marketing solamente si esta opcion fue seleccionada---*/
    if (email.checked && !completeForm.includes(false)) {
        emailResultContainer.style.display = 'block';
        emailAmmountContainer.style.display = 'block';
        
    } else {
        emailResultContainer.style.display = 'none';
        emailAmmountContainer.style.display = 'none';
       
    }
    /*---Se muestran los resultados particulares de google/facebook ads solamente si esta opcion fue seleccionada---*/
    if (googleFacebookAds.checked && !completeForm.includes(false)) {
        googleFacebookAdsResultContainer.style.display = 'block';
       
    } else {
        googleFacebookAdsResultContainer.style.display = 'none';
       
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


// var regexDolar = new RegExp(/<\s*td[^>]*>(\d{2},\d{4})<\s*/\s*td>/g);
// $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.bna.com.ar/Personas') + '&callback=?', function(data){
// 	console.log(data.contents.match(regexDolar));
// });
