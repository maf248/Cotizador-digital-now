const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

/*---Array de validación de las 4 etapas---*/
var completeForm = [false, false, false, false];

/*---Se capturan los checkboxes individualmente, de los servicios requeridos---*/
var googleFacebookAds = qs('#google-facebook-ads');
var seo = qs('#seo');
var wordpress = qs('#wordpress');
var tiendaNube = qs('#tiendaNube');
var woocommerce = qs('#woocommerce');
var redesSociales = qs('#redesSociales');
var email = qs('#email');
var logoMarca = qs('#logoMarca');
var mantenimientoWeb = qs('#mantenimientoWeb');

/*---Se capturan los CONTENEDORES de los distintos resultados---*/
var googleFacebookAdsResultContainer = qs('#result-googleads-facebookads-container');
var emailResultContainer = qs('#result-email-container');
var serviceResultContainer = qs('#result-service-fee-container');
var serviceOnceFeeContainer = qs('#result-once-fee-container');

var resultTotalMonth = qs('#result-total-month');
var resultEstimated = qs('#result-estimated');
var resultAgencyOnceFee = qs('#result-agency-once-fee');

/*---Se captura el bloque que pide cantidad de contactos EMAIL y el contenedor de resultados mail---*/
var emailAmmountContainer = qs('#email-ammount-container');

/*---Se capturan los bloques que muestran los RESULTADOS, para inyectar los valores luego de calcular---*/
var resultGoogleFacebookAds = qs('#result-googleads-facebookads');
var resultEmail = qs('#result-email');
var resultServiceFee = qs('#result-service-fee');
var resultServiceOnceFee = qs('#result-once-fee');
var resultMonthlyTotal = qs('#monthly-total');
var resultEstimatedEarning = qs('#estimated-earning');
var resultAgencyOnceFee = qs('#agency-once-fee');


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

/*---Datos de los servicios brindados, organizado para programación orientada a objetos---*/
const services = {
    seo: {
        price: 1000
    },
    wordpress: {
        price: 2000
    },
    tiendaNube: {
        price: 3000
    },
    woocommerce: {
        price: 4000
    },
    redesSociales: {
        price: 5000
    },
    logoMarca: {
        price: 6000
    },
    mantenimientoWeb: {
        price: 7000
    }
}

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
var checkboxesServices = qsa('input[class=services-check]');
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



/*---Se captura la cantidad de mails seleccionados para Marketing digital , y se actualiza el resultado---*/
var emailAmmount = qs('#email-ammount');

emailAmmount.addEventListener('change', function() {

    resultEmail.innerHTML = `USD ${emailAmmount.value}`

});

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
/*--Se guarda en una variable el objetivo seleccionado--*/
var objectiveSelected = null;
/*-Se recorren para detectar cuando alguno de los 3 es tildado-*/
objectives.forEach(objective => {
    objective.addEventListener('change', function() {
        if (this.checked) {
            completeForm[3] = true;
            objectiveSelected = this.id;
        }
    });
})

/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var resultsContainer = qs('#results-container');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
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

    /*---Se muestran los resultados particulares de google/facebook ads solamente si esta opcion fue seleccionada---*/
    if (googleFacebookAds.checked && !completeForm.includes(false)) {
        googleFacebookAdsResultContainer.style.display = 'block';
    } else {
        googleFacebookAdsResultContainer.style.display = 'none';
    }

    /*---Se muestran los resultados particulares de email marketing solamente si esta opcion fue seleccionada---*/
    if (email.checked && !completeForm.includes(false)) {
        emailResultContainer.style.display = 'block';
        emailAmmountContainer.style.display = 'block';
    } else {
        emailResultContainer.style.display = 'none';
        emailAmmountContainer.style.display = 'none';
    }
    /*---Se muestra u oculta "fee de servicio mensual" en caso que se haya seleccionado o no alguno---*/
    var totalServiceFee = 0;
    if ((seo.checked || wordpress.checked || tiendaNube.checked || woocommerce.checked || redesSociales.checked || logoMarca.checked || mantenimientoWeb.checked) && !completeForm.includes(false)) {
        serviceResultContainer.style.display = 'block';
        /*---Chequea que servicios estan tildados y los suma al total---*/
        if (seo.checked) { totalServiceFee += services.seo.price; }
        if (wordpress.checked) { totalServiceFee += services.wordpress.price; }
        if (tiendaNube.checked) { totalServiceFee += services.tiendaNube.price; }
        if (woocommerce.checked) { totalServiceFee += services.woocommerce.price; }
        if (tiendaNube.checked) { totalServiceFee += services.tiendaNube.price; }
        if (redesSociales.checked) { totalServiceFee += services.redesSociales.price; }
        if (logoMarca.checked) { totalServiceFee += services.logoMarca.price; }
        if (mantenimientoWeb.checked) { totalServiceFee += services.mantenimientoWeb.price; }

        resultServiceFee.innerHTML = `USD ${totalServiceFee}`;

    } else {
        serviceResultContainer.style.display = 'none';
    }

    // resultMonthlyTotal.innerHTML = "el total mensual sería -> fee de gestión + estimación de inversión mensual en facebook ads y google ads";

    console.log(objectiveSelected)
    console.log(completeForm)
});

