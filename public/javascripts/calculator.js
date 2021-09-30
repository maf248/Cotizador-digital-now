/*---Datos estadisticos de paises organizado para programación orientada a objetos---*/
/* DATOS ABSOLUTOS DE ESTADOS UNIDOS COMO REFERENCIA */
const absoluteStatsCountries = Object.freeze({
    eeuu: Object.freeze({
        googleSearchAds: Object.freeze({
            cpa: Object.freeze({
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
            }),
            cpc: Object.freeze({
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
            })
        }),
        googleDisplayAds: Object.freeze({
            cpa: Object.freeze({
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
            }),
            cpc: Object.freeze({
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
            })
        }),
        facebookAds: Object.freeze({
            cpa: Object.freeze({
                autos: 43.84,
                negocioANegocio: 23.77,
                serviciosAlConsumidor: 31.11,
                citas: null,
                eCommerce: 21.47,
                educacion: 7.85,
                serviciosDeEmpleos: 23.24,
                finanzasYSeguros: 41.43,
                salud: 12.31,
                articulosParaElHogar: 44.66,
                serviciosIndustriales: 38.21,
                serviciosLegales: 28.70,
                realEstate: 16.92,
                tecnologia: 55.21,
                viajes: 22.50
            }),
            cpc: Object.freeze({
                autos: 2.24,
                negocioANegocio: 2.52,
                serviciosAlConsumidor: 3.08,
                citas: null,
                eCommerce: 0.70,
                educacion: 1.06,
                serviciosDeEmpleos: 2.72,
                finanzasYSeguros: 3.77,
                salud: 1.32,
                articulosParaElHogar: 2.93,
                serviciosIndustriales: 2.14,
                serviciosLegales: 1.32,
                realEstate: 1.81,
                tecnologia: 1.27,
                viajes: 0.63
            })
        })
    })
})
/* DATOS RELATIVOS DE VARIOS PAISES PARA REALIZAR LOS CALCULOS */
const relativeStatsCountries = Object.freeze({
    argentina: Object.freeze({
        relativeRateToUSA: 0.1298304000596659
    }),
    emiratosArabes: Object.freeze({
        relativeRateToUSA: 1.08
    }),
    austria: Object.freeze({
        relativeRateToUSA: 0.98
    }),
    australia: Object.freeze({
        relativeRateToUSA: 0.95
    }),
    brasil: Object.freeze({
        relativeRateToUSA: 0.89
    }),
    inglaterra: Object.freeze({
        relativeRateToUSA: 0.87
    }),
    nuevaZelanda: Object.freeze({
        relativeRateToUSA: 0.86
    }),
    chile: Object.freeze({
        relativeRateToUSA: 0.84
    }),
    suiza: Object.freeze({
        relativeRateToUSA: 0.79
    }),
    italia: Object.freeze({
        relativeRateToUSA: 0.75
    }),
    canada: Object.freeze({
        relativeRateToUSA: 0.71
    }),
    alemania: Object.freeze({
        relativeRateToUSA: 0.69
    }),
    turquia: Object.freeze({
        relativeRateToUSA: 0.68
    }),
    finlandia: Object.freeze({
        relativeRateToUSA: 0.67
    }),
    jamaica: Object.freeze({
        relativeRateToUSA: 0.67
    }),
    noruega: Object.freeze({
        relativeRateToUSA: 0.66
    }),
    republicaDominicana: Object.freeze({
        relativeRateToUSA: 0.6
    }),
    irlanda: Object.freeze({
        relativeRateToUSA: 0.6
    }),
    islandia: Object.freeze({
        relativeRateToUSA: 0.56
    }),
    portugal: Object.freeze({
        relativeRateToUSA: 0.56
    }),
    grecia: Object.freeze({
        relativeRateToUSA: 0.54
    }),
    libano: Object.freeze({
        relativeRateToUSA: 0.53
    }),
    japon: Object.freeze({
        relativeRateToUSA: 0.53
    }),
    suecia: Object.freeze({
        relativeRateToUSA: 0.51
    }),
    espana: Object.freeze({
        relativeRateToUSA: 0.5
    }),
    mexico: Object.freeze({
        relativeRateToUSA: 0.5
    }),
    camboya: Object.freeze({
        relativeRateToUSA: 0.49
    }),
    armenia: Object.freeze({
        relativeRateToUSA: 0.48
    }),
    sudafrica: Object.freeze({
        relativeRateToUSA: 0.45
    }),
    israel: Object.freeze({
        relativeRateToUSA: 0.45
    }),
    holanda: Object.freeze({
        relativeRateToUSA: 0.44
    }),
    argelia: Object.freeze({
        relativeRateToUSA: 0.44
    }),
    nepal: Object.freeze({
        relativeRateToUSA: 0.43
    }),
    dinamarca: Object.freeze({
        relativeRateToUSA: 0.43
    }),
    belice: Object.freeze({
        relativeRateToUSA: 0.43
    }),
    singapur: Object.freeze({
        relativeRateToUSA: 0.42
    }),
    tailandia: Object.freeze({
        relativeRateToUSA: 0.42
    }),
    arabiaSaudita: Object.freeze({
        relativeRateToUSA: 0.4
    }),
    macedonia: Object.freeze({
        relativeRateToUSA: 0.39
    }),
    trinidadYTobago: Object.freeze({
        relativeRateToUSA: 0.39
    }),
    nicaragua: Object.freeze({
        relativeRateToUSA: 0.39
    }),
    oman: Object.freeze({
        relativeRateToUSA: 0.39
    }),
    indonesia: Object.freeze({
        relativeRateToUSA: 0.38
    }),
    ruanda: Object.freeze({
        relativeRateToUSA: 0.38
    }),
    croacia: Object.freeze({
        relativeRateToUSA: 0.37
    }),
    francia: Object.freeze({
        relativeRateToUSA: 0.36
    }),
    libia: Object.freeze({
        relativeRateToUSA: 0.36
    }),
    kuwait: Object.freeze({
        relativeRateToUSA: 0.36
    }),
    egipto: Object.freeze({
        relativeRateToUSA: 0.35
    }),
    belgica: Object.freeze({
        relativeRateToUSA: 0.31
    }),
    rumania: Object.freeze({
        relativeRateToUSA: 0.31
    }),
    panama: Object.freeze({
        relativeRateToUSA: 0.31
    }),
    uganda: Object.freeze({
        relativeRateToUSA: 0.31
    }),
    bulgaria: Object.freeze({
        relativeRateToUSA: 0.29
    }),
    peru: Object.freeze({
        relativeRateToUSA: 0.29
    }),
    albania: Object.freeze({
        relativeRateToUSA: 0.28
    }),
    coreaDelSur: Object.freeze({
        relativeRateToUSA: 0.28
    }),
    elSalvador: Object.freeze({
        relativeRateToUSA: 0.27
    }),
    zimbabue: Object.freeze({
        relativeRateToUSA: 0.27
    }),
    jordania: Object.freeze({
        relativeRateToUSA: 0.27
    }),
    costaRica: Object.freeze({
        relativeRateToUSA: 0.27
    }),
    uruguay: Object.freeze({
        relativeRateToUSA: 0.26
    }),
    tunez: Object.freeze({
        relativeRateToUSA: 0.26
    }),
    kenia: Object.freeze({
        relativeRateToUSA: 0.26
    }),
    malasia: Object.freeze({
        relativeRateToUSA: 0.25
    }),
    filipinas: Object.freeze({
        relativeRateToUSA: 0.25
    }),
    vietnam: Object.freeze({
        relativeRateToUSA: 0.24
    }),
    sriLanka: Object.freeze({
        relativeRateToUSA: 0.23
    }),
    bahamas: Object.freeze({
        relativeRateToUSA: 0.23
    }),
    india: Object.freeze({
        relativeRateToUSA: 0.23
    }),
    hungria: Object.freeze({
        relativeRateToUSA: 0.22
    }),
    marruecos: Object.freeze({
        relativeRateToUSA: 0.22
    }),
    bangladesh: Object.freeze({
        relativeRateToUSA: 0.21
    }),
    eslovaquia: Object.freeze({
        relativeRateToUSA: 0.2
    }),
    islaMauricio: Object.freeze({
        relativeRateToUSA: 0.19
    }),
    qatar: Object.freeze({
        relativeRateToUSA: 0.19
    }),
    bolivia: Object.freeze({
        relativeRateToUSA: 0.19
    }),
    polonia: Object.freeze({
        relativeRateToUSA: 0.19
    }),
    luxemburgo: Object.freeze({
        relativeRateToUSA: 0.18
    }),
    ecuador: Object.freeze({
        relativeRateToUSA: 0.18
    }),
    colombia: Object.freeze({
        relativeRateToUSA: 0.17
    }),
    rusia: Object.freeze({
        relativeRateToUSA: 0.16
    }),
    namibia: Object.freeze({
        relativeRateToUSA: 0.16
    }),
    pakistan: Object.freeze({
        relativeRateToUSA: 0.16
    }),
    guyana: Object.freeze({
        relativeRateToUSA: 0.15
    }),
    monteNegro: Object.freeze({
        relativeRateToUSA: 0.14
    }),
    lituania: Object.freeze({
        relativeRateToUSA: 0.14
    }),
    tanzania: Object.freeze({
        relativeRateToUSA: 0.12
    }),
    venezuela: Object.freeze({
        relativeRateToUSA: 0.12
    }),
    barein: Object.freeze({
        relativeRateToUSA: 0.1
    }),
    letonia: Object.freeze({
        relativeRateToUSA: 0.1
    }),
    eslovenia: Object.freeze({
        relativeRateToUSA: 0.08
    }),
    somalia: Object.freeze({
        relativeRateToUSA: 0.08
    }),
    ucrania: Object.freeze({
        relativeRateToUSA: 0.08
    }),
    liberia: Object.freeze({
        relativeRateToUSA: 0.08
    }),
    moldova: Object.freeze({
        relativeRateToUSA: 0.08
    }),
    servia: Object.freeze({
        relativeRateToUSA: 0.05
    })
})

