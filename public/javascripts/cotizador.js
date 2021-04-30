/*---Datos estadisticos de paises organizado para programación orientada a objetos---*/
/* DATOS ABSOLUTOS DE ESTADOS UNIDOS COMO REFERENCIA */
const absoluteStatsCountries = {
    eeuu: {
        facebookAds: {
            cpm: 0,
            cpc: 0
        },
        googleSearchAds: {
            cpa: {
                autos: 33.52, 
                negocioANegocio: 116.13,
                serviciosAlConsumidor: 90.70,
                citas: 76.76,
                eCommerce: 45.27,
                educacion: 72.70,
                serviciosDeEmpleos: 48.04,
                finanzasYSeguros: 81.93,
                salud: 78.09,
                articulosParaElHogar: 87.13,
                serviciosIndustriales: 79.28,
                serviciosLegales: 86.02,
                realEstate: 116.61,
                tecnologia: 133.52,
                viajes: 44.73
            },
            cpc: {
                autos: 2.46,
                negocioANegocio: 3.33,
                serviciosAlConsumidor: 6.40,
                citas: 2.78,
                eCommerce: 1.16,
                educacion: 2.40,
                serviciosDeEmpleos: 2.04,
                finanzasYSeguros: 3.44,
                salud: 2.62,
                articulosParaElHogar: 2.94,
                serviciosIndustriales: 2.56,
                serviciosLegales: 6.75,
                realEstate: 2.37,
                tecnologia: 3.80,
                viajes: 1.53
            }
        },
        googleDisplayAds: {
            cpa: {
                autos: 23.68,
                negocioANegocio: 130.30,
                serviciosAlConsumidor: 60.48,
                citas: 60.23,
                eCommerce: 65.80,
                educacion: 143.36,
                serviciosDeEmpleos: 59.47,
                finanzasYSeguros: 56.76,
                salud: 72.58,
                articulosParaElHogar: 116.17,
                serviciosIndustriales: 51.58,
                serviciosLegales: 39.52,
                realEstate: 74.79,
                tecnologia: 103.60,
                viajes: 99.00
            },
            cpc: {
                autos: 0.58,
                negocioANegocio: 0.79,
                serviciosAlConsumidor: 0.81,
                citas: 1.49,
                eCommerce: 0.45,
                educacion: 0.47,
                serviciosDeEmpleos: 0.78,
                finanzasYSeguros: 0.86,
                salud: 0.63,
                articulosParaElHogar: 0.60,
                serviciosIndustriales: 0.54,
                serviciosLegales: 0.72,
                realEstate: 0.75,
                tecnologia: 0.51,
                viajes: 0.44
            }
        }
    }
}
/* DATOS RELATIVOS DE VARIOS PAISES PARA REALIZAR LOS CALCULOS */
const relativeStatsCountries = {
        argentina: {
            relativeRateToUSA: 0.1298304000596659
        },
        emiratosArabes: {
            relativeRateToUSA: 1.08
        },
        austria: {
            relativeRateToUSA: 0.98
        },
        australia: {
            relativeRateToUSA: 0.95
        },
        brasil: {
            relativeRateToUSA: 0.89
        },
        inglaterra: {
            relativeRateToUSA: 0.87
        },
        nuevaZelanda: {
            relativeRateToUSA: 0.86
        },
        chile: {
            relativeRateToUSA: 0.84
        },
        suiza: {
            relativeRateToUSA: 0.79
        },
        italia: {
            relativeRateToUSA: 0.75
        },
        canada: {
            relativeRateToUSA: 0.71
        },
        alemania: {
            relativeRateToUSA: 0.69
        },
        turquia: {
            relativeRateToUSA: 0.68
        },
        finlandia: {
            relativeRateToUSA: 0.67
        },
        jamaica: {
            relativeRateToUSA: 0.67
        },
        noruega: {
            relativeRateToUSA: 0.66
        },
        republicaDominicana: {
            relativeRateToUSA: 0.6
        },
        irlanda: {
            relativeRateToUSA: 0.6
        },
        islandia: {
            relativeRateToUSA: 0.56
        },
        portugal: {
            relativeRateToUSA: 0.56
        },
        grecia: {
            relativeRateToUSA: 0.54
        },
        libano: {
            relativeRateToUSA: 0.53
        },
        japon: {
            relativeRateToUSA: 0.53
        },
        suecia: {
            relativeRateToUSA: 0.51
        },
        espana: {
            relativeRateToUSA: 0.5
        },
        mexico: {
            relativeRateToUSA: 0.5
        },
        camboya: {
            relativeRateToUSA: 0.49
        },
        armenia: {
            relativeRateToUSA: 0.48
        },
        sudafrica: {
            relativeRateToUSA: 0.45
        },
        israel: {
            relativeRateToUSA: 0.45
        },
        holanda: {
            relativeRateToUSA: 0.44
        },
        argelia: {
            relativeRateToUSA: 0.44
        },
        nepal: {
            relativeRateToUSA: 0.43
        },
        dinamarca: {
            relativeRateToUSA: 0.43
        },
        belice: {
            relativeRateToUSA: 0.43
        },
        singapur: {
            relativeRateToUSA: 0.42
        },
        tailandia: {
            relativeRateToUSA: 0.42
        },
        arabiaSaudita: {
            relativeRateToUSA: 0.4
        },
        macedonia: {
            relativeRateToUSA: 0.39
        },
        trinidadYTobago: {
            relativeRateToUSA: 0.39
        },
        nicaragua: {
            relativeRateToUSA: 0.39
        },
        oman: {
            relativeRateToUSA: 0.39
        },
        indonesia: {
            relativeRateToUSA: 0.38
        },
        ruanda: {
            relativeRateToUSA: 0.38
        },
        croacia: {
            relativeRateToUSA: 0.37
        },
        francia: {
            relativeRateToUSA: 0.36
        },
        libia: {
            relativeRateToUSA: 0.36
        },
        kuwait: {
            relativeRateToUSA: 0.36
        },
        egipto: {
            relativeRateToUSA: 0.35
        },
        belgica: {
            relativeRateToUSA: 0.31
        },
        rumania: {
            relativeRateToUSA: 0.31
        },
        panama: {
            relativeRateToUSA: 0.31
        },
        uganda: {
            relativeRateToUSA: 0.31
        },
        bulgaria: {
            relativeRateToUSA: 0.29
        },
        peru: {
            relativeRateToUSA: 0.29
        },
        albania: {
            relativeRateToUSA: 0.28
        },
        coreaDelSur: {
            relativeRateToUSA: 0.28
        },
        elSalvador: {
            relativeRateToUSA: 0.27
        },
        zimbabue: {
            relativeRateToUSA: 0.27
        },
        jordania: {
            relativeRateToUSA: 0.27
        },
        costaRica: {
            relativeRateToUSA: 0.27
        },
        uruguay: {
            relativeRateToUSA: 0.26
        },
        tunez: {
            relativeRateToUSA: 0.26
        },
        kenia: {
            relativeRateToUSA: 0.26
        },
        malasia: {
            relativeRateToUSA: 0.25
        },
        filipinas: {
            relativeRateToUSA: 0.25
        },
        vietnam: {
            relativeRateToUSA: 0.24
        },
        sriLanka: {
            relativeRateToUSA: 0.23
        },
        bahamas: {
            relativeRateToUSA: 0.23
        },
        india: {
            relativeRateToUSA: 0.23
        },
        hungria: {
            relativeRateToUSA: 0.22
        },
        marruecos: {
            relativeRateToUSA: 0.22
        },
        bangladesh: {
            relativeRateToUSA: 0.21
        },
        eslovaquia: {
            relativeRateToUSA: 0.2
        },
        islaMauricio: {
            relativeRateToUSA: 0.19
        },
        qatar: {
            relativeRateToUSA: 0.19
        },
        bolivia: {
            relativeRateToUSA: 0.19
        },
        polonia: {
            relativeRateToUSA: 0.19
        },
        luxemburgo: {
            relativeRateToUSA: 0.18
        },
        ecuador: {
            relativeRateToUSA: 0.18
        },
        colombia: {
            relativeRateToUSA: 0.17
        },
        rusia: {
            relativeRateToUSA: 0.16
        },
        namibia: {
            relativeRateToUSA: 0.16
        },
        pakistan: {
            relativeRateToUSA: 0.16
        },
        guyana: {
            relativeRateToUSA: 0.15
        },
        monteNegro: {
            relativeRateToUSA: 0.14
        },
        lituania: {
            relativeRateToUSA: 0.14
        },
        tanzania: {
            relativeRateToUSA: 0.12
        },
        venezuela: {
            relativeRateToUSA: 0.12
        },
        barein: {
            relativeRateToUSA: 0.1
        },
        letonia: {
            relativeRateToUSA: 0.1
        },
        eslovenia: {
            relativeRateToUSA: 0.08
        },
        somalia: {
            relativeRateToUSA: 0.08
        },
        ucrania: {
            relativeRateToUSA: 0.08
        },
        liberia: {
            relativeRateToUSA: 0.08
        },
        moldova: {
            relativeRateToUSA: 0.08
        },
        servia: {
            relativeRateToUSA: 0.05
        }

}
/*--Así se accedería a cada valor de dicho objeto---*/
// console.log("Prueba - valor EEUU en USD google search ads CPA autos: " + absoluteStatsCountries.eeuu.googleSearchAds.cpa.autos);
// console.log("Prueba - valor Moldova en USD google search ads CPA autos: " + absoluteStatsCountries.eeuu.googleSearchAds.cpa.autos * relativeStatsCountries.moldova.relativeRateToUSA);

