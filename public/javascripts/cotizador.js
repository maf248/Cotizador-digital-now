const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

/*---Array de validación de las 3 etapas---*/
var completeForm = [false, false, false];

/*---Se capturan los checkboxes individualmente, de los servicios requeridos---*/
var googleSearchAds = qs('#google-search-ads');
var googleDisplayAds = qs('#google-display-ads');
var facebookAds = qs('#facebook-ads');
var redesSociales = qs('#redesSociales');
var seo = qs('#seo');
var conversionWeb = qs('#conversionWeb');
var wordpress = qs('#wordpress');
var ecommerceWeb = qs('#ecommerceWeb');
var landingPage = qs('#landingPage');
var logoMarca = qs('#logoMarca');
var email = qs('#email');

/*---Se capturan los CONTENEDORES de los distintos resultados---*/
var googleFacebookAdsResultContainer = qs('#result-googleads-facebookads-container');
var googleSearchAdsResultContainer = qs('#result-google-search-ads-container');
var googleDisplayAdsResultContainer = qs('#result-google-display-ads-container');
var facebookAdsResultContainer = qs('#result-facebook-ads-container');

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
var resultGoogleSearch = qs('#result-google-search');
var resultGoogleDisplay = qs('#result-google-display');
var resultFacebookAds = qs('#result-facebook-ads');

var resultEmail = qs('#result-email');
var resultServiceFee = qs('#result-service-fee');
var resultServiceOnceFee = qs('#result-once-fee');
var resultMonthlyTotal = qs('#monthly-total');
var resultEstimatedEarning = qs('#estimated-earning');
var resultAgencyOnceFee = qs('#agency-once-fee');