/*---Datos de los SKILLS con precios por hora---*/
const skills = Object.freeze({
    names: Object.freeze(["Digital Marketing Analyst", "UX / UI Designer", "Graphic Designer", "Video Editor"]),
    averages: [{
        argentina: {
            averagePrice: 26.44,
            averageTotal: 100
        },
        australia: {
            averagePrice: 42.02,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 14.26,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 27.26,
            averageTotal: 23
        },
        brazil: {
            averagePrice: 24.83,
            averageTotal: 100
        },
        chile: {
            averagePrice: 28.91,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 19.02,
            averageTotal: 100
        },
        spain: {
            averagePrice: 21.77,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 50.65,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 11.34,
            averageTotal: 100
        },
        india: {
            averagePrice: 13.42,
            averageTotal: 100
        },
        england: {
            averagePrice: 36.50,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 22.60,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 40.37,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 32.91,
            averageTotal: 95
        },
        venezuela: {
            averagePrice: 13.98,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 26.50,
            averageTotal: 38
        },
        ecuador: {
            averagePrice: 24.26,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 21.67,
            averageTotal: 45
        },
        guatemala: {
            averagePrice: 24.21,
            averageTotal: 34
        },
        honduras: {
            averagePrice: 16.20,
            averageTotal: 25
        },
        nicaragua: {
            averagePrice: 19.96,
            averageTotal: 26
        },
        panama: {
            averagePrice: 17,
            averageTotal: 29
        },
        paraguay: {
            averagePrice: 12.57,
            averageTotal: 14
        },
        peru: {
            averagePrice: 26.86,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 23.56,
            averageTotal: 85
        },
        uruguay: {
            averagePrice: 33.36,
            averageTotal: 59
        }
    }, {
        argentina: {
            averagePrice: 28.55,
            averageTotal: 100
        },
        australia: {
            averagePrice: 43.16,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 19.71,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 19.04,
            averageTotal: 23
        },
        brazil: {
            averagePrice: 25.53,
            averageTotal: 100
        },
        chile: {
            averagePrice: 20.12,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 26.50,
            averageTotal: 100
        },
        spain: {
            averagePrice: 37.39,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 66.94,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 22.48,
            averageTotal: 100
        },
        india: {
            averagePrice: 24.01,
            averageTotal: 100
        },
        england: {
            averagePrice: 42.39,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 22.02,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 37.71,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 41.14,
            averageTotal: 100
        },
        venezuela: {
            averagePrice: 21.04,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 22.22,
            averageTotal: 100
        },
        ecuador: {
            averagePrice: 19.04,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 17.47,
            averageTotal: 100
        },
        guatemala: {
            averagePrice: 19.96,
            averageTotal: 100
        },
        honduras: {
            averagePrice: 26.56,
            averageTotal: 100
        },
        nicaragua: {
            averagePrice: 15.92,
            averageTotal: 100
        },
        panama: {
            averagePrice: 20.11,
            averageTotal: 100
        },
        paraguay: {
            averagePrice: 16.16,
            averageTotal: 100
        },
        peru: {
            averagePrice: 22.54,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 31.74,
            averageTotal: 100
        },
        uruguay: {
            averagePrice: 21.80,
            averageTotal: 100
        }
    }, {
        argentina: {
            averagePrice: 20.36,
            averageTotal: 100
        },
        australia: {
            averagePrice: 35.89,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 22.12,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 21.44,
            averageTotal: 23
        },
        brazil: {
            averagePrice: 22.08,
            averageTotal: 100
        },
        chile: {
            averagePrice: 30.04,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 21.54,
            averageTotal: 100
        },
        spain: {
            averagePrice: 23.43,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 31.78,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 18.77,
            averageTotal: 100
        },
        india: {
            averagePrice: 21.96,
            averageTotal: 100
        },
        england: {
            averagePrice: 32.36,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 18.89,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 37.42,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 22.18,
            averageTotal: 100
        },
        venezuela: {
            averagePrice: 18.25,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 22.82,
            averageTotal: 100
        },
        ecuador: {
            averagePrice: 16.51,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 23.53,
            averageTotal: 100
        },
        guatemala: {
            averagePrice: 40.30,
            averageTotal: 100
        },
        honduras: {
            averagePrice: 25.71,
            averageTotal: 100
        },
        nicaragua: {
            averagePrice: 25.92,
            averageTotal: 100
        },
        panama: {
            averagePrice: 22.44,
            averageTotal: 100
        },
        paraguay: {
            averagePrice: 18.53,
            averageTotal: 100
        },
        peru: {
            averagePrice: 23.32,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 18.68,
            averageTotal: 100
        },
        uruguay: {
            averagePrice: 21.59,
            averageTotal: 100
        }
    },{
        argentina: {
            averagePrice: 18.81,
            averageTotal: 100
        },
        australia: {
            averagePrice: 44.57,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 16.89,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 25.06,
            averageTotal: 23
        },
        brazil: {
            averagePrice: 20.02,
            averageTotal: 100
        },
        chile: {
            averagePrice: 22.97,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 17.04,
            averageTotal: 100
        },
        spain: {
            averagePrice: 22.33,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 52.33,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 14.76,
            averageTotal: 100
        },
        india: {
            averagePrice: 22.99,
            averageTotal: 100
        },
        england: {
            averagePrice: 31.19,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 19.81,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 27.95,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 32.64,
            averageTotal: 100
        },
        venezuela: {
            averagePrice: 15.66,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 21.90,
            averageTotal: 100
        },
        ecuador: {
            averagePrice: 29.59,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 17.96,
            averageTotal: 100
        },
        guatemala: {
            averagePrice: 31.52,
            averageTotal: 73
        },
        honduras: {
            averagePrice: 22.45,
            averageTotal: 43
        },
        nicaragua: {
            averagePrice: 26.63,
            averageTotal: 76
        },
        panama: {
            averagePrice: 17.87,
            averageTotal: 79
        },
        paraguay: {
            averagePrice: 13.92,
            averageTotal: 64
        },
        peru: {
            averagePrice: 21.86,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 19.97,
            averageTotal: 100
        },
        uruguay: {
            averagePrice: 39.29,
            averageTotal: 100
        }
    }]
})
/*---Datos de los SERVICIOS brindados, organizado para programación orientada a objetos---*/
const services = Object.freeze({
    googleSearchAds: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([8]),
            skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
            idSkillsAcquired: Object.freeze([0]),
            skillsPrices: Object.freeze([skills.averages[0]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Selection of Keywords for the target audience and relevant for the campaign. Call with the client, to discuss the monthly budget and which type of searches are relevant for the established objective.</li><li style='list-style: circle;'>Conversion analysis for your business and measuring relevant action on your website using Google Tag Manager and Google Analytics. For example: when they add an item to the kart, make a purchase, fill a form, or contact you through the website chat.</li><li style='list-style: circle;'>The Creating a dashboard in Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank' rel='noreferrer noopener'>Click here</a> for an example).</li><li style='list-style: circle;'>Organizing by keyword theme to control the investment in each topic and create specific ads for different topics. </li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([6]),
            skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
            idSkillsAcquired: Object.freeze([0]),
            skillsPrices: Object.freeze([skills.averages[0]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (respecting the accorded schedule).</li><li style='list-style: circle;'>Weekly changes to improve performance like: Modify the budget, Final URL, Ad text, Keywords (searches which your business shows), Geographic location and Similar Keywords (how big is  the similar searches that are related to your keyword, in which you show on searches)</li><li style='list-style: circle;'>Weekly analysis of the impact with the implemented changes by using the dashboard of Google Data Studio.</li></ul>"])
        })
    }),
    googleDisplayAds: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([4, 2, 2]),
            skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer", "Video Editor"]),
            idSkillsAcquired: Object.freeze([0, 2, 3]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2], skills.averages[3]]),
            content: Object.freeze(["<ul>Setting up a campaign which shows your ads with images in websites to a relevant audience. For example: any visitor of your website in the last 30 days or people interested in your product or service according to Google.</li></ul>", "<ul><li style='list-style: circle;'>Creation of graphic pieces for advertisements.</li></ul>", "<ul><li style='list-style: circle;'>Creation of videos for advertisements.</li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([3, 1.5, 1.5]),
            skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer", "Video Editor"]),
            idSkillsAcquired: Object.freeze([0, 2, 3]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2], skills.averages[3]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Weekly changes to improve performance like: Modify the budget, Final URL, Ad text, Audience, Geographic location and Creative Pieces</li><li style='list-style: circle;'>Weekly analysis of the impact with the implemented changes by using the dashboard of Google Data Studio.</li></ul>", "<ul><li style='list-style: circle;'>Creation of graphic pieces for advertisements.</li></ul>", "<ul><li style='list-style: circle;'>Creation of graphic pieces for advertisements.</li></ul>", "<ul><li style='list-style: circle;'>Creation of videos for advertisements.</li></ul>"])
        })
    }),
    facebookAds: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([2, 6]),
            skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
            idSkillsAcquired: Object.freeze([0, 2]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Setting up a campaign which shows an ad with an image in Facebook and Instagram to a relevant audience. For example: any visitor of your website in the last 30 days or people interested in your product or service according to Facebook.</li><li style='list-style: circle;'>Measuring the relevant actions for your business website (conversions). For example: when the user puts an item in the cart, makes a purchase, fill a form or by contacting the chat from the website.</li></ul>", "<ul><li style='list-style: circle;'>Creating graphic pieces in square format (for feed), and vertical format (for stories).</li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([4, 2]),
            skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
            idSkillsAcquired: Object.freeze([0, 2]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Weekly changes to improve performance like: Modify the budget, Final URL, Ad text, Audience, Geographic location, Bidding strategy and Creative Pieces.</li></ul>", "<ul><li style='list-style: circle;'>Creation of graphic pieces in square and vertical format.</li></ul>"])
        })
    }),
    conversionWeb: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([4]),
            skillsAcquired: Object.freeze(["UX / UI Designer"]),
            idSkillsAcquired: Object.freeze([1]),
            skillsPrices: Object.freeze([skills.averages[1]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Diagnose of good practices to improve the usability and accessibility of your website, making a content analysis, visual design analysis, interaction analysis and theme analysis. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([6]),
            skillsAcquired: Object.freeze(["UX / UI Designer"]),
            idSkillsAcquired: Object.freeze([1]),
            skillsPrices: Object.freeze([skills.averages[1]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Implementing A/B tests (one version with a modification to improve performance and other without modification) for your website using Google Optimize and Google Analytics.</li><li style='list-style: circle;'>Review report for the client.</li></ul>"])
        })
    }),
    disenoWeb: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Landing Page"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementation of a predesigned template for 1 page using CMS (Content Management System) like Wordpress or Wix, to drag and drop.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Website with 5 base sections with a pre-designed template"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementation of a predesigned template for 5 pages using Wordpress. Includes any graphic needed. <a href='https://gaudirjohnson.com.ar/' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([50]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Website with a personalized design"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Different prototype designs using Figma (<a href='https://www.figma.com/file/UXhBSaXoO8LeMYrQgFYO9F/Burplaza?node-id=0%3A1' target='_blank' rel='noreferrer noopener'>Click here</a> for an example). Call with the client for revision and changes to the website in Wordpress. Up to 3 revisions by the client.</li></ul>"])
            }),
            ecommerce: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Ecommerce simple website with CMS, like WooCommerce, Tienda Nube or Shopify"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Uploading up to 15 products on the website.</li></ul>"])
            }),
            logoYMarca: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["Graphic Designer"]),
                idSkillsAcquired: Object.freeze([2]),
                skillsPrices: Object.freeze([skills.averages[2]]),
                name: Object.freeze("Logo design and Brand Identity"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Fonts, logo in different formats, color palette and concept. Up to 3 revisions. <a href='https://drive.google.com/file/d/1gyONia_qKjM6mqoJHe_AnGRGMPbicQnv/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Plugin update, image and text content update, and bug fixes.</li></ul>"])
            })
        })
    })
})