/*---Datos de los servicios brindados, organizado para programación orientada a objetos---*/
const services = {
    googleSearchAds: {
        implementationHours: 8,
        maintenanceHours: 4,
        costPerHour: 26,
    },
    googleDisplayAds: {
        implementationHours: 2,
        maintenanceHours: 2,
        costPerHour: 26,
    },
    facebookAds: {
        implementationHours: 8,
        maintenanceHours: 4,
        costPerHour: 26,
    },
    redesSociales: {
        price: 500,
        skillsAcquired: ["Community Management", "Redacciones", "Creación de piezas gráficas (3 Carrousels y 8 gráficas individuales)", "Creación de 1 video (Menos de 30 seg)"],
        implementationHours: [8, 0, 0, 0],
        maintenanceHours: [8, 4, 24, 4],
        costPerHour: [13, 19, 30, 30],
    },
    seo: {
        price: 1000,
        skillsAcquired: ["SEO", "Redacciones", "Creación de piezas graficas (8 piezas gráficas)"],
        implementationHours: [0, 0, 0],
        maintenanceHours: [4, 16, 8],
        costPerHour: [31, 19, 30],
    },
    conversionWeb: {
        price: 1500,
        skillsAcquired: ["Google Ads / Facebook Ads", "Diseño Web UX / UI"],
        implementationHours: [0, 0],
        maintenanceHours: [4, 8],
        costPerHour: [26, 35],
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


const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

/*---Array de validación de las 3 etapas---*/
var completeFormValidate = [false, false];
var errorType = 0;

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

/*---Se captura el bloque CONTENEDOR que pide los PAISES donde se desea ANUNCIAR---*/
var countryAnnounceContainer = qs('#country-announce-container');

/*---Se capturan los bloques CONTENEDORES que piden inversion en google ads / facebook ads---*/
var investmentGoogleSearchAdsContainer = qs('#investment-google-search-ads');
var investmentGoogleDisplayAdsContainer = qs('#investment-google-display-ads');
var investmentFacebookAdsContainer = qs('#investment-facebook-ads');
/*--Se capturan los MONTOS de inversion introducidos---*/
var investmentGoogleSearchAdsAmmount = qs('#investment-google-search-ads input[type="number"]');
var investmentGoogleDisplayAdsAmmount = qs('#investment-google-display-ads input[type="number"]');
var investmentFacebookAdsAmmount = qs('#investment-facebook-ads input[type="number"]');

/*---Se captura el bloque que pide cantidad de contactos EMAIL y el menu desplegable con valores---*/
var emailAmmountContainer = qs('#email-ammount-container');
var emailAmmount = qs('#email-ammount');

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

/*--Contenedor para los mensajes de error y validación--*/
var errorMessages = qs('#error-messages');


/*---Se captura el selector de país de los proveedores--*/
var countrySupplier = qs('#country-supplier');
    if (countrySupplier.value != '') {
        completeFormValidate[0] = true;
    }

countrySupplier.addEventListener('change', function() {
    
    if (countrySupplier.value != '') {
        completeFormValidate[0] = true;
    } else {
        completeFormValidate[0] = false;
    }
});

/*---Se capturan los checkboxes en conjunto, de los servicios requeridos---*/
var checkboxesServices = qsa('input[class=services-check]');
var checkboxesServicesValidate = [false, false, false, false, false, false, false, false, false, false, false];

checkboxesServices.forEach((checkboxService, i) => {
    checkboxService.addEventListener('change', function() {
        if (this.checked) {
            checkboxesServicesValidate[i] = true;
            /*-Desctiva el mensaje de error tipo 1 al tildar un servicio-*/
            if (errorType == 1) {
                errorMessages.innerHTML = '';
            }
        } else {
            checkboxesServicesValidate[i] = false;
        }
        if (checkboxesServicesValidate.includes(true)) {
            completeFormValidate[1] = true;
        } else {
            completeFormValidate[1] = false;
        }
        /*--Muestra u oculta la seleccion del tipo de industria en caso de seleccionarse google / facebook ads (las primeras 3 opciones)---*/
        if (checkboxesServicesValidate.slice(0, 3).includes(true)) {
            industryAdsSelectorContainer.style.display = "block";
            countryAnnounceContainer.style.display = "block";
            /*--Muestra según el caso : Inversión en Google Ads Search, Inversión en Google Ads Display e Inversión en Facebook Ads--*/
            if (checkboxesServicesValidate[0]) {
                investmentGoogleSearchAdsContainer.style.display = "block";
                /*-Valida true / false el monto google search ads en caso de estar completado o no-*/
                if (investmentGoogleSearchAdsAmmount.value == '') {
                    completeFormValidate[5] = false;
                } else {
                    completeFormValidate[5] = true;
                }
            } else {
                investmentGoogleSearchAdsContainer.style.display = "none";
                completeFormValidate.splice(5, 6);
            }
            if (checkboxesServicesValidate[1]) {
                investmentGoogleDisplayAdsContainer.style.display = "block";
                /*-Valida true / false el monto google display ads en caso de estar completado o no-*/
                if (investmentGoogleDisplayAdsAmmount.value == '') {
                    completeFormValidate[6] = false;
                } else {
                    completeFormValidate[6] = true;
                }
            } else {
                investmentGoogleDisplayAdsContainer.style.display = "none";
                completeFormValidate.splice(6, 7);
            }
            if (checkboxesServicesValidate[2]) {
                investmentFacebookAdsContainer.style.display = "block";
                /*-Valida true / false el monto facebook ads en caso de estar completado o no-*/
                if (investmentFacebookAdsAmmount.value.length == '') {
                    completeFormValidate[7] = false;
                } else {
                    completeFormValidate[7] = true;
                }
            } else {
                investmentFacebookAdsContainer.style.display = "none";
                console.log("no anda el slice, pero llega acá")
                completeFormValidate.splice(7, 8);
            }
            /*-Valida true / false el tipo de industria en caso de estar seleccionado o no-*/
            if (industryAdsSelector.value == '') {
                completeFormValidate[3] = false;
            } else {
                completeFormValidate[3] = true;
            }
            /*-Valida true / false los paises anuncio, en caso de estar seleccionados o no-*/
            if (selectedCountriesAnnounceOperate.length < 1) {
                completeFormValidate[4] = false;
            } else {
                completeFormValidate[4] = true;
            }
            
            
        } else {
            industryAdsSelectorContainer.style.display = "none";
            countryAnnounceContainer.style.display = "none";
            /*-Elimina las posiciones 3 y 4 del array de validacion, correspondiente a la seleccion de paises donde anunciar e industria en caso que no se elijan anuncios-*/
            completeFormValidate.splice(3, 5)

            investmentGoogleSearchAdsContainer.style.display = "none";
            investmentGoogleDisplayAdsContainer.style.display = "none";
            investmentFacebookAdsContainer.style.display = "none";
            
        }
    });
});

/*---Se piden cantidad de mails en caso de tildar "Email Marketing"---*/
email.addEventListener('change', function() {
    if (this.checked) {
        emailAmmountContainer.style.display = 'block';
        if (emailAmmount.value == '') {
            completeFormValidate[2] = false;
        } else {
            completeFormValidate[2] = true;
        }
    } else {
        emailAmmountContainer.style.display = 'none';
        /*-Elimina la posicion 2 del array de validacion, correspondiente a la seleccion de cantidad de mails marketing-*/
        completeFormValidate.splice(2, 3)
    }
});
emailAmmount.addEventListener('change', function() {
    /*-Valida true / false la cantidad de mails en caso de estar seleccionados o no-*/
    if (this.value == '') {
        completeFormValidate[2] = false;
    } else {
        completeFormValidate[2] = true;
        /*-Desctiva el mensaje de error tipo 5 seleccionar cantidad de contactos email marketing-*/
        if (errorType == 3) {
            errorMessages.innerHTML = '';
        } 
    }
});

/*---Se captura la industria seleccionada para calcular google/facebook ads---*/
var industryAdsSelectorContainer = qs('#industry-ads-selector-container');
var industryAdsSelector = qs('#industry-ads-selector');

industryAdsSelector.addEventListener('change', function() {

    console.log(`Industria elegida: ${industryAdsSelector.options[industryAdsSelector.selectedIndex].text} codigo: ${industryAdsSelector.value}`)

    if (this.value != '') {
        completeFormValidate[3] = true;
        /*-Desctiva el mensaje de error tipo 4 seleccionar una industria-*/
        if (errorType == 4) {
            errorMessages.innerHTML = '';
        } 
    } else {
        completeFormValidate[3] = false;
    }
});

/*--Eventos sobre los inputs de monto a invertir (google /facebook ads)--*/
investmentGoogleSearchAdsAmmount.addEventListener('change', function() {
    if (this.value > 0) {
        completeFormValidate[5] = true;
        /*-Desctiva el mensaje de error tipo 6-*/
        if (errorType == 6) {
            errorMessages.innerHTML = '';
        } 
    } else {
        completeFormValidate[5] = false;
    }
});
investmentGoogleDisplayAdsAmmount.addEventListener('change', function() {
    if (this.value > 0) {
        completeFormValidate[6] = true;
        /*-Desctiva el mensaje de error tipo 7-*/
        if (errorType == 7) {
            errorMessages.innerHTML = '';
        } 
    } else {
        completeFormValidate[6] = false;
    }
});
investmentFacebookAdsAmmount.addEventListener('change', function() {
    if (this.value > 0) {
        completeFormValidate[7] = true;
        /*-Desctiva el mensaje de error tipo 8-*/
        if (errorType == 8) {
            errorMessages.innerHTML = '';
        } 
    } else {
        completeFormValidate[7] = false;
    }
});

/*---Se captura el menu desplegable de los paises para anunciarse---*/
var countryAnnounce = qs('#country-announce');

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
    /*--Valida si hay países o no seleccionados, luego de eliminar uno--*/
    if (selectedCountriesAnnounceOperate.length < 1) {
        completeFormValidate[4] = false;
    } else {
        completeFormValidate[4] = true;
    }
    listSelectedCountriesAnnounce.innerHTML = '';
        for (let i=0; i < selectedCountriesAnnounceDisplay.length; i++) {
            listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}  <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
        }
    console.log(selectedCountriesAnnounceDisplay)
    console.log(selectedCountriesAnnounceOperate)
}