/*---Datos estadisticos de paises organizado para programación orientada a objetos---*/
const countries = {
    argentina: {
        facebookAds: {
            cpm: 1.08,
            cpc: 0.04
        },
        googleSearchAds: {
            cpm: 0,
            cpc: 0 
        },
        googleDisplayAds: {
            cpa: {

            },
            cpc: {

            }
        }
    },
    australia: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    chile: {
        facebook: {
            cpm: 0.9,
            cpc: 0.05
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    paraguay: {
        facebook: {
            cpm: 0.68,
            cpc: 0.02
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    uruguay: {
        facebook: {
            cpm: 0.68,
            cpc: 0.02
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    brasil: {
        facebook: {
            cpm: 1.02,
            cpc: 0.04
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    bolivia: {
        facebook: {
            cpm: 0.71,
            cpc: 0.01
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    peru: {
        facebook: {
            cpm: 0.85,
            cpc: 0.02
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    ecuador: {
        facebook: {
            cpm: 0.55,
            cpc: 0.02
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    colombia: {
        facebook: {
            cpm: 0.42,
            cpc: 0.02
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    costaRica: {
        facebook: {
            cpm: 1.20,
            cpc: 0.08
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    mexico: {
        facebook: {
            cpm: 0.76,
            cpc: 0.03
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    eeuu: {
        facebook: {
            cpm: 2.29,
            cpc: 0.13
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    espana: {
        facebook: {
            cpm: 2.42,
            cpc: 0.09
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    inglaterra: {
        facebook: {
            cpm: 2.42,
            cpc: 0.09
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    republicaCheca: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    sudafrica: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    india: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    filipinas: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    venezuela: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    republicaDominicana: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    bangladesh: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    },
    ucrania: {
        facebook: {
            cpm: 0,
            cpc: 0
        },
        google: {
            cpm: 0,
            cpc: 0 
        }
    }
}
/*--Así se accedería a cada valor de dicho objeto---*/
console.log(countries.espana.facebook.cpc)

/*---Datos de los servicios brindados, organizado para programación orientada a objetos---*/
const services = {
    redesSociales: {
        price: 500,
    },
    seo: {
        price: 1000
    },
    conversionWeb: {
        price: 1500,
    },
    wordpress: {
        price: 2000
    },
    ecommerceWeb: {
        price: 2500
    },
    landingPage: {
        price: 3000
    },
    logoMarca: {
        price: 3500
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
var checkboxesServicesValidate = [false, false, false, false, false, false, false, false, false, false, false];

checkboxesServices.forEach((checkboxService, i) => {
    checkboxService.addEventListener('change', function() {
        if (this.checked) {
            checkboxesServicesValidate[i] = true;
        } else {
            checkboxesServicesValidate[i] = false;
        }
    });
})

/*---Se captura la cantidad de mails seleccionados para Marketing digital , y se actualiza el resultado---*/
var emailAmmount = qs('#email-ammount');

emailAmmount.addEventListener('change', function() {

    resultEmail.innerHTML = `USD ${emailAmmount.value}`

});

/*---Se captura la industria seleccionada para calcular google/facebook ads---*/
var industryAdsSelectorContainer = qs('#industry-ads-selector-container');
var industryAdsSelector = qs('#industry-ads-selector');

industryAdsSelector.addEventListener('change', function() {

    console.log(`Industria elegida: ${industryAdsSelector.value}`)

});


/*---Se capturan los checkboxes de los paises para anunciarse---*/
var countriesAnnounce = qsa('input[class=country-announce]');
var checkboxesCountriesValidate = [false, false, false, false, false, false, false, false, false];

countriesAnnounce.forEach((countryAnnounce, i) => {
    countryAnnounce.addEventListener('change', function() {
        if (this.checked) {
            console.log(countries[this.id.slice(17)]);
            
            checkboxesCountriesValidate[i] = true;
        } else {
            checkboxesCountriesValidate[i] = false;
        }
    });
})


/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var resultsContainer = qs('#results-container');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
window.addEventListener('change', function() {
    if (checkboxesServicesValidate.includes(true)) {
        completeForm[1] = true;
    } else {
        completeForm[1] = false;
    }
    if (checkboxesCountriesValidate.includes(true)) {
        completeForm[2] = true;
    } else {
        completeForm[2] = false;
    }
    /*---Se valida que esten todas las etapas seleccionadas, para mostrar los resultados u ocultarlos---*/
    if (!completeForm.includes(false)) {
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }

    /*---Se muestran los resultados particulares de google/facebook ads solamente si esta opcion fue seleccionada---*/
    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked) && !completeForm.includes(false)) {

        googleFacebookAdsResultContainer.style.display = 'block';
        industryAdsSelectorContainer.style.display = 'block';

        if (googleSearchAds.checked) {
            googleSearchAdsResultContainer.style.display = 'block';
        } else {
            googleSearchAdsResultContainer.style.display = 'none';
        }
        if (googleDisplayAds.checked) {
            googleDisplayAdsResultContainer.style.display = 'block';
        } else {
            googleDisplayAdsResultContainer.style.display = 'none';
        }
        if (facebookAds.checked) {
            facebookAdsResultContainer.style.display = 'block';
        } else {
            facebookAdsResultContainer.style.display = 'none';
        }
    } else {
        googleFacebookAdsResultContainer.style.display = 'none';
        industryAdsSelectorContainer.style.display = 'none';
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
    if ((redesSociales.checked || seo.checked || conversionWeb.checked || wordpress.checked || ecommerceWeb.checked || landingPage.checked || logoMarca.checked) && !completeForm.includes(false)) {
        serviceResultContainer.style.display = 'block';
        /*---Chequea que servicios estan tildados y los suma al total---*/
        if (redesSociales.checked) { totalServiceFee += services.redesSociales.price; }
        if (seo.checked) { totalServiceFee += services.seo.price; }
        if (conversionWeb.checked) { totalServiceFee += services.conversionWeb.price; }
        if (wordpress.checked) { totalServiceFee += services.wordpress.price; }
        if (ecommerceWeb.checked) { totalServiceFee += services.ecommerceWeb.price; }
        if (landingPage.checked) { totalServiceFee += services.landingPage.price; }
        if (logoMarca.checked) { totalServiceFee += services.logoMarca.price; }

        resultServiceFee.innerHTML = `USD ${totalServiceFee}`;

    } else {
        serviceResultContainer.style.display = 'none';
    }

    // resultMonthlyTotal.innerHTML = "el total mensual sería -> fee de gestión + estimación de inversión mensual en facebook ads y google ads";

    console.log(completeForm)
});