const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

/*---Array de validación de las 3 etapas---*/
var completeFormValidate = [false, false];
var errorType = 0;

/*---Se captura contenedor de servicios---*/
var servicesContainer = qs('.services-container');

/*---Se capturan los checkboxes individualmente, de los servicios requeridos---*/
var googleSearchAds = qs('#google-search-ads');
var googleDisplayAds = qs('#google-display-ads');
var facebookAds = qs('#facebook-ads');
var conversionWeb = qs('#conversionWeb');
var disenoWeb = qs('#disenoWeb')
/*--Contenedor de servicios disenoWeb--*/
var disenoWebServicesContainer = qs('#disenoWebServicesContainer');
var landingPage = qs('#landingPage');
var wordpress = qs('#wordpress');
var customWebsite = qs('#customWebsite');
var ecommerceWeb = qs('#ecommerceWeb');
var logoMarca = qs('#logoMarca');

/*---Se captura el selector de idioma---*/
var languageSelector = qs('#language-selector');

/*---Se captura el contenedor de datos extra para suavizar la animación de aparicion/desaparicion---*/
var servicesExtraContainer = qs('#services-extra-container');

/*---Se captura el bloque CONTENEDOR que pide los PAISES donde se desea ANUNCIAR---*/
var countryAnnounceContainer = qs('#country-announce-container');

/*---Se capturan los bloques CONTENEDORES que piden inversion en google ads / facebook ads---*/
var googleSearchAdsExtraContainer = qs('#google-search-ads-extra-container');
var googleDisplayAdsExtraContainer = qs('#google-display-ads-extra-container');
var facebookAdsExtraContainer = qs('#facebook-ads-extra-container');

/*--Se capturan los MONTOS de inversion introducidos---*/
var investmentGoogleSearchAdsAmmount = qs('#investment-google-search-ads-value');
var investmentGoogleDisplayAdsAmmount = qs('#investment-google-display-ads-value');
var investmentFacebookAdsAmmount = qs('#investment-facebook-ads-value');

/*---------------------RESULTADOS---------------------*/
/*---Se capturan los CONTENEDORES de los distintos resultados---*/
var googleFacebookAdsResultContainer = qs('#result-googleads-facebookads-container');

var googleSearchAdsResultContainer = qs('#result-google-search-ads-container');
var googleDisplayAdsResultContainer = qs('#result-google-display-ads-container');
var facebookAdsResultContainer = qs('#result-facebook-ads-container');

var resultImplementationContainer = qs('#result-implementation-container');
var resultMaintenanceContainer = qs('#result-maintenance-container');
var resultInvestmentsMonthlyContainer = qs('#result-investments-monthly-container');
var resultMonthlyTotalContainer = qs('#result-monthly-total-container');

/*---Se capturan los bloques que muestran los RESULTADOS, para inyectar los valores luego de calcular---*/
var resultGoogleFacebookAds = qs('#result-googleads-facebookads');
var resultGoogleSearch = qs('#result-google-search');
var resultGoogleDisplay = qs('#result-google-display');
var resultFacebookAds = qs('#result-facebook-ads');
/*--Se capturan los bloques que muestran RESULTADOS, los sub-cajones de implementación--*/
var resultImplementationConversionWebContainer = qs('#result-implementation-conversionWeb-container');
var resultImplementationGoogleSearchAdsContainer = qs('#result-implementation-googleSearchAds-container');
var resultImplementationGoogleDisplayAdsContainer = qs('#result-implementation-googleDisplayAds-container');
var resultImplementationFacebookAdsContainer = qs('#result-implementation-facebookAds-container');
var resultImplementationLandingPageContainer = qs('#result-implementation-landingPage-container');
var resultImplementationWordpressContainer = qs('#result-implementation-wordpress-container');
var resultImplementationCustomWebsiteContainer = qs('#result-implementation-customWebsite-container');
var resultImplementationEcommerceWebContainer = qs('#result-implementation-ecommerceWeb-container');
var resultImplementationLogoYMarcaContainer = qs('#result-implementation-logoYMarca-container');
/*--Se capturan los bloques que muestran RESULTADOS, los sub-cajones de implementación--*/
var resultMaintenanceConversionWebContainer = qs('#result-maintenance-conversionWeb-container');
var resultMaintenanceGoogleSearchAdsContainer = qs('#result-maintenance-googleSearchAds-container');
var resultMaintenanceGoogleDisplayAdsContainer = qs('#result-maintenance-googleDisplayAds-container');
var resultMaintenanceFacebookAdsContainer = qs('#result-maintenance-facebookAds-container');
var resultMaintenanceLandingPageContainer = qs('#result-maintenance-landingPage-container');
var resultMaintenanceWordpressContainer = qs('#result-maintenance-wordpress-container');
var resultMaintenanceCustomWebsiteContainer = qs('#result-maintenance-customWebsite-container');
var resultMaintenanceEcommerceWebContainer = qs('#result-maintenance-ecommerceWeb-container');
var resultMaintenanceLogoYMarcaContainer = qs('#result-maintenance-logoYMarca-container');
/*--Se capturan los TITULOS de los Sub-cajones de implementación--*/
var titleImplementationConversionWeb = qs('#title-implementation-conversionWeb');
var titleImplementationGoogleSearchAds = qs('#title-implementation-googleSearchAds');
var titleImplementationGoogleDisplayAds = qs('#title-implementation-googleDisplayAds');
var titleImplementationFacebookAds = qs('#title-implementation-facebookAds');
var titleImplementationLandingPage = qs('#title-implementation-landingPage');
var titleImplementationWordpress = qs('#title-implementation-wordpress');
var titleImplementationCustomWebsite = qs('#title-implementation-customWebsite');
var titleImplementationEcommerceWeb = qs('#title-implementation-ecommerceWeb');
var titleImplementationLogoYMarca = qs('#title-implementation-logoYMarca');
/*--Se capturan los TITULOS de los Sub-cajones de mantenimiento--*/
var titleMaintenanceConversionWeb = qs('#title-maintenance-conversionWeb');
var titleMaintenanceGoogleSearchAds = qs('#title-maintenance-googleSearchAds');
var titleMaintenanceGoogleDisplayAds = qs('#title-maintenance-googleDisplayAds');
var titleMaintenanceFacebookAds = qs('#title-maintenance-facebookAds');
var titleMaintenanceLandingPage = qs('#title-maintenance-landingPage');
var titleMaintenanceWordpress = qs('#title-maintenance-wordpress');
var titleMaintenanceCustomWebsite = qs('#title-maintenance-customWebsite');
var titleMaintenanceEcommerceWeb = qs('#title-maintenance-ecommerceWeb');
var titleMaintenanceLogoYMarca = qs('#title-maintenance-logoYMarca');
/*--Se capturan los CONTENIDOS de los Sub-cajones de implementación--*/
var resultImplementationConversionWeb = qs('#result-implementation-conversionWeb');
var resultImplementationGoogleSearchAds = qs('#result-implementation-googleSearchAds');
var resultImplementationGoogleDisplayAds = qs('#result-implementation-googleDisplayAds');
var resultImplementationFacebookAds = qs('#result-implementation-facebookAds');
var resultImplementationLandingPage = qs('#result-implementation-landingPage');
var resultImplementationWordpress = qs('#result-implementation-wordpress');
var resultImplementationCustomWebsite = qs('#result-implementation-customWebsite');
var resultImplementationEcommerceWeb = qs('#result-implementation-ecommerceWeb');
var resultImplementationLogoYMarca = qs('#result-implementation-logoYMarca');
/*--Se capturan los CONTENIDOS de los Sub-cajones de mantenimiento--*/
var resultMaintenanceConversionWeb = qs('#result-maintenance-conversionWeb');
var resultMaintenanceGoogleSearchAds = qs('#result-maintenance-googleSearchAds');
var resultMaintenanceGoogleDisplayAds = qs('#result-maintenance-googleDisplayAds');
var resultMaintenanceFacebookAds = qs('#result-maintenance-facebookAds');
var resultMaintenanceLandingPage = qs('#result-maintenance-landingPage');
var resultMaintenanceWordpress = qs('#result-maintenance-wordpress');
var resultMaintenanceCustomWebsite = qs('#result-maintenance-customWebsite');
var resultMaintenanceEcommerceWeb = qs('#result-maintenance-ecommerceWeb');
var resultMaintenanceLogoYMarca = qs('#result-maintenance-logoYMarca');