/*---Evento del botón para agregar paises donde se quiere anunciar---*/
buttonAddCountryAnnounce.addEventListener('click', function(event) {
    event.preventDefault();
    /*--Se captura la opcion del país elegido, en caso de elegir se agrega, caso contrario alerta--*/
    var countryNameOperate = qs(`#country-announce-list option[value="${countryAnnounce.value}"]`);
    
    if (countryNameOperate !== null) {
        /*--Si el país no fue previamente seleccionado lo agrega--*/
        if (!selectedCountriesAnnounceDisplay.includes(countryAnnounce.value)) {
            selectedCountriesAnnounceDisplay.push(countryAnnounce.value);
            selectedCountriesAnnounceOperate.push(countryNameOperate.dataset.value);

            countryAnnounce.value = '';
    
            listSelectedCountriesAnnounce.innerHTML = '';
            for (let i=0; i < selectedCountriesAnnounceDisplay.length; i++) {
                listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}      <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
            }
            
        }
    } else {
    
        errorMessages.innerHTML = `El país <strong>${countryAnnounce.value}</strong> no es una opción, selecciona un país de la lista`;
        setTimeout(function(){ errorMessages.innerHTML = ''; countryAnnounce.value = '';}, 3000);
    }
    
    /*--Valida si hay países o no seleccionados, luego de agregar uno--*/
    if (selectedCountriesAnnounceOperate.length < 1) {
        completeFormValidate[4] = false;
    } else {
        completeFormValidate[4] = true;
        /*-Desctiva el mensaje de error tipo 3 al agregar un país a la lista-*/
        if (errorType == 5) {
            errorMessages.innerHTML = '';
        } 
    }
    console.log(selectedCountriesAnnounceOperate)
});

