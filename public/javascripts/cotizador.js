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
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
                    autos: 4.351915008, 
                    negocioANegocio: 15.07720435,
                    serviciosAlConsumidor: 11.77561728, 
                    citas: 9.965781504,
                    eCommerce: 5.877422208,
                    educacion: 9.43867008,
                    serviciosDeEmpleos: 6.237052416,
                    finanzasYSeguros: 10.63700467,
                    salud: 10.13845594,
                    articulosParaElHogar: 11.31212275,
                    serviciosIndustriales: 10.29295411,
                    serviciosLegales: 11.16801101,
                    realEstate: 15.13952294,
                    tecnologia: 17.33495501,
                    viajes: 5.807313792,
                },
                cpc: {
                    autos: 0.305496576, 
                    negocioANegocio: 0.413538048,
                    serviciosAlConsumidor: 0.79478784, 
                    citas: 0.345235968,
                    eCommerce: 0.144055296,
                    educacion: 0.29804544,
                    serviciosDeEmpleos: 0.253338624,
                    finanzasYSeguros: 0.427198464,
                    salud: 0.325366272,
                    articulosParaElHogar: 0.365105664,
                    serviciosIndustriales: 0.317915136,
                    serviciosLegales: 0.8382528,
                    realEstate: 0.294319872,
                    tecnologia: 0.47190528,
                    viajes: 0.190003968,
                }
            },
            googleDisplayAds: {
                cpa: {
                    autos: 1.659974808, 
                    negocioANegocio: 9.13406746,
                    serviciosAlConsumidor: 4.239665387,
                    citas: 4.222140315,
                    eCommerce: 4.612598917,
                    educacion: 10.04957721,
                    serviciosDeEmpleos: 4.168864097,
                    finanzasYSeguros: 3.978892318,
                    salud: 5.087878866,
                    articulosParaElHogar: 8.143550397,
                    serviciosIndustriales: 3.615772829,
                    serviciosLegales: 2.770363362,
                    realEstate: 5.242800501,
                    tecnologia: 7.262389784,
                    viajes: 6.939928461,
                },
                cpc: {
                    autos: 0.075301632, 
                    negocioANegocio: 0.102566016,
                    serviciosAlConsumidor: 0.105162624,
                    citas: 0.193447296,
                    eCommerce: 0.05842368,
                    educacion: 0.061020288,
                    serviciosDeEmpleos: 0.101267712,
                    finanzasYSeguros: 0.111654144,
                    salud: 0.081793152,
                    articulosParaElHogar: 0.07789824,
                    serviciosIndustriales: 0.070108416,
                    serviciosLegales: 0.093477888,
                    realEstate: 0.0973728,
                    tecnologia: 0.066213504,
                    viajes: 0.057125376,
                }
            },
        australia: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        chile: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        paraguay: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        uruguay: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        brasil: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        bolivia: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        peru: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        ecuador: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        colombia: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        costaRica: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        mexico: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        eeuu: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        espana: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        inglaterra: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        republicaCheca: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        sudafrica: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            } 
        },
        india: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        filipinas: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        venezuela: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        republicaDominicana: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        bangladesh: {
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
        ucrania:{
            facebookAds: {
                cpm: 0,
                cpc: 0
            },
            googleSearchAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            },
            googleDisplayAds: {
                cpa: {
    
                },
                cpc: {
    
                }
            }
        },
    }
}
/*--Así se accedería a cada valor de dicho objeto---*/
console.log(countries.argentina.googleSearchAds.cpa.eCommerce);

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
var countryAnnounce = qs('#country-announce');
    if (countryAnnounce.value != '') {
        completeForm[2] = true;
    }

countryAnnounce.addEventListener('change', function() {
    if (countryAnnounce.value != '') {
        completeForm[2] = true;
    } else {
        completeForm[2] = false;
    }
});

/*---Se capturan los botones y lista para agregar países de anuncios dinamicamente---*/
var buttonAddCountryAnnounce = qs('#add-country-announce');
var listSelectedCountriesAnnounce = qs('#selected-country-announce');
/*--Array con nombre de paises formateados para mostrar en la lista---*/
var selectedCountriesAnnounceDisplay = [];
/*--Array con nombre de paises camelCase para luego operar durante los calculos---*/
var selectedCountriesAnnounceOperate = [];

/*---Funcion encargada de eliminar paises de la lista paises para anunciar, luego actualiza la lista---*/
function deleteCountry (countryPosition) {

    selectedCountriesAnnounceDisplay.splice(countryPosition, 1);
    selectedCountriesAnnounceOperate.splice(countryPosition, 1);

    listSelectedCountriesAnnounce.innerHTML = '';
        for (let i=0; i < selectedCountriesAnnounceDisplay.length; i++) {
            listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}  <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
        }
    console.log(selectedCountriesAnnounceDisplay)
    console.log(selectedCountriesAnnounceOperate)
}

buttonAddCountryAnnounce.addEventListener('click', function(event) {
    event.preventDefault();
    var countrySelected = countryAnnounce.options[countryAnnounce.selectedIndex].text;
    
    if (!selectedCountriesAnnounceDisplay.includes(countrySelected)) {
        selectedCountriesAnnounceDisplay.push(countrySelected);
        selectedCountriesAnnounceOperate.push(countryAnnounce.value);

        listSelectedCountriesAnnounce.innerHTML = '';
        for (let i=0; i < selectedCountriesAnnounceDisplay.length; i++) {
            listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}  <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
        }
        
    }
    console.log(selectedCountriesAnnounceDisplay)
});


/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var resultsContainer = qs('#results-container');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
window.addEventListener('change', function() {
    if (checkboxesServicesValidate.includes(true)) {
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