/*--Se capturan los resultados numericos de cada servicio--*/
var resultImplementationFee = qs('#result-implementation-fee');
var resultMaintenanceFee = qs('#result-maintenance-fee');
var resultInvestmentsMonthly = qs('#result-investments-monthly');
var resultMonthlyTotal = qs('#result-monthly-total');

/*--Se capturan los resultados numericos de las conversiones --*/
var googleSearchAdsConversions = qs('#google-search-ads-conversions');
var googleDisplayAdsConversions = qs('#google-display-ads-conversions');
var facebookAdsConversions = qs('#facebook-ads-conversions');
var totalConversions = qs('#total-conversions');

/*--Se capturan los contenedores de detalles de resultados de inversiones y totales mensuales--*/
var resultInvestmentsMonthlyDetail = qs("#result-investments-monthly-details");

/*--Contenedor para los mensajes de error y validación--*/
var errorMessages = qs('#error-messages');

/*---Se captura el selector de país de los proveedores--*/
var countrySupplier = qs('#country-supplier');
completeFormValidate[0] = false;

/*---Se capturan los checkboxes en conjunto, de los servicios requeridos---*/
var checkboxesServices = qsa('input[class=services-check]');
var checkboxesServicesValidate = [false, false, false, false, false, false, false, false, false, false];

checkboxesServices.forEach((checkboxService, i) => {
    checkboxService.addEventListener('change', function () {
        if (this.checked) {
            checkboxesServicesValidate[i] = true;
            /*-Desctiva el mensaje de error tipo 1 al tildar un servicio-*/
            if (errorType == 1) {
                errorMessages.innerHTML = '';
            }
        } else {
            checkboxesServicesValidate[i] = false;
        }
        /*--Chequea si algun servicio fue seleccionado, y muestra u oculta el contenedor correspondiente--*/
        if (checkboxesServicesValidate.slice(0, 5).includes(true)) {

            completeFormValidate[1] = true;
            servicesContainer.classList.remove('error-border');

            servicesExtraContainer.style.display = "flex";
            setTimeout(function () {
                servicesExtraContainer.classList.remove('animated-toggle-hide');
            }, 10);

        } else {
            completeFormValidate[1] = false;

            servicesExtraContainer.style.display = "none";
            setTimeout(function () {
                servicesExtraContainer.classList.add('animated-toggle-hide');
            }, 10);
        }
        /*--Muestra u oculta la seleccion del tipo de industria en caso de seleccionarse google / facebook ads (las primeras 3 opciones)---*/
        if (checkboxesServicesValidate.slice(0, 3).includes(true)) {
            industryAdsAndCountrySelectorContainer.style.display = "flex";
            countryAnnounceContainer.style.display = "block";
            /*--Muestra según el caso : Inversión en Google Ads Search, Inversión en Google Ads Display e Inversión en Facebook Ads--*/
            if (checkboxesServicesValidate[0]) {
                googleSearchAdsExtraContainer.style.display = "flex";

                /*-Valida true / false el monto google search ads en caso de estar completado o no-*/
                if (investmentGoogleSearchAdsAmmount.value == '') {
                    completeFormValidate[5] = false;
                } else {
                    completeFormValidate[5] = true;
                }
            } else {
                googleSearchAdsExtraContainer.style.display = "none";
                completeFormValidate.splice(5, 6);
            }
            if (checkboxesServicesValidate[1]) {
                googleDisplayAdsExtraContainer.style.display = "flex";

                /*-Valida true / false el monto google display ads en caso de estar completado o no-*/
                if (investmentGoogleDisplayAdsAmmount.value == '') {
                    completeFormValidate[6] = false;
                } else {
                    completeFormValidate[6] = true;
                }
            } else {
                googleDisplayAdsExtraContainer.style.display = "none";
                completeFormValidate.splice(6, 7);
            }
            if (checkboxesServicesValidate[2]) {
                facebookAdsExtraContainer.style.display = "flex";

                /*-Valida true / false el monto facebook ads en caso de estar completado o no-*/
                if (investmentFacebookAdsAmmount.value.length == '') {
                    completeFormValidate[7] = false;
                } else {
                    completeFormValidate[7] = true;
                }
            } else {
                facebookAdsExtraContainer.style.display = "none";
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
            industryAdsAndCountrySelectorContainer.style.display = "none";
            countryAnnounceContainer.style.display = "none";
            /*-Elimina las posiciones 3 y 4 del array de validacion, correspondiente a la seleccion de paises donde anunciar e industria en caso que no se elijan anuncios-*/
            completeFormValidate.splice(3, 5)

            googleSearchAdsExtraContainer.style.display = "none";
            googleDisplayAdsExtraContainer.style.display = "none";
            facebookAdsExtraContainer.style.display = "none";

        }
    });
});

/*---Se captura la industria seleccionada para calcular google/facebook ads---*/
var industryAdsAndCountrySelectorContainer = qs('#industry-and-country-selectors-container');
var industryAdsSelector = qs('#industry-ads-selector');

industryAdsSelector.addEventListener('change', function () {

    if (this.value != '') {
        completeFormValidate[3] = true;
        this.classList.remove('error-border');

        /*-Desctiva el mensaje de error tipo 4 seleccionar una industria-*/
        if (errorType == 4) {
            errorMessages.innerHTML = '';
        }
    } else {
        completeFormValidate[3] = false;
        this.classList.add('error-border');

    }
});

/*--Eventos sobre los inputs de monto a invertir (google /facebook ads)--*/
investmentGoogleSearchAdsAmmount.addEventListener('change', function () {
    if (this.value > 0) {
        completeFormValidate[5] = true;
        this.classList.remove('error-border');
        /*-Desctiva el mensaje de error tipo 6-*/
        if (errorType == 6) {
            errorMessages.innerHTML = '';
        }
    } else {
        completeFormValidate[5] = false;
        this.classList.add('error-border');
    }
});
investmentGoogleDisplayAdsAmmount.addEventListener('change', function () {
    if (this.value > 0) {
        completeFormValidate[6] = true;
        this.classList.remove('error-border');
        /*-Desctiva el mensaje de error tipo 7-*/
        if (errorType == 7) {
            errorMessages.innerHTML = '';
        }
    } else {
        completeFormValidate[6] = false;
        this.classList.add('error-border');
    }
});
investmentFacebookAdsAmmount.addEventListener('change', function () {
    if (this.value > 0) {
        completeFormValidate[7] = true;
        this.classList.remove('error-border');
        /*-Desctiva el mensaje de error tipo 8-*/
        if (errorType == 8) {
            errorMessages.innerHTML = '';
        }
    } else {
        completeFormValidate[7] = false;
        this.classList.add('error-border');
    }
});

/*---Se captura el menu desplegable de los paises para anunciarse---*/
var countryAnnounce = qs('#country-announce-list');

/*---Se captura el listado de pais agregados y el mensaje de error de los mismos---*/
var listSelectedCountriesAnnounce = qs('#selected-country-announce');
var countrySelectionErrors = qs('#country-selection-errors');
/*--Array con nombre de paises formateados para mostrar en la lista---*/
var selectedCountriesAnnounceDisplay = [];
/*--Array con nombre de paises camelCase para luego operar durante los calculos---*/
var selectedCountriesAnnounceOperate = [];

/*---Funcion encargada de eliminar paises de la lista paises para anunciar, luego actualiza la lista---*/
function deleteCountry(countryPosition) {
    selectedCountriesAnnounceDisplay.splice(countryPosition, 1);
    selectedCountriesAnnounceOperate.splice(countryPosition, 1);
    /*--Valida si hay países o no seleccionados, luego de eliminar uno--*/
    if (selectedCountriesAnnounceOperate.length < 1) {
        completeFormValidate[4] = false;
        countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Add one or more countries to the list</em></p>';
        countryAnnounce.classList.add('error-border');

    } else {
        completeFormValidate[4] = true;
        countrySelectionErrors.innerHTML = '';
        countryAnnounce.classList.remove('error-border');
    }
    listSelectedCountriesAnnounce.innerHTML = '';
    for (let i = 0; i < selectedCountriesAnnounceDisplay.length; i++) {
        listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}  <i class="fas fa-trash-alt" aria-label="Delete country from selection list" onClick="deleteCountry(${i}); return false;"></i></li>`;
    }
}

/*--Evento que agrega paises a la lista al ser seleccionados--*/
countryAnnounce.addEventListener('change', function () {
    if (!selectedCountriesAnnounceDisplay.includes(this.options[this.selectedIndex].text) && this.value !== '') {
        selectedCountriesAnnounceDisplay.push(this.options[this.selectedIndex].text);
        selectedCountriesAnnounceOperate.push(this.value);

        countryAnnounce.value = '';
        listSelectedCountriesAnnounce.innerHTML = '';
        countrySelectionErrors.innerHTML = '';
        for (let i = 0; i < selectedCountriesAnnounceDisplay.length; i++) {
            listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}      <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
        }
    } else {
        countryAnnounce.value = '';
    }
    if (selectedCountriesAnnounceOperate.length >= 1) {
        completeFormValidate[4] = true;
        countryAnnounce.classList.remove('error-border');
    } else {
        completeFormValidate[4] = false;
        countryAnnounce.classList.add('error-border');
    }
});

/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var formContainer = qs('#form-calculate-container');
var resultsContainer = qs('#results-container');
var infoExtraBottom = qs('#info-extra-bottom');
var infoExtraTopMessage = qs('#info-extra-top-message');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
var calculateButton = qs('#calculateButton');
var calculateAgainButton = qs('#calculateAgainButton');

calculateAgainButton.addEventListener('click', function () {
    formContainer.style.height = 'auto';
    formContainer.style.opacity = '1';
    resultsContainer.style.height = '0';
    resultsContainer.style.opacity = '0';
    infoExtraBottom.style.display = 'none';
    infoExtraTopMessage.style.display = 'block';
    calculateAgainButton.classList.add('d-none');
    languageSelector.classList.remove('d-none');
    calculateButton.style.display = 'block';
});

/*--Evento sobre checkbox de categoria servicios DISEÑO WEB---*/
disenoWeb.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.style.display = "flex";
    } else {
        disenoWebServicesContainer.style.display = "none";
    }
    setTimeout(function () {
        disenoWebServicesContainer.classList.toggle('animated-toggle-hide');
    }, 10);
});
/*--Eventos sobre checkboxes de sub-servicios de DISEÑO WEB---*/
landingPage.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.querySelector('.card').classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
wordpress.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.querySelector('.card').classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
customWebsite.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.querySelector('.card').classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
ecommerceWeb.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.querySelector('.card').classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
logoMarca.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.querySelector('.card').classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});

/*----Se obtienen los datos de freelancers para el pais seleccionado----*/
var responseApi;
var responseApiOk;
countrySupplier.addEventListener('change', function () {
    if (this.value !== '') {
        responseApi = false;
        // Valida que se seleccionó un pais proveedor correcto
        completeFormValidate[0] = true;
        countrySupplier.classList.remove('error-border');
        // Valida que aún no se recibió información de dicho pais
        completeFormValidate[2] = false;
        fetch(`https://digitalnow.com.ar/wp-json/freelancer-api/${countrySupplier.value}`)
            .then((response) => {
                if (response.ok) {
                    completeFormValidate[2] = true;
                    responseApiOk = true;
                    return response.json();
                } else {
                    completeFormValidate[2] = true;
                    responseApiOk = null;
                    responseApi = undefined;
                }
            })
            .then(data => responseApi = data);
    } else {
        completeFormValidate[0] = false;
    }
});