/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var resultsContainer = qs('#results-container');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
function calculate() {
    /*--Se resetean los resultados necesarios al volver a calcular--*/
    resultGoogleSearch.innerHTML = '';
    resultGoogleDisplay.innerHTML = '';
    resultFacebookAds.innerHTML = '';

    /*---Se valida que esten todas las etapas seleccionadas, para mostrar los resultados u ocultarlos---*/
    if (completeFormValidate.includes(false)) {

        resultsContainer.style.display = 'none';
        if (completeFormValidate[1] == false) {
            errorMessages.innerHTML = 'Debes seleccionar mínimo un servicio';
            errorType = 1;
        } else if (completeFormValidate[2] == false) {
            errorMessages.innerHTML = 'Debes seleccionar la cantidad de contactos para Email Marketing';
            errorType = 3;
        } else if (completeFormValidate[3] == false && completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Debes agregar mínimo un país a la lista y seleccionar una categoría corresponde tu industria';
            errorType = 2;
        } else if (completeFormValidate[3] == false) {
            errorMessages.innerHTML = 'Debes seleccionar a que categoría corresponde tu industria, para poder calcular los anuncios';
            errorType = 4;
        } else if (completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Debes agregar mínimo un país a la lista';
            errorType = 5;
        } else if (completeFormValidate[5] == false && completeFormValidate[6] == false && completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Debes introducir montos a invertir en Google Search Ads, Google Display Ads y Facebook Ads   ';
            errorType = 6;
        } else if (completeFormValidate[5] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Google Search Ads';
            errorType = 6;
        } else if (completeFormValidate[6] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Google Display Ads';
            errorType = 7;
        } else if (completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Facebook Ads';
            errorType = 8;
        }
      
    } else {
        resultsContainer.style.display = 'block';
        errorMessages.innerHTML = '';
    }

    /*---Se muestran los resultados particulares de google/facebook ads solamente si esta opcion fue seleccionada---*/
    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked) && !completeFormValidate.includes(false)) {

        googleFacebookAdsResultContainer.style.display = 'block';

        if (googleSearchAds.checked) {
            googleSearchAdsResultContainer.style.display = 'block';
            
            if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '') {
                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {
                    if (selectedCountry !== "eeuu") {
                        resultGoogleSearch.innerHTML += `<strong>‣ ${selectedCountriesAnnounceDisplay[i]}</strong> en industria <strong>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</strong>: <strong>CPA:</strong> ${absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA} <strong>CPC:</strong> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpc[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) }<br>`;
                        resultGoogleSearch.innerHTML += `- Inversión elegida: USD ${investmentGoogleSearchAdsAmmount.value}<br>`
                        resultGoogleSearch.innerHTML += `- Numero de conversiones (inversion / CPA):  ${(investmentGoogleSearchAdsAmmount.value / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) )}<br>`
                        console.log(`Datos Google Search Ads CPA y CPC de ${selectedCountry} en industria ${industryAdsSelector.value}`)
                        console.log(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA);
                        console.log(absoluteStatsCountries.eeuu.googleSearchAds.cpc[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA);
                    } else if (selectedCountry === "eeuu") {
                        resultGoogleSearch.innerHTML += `<strong>‣ ${selectedCountriesAnnounceDisplay[i]}</strong> en industria <strong>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</strong>: <strong>CPA:</strong> ${absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]} <strong>CPC:</strong> ${absoluteStatsCountries.eeuu.googleSearchAds.cpc[industryAdsSelector.value]}<br>`;
                        resultGoogleSearch.innerHTML += `- Inversión elegida: USD ${investmentGoogleSearchAdsAmmount.value}<br>`
                        resultGoogleSearch.innerHTML += `- Numero de conversiones (inversion / CPA):  ${(investmentGoogleSearchAdsAmmount.value / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value])}<br>`
                        console.log(`Datos Google Search Ads CPA y CPC de ${selectedCountry} en industria ${industryAdsSelector.value}`)
                        console.log(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]);
                        console.log(absoluteStatsCountries.eeuu.googleSearchAds.cpc[industryAdsSelector.value]);
                    }
                })
            }
            
        } else {
            googleSearchAdsResultContainer.style.display = 'none';
            resultGoogleDisplay
        }
        if (googleDisplayAds.checked) {
            googleDisplayAdsResultContainer.style.display = 'block';

            if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '') {
                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {
                    if (selectedCountry !== "eeuu") {
                        resultGoogleDisplay.innerHTML += `<strong>‣ ${selectedCountriesAnnounceDisplay[i]}</strong> en industria <strong>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</strong>: <strong>CPA:</strong> ${absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA} <strong>CPC:</strong> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpc[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) }<br>`;
                        resultGoogleDisplay.innerHTML += `- Inversión elegida: USD ${investmentGoogleDisplayAdsAmmount.value}<br>`
                        resultGoogleDisplay.innerHTML += `- Numero de conversiones (inversion / CPA):  ${(investmentGoogleDisplayAdsAmmount.value / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) )}<br>`
                        console.log(`Datos Google Display Ads CPA y CPC de ${selectedCountry} en industria ${industryAdsSelector.value}`)
                        console.log(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA);
                        console.log(absoluteStatsCountries.eeuu.googleDisplayAds.cpc[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA);
                    } else if (selectedCountry === "eeuu") {
                        resultGoogleDisplay.innerHTML += `<strong>‣ ${selectedCountriesAnnounceDisplay[i]}</strong> en industria <strong>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</strong>: <strong>CPA:</strong> ${absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]} <strong>CPC:</strong> ${absoluteStatsCountries.eeuu.googleDisplayAds.cpc[industryAdsSelector.value]}<br>`;
                        resultGoogleDisplay.innerHTML += `- Inversión elegida: USD ${investmentGoogleDisplayAdsAmmount.value}<br>`
                        resultGoogleDisplay.innerHTML += `- Numero de conversiones (inversion / CPA):  ${(investmentGoogleDisplayAdsAmmount.value / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value])}<br>`
                        console.log(`Datos Google Display Ads CPA y CPC de ${selectedCountry} en industria ${industryAdsSelector.value}`)
                        console.log(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]);
                        console.log(absoluteStatsCountries.eeuu.googleDisplayAds.cpc[industryAdsSelector.value]);
                    }
                })
            }

        } else {
            googleDisplayAdsResultContainer.style.display = 'none';
        }
        if (facebookAds.checked) {
            facebookAdsResultContainer.style.display = 'block';
            resultFacebookAds.innerHTML += '<em style="color: red;">Not yet - Development in progress...</em>'

        } else {
            facebookAdsResultContainer.style.display = 'none';
        }
    } else {
        googleFacebookAdsResultContainer.style.display = 'none';
    }

    /*---Se muestran los resultados particulares de email marketing solamente si esta opcion fue seleccionada---*/
    if (email.checked && !completeFormValidate.includes(false)) {
        /*--Muestra el valor correspondiente a la cantidad de contactos seleccionados---*/
        resultEmail.innerHTML = `USD ${emailAmmount.value}`;
        emailResultContainer.style.display = 'block';
        
    } else {
        emailResultContainer.style.display = 'none';
        
    }
    /*---Se muestra u oculta "fee de servicio mensual" en caso que se haya seleccionado o no alguno---*/
    var totalServiceFee = 0;
    if ((redesSociales.checked || seo.checked || conversionWeb.checked || wordpress.checked || ecommerceWeb.checked || landingPage.checked || logoMarca.checked) && !completeFormValidate.includes(false)) {
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

    // // Validación de las 3 etapas completadas
    
};
window.addEventListener('change', function () {
    console.log(completeFormValidate)
})