calculateButton.addEventListener('click', function () {
    calculate();
});

/*--Sistema que genera el horario real en el mensaje de "click para ver más"--*/
function parseDate() {
    var date = new Date();
    var localeSpecificTime = date.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ').slice(0, 5);
}

function calculate() {
    /*--Se setean/resetean las variables de acumulación de conversiones--*/
    var googleAdsSearchConversionsValue = 0;
    var googleAdsDisplayConversionsValue = 0;
    var facebookAdsConversionsValue = 0;
    var totalConversionsValue = 0;

    /*--Se resetean los resultados necesarios al volver a calcular--*/
    resultGoogleSearch.innerHTML = '';
    resultGoogleDisplay.innerHTML = '';
    resultFacebookAds.innerHTML = '';

    resultInvestmentsMonthlyDetail.innerHTML = '';

    /*---Se valida que esten todas las etapas seleccionadas, para mostrar los resultados u ocultarlos---*/
    if (completeFormValidate.includes(false) || responseApi == false) {

        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';

        if (completeFormValidate[0] == false && completeFormValidate[1] == false) {
            errorMessages.innerHTML = 'You must select a country for the service providers and at least one service';
            countrySupplier.classList.add('error-border');
            servicesContainer.classList.add('error-border');
            errorType = 1;
        } else if (completeFormValidate[0] == false) {
            errorMessages.innerHTML = 'You must select a country for the service providers';
            countrySupplier.classList.add('error-border');
        } else if (completeFormValidate[1] == false) {
            errorMessages.innerHTML = 'You must select at least one service';
            servicesContainer.classList.add('error-border');
            errorType = 1;
        } else if (completeFormValidate[3] == false && completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Add at least one country to the list and select which category your industry corresponds to';
            countryAnnounce.classList.add('error-border');
            industryAdsSelector.classList.add('error-border');
            errorType = 2;
            if (completeFormValidate[5] == false) {
                investmentGoogleSearchAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[6] == false) {
                investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[7] == false) {
                investmentFacebookAdsAmmount.classList.add('error-border');
            }
        } else if (completeFormValidate[3] == false) {
            errorMessages.innerHTML = 'Select which category your industry corresponds to, in order to calculate the ads';
            industryAdsSelector.classList.add('error-border');
            errorType = 4;
        } else if (completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Add at least one country to the list';
            setTimeout(() => {
                errorMessages.innerHTML = '';
            }, 4000)
            countryAnnounce.classList.add('error-border');
            errorType = 5;
        } else if (completeFormValidate[5] == false && completeFormValidate[6] == false && completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Enter amounts to invest in Google Ads Search Network, Google Ads Display Network and Facebook Ads';
            investmentGoogleSearchAdsAmmount.classList.add('error-border');
            investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            investmentFacebookAdsAmmount.classList.add('error-border');
            errorType = 6;
        } else if (completeFormValidate[5] == false) {
            errorMessages.innerHTML = 'Enter the amount to invest in Google Ads Search Network';
            investmentGoogleSearchAdsAmmount.classList.add('error-border');
            errorType = 6;
            if (completeFormValidate[6] == false) {
                investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[7] == false) {
                investmentFacebookAdsAmmount.classList.add('error-border');
            }
        } else if (completeFormValidate[6] == false) {
            errorMessages.innerHTML = 'Enter the amount to invest in Google Ads Display Network';
            investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            errorType = 7;
            if (completeFormValidate[5] == false) {
                investmentGoogleSearchAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[7] == false) {
                investmentFacebookAdsAmmount.classList.add('error-border');
            }
        } else if (completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Enter the amount to invest in Facebook Ads';
            investmentFacebookAdsAmmount.classList.add('error-border');
            errorType = 8;
            if (completeFormValidate[5] == false) {
                investmentGoogleSearchAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[6] == false) {
                investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            }
        } else if (completeFormValidate[2] == false) {
            errorMessages.innerHTML = '<div class="spinner-border text-primary"></div><p class="text-primary mt-3">Receiving data...wait a few seconds please</p>';

            function isApiDataReady() {
                setTimeout(function () {
                    if (responseApiOk == true) {
                        errorMessages.innerHTML = '';
                        calculate();
                    } else if (responseApiOk == null) {
                        calculate();
                    } else {
                        isApiDataReady();
                    }
                }, 750);
            }
            isApiDataReady()

        }

    } else if (disenoWeb.checked && (!landingPage.checked && !wordpress.checked && !customWebsite.checked && !ecommerceWeb.checked && !logoMarca.checked)) {
        errorMessages.innerHTML = 'You must select a Web Design sub-service';
        disenoWebServicesContainer.querySelector('.card').classList.add('error-border');

    } else {
        /*--Se cambia la vista, mostrando los resultados---*/
        formContainer.style.height = '0';
        formContainer.style.opacity = '0';
        infoExtraBottom.style.display = 'block';
        infoExtraTopMessage.style.display = 'none';
        resultsContainer.style.height = 'auto';
        resultsContainer.style.opacity = '1';
        calculateButton.style.display = 'none';
        calculateAgainButton.classList.remove('d-none');
        languageSelector.classList.add('d-none');
        errorMessages.innerHTML = '';
        /*---Se scrollea hacia arriba de todo al calcular---*/
        window.scroll(0, 0);
    }
    /*---Se capturan los titulos principal y secundario de los resultados---*/
    let resultsFirstTitle = qs('.results-first-title');
    let resultsSecondTitle = qs('.results-second-title');
    /*---Se capturan los titulos de resultados para inyectar el contenido acorde a lo que se haya seleccionado---*/
    let resultsConversionsSelectedInTitle = qs('#results-conversions-selected');
    let resultsInvestmentsSelectedInTitle = qs('#results-investments-selected');
    let resultsTotalSelectedInTitle = qs('#results-monthly-total-selected');
    /*---Se resetea el titulo de "costo total mensual"---*/
    resultsInvestmentsSelectedInTitle.innerHTML = '';
    resultsTotalSelectedInTitle.innerHTML = '(Maintenance services fee)';

    /*---Se muestran los resultados particulares de google/facebook ads solamente si esta opcion fue seleccionada---*/
    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked) && !completeFormValidate.includes(false)) {

        googleFacebookAdsResultContainer.style.display = 'block';
        resultsFirstTitle.innerHTML = 'Resultados:';
        resultsFirstTitle.style.display = 'block';
        resultsSecondTitle.style.display = 'block';

        /*--Genera el titulo apropiado del cajon de resultados, acorde a que se haya seleccionado--*/
        if ((googleSearchAds.checked || googleDisplayAds.checked) && !facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Google Ads';
            resultsInvestmentsSelectedInTitle.innerHTML = ' - Google Ads';
            resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Google Ads investment)';


        } else if (!googleSearchAds.checked && !googleDisplayAds.checked && facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Facebook Ads';
            resultsInvestmentsSelectedInTitle.innerHTML = ' - Facebook Ads';
            resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Facebook Ads investment)';


        } else if ((googleSearchAds.checked || googleDisplayAds.checked) && facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Google Ads + Facebook Ads';
            resultsInvestmentsSelectedInTitle.innerHTML = ' - Google Ads + Facebook Ads';
            resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Google Ads investment + Facebook Ads investment)';

        }

        if (googleSearchAds.checked) {
            googleSearchAdsResultContainer.style.display = 'block';

            if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '' && investmentGoogleSearchAdsAmmount.value > 0) {
                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {

                    if (selectedCountriesAnnounceOperate.length == 1) {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Investment selected: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA));
                            googleAdsSearchConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Investment selected: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                                <li style='list-style: none;'>- Conversions number (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]);
                            googleAdsSearchConversionsValue += thisConversion;
                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Proportional investment: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA));
                            googleAdsSearchConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Proportional investment: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]);
                            googleAdsSearchConversionsValue += thisConversion;
                        }
                    }

                })
            }

        } else {
            googleSearchAdsResultContainer.style.display = 'none';

        }
        if (googleDisplayAds.checked) {
            googleDisplayAdsResultContainer.style.display = 'block';

            if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '') {
                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {
                    if (selectedCountriesAnnounceOperate.length == 1) {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Investment selected: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            googleAdsDisplayConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Investment selected: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]));
                            googleAdsDisplayConversionsValue += thisConversion;

                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Proportional investment: USD ${(investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            googleAdsDisplayConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Proportional investment: USD ${(investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]));
                            googleAdsDisplayConversionsValue += thisConversion;

                        }
                    }
                })
            }

        } else {
            googleDisplayAdsResultContainer.style.display = 'none';
        }
        if (facebookAds.checked) {
            facebookAdsResultContainer.style.display = 'block';

            if (industryAdsSelector.value == 'citas') {
                resultFacebookAds.innerHTML += 'We do not have Facebook Ads data for the Dating industry :('
            } else if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '') {

                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {
                    if (selectedCountriesAnnounceOperate.length == 1) {
                        if (selectedCountry !== "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Investment selected: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Conversions number (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            facebookAdsConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Investment selected: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]));
                            facebookAdsConversionsValue += thisConversion;

                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Proportional investment: USD ${(investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            facebookAdsConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> in industry <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Proportional investment: USD ${(investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Conversions number (investment / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]));
                            facebookAdsConversionsValue += thisConversion;

                        }
                    }
                })
            }

        } else {
            facebookAdsResultContainer.style.display = 'none';
        }
    } else {
        googleFacebookAdsResultContainer.style.display = 'none';
        resultsFirstTitle.innerHTML = 'Costos:';
        resultsFirstTitle.style.display = 'block';
        resultsSecondTitle.style.display = 'none';
    }

    /*---Se inicializan variables para acumular valores totales de IMPLEMENTACION (agencyOnceFeeValue) y MENSUALES (agencyMonthlyFeeValue)---*/
    var agencyOnceFeeValue = 0;
    var agencyMonthlyFeeValue = 0;
    /*--Variable que calcula el monto de inversion total en medios seleccionados--*/
    var totalInvestmentMonthly = 0;

    /*--Ya calculadas las conversiones particulares (google display, google search y facebook), se suman en conversion total--*/
    totalConversionsValue = googleAdsSearchConversionsValue + googleAdsDisplayConversionsValue + facebookAdsConversionsValue;

    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked || conversionWeb.checked || (disenoWeb.checked && (landingPage.checked || wordpress.checked || customWebsite.checked || ecommerceWeb.checked || logoMarca.checked))) && !completeFormValidate.includes(false)) {

        /*---Se muestran los resultados particulares de conversion web solamente si esta opcion fue seleccionada---*/
        if (conversionWeb.checked) {
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var conversionWebManteinanceValue = 0;
            services.conversionWeb.maintenance.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    conversionWebManteinanceValue += services.conversionWeb.maintenance.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    conversionWebManteinanceValue += services.conversionWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.conversionWeb.maintenance.hours[i]} hours of work from a ${services.conversionWeb.maintenance.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.conversionWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.conversionWeb.maintenance.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.conversionWeb.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceConversionWebContainer.style.display = "block";
            titleMaintenanceConversionWeb.innerHTML = `<u><strong>Conversion Rate Optimization</strong>:</u><nobr> USD ${Math.round(conversionWebManteinanceValue)}</nobr>`;
            resultMaintenanceConversionWeb.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += conversionWebManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var conversionWebImplementationValue = 0;

            services.conversionWeb.implementation.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    conversionWebImplementationValue += services.conversionWeb.implementation.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    conversionWebImplementationValue += services.conversionWeb.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.conversionWeb.implementation.hours[i]} hours of work from a ${services.conversionWeb.implementation.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.conversionWeb.implementation.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.conversionWeb.implementation.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.conversionWeb.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationConversionWebContainer.style.display = "block";
            titleImplementationConversionWeb.innerHTML = `<u><strong>Conversion Rate Optimization</strong>:</u><nobr> USD ${Math.round(conversionWebImplementationValue)}</nobr>`;
            resultImplementationConversionWeb.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += conversionWebImplementationValue;

        } else {
            resultMaintenanceConversionWebContainer.style.display = "none";
            resultImplementationConversionWebContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de Google Search Ads solamente si esta opcion fue seleccionada---*/
        if (googleSearchAds.checked) {
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultImplementationContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var googleSearchAdsManteinanceValue = 0;
            services.googleSearchAds.maintenance.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    googleSearchAdsManteinanceValue += services.googleSearchAds.maintenance.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    googleSearchAdsManteinanceValue += services.googleSearchAds.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.googleSearchAds.maintenance.hours[i]} hours of work from a ${services.googleSearchAds.maintenance.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.googleSearchAds.maintenance.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.googleSearchAds.maintenance.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.googleSearchAds.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleSearchAdsContainer.style.display = "block";
            titleMaintenanceGoogleSearchAds.innerHTML = `<u><strong>Google Ads Search Network</strong>:</u><nobr> USD ${Math.round(googleSearchAdsManteinanceValue)}</nobr>`;
            resultMaintenanceGoogleSearchAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += googleSearchAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var googleSearchAdsImplementationValue = 0;
            services.googleSearchAds.implementation.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    googleSearchAdsImplementationValue += services.googleSearchAds.implementation.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    googleSearchAdsImplementationValue += services.googleSearchAds.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.googleSearchAds.implementation.hours[i]} hours of work from a ${services.googleSearchAds.implementation.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.googleSearchAds.implementation.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.googleSearchAds.implementation.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.googleSearchAds.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleSearchAdsContainer.style.display = "block";
            titleImplementationGoogleSearchAds.innerHTML = `<u><strong>Google Ads Search Network</strong>:</u><nobr> USD ${Math.round(googleSearchAdsImplementationValue)}</nobr>`;
            resultImplementationGoogleSearchAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += googleSearchAdsImplementationValue;

            /*----Se completa la información de conversiones----*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleSearchAdsConversions.innerHTML = `${googleAdsSearchConversionsValue.toFixed(2).replace(".", ",")} conversions`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleSearchAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Google Ads Search Network:</strong> USD ${investmentGoogleSearchAdsAmmount.value} monthly investment</li>`;

        } else {
            resultMaintenanceGoogleSearchAdsContainer.style.display = "none";
            resultImplementationGoogleSearchAdsContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de Google Display Ads solamente si esta opcion fue seleccionada---*/
        if (googleDisplayAds.checked) {
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultImplementationContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var googleDisplayAdsManteinanceValue = 0;
            services.googleDisplayAds.maintenance.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    googleDisplayAdsManteinanceValue += services.googleDisplayAds.maintenance.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    googleDisplayAdsManteinanceValue += services.googleDisplayAds.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.googleDisplayAds.maintenance.hours[i]} hours of work from a ${services.googleDisplayAds.maintenance.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.googleDisplayAds.maintenance.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.googleDisplayAds.maintenance.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.googleDisplayAds.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleDisplayAdsContainer.style.display = "block";
            titleMaintenanceGoogleDisplayAds.innerHTML = `<u><strong>Google Display Ads</strong>:</u><nobr> USD ${Math.round(googleDisplayAdsManteinanceValue)}</nobr>`;
            resultMaintenanceGoogleDisplayAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += googleDisplayAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var googleDisplayAdsImplementationValue = 0;
            services.googleDisplayAds.implementation.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    googleDisplayAdsImplementationValue += services.googleDisplayAds.implementation.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    googleDisplayAdsImplementationValue += services.googleDisplayAds.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.googleDisplayAds.implementation.hours[i]} hours of work from a ${services.googleDisplayAds.implementation.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.googleDisplayAds.implementation.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.googleDisplayAds.implementation.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.googleDisplayAds.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleDisplayAdsContainer.style.display = "block";
            titleImplementationGoogleDisplayAds.innerHTML = `<u><strong>Google Display Ads</strong>:</u><nobr> USD ${Math.round(googleDisplayAdsImplementationValue)}</nobr>`;
            resultImplementationGoogleDisplayAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += googleDisplayAdsImplementationValue;

            /*----Se completa la información de conversiones----*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleDisplayAdsConversions.innerHTML = `${googleAdsDisplayConversionsValue.toFixed(2).replace(".", ",")} conversions`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleDisplayAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Google Display Ads:</strong> USD ${investmentGoogleDisplayAdsAmmount.value} monthly investment</li>`;

        } else {
            resultMaintenanceGoogleDisplayAdsContainer.style.display = "none";
            resultImplementationGoogleDisplayAdsContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de Facebook Ads solamente si esta opcion fue seleccionada---*/
        if (facebookAds.checked) {
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultImplementationContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var facebookAdsManteinanceValue = 0;
            services.facebookAds.maintenance.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    facebookAdsManteinanceValue += services.facebookAds.maintenance.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    facebookAdsManteinanceValue += services.facebookAds.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.facebookAds.maintenance.hours[i]} hours of work from a ${services.facebookAds.maintenance.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.facebookAds.maintenance.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.facebookAds.maintenance.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.facebookAds.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceFacebookAdsContainer.style.display = "block";
            titleMaintenanceFacebookAds.innerHTML = `<u><strong>Facebook Ads</strong>:</u><nobr> USD ${Math.round(facebookAdsManteinanceValue)}</nobr>`;
            resultMaintenanceFacebookAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += facebookAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var facebookAdsImplementationValue = 0;
            services.facebookAds.implementation.idSkillsAcquired.forEach((skill, i) => {
                if (responseApi !== undefined) {
                    facebookAdsImplementationValue += services.facebookAds.implementation.hours[i] * responseApi[skill].averageHourlyRate;
                } else {
                    facebookAdsImplementationValue += services.facebookAds.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                }
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.facebookAds.implementation.hours[i]} hours of work from a ${services.facebookAds.implementation.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.facebookAds.implementation.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.facebookAds.implementation.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.facebookAds.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationFacebookAdsContainer.style.display = "block";
            titleImplementationFacebookAds.innerHTML = `<u><strong>Facebook Ads</strong>:</u><nobr> USD ${Math.round(facebookAdsImplementationValue)}</nobr>`;
            resultImplementationFacebookAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += facebookAdsImplementationValue;

            /*-Se completa la información de conversiones-*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            facebookAdsConversions.innerHTML = `${facebookAdsConversionsValue.toFixed(2).replace(".", ",")} conversions`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentFacebookAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Facebook Ads:</strong> USD ${investmentFacebookAdsAmmount.value} monthly investment</li>`;

        } else {
            resultMaintenanceFacebookAdsContainer.style.display = "none";
            resultImplementationFacebookAdsContainer.style.display = "none";
        }
        /*---Se capturan los mensajes del contenedor destacado del final, para cambiar el contenido acorde a seleccionar 1 o más servicios---*/
        var monthlyTotalCostMessage = qs('#monthly-total-cost-message');
        var implementationCostMessage = qs('#implementation-cost-message');
        var implementationCostTotal = qs('#implementation-cost-total');

        /*---Se muestran los resultados particulares de Diseño Web solamente si esta opcion con alguna sub-opción fueron seleccionadas---*/
        if (disenoWeb.checked) {

            if (landingPage.checked) {
                /*--Se muestran los fees de implementacion (por unica vez)---*/
                resultImplementationContainer.style.display = "block";
                /*--Se guardan los detalles de skills que incluye este servicio---*/
                /*-para MANTENIMIENTO-*/
                let maintenanceContent = '';
                var landingPageManteinanceValue = 0;
                services.disenoWeb.maintenance.basic.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        landingPageManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        landingPageManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLandingPageContainer.style.display = "block";
                titleMaintenanceLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong>:</u><nobr> USD ${Math.round(landingPageManteinanceValue)}</nobr>`;
                resultMaintenanceLandingPage.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += landingPageManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var landingPageImplementationValue = 0;
                services.disenoWeb.implementation.basic.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        landingPageImplementationValue += services.disenoWeb.implementation.basic.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        landingPageImplementationValue += services.disenoWeb.implementation.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.basic.hours[i]} hours of work from a ${services.disenoWeb.implementation.basic.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.implementation.basic.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.implementation.basic.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.implementation.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLandingPageContainer.style.display = "block";
                titleImplementationLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong>:</u><nobr> USD ${Math.round(landingPageImplementationValue)}</nobr>`;
                resultImplementationLandingPage.innerHTML = `${implementationContent}`;

                agencyOnceFeeValue += landingPageImplementationValue;

            } else {
                resultMaintenanceLandingPageContainer.style.display = "none";
                resultImplementationLandingPageContainer.style.display = "none";
            }
            if (wordpress.checked) {
                /*--Se muestran los fees de implementacion (por unica vez)---*/
                resultImplementationContainer.style.display = "block";
                /*--Se guardan los detalles de skills que incluye este servicio---*/
                /*-para MANTENIMIENTO-*/
                let maintenanceContent = '';
                var wordpressManteinanceValue = 0;
                services.disenoWeb.maintenance.basic.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        wordpressManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        wordpressManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceWordpressContainer.style.display = "block";
                titleMaintenanceWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong>:</u><nobr> USD ${Math.round(wordpressManteinanceValue)}</nobr>`;
                resultMaintenanceWordpress.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += wordpressManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var wordpressImplementationValue = 0;
                services.disenoWeb.implementation.intermediate.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        wordpressImplementationValue += services.disenoWeb.implementation.intermediate.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        wordpressImplementationValue += services.disenoWeb.implementation.intermediate.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.intermediate.hours[i]} hours of work from a ${services.disenoWeb.implementation.intermediate.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.implementation.intermediate.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.implementation.intermediate.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.implementation.intermediate.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationWordpressContainer.style.display = "block";
                titleImplementationWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong>:</u><nobr> USD ${Math.round(wordpressImplementationValue)}</nobr>`;
                resultImplementationWordpress.innerHTML = `${implementationContent}`;

                agencyOnceFeeValue += wordpressImplementationValue;

            } else {
                resultMaintenanceWordpressContainer.style.display = "none";
                resultImplementationWordpressContainer.style.display = "none";
            }
            if (customWebsite.checked) {
                /*--Se muestran los fees de implementacion (por unica vez)---*/
                resultImplementationContainer.style.display = "block";
                /*--Se guardan los detalles de skills que incluye este servicio---*/
                /*-para MANTENIMIENTO-*/
                let maintenanceContent = '';
                var customWebsiteManteinanceValue = 0;
                services.disenoWeb.maintenance.basic.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        customWebsiteManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        customWebsiteManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceCustomWebsiteContainer.style.display = "block";
                titleMaintenanceCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong>:</u><nobr> USD ${Math.round(customWebsiteManteinanceValue)}</nobr>`;
                resultMaintenanceCustomWebsite.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += customWebsiteManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var customWebsiteImplementationValue = 0;
                services.disenoWeb.implementation.advanced.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        customWebsiteImplementationValue += services.disenoWeb.implementation.advanced.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        customWebsiteImplementationValue += services.disenoWeb.implementation.advanced.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.advanced.hours[i]} hours of work from a ${services.disenoWeb.implementation.advanced.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.implementation.advanced.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.implementation.advanced.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.implementation.advanced.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationCustomWebsiteContainer.style.display = "block";
                titleImplementationCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong>:</u><nobr> USD ${Math.round(customWebsiteImplementationValue)}</nobr>`;
                resultImplementationCustomWebsite.innerHTML = `${implementationContent}`;

                agencyOnceFeeValue += customWebsiteImplementationValue;

            } else {
                resultMaintenanceCustomWebsiteContainer.style.display = "none";
                resultImplementationCustomWebsiteContainer.style.display = "none";
            }
            if (ecommerceWeb.checked) {
                /*--Se muestran los fees de implementacion (por unica vez)---*/
                resultImplementationContainer.style.display = "block";
                /*--Se guardan los detalles de skills que incluye este servicio---*/
                /*-para MANTENIMIENTO-*/
                let maintenanceContent = '';
                var ecommerceWebManteinanceValue = 0;
                services.disenoWeb.maintenance.basic.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        ecommerceWebManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        ecommerceWebManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceEcommerceWebContainer.style.display = "block";
                titleMaintenanceEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong>:</u><nobr> USD ${Math.round(ecommerceWebManteinanceValue)}</nobr>`;
                resultMaintenanceEcommerceWeb.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += ecommerceWebManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var ecommerceWebImplementationValue = 0;
                services.disenoWeb.implementation.ecommerce.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        ecommerceWebImplementationValue += services.disenoWeb.implementation.ecommerce.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        ecommerceWebImplementationValue += services.disenoWeb.implementation.ecommerce.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.ecommerce.hours[i]} hours of work from a ${services.disenoWeb.implementation.ecommerce.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.implementation.ecommerce.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.implementation.ecommerce.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.implementation.ecommerce.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationEcommerceWebContainer.style.display = "block";
                titleImplementationEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong>:</u><nobr> USD ${Math.round(ecommerceWebImplementationValue)}</nobr>`;
                resultImplementationEcommerceWeb.innerHTML = `${implementationContent}`;

                agencyOnceFeeValue += ecommerceWebImplementationValue;

            } else {
                resultMaintenanceEcommerceWebContainer.style.display = "none";
                resultImplementationEcommerceWebContainer.style.display = "none";
            }
            if (logoMarca.checked) {
                /*--Se muestran los fees de implementacion (por unica vez)---*/
                resultImplementationContainer.style.display = "block";
                /*--Se guardan los detalles de skills que incluye este servicio---*/
                /*-para MANTENIMIENTO-*/
                let maintenanceContent = '';
                var logoMarcaManteinanceValue = 0;
                services.disenoWeb.maintenance.basic.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        logoMarcaManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        logoMarcaManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLogoYMarcaContainer.style.display = "block";
                titleMaintenanceLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong>:</u><nobr> USD ${Math.round(logoMarcaManteinanceValue)}</nobr>`;
                resultMaintenanceLogoYMarca.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += logoMarcaManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var logoMarcaImplementationValue = 0;
                services.disenoWeb.implementation.logoYMarca.idSkillsAcquired.forEach((skill, i) => {
                    if (responseApi !== undefined) {
                        logoMarcaImplementationValue += services.disenoWeb.implementation.logoYMarca.hours[i] * responseApi[skill].averageHourlyRate;
                    } else {
                        logoMarcaImplementationValue += services.disenoWeb.implementation.logoYMarca.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;
                    }
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.logoYMarca.hours[i]} hours of work from a ${services.disenoWeb.implementation.logoYMarca.skillsAcquired[i]} with a USD $${responseApi ? Number(responseApi[skill].averageHourlyRate).toFixed(2).replace(".", ",") : services.disenoWeb.implementation.logoYMarca.skillsPrices[i][countrySupplier.value].averagePrice.toFixed(2).replace(".", ",")} hourly rate <small>(Average price based on ${responseApi ? responseApi[skill].averageTotalUsers : services.disenoWeb.implementation.logoYMarca.skillsPrices[i][countrySupplier.value].averageTotal} freelancers from ${countrySupplier.options[countrySupplier.selectedIndex].text} in the platform <a href='https://www.freelancer.com' target='_blank' rel='noreferrer noopener'>freelancer.com</a>)</small>, to do the following:</li> ${services.disenoWeb.implementation.logoYMarca.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLogoYMarcaContainer.style.display = "block";
                titleImplementationLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong>:</u><nobr> USD ${Math.round(logoMarcaImplementationValue)}</nobr>`;
                resultImplementationLogoYMarca.innerHTML = `${implementationContent}`;

                agencyOnceFeeValue += logoMarcaImplementationValue;

            } else {
                resultMaintenanceLogoYMarcaContainer.style.display = "none";
                resultImplementationLogoYMarcaContainer.style.display = "none";
            }

        } else {
            resultMaintenanceLandingPageContainer.style.display = "none";
            resultImplementationLandingPageContainer.style.display = "none";
            resultMaintenanceWordpressContainer.style.display = "none";
            resultImplementationWordpressContainer.style.display = "none";
            resultMaintenanceCustomWebsiteContainer.style.display = "none";
            resultImplementationCustomWebsiteContainer.style.display = "none";
            resultMaintenanceEcommerceWebContainer.style.display = "none";
            resultImplementationEcommerceWebContainer.style.display = "none";
            resultMaintenanceLogoYMarcaContainer.style.display = "none";
            resultImplementationLogoYMarcaContainer.style.display = "none";
        }

        /*---Carca el mensaje de NO se seleccionaron inversiones si se da el caso---*/
        if (!googleSearchAds.checked && !googleDisplayAds.checked && !facebookAds.checked) {
            resultInvestmentsMonthlyDetail.innerHTML = "<li style='list-style: circle;'>You have not selected any investment in digital media. <small>(e.g.: Google Ads Search Network, Google Ads Display Network or Facebook Ads)</small></li>";
        }
        /*---Se destaca la implementación en el cajon final, si SOLO se seleccionaron servicios "Diseño Web"---*/
        if (disenoWeb.checked && (!googleSearchAds.checked && !googleDisplayAds.checked && !facebookAds.checked && !conversionWeb.checked)) {
            monthlyTotalCostMessage.style.display = 'none';
            resultMonthlyTotal.style.display = 'none';

            implementationCostMessage.style.display = 'inline-block';
            implementationCostTotal.innerHTML = `USD ${agencyOnceFeeValue}`;
            implementationCostTotal.style.display = 'inline-block';
        } else {
            implementationCostMessage.style.display = 'none';
            implementationCostTotal.style.display = 'none';

            monthlyTotalCostMessage.style.display = 'inline-block';
            resultMonthlyTotal.style.display = 'inline-block';

        }
        /*---Se setean los valores totales de los cajónes, es decir las sumas de valores de c/u---*/
        resultImplementationFee.innerHTML = `USD ${Math.round(agencyOnceFeeValue)}`;
        resultMaintenanceFee.innerHTML = `USD ${Math.round(agencyMonthlyFeeValue)}`;
        resultInvestmentsMonthly.innerHTML = ` USD ${totalInvestmentMonthly}`;
        resultMonthlyTotal.innerHTML = `USD ${Math.round(totalInvestmentMonthly + agencyMonthlyFeeValue)}`;

    } else {
        formContainer.style.height = 'auto';
        formContainer.style.opacity = '1';
        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';
        calculateAgainButton.classList.add('d-none');
        languageSelector.classList.remove('d-none');
        calculateButton.style.display = 'block';
    }

    /*--Se inyecta horario real en bubble speech de resultados p/ mobile--*/
    qs('#bubble-results-timestamp').innerHTML = parseDate();

};

/*--Sistema para rotar los iconos de cajónes "collapse" al expandirlos o contraerlos--*/
var resultsCollapsible = qsa('.results-collapsible');
var iconsToRotate = qsa('.iconsToRotate');
resultsCollapsible.forEach((header, i) => {
    header.addEventListener('click', function () {
        iconsToRotate[i].classList.toggle('rotateIcons');
    });
});
/*---Sistema de mensajes "speech bubble" para que se entienda en mobile que los cajones de resultados se expanden---*/
var categoryTitles = qsa('.result-category-titles');
var serviceTitles = qsa('.result-service-titles');

function closeBubbleSpeechResults() {
    qs('#bubble-click-results-container').style.transform = 'scale(0)';
    qs('#bubble-click-results-container').style.transition = 'transform 0.2s ease-in';
    setTimeout(() => {
        qs('#bubble-click-results-container').style.display = 'none';
    }, 200)
};

/*--Detecta click en cajon de categoria y cambia el mensaje del bubble, luego detecta click en sub-cajon de servicio y desaparece--*/
categoryTitles.forEach((category, i) => {
    category.addEventListener('click', function () {
        qs('#bubble-results-message').innerHTML = 'Click in each sub-category of services to see more...';

        serviceTitles.forEach((service, i) => {
            service.addEventListener('click', function () {
                closeBubbleSpeechResults();
            });
        });
    });
});

/*---Se ajusta la pantalla al contenido de las pestañas "¿Como obtuvimos estos resultados?" al clickearlas---*/
function _scrollTo(selector, yOffset = 0) {
    const el = document.querySelector(selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}
qs('#what-does-tab').addEventListener('click', () => {
    setTimeout(() => {
        if ($(window).width() <= 500) {
            _scrollTo('#what-does', -100);
        } else {
            _scrollTo('#what-does');
        }
    }, 250);
});
qs('#info-tab').addEventListener('click', () => {
    setTimeout(() => {
        _scrollTo('#info', -130)
    }, 250);
});
qs('#statistics-tab').addEventListener('click', () => {
    setTimeout(() => {
        _scrollTo('#statistics', -130)
    }, 250);
});
// /*---Se agrega subrayado animado al titulo del cotizador---*/
// var entryHeader = qs('.entry-header');
// entryHeader.classList.add('crumina-heading');
// entryHeader.innerHTML += '<div class="heading-decoration align-center"><span class="first"></span><span class="second"></span></div>';