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
    names: Object.freeze(["Digital Marketing Analyst", "SEO Analyst", "Community Manager", "Content Writer", "UX / UI Designer", "Graphic Designer", "Programmer", "Video Editor    "]),
    prices: [{
        argentina: 30,
        australia: 50,
        bangladesh: 15,
        colombia: 24,
        espana: 35,
        eeuu: 97,
        filipinas: 24,
        india: 14,
        inglaterra: 34,
        mexico: 18,
        sudafrica: 30,
        ucrania: 33,
        venezuela: 8
    }, {
        argentina: 26,
        australia: 52,
        bangladesh: 13,
        colombia: 14,
        espana: 28,
        eeuu: 70,
        filipinas: 21,
        india: 13,
        inglaterra: 45,
        mexico: 19,
        sudafrica: 32,
        ucrania: 32,
        venezuela: 9
    }, {
        argentina: 16,
        australia: 41,
        bangladesh: 41,
        colombia: 34,
        espana: 46,
        eeuu: 39,
        filipinas: 12,
        india: 31,
        inglaterra: 44,
        mexico: 16,
        sudafrica: 19,
        ucrania: 30,
        venezuela: 9
    }, {
        argentina: 19,
        australia: 57,
        bangladesh: 17,
        colombia: 22,
        espana: 39,
        eeuu: 62,
        filipinas: 14,
        india: 21,
        inglaterra: 54,
        mexico: 38,
        sudafrica: 33,
        ucrania: 18,
        venezuela: 15
    }, {
        argentina: 35,
        australia: 54,
        bangladesh: 31,
        colombia: 27,
        espana: 49,
        eeuu: 83,
        filipinas: 26,
        india: 19,
        inglaterra: 54,
        mexico: 32,
        sudafrica: 46,
        ucrania: 32,
        venezuela: 15
    }, {
        argentina: 27,
        australia: 40,
        bangladesh: 14,
        colombia: 23,
        espana: 25,
        eeuu: 52,
        filipinas: 14,
        india: 23,
        inglaterra: 41,
        mexico: 21,
        sudafrica: 38,
        ucrania: 25,
        venezuela: 21
    }, {
        argentina: 28,
        australia: 47,
        bangladesh: 18,
        colombia: 24,
        espana: 34,
        eeuu: 59,
        filipinas: 21,
        india: 19,
        inglaterra: 47,
        mexico: 35,
        sudafrica: 22,
        ucrania: 32,
        venezuela: 12
    }, {
        argentina: 20,
        australia: 40,
        bangladesh: 16,
        colombia: 28,
        espana: 26,
        eeuu: 54,
        filipinas: 16,
        india: 24,
        inglaterra: 30,
        mexico: 25,
        sudafrica: 29,
        ucrania: 26,
        venezuela: 20
    }]
})
/*---Datos de los SERVICIOS brindados, organizado para programación orientada a objetos---*/
const services = Object.freeze({
    googleSearchAds: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Google Ads account.</li><li style='list-style: circle;'>Selection of Keywords for the target audience and relevant for the campaign. Call with the client, to discuss the monthly budget and which type of searches are relevant for the established objective.</li><li style='list-style: circle;'>OOrganizing the keyword themes in 5 ad groups and creating 5 different ads for each topic.</li><li style='list-style: circle;'>Creating the link extensions for the campaign (for example: a link that redirects to your website or get phone calls to your business).</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Google Ads account.</li><li style='list-style: circle;'>Selection of Keywords for the target audience and relevant for the campaign. Call with the client, to discuss the monthly budget and which type of searches are relevant for the established objective.</li><li style='list-style: circle;'>Creating the link extensions for the campaign (for example: a link that redirects to your website or get phone calls to your business).</li><li style='list-style: circle;'>The Implementation of Google Analytics and Google Tag Manager.</li><li style='list-style: circle;'>Conversion analysis for your business and measuring relevant action on your website using Google Tag Manager and Google Analytics. For example: when they add an item to the kart, make a purchase, fill a form, or contact you through the website chat.</li><li style='list-style: circle;'>The Creating a dashboard in Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank' rel='noreferrer noopener'>Click here</a> for an example).</li><li style='list-style: circle;'>Organizing the keyword themes in 10 ad groups and creating 10 different ads for each topic.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([12]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Google Ads account.</li><li style='list-style: circle;'>Selection of Keywords for the target audience and relevant for the campaign. Call with the client, to discuss the monthly budget and which type of searches are relevant for the established objective.</li><li style='list-style: circle;'>Creating the link extensions for the campaign (for example: a link that redirects to your website or get phone calls to your business).</li><li style='list-style: circle;'>The implementation of Google Analytics and Google Tag Manager.</li><li style='list-style: circle;'>Conversion analysis for your business and measuring relevant action on your website using Google Tag Manager and Google Analytics. For example: when they add an item to the kart, make a purchase, fill a form, or contact you through the website chat.</li><li style='list-style: circle;'>The Creating a dashboard in Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank' rel='noreferrer noopener'>Click here</a> for an example).</li><li style='list-style: circle;'>Organizing the keyword themes in 15 ad groups and creating 15 different ads for each topic.</li><li style='list-style: circle;'>Implementation of Google Shopping campaigns and dynamic campaigns.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 2 changes each month to optimize the performance like budget modification, final url, texts in ads, keywords (searches in which you appear), location, and keyword matching options (how wide is the umbrella of similar searches to your keywords in which you appear).</li><li style='list-style: circle;'>Analysis of every implemented change and their impact.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 4 changes each month to optimize the performance like budget modification, final url, texts in ads, keywords (searches in which you appear), location, and keyword matching options (how wide is the umbrella of similar searches to your keywords in which you appear).</li><li style='list-style: circle;'>Analysis of every implemented change and their impact.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([12]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 8 changes each month to optimize the performance like budget modification, final url, texts in ads, keywords (searches in which you appear), location, and keyword matching options (how wide is the umbrella of similar searches to your keywords in which you appear).</li><li style='list-style: circle;'>Analysis of every implemented change and their impact.</li></ul>"])
            })
        })
    }),
    googleDisplayAds: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2, 2]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Google Ads account.</li><li style='list-style: circle;'>Creating a 1 Remarketing campaign (showing ads on different websites to users who visited your business website in the last 30 days).</li></ul>", "<ul><li style='list-style: circle;'>Creating a 1 banner in a square and horizontal format for responsive ads (a mix between image and text).</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/15wF9BY4RxRrQ-vEchJDP4V17rw6hp503?usp=sharing' target='_blank' rel='noreferrer noopener'>See sum of creative pieces</a></li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4, 2, 2]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer", "Video Editor   "]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Google Ads account.</li><li style='list-style: circle;'>Creating a 1 Remarketing campaign (showing ads on different websites to users who visited your business website in the last 30 days). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example)</li><li style='list-style: circle;'>Measuring relevant actions on your business website (conversions). For example: when they add an item to the kart, make a purchase, fill a form, or contact you through the website chat.</li><li style='list-style: circle;'>Implementation of Google Analytics and Google Tag Manager.</li><li style='list-style: circle;'>Conversion analysis for your business and measuring relevant action on your website using Google Tag Manager and Google Analytics.</li><li style='list-style: circle;'>Creating a Google Data Studio dashboard (<a href='https://datastudio.google.com/u/0/reporting/f6da5210-ceff-411f-a088-28943fb6b9d6/page/s16BB/preview' target='_blank' rel='noreferrer noopener'>Click here</a> for an example)</li><li style='list-style: circle;'>Creating up to 5 campaigns, all segmented by user interests and website themes, and distribute the budget to optimize conversions.</li></ul>", "<ul><li style='list-style: circle;'>Designing 1 banner in a square and horizontal format for responsive ads (a mix between image and text).</li></ul>", "<ul><li style='list-style: circle;'>Creating a 30 second video in horizontal format for ads in different websites (<a href='https://drive.google.com/file/d/1il1GW3U0HTOIy76mtOSmEEwNYXda6_CL/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example)</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/131EO5sr8BXx1si4fRHetLhPWHeNHaZI4?usp=sharing' target='_blank' rel='noreferrer noopener'>See example of creative pieces delivered</a></li></ul>"])
            }),
            advanced: {
                hours: Object.freeze([4, 4, 4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer", "Video Editor   "]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Google Ads account.</li><li style='list-style: circle;'>Creating 1 Remarketing campaign (showing ads on different websites to users who visited your business website in the last 30 days). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example)</li><li style='list-style: circle;'>Measuring relevant actions on your business website (conversions). For example: when they add an item to the kart, make a purchase, fill a form, or contact you through the website chat.</li><li style='list-style: circle;'>Implementation of Google Analytics and Google Tag Manager.</li><li style='list-style: circle;'>Conversion analysis for your business and measuring relevant action on your website using Google Tag Manager and Google Analytics.</li><li style='list-style: circle;'>Creating a Google Data Studio dashboard. (<a href='https://datastudio.google.com/u/0/reporting/f6da5210-ceff-411f-a088-28943fb6b9d6/page/s16BB/preview' target='_blank' rel='noreferrer noopener'>Click here</a> for an example)</li><li style='list-style: circle;'>Creating up to 5 campaigns, all segmented by user interests and website themes, and distribute the budget to optimize conversions.</li></ul>", "<ul><li style='list-style: circle;'>Designing 3 banners in a square and horizontal format for responsive ads (a mix between image and text).</li></ul>", "<ul><li style='list-style: circle;'>Creating 2 videos ads of 30 seconds, in landscape format and 1 video in portrait format (Readaptation) that is displayed on websites as an advertisement (<a href='https://drive.google.com/file/d/1il1GW3U0HTOIy76mtOSmEEwNYXda6_CL/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example)</li></ul>"])
            }
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 2 changes a month to optimize performance. For example: modifying budget, final url, ads copy, location and creative pieces. By the end of the month, the client will receive a review analyzing how the changes impacted the campaign.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4, 4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 4 changes a month to optimize performance. For example: modifying budget, final url, ads copy, location and creative pieces. By the end of the month, the client will receive a review analyzing how the changes impacted the campaign.</li></ul>", "<ul><li style='list-style: circle;'>Creation of 2 graphic pieces in a square and horizontal format.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: [4, 4, 4],
                skillsAcquired: ["Digital Marketing Analyst", "Graphic Designer", "Video Editor "],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 4 changes a month to optimize performance. For example: modifying budget, final url, ads copy, location and creative pieces. By the end of the month, the client will receive a review analyzing how the changes impacted the campaign.</li></ul>", "<ul><li style='list-style: circle;'>Creation of 2 graphic pieces in a square and horizontal format.</li></ul>", "<ul><li style='list-style: circle;'>Creation of 2 videos in horizontal format.</li></ul>"]
            })
        })
    }),
    facebookAds: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2, 2]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Facebook Ads account.</li><li style='list-style: circle;'>Facebook Pixel implementation for targets like users  who visited your business website or similar users who visited your business website.</li><li style='list-style: circle;'>Creation of a campaign structure with an investment of 70% on new users (users who hadn’t visited your website or your social media). An investment of 30% on users who visited your website or interacted with your social media.</li></ul>", "<ul><li style='list-style: circle;'>Creation of 1 social media graphic image in square format (for feed) and vertical format (for story) and for a text ad.</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/1zgJiT2dnypW3kAKUDmWyuyEN7zp8KZ47?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4, 4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Facebook Ads account.</li><li style='list-style: circle;'>Facebook Pixel implementation for targets like users  who visited your business website or similar users who visited your business website.</li><li style='list-style: circle;'>Creation of a campaign structure with an investment of 70% on new users (users who hadn’t visited your website or your social media). An investment of 30% on users who visited your website or interacted with your social media.</li><li style='list-style: circle;'>Conversion Rate with Facebook Pixel (number of users who take action on a page like making an online purchase or filling a form).</li><li style='list-style: circle;'>Copywriting services (10 strategic texts in total) being aware if the users visited the business website or not./li></ul>", "<ul><li style='list-style: circle;'>Different graphic sets (2 sets of graphic images in square and vertical format, 4 total), taking into account if users visited the business website or not.</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/14atx8oJwDeypPzA49ISyET6KsONJZfPk?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([6, 10, 2]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer", "Video Editor   "]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7], skills.prices[3]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Creating a Facebook Ads account.</li><li style='list-style: circle;'>Facebook Pixel implementation for targets like users  who visited your business website or similar users who visited your business website.</li><li style='list-style: circle;'>Creation of a campaign structure with an investment of 70% on new users (users who hadn’t visited your website or your social media). An investment of 30% on users who visited your website or interacted with your social media.</li><li style='list-style: circle;'>Conversion Rate with Facebook Pixel (number of users who take action on a page like making an online purchase or filling a form).</li><li style='list-style: circle;'>Implementación de Google Analytics y Google Tag Manager para medir conversiones.</li><li style='list-style: circle;'>Creación de dashboard de Google Data Studio</li><li style='list-style: circle;'>Copywriting services (10 strategic texts in total) being aware if the users visited the business website or not./li></ul>", "<ul><li style='list-style: circle;'>5 sets of social media graphic images in square format (for feed) and vertical format (for story).</li></ul>", "<ul><li style='list-style: circle;'>1 Video in vertical format and 4:5 format of 15 seconds.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 2 changes a month to optimize performance. For example: modifying budget, final url, ads copy, target, location, bidding strategies, and creative pieces.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4, 4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 2 changes a month to optimize performance. For example: modifying budget, final url, ads copy, target, location, bidding strategies, and creative pieces.</li></ul>", "<ul><li style='list-style: circle;'>2 social media graphic images in square and vertical format.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([4, 4, 4]),
                skillsAcquired: Object.freeze(["Digital Marketing Analyst", "Graphic Designer", "Video Editor   "]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Making any modification by the client request (always respecting the accorded schedule).</li><li style='list-style: circle;'>Includes 2 changes a month to optimize performance. For example: modifying budget, final url, ads copy, target, location, bidding strategies, and creative pieces.</li></ul>", "<ul><li style='list-style: circle;'>2 social media graphic images in square and vertical format.</li></ul>", "<ul><li style='list-style: circle;'>1 Video in vertical format and 4:5 format of 15 seconds.</li></ul>"])
            })
        })
    }),
    communityManagement: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Community Manager"]),
                skillsPrices: Object.freeze([skills.prices[2]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Completing a marketing competitor analysis and pitching new ideas for your social media. All would be delivered in a Google Document with images of 400 words.</li><li style='list-style: circle;'>1 call with the client for feedback.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Community Manager"]),
                skillsPrices: Object.freeze([skills.prices[2]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Completing a marketing competitor analysis and pitching new ideas for your social media. All would be delivered in 2 Google Documents with images of 400 words.</li><li>2   call with client for feedback.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["Community Manager"]),
                skillsPrices: Object.freeze([skills.prices[2]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Completing a marketing competitor analysis and pitching new ideas for your social media. All would be delivered in 2 Google Documents with images of 400 words.</li><li>3 call with client for feedback.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([7, 1]),
                skillsAcquired: Object.freeze(["Community Manager", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[2], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Social media content calendar for 12 posts (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example), 12 copies for feed and content on 1 social media (if it’s Instagram, it can be for both Instagram and Facebook). Content provided by the client would be posted (pictures, videos), or Internet content with modifications. All feed content (12 posts) would also be shared as stories with a link that would redirect the user to the feed. Includes the account management (responding comments on posts, interacting with profiles that interact with the competitor posts).</li></ul>", "<ul><li style='list-style: circle;'>Improvements to content provided by the client or taken from the internet.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([8, 10, 2]),
                skillsAcquired: Object.freeze(["Community Manager", "Graphic Designer", "Video Editor   "]),
                skillsPrices: Object.freeze([skills.prices[2], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Social media content calendar for 12 posts (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example), 12 copies for feed and content on 1 social media (if it’s Instagram, it can be for both Instagram and Facebook). All feed content (12 posts) would also be shared as stories with a link that would redirect the user to the feed. Includes the account management (responding comments on posts, interacting with profiles that interact with the competitor posts).</li></ul>", "<ul><li style='list-style: circle;'>10 individual graphics</li></ul>", "<ul><li style='list-style: circle;'>2 videos for reels (less than 30 seconds)</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([10, 27, 3]),
                skillsAcquired: Object.freeze(["Community Manager", "Graphic Designer", "Video Editor   "]),
                skillsPrices: Object.freeze([skills.prices[2], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Social media content calendar for 12 posts (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example), 12 copies for feed and content on 1 social media (if it’s Instagram, it can be for both Instagram and Facebook). Content provided by the client would be posted (pictures, videos), or Internet content with modifications. All feed content (12 posts) would also be shared as stories with a link that would redirect the user to the feed. Includes the account management (responding comments on posts, interacting with profiles that interact with the competitor posts).</li></ul>", "<ul><li style='list-style: circle;'>10 social media graphic images for feed and 4 social media graphic images for stories.</li><li style='list-style: circle;'>4 Carousel creations (in between 5 to 10 graphic images each set).</li></ul>", "<ul><li style='list-style: circle;'>2 videos in vertical format for reels (less than 30 seconds)</li><li style='list-style: circle;'>1 video template for questionnaires and surveys.</li></ul>"])
            })
        })
    }),
    seo: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["SEO Analyst"]),
                skillsPrices: Object.freeze([skills.prices[1]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Search Analysis to determine which searches are valuable for your objectives (taking into account Cost per Click, competition, etc.). Implementation of relevant keywords with high traffic and Cost per Click.</li><li style='list-style: circle;'>Technical audit for your business website using <a href='https://neilpatel.com/ubersuggest/' target='_blank' rel='noreferrer noopener'>Ubersuggest</a>, a tool created by Neil Patel that analyzes up to 132 technical aspects of a website. For example: loading time, words per page and much more. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li><li style='list-style: circle;'>Implementing changes from the technical audit.</li><li style='list-style: circle;'>Changing content to tags <title>, <h1>, and text from the homepage for strategic positioning in Google Searches, based on keyword analysis.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["SEO Analyst"]),
                skillsPrices: Object.freeze([skills.prices[1]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Search Analysis to determine which searches are valuable for your objectives (taking into account Cost per Click, competition, etc.). Implementation of relevant keywords with high traffic and Cost per Click.</li><li style='list-style: circle;'>Technical audit for your business website using <a href='https://neilpatel.com/ubersuggest/' target='_blank' rel='noreferrer noopener'>Ubersuggest</a>, a tool created by Neil Patel that analyzes up to 132 technical aspects of a website. For example: loading time, words per page and much more. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example</li><li style='list-style: circle;'>Changing content to tags <title>, <h1>, and text from the homepage up to 5 pages from your website.</li><li style='list-style: circle;'>Keyword analysis and web pages from your competitor, analyzing which pages get more traffic (3 competitors).</li><li style='list-style: circle;'>Problem solving from any inconvenience detected during the technical auditory with Ubersuggest, up to 5 pages from your business website.</li><ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([16]),
                skillsAcquired: Object.freeze(["SEO Analyst"]),
                skillsPrices: Object.freeze([skills.prices[1]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Search Analysis to determine which searches are valuable for your objectives (taking into account Cost per Click, competition, etc.). Implementation of relevant keywords with high traffic and Cost per Click.</li><li style='list-style: circle;'>Technical audit for your business website using <a href='https://neilpatel.com/ubersuggest/' target='_blank' rel='noreferrer noopener'>Ubersuggest</a>, a tool created by Neil Patel that analyzes up to 132 technical aspects of a website. For example: loading time, words per page and much more. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example</li><li style='list-style: circle;'>Changing content to tags <title>, <h1>, and text from the homepage up to 5 pages from your website.</li><li style='list-style: circle;'>Image alt attribute optimization.</li><li style='list-style: circle;'>Keyword analysis and web pages from your competitor, analyzing which pages get more traffic (6 competitors).</li><li style='list-style: circle;'>Problem solving from any inconvenience detected during the technical auditory with Ubersuggest, up to 10 pages from your business website.</li><ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2, 4, 2]),
                skillsAcquired: Object.freeze(["SEO Analyst", "Content Writer", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[1], skills.prices[3], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Search Analysis to determine which searches are valuable for your objectives (taking into account Cost per Click, competition, etc.). Implementation of relevant keywords with high traffic and Cost per Click.</li><li style='list-style: circle;'>Keyword analysis and web pages from your competitor, analyzing which pages get more traffic (3 competitors).</li><li style='list-style: circle;'>Contacting other blogs within the industry to make collabs using ONE 2 LEAD (Automation tool from Linkedin, U$ 15 a month) for Link-building (getting links for your website).</li></ul>", "<ul><li style='list-style: circle;'>1 blog post of 1000 words. <a href='https://digitalnow.com.ar/posicionamiento-web-en-google-seo/' target='_blank' rel='noreferrer noopener'>Click here</a> for an example</li></ul>", "<ul><li style='list-style: circle;'>2 graphics (1 infographic and cover).</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an infographic example,  <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for a cover example.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4, 8, 4]),
                skillsAcquired: Object.freeze(["SEO Analyst", "Content Writer", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[1], skills.prices[3], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Search Analysis to determine which searches are valuable for your objectives (taking into account Cost per Click, competition, etc.). Implementation of relevant keywords with high traffic and Cost per Click.</li><li style='list-style: circle;'>Keyword analysis and web pages from your competitor, analyzing which pages get more traffic (6 competitors).</li><li style='list-style: circle;'>Contacting other blogs within the industry to make collabs using ONE 2 LEAD (Automation tool from Linkedin, U$ 15 a month) for Link-building (getting links for your website).</li></ul>", "<ul><li style='list-style: circle;'>2 blog posts of 1000 words each.</li></ul>", "<ul><li style='list-style: circle;'>4 Graphic Images (2 infographics and 2 covers).</li><li style='list-style: circle;'>2 infographics for other blogs from similar industries to include a link to your business website.</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an infographic example,  <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for a cover example.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([8, 16, 12]),
                skillsAcquired: Object.freeze(["SEO Analyst", "Content Writer", "Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[1], skills.prices[3], skills.prices[5]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Search Analysis to determine which searches are valuable for your objectives (taking into account Cost per Click, competition, etc.). Implementation of relevant keywords with high traffic and Cost per Click.</li><li style='list-style: circle;'>Keyword analysis and web pages from your competitor, analyzing which pages get more traffic (12 competitors).</li><li style='list-style: circle;'>Contacting other blogs within the industry to make collabs using ONE 2 LEAD (Automation tool from Linkedin, U$ 15 a month) for Link-building (getting links for your website).</li></ul>", "<ul><li style='list-style: circle;'>4 blog posts of 1000 words each.</li></ul>", "<ul><li style='list-style: circle;'>8 graphics (4 infographics and 4 covers)</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an infographic example, <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for a cover example.</li><li style='list-style: circle;'>2 infographics for other blogs within the same industry to include a link redirecting the user to your business website.</li><li style='list-style: circle;'>2 GIFS for each post to create a friendlier reading experience. <a href='https://digitalnow.com.ar/como-hacer-una-campana-en-google-ads/' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            })
        })
    }),
    conversionWeb: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Diagnose of good practices to improve the usability and accessibility of your website, making a content analysis, visual design analysis, interaction analysis and theme analysis. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([12]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Diagnose of good practices to improve the usability and accessibility of your website, making a content analysis, visual design analysis, interaction analysis and theme analysis. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li><li>Implementing improvements using the preview analysis.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementing 1 A/B test (one version with a modification to improve performance and other without modification) for your website using Google Optimize and Google Analytics.</li><li>Review report for the client.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementing 2 A/B tests (one version with a modification to improve performance and other without modification) for your website using Google Optimize and Google Analytics.</li><li>Review report for the client.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([6]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementing 3  A/B tests (one version with a modification to improve performance and other without modification) for your website using Google Optimize and Google Analytics.</li><li>Review report for the client.</li></ul>"])
            })
        })
    }),
    disenoWeb: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Landing Page"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementation of a predesigned template for 1 page using CMS (Content Management System) like Wordpress or Wix, to drag and drop.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Sitio web de 5 secciones en base a plantilla prediseñada"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementation of a predesigned template for 5 pages using Wordpress. Includes any graphic needed. <a href='https://gaudirjohnson.com.ar/' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([50]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Website with a personalized design"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Different prototype designs using Figma (<a href='https://www.figma.com/file/UXhBSaXoO8LeMYrQgFYO9F/Burplaza?node-id=0%3A1' target='_blank' rel='noreferrer noopener'>Click here</a> for an example). Call with the client for revision and changes to the website in Wordpress. Up to 3 revisions by the client.</li></ul>"])
            }),
            ecommerce: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Ecommerce simple website with CMS, like WooCommerce, Tienda Nube or Shopify"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Uploading 15 products on the website.</li></ul>"])
            }),
            logoYMarca: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["Graphic Designer"]),
                skillsPrices: Object.freeze([skills.prices[5]]),
                name: Object.freeze("Logo design and Brand Identity"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Fonts, logo in different formats, color palette and concept. Up to 3 revisions. <a href='https://drive.google.com/file/d/1gyONia_qKjM6mqoJHe_AnGRGMPbicQnv/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Click here</a> for an example.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Plugin update, image and text content update, and bug fixes.</li></ul>"])
            })
        })
    }),
    emailMarketing: Object.freeze({
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([1, 0.5, 0.5]),
                deliversPerMonth: Object.freeze(1),
                skillsAcquired: Object.freeze(["Graphic Designer", "Content Writer", "UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[5], skills.prices[3], skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>1 graphic in a static format (JPG) or animated (GIF).</li></ul>", "<ul><li style='list-style: circle;'>Writing the content of the email.</li></ul>", "<ul><li style='list-style: circle;'>Implementation of texts and images in a predesigned template.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([2, 1, 1]),
                deliversPerMonth: Object.freeze(2),
                skillsAcquired: Object.freeze(["Graphic Designer", "Content Writer", "UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[5], skills.prices[3], skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>2 graphics in a static format (JPG) or animated (GIF).</li></ul>", "<ul><li style='list-style: circle;'>Writing the content of the email.</li></ul>", "<ul><li style='list-style: circle;'>Implementing texts and images in a predesigned template.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([4, 2, 2]),
                deliversPerMonth: Object.freeze(4),
                skillsAcquired: Object.freeze(["Graphic Designer", "Content Writer", "UX / UI Designer"]),
                skillsPrices: Object.freeze([skills.prices[5], skills.prices[3], skills.prices[4]]),
                content: Object.freeze(["<ul><li style='list-style: circle;'>2 graphics in a static format (JPG) or animated (GIF).</li></ul>", "<ul><li style='list-style: circle;'>Writing the content of the email.</li></ul>", "<ul><li style='list-style: circle;'>Implementing texts and images in a predesigned template.</li></ul>"])
            })
        })
    })
})

const qs = (text) => document.querySelector(text);
const qsa = (text) => document.querySelectorAll(text);

/*---Array de validación de las 3 etapas---*/
var completeFormValidate = [false, false];
var errorType = 0;

/*---Se capturan los checkboxes individualmente, de los servicios requeridos---*/
var googleSearchAds = qs('#google-search-ads');
var googleDisplayAds = qs('#google-display-ads');
var facebookAds = qs('#facebook-ads');
var communityManagement = qs('#communityManagement');
var seo = qs('#seo');
var conversionWeb = qs('#conversionWeb');
var disenoWeb = qs('#disenoWeb')
var email = qs('#email');
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
var communityManagementExtraContainer = qs('#community-management-extra-container');
var conversionWebExtraContainer = qs('#conversion-web-extra-container');
var seoExtraContainer = qs('#seo-extra-container');

/*--Se capturan los MONTOS de inversion introducidos---*/
var investmentGoogleSearchAdsAmmount = qs('#investment-google-search-ads-value');
var investmentGoogleDisplayAdsAmmount = qs('#investment-google-display-ads-value');
var investmentFacebookAdsAmmount = qs('#investment-facebook-ads-value');

/*---Se captura el bloque que pide cantidad de contactos EMAIL y el menu desplegable con valores---*/
var emailMarketingContainer = qs('#email-marketing-extra-container');
var emailAmmount = qs('#email-ammount');

var emailCustomerInput = null;
var mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/*---Se capturan los selectores de planes para cada servicio---*/
var googleSearchAdsPlan = qs('#google-search-ads-plan');
var googleDisplayAdsPlan = qs('#google-display-ads-plan');
var facebookAdsPlan = qs('#facebook-ads-plan');
var communityManagementPlan = qs('#community-management-plan');
var seoPlan = qs('#seo-plan');
var conversionWebPlan = qs('#conversion-web-plan');
var emailMarketingPlan = qs('#email-marketing-plan');

/*---Se capturan los detalles de cada plan para mostrar dinamicamente---*/
var googleSearchAdsPlanDetails = qs('#google-search-plan-details');
var googleDisplayAdsPlanDetails = qs('#google-display-plan-details');
var facebookAdsPlanDetails = qs('#facebook-ads-plan-details');
var communityManagementPlanDetails = qs('#community-management-plan-details');
var seoPlanDetails = qs('#seo-plan-details');
var conversionWebPlanDetails = qs('#conversion-web-plan-details');
var emailMarketingPlanDetails = qs('#email-marketing-plan-details');

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
var resultImplementationSeoContainer = qs('#result-implementation-seo-container');
var resultImplementationCommunityManagementContainer = qs('#result-implementation-communityManagement-container');
var resultImplementationGoogleSearchAdsContainer = qs('#result-implementation-googleSearchAds-container');
var resultImplementationGoogleDisplayAdsContainer = qs('#result-implementation-googleDisplayAds-container');
var resultImplementationFacebookAdsContainer = qs('#result-implementation-facebookAds-container');
var resultImplementationLandingPageContainer = qs('#result-implementation-landingPage-container');
var resultImplementationWordpressContainer = qs('#result-implementation-wordpress-container');
var resultImplementationCustomWebsiteContainer = qs('#result-implementation-customWebsite-container');
var resultImplementationEcommerceWebContainer = qs('#result-implementation-ecommerceWeb-container');
var resultImplementationLogoYMarcaContainer = qs('#result-implementation-logoYMarca-container');
/*--Se capturan los bloques que muestran RESULTADOS, los sub-cajones de implementación--*/
var resultMaintenanceEmailContainer = qs('#result-maintenance-email-container');
var resultMaintenanceConversionWebContainer = qs('#result-maintenance-conversionWeb-container');
var resultMaintenanceSeoContainer = qs('#result-maintenance-seo-container');
var resultMaintenanceCommunityManagementContainer = qs('#result-maintenance-communityManagement-container');
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
var titleImplementationSeo = qs('#title-implementation-seo');
var titleImplementationCommunityManagement = qs('#title-implementation-communityManagement');
var titleImplementationGoogleSearchAds = qs('#title-implementation-googleSearchAds');
var titleImplementationGoogleDisplayAds = qs('#title-implementation-googleDisplayAds');
var titleImplementationFacebookAds = qs('#title-implementation-facebookAds');
var titleImplementationLandingPage = qs('#title-implementation-landingPage');
var titleImplementationWordpress = qs('#title-implementation-wordpress');
var titleImplementationCustomWebsite = qs('#title-implementation-customWebsite');
var titleImplementationEcommerceWeb = qs('#title-implementation-ecommerceWeb');
var titleImplementationLogoYMarca = qs('#title-implementation-logoYMarca');
/*--Se capturan los TITULOS de los Sub-cajones de mantenimiento--*/
var titleMaintenanceEmail = qs('#title-maintenance-email');
var titleMaintenanceConversionWeb = qs('#title-maintenance-conversionWeb');
var titleMaintenanceSeo = qs('#title-maintenance-seo');
var titleMaintenanceCommunityManagement = qs('#title-maintenance-communityManagement');
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
var resultImplementationSeo = qs('#result-implementation-seo');
var resultImplementationCommunityManagement = qs('#result-implementation-communityManagement');
var resultImplementationGoogleSearchAds = qs('#result-implementation-googleSearchAds');
var resultImplementationGoogleDisplayAds = qs('#result-implementation-googleDisplayAds');
var resultImplementationFacebookAds = qs('#result-implementation-facebookAds');
var resultImplementationLandingPage = qs('#result-implementation-landingPage');
var resultImplementationWordpress = qs('#result-implementation-wordpress');
var resultImplementationCustomWebsite = qs('#result-implementation-customWebsite');
var resultImplementationEcommerceWeb = qs('#result-implementation-ecommerceWeb');
var resultImplementationLogoYMarca = qs('#result-implementation-logoYMarca');
/*--Se capturan los CONTENIDOS de los Sub-cajones de mantenimiento--*/
var resultMaintenanceEmail = qs('#result-maintenance-email');
var resultMaintenanceConversionWeb = qs('#result-maintenance-conversionWeb');
var resultMaintenanceSeo = qs('#result-maintenance-seo');
var resultMaintenanceCommunityManagement = qs('#result-maintenance-communityManagement');
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
if (countrySupplier.value != '') {
    completeFormValidate[0] = true;
}

countrySupplier.addEventListener('change', function () {

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
        if (checkboxesServicesValidate.slice(0, 7).includes(true) || checkboxesServicesValidate[12] === true) {

            completeFormValidate[1] = true;

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
                googleSearchAdsPlan.addEventListener('change', function () {
                    googleSearchAdsPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.googleSearchAds.implementation[googleSearchAdsPlan.value].hours.reduce((a, b) => a + b, 0)} hours of implementation (one time only)</li> <li>${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].hours.reduce((a, b) => a + b, 0)} hours of monthly maintenance</li>`;
                });
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
                googleDisplayAdsPlan.addEventListener('change', function () {
                    googleDisplayAdsPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].hours.reduce((a, b) => a + b, 0)} hours of implementation (one time only)</li> <li>${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hours of monthly maintenance</li>`;
                });
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
                facebookAdsPlan.addEventListener('change', function () {
                    facebookAdsPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.facebookAds.implementation[facebookAdsPlan.value].hours.reduce((a, b) => a + b, 0)} hours of implementation (one time only)</li> <li>${services.facebookAds.maintenance[facebookAdsPlan.value].hours.reduce((a, b) => a + b, 0)} hours of monthly maintenance</li>`;
                });
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
        /*--Muestra la selección de plan de Community Management--*/
        if (checkboxesServicesValidate[3]) {
            communityManagementExtraContainer.style.display = "block";
            communityManagementPlan.addEventListener('change', function () {
                communityManagementPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.communityManagement.implementation[communityManagementPlan.value].hours.reduce((a, b) => a + b, 0)} hours of implementation (one time only)</li> <li>${services.communityManagement.maintenance[communityManagementPlan.value].hours.reduce((a, b) => a + b, 0)} hours of monthly maintenance</li>`;
            });
        } else {
            communityManagementExtraContainer.style.display = "none"
        }
        /*--Muestra la selección de plan de SEO--*/
        if (checkboxesServicesValidate[4]) {
            seoExtraContainer.style.display = "block";
            seoPlan.addEventListener('change', function () {
                seoPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.seo.implementation[seoPlan.value].hours.reduce((a, b) => a + b, 0)} hours of implementation (one time only)</li> <li>${services.seo.maintenance[seoPlan.value].hours.reduce((a, b) => a + b, 0)} hours of monthly maintenance</li>`;
            });
        } else {
            seoExtraContainer.style.display = "none";
        }
        /*--Muestra la selección de plan de Optimización de conversion web--*/
        if (checkboxesServicesValidate[5]) {
            conversionWebExtraContainer.style.display = "block";
            conversionWebPlan.addEventListener('change', function () {
                if (conversionWebPlan.value == "basic" || conversionWebPlan.value == "advanced") {
                    conversionWebPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.conversionWeb.implementation[conversionWebPlan.value].hours.reduce((a, b) => a + b, 0)} hours of implementation (one time only)</li> <li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
                } else {
                    conversionWebPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours.reduce((a, b) => a + b, 0)} hours of monthly maintenance</li>`;
                }

            });
        } else {
            conversionWebExtraContainer.style.display = "none";
        }
    });
});

/*---Se piden cantidad de mails en caso de tildar "Email Marketing"---*/
email.addEventListener('change', function () {
    if (this.checked) {
        emailMarketingContainer.style.display = 'flex';
        emailMarketingPlan.addEventListener('change', function () {
            if (emailMarketingPlan.value == 'basic') {
                emailMarketingPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} email a month (${services.emailMarketing.maintenance[emailMarketingPlan.value].hours.reduce((a, b) => a + b, 0)} hours of maintenance)</li>`;
            } else {
                emailMarketingPlanDetails.innerHTML = `<u>Includes:</u> <li>${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} emails a month (${services.emailMarketing.maintenance[emailMarketingPlan.value].hours.reduce((a, b) => a + b, 0)} hours of maintenance)</li>`;
            }
        });
        if (emailAmmount.value == '') {
            completeFormValidate[2] = false;
        } else {
            completeFormValidate[2] = true;
        }
    } else {
        emailMarketingContainer.style.display = 'none';
        /*-Elimina la posicion 2 del array de validacion, correspondiente a la seleccion de cantidad de mails marketing-*/
        completeFormValidate.splice(2, 3)
    }
});
emailAmmount.addEventListener('change', function () {
    /*-Valida true / false la cantidad de mails en caso de estar seleccionados o no-*/
    if (this.value == '') {
        completeFormValidate[2] = false;
        this.classList.add('error-border');
    } else {
        completeFormValidate[2] = true;
        this.classList.remove('error-border');
        /*-Desctiva el mensaje de error tipo 5 seleccionar cantidad de contactos email marketing-*/
        if (errorType == 3) {
            errorMessages.innerHTML = '';
        }
    }
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
var countryAnnounce = qs('#country-announce');

/*---Se capturan los botones y lista para agregar países de anuncios dinamicamente---*/
var buttonAddCountryAnnounce = qs('#add-country-announce');
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

/*--Funcion que agrega paises a la lista al ser ejecutada (por boton "agregar pais" o al presionar enter)--*/
function addCountry() {
    /*--Se captura la opcion del país elegido, en caso de elegir se agrega, caso contrario alerta--*/
    var inputText = countryAnnounce.value;
    var countryNameOperate = qs(`#country-announce-list option[value="${inputText}"]`);

    /*--Si es nulo, se corrigen variaciones para que encuentre paises a pesar de las MAYUSCULAS/MINUSCULAS-*/
    if (countryNameOperate === null) {
        var wordsInput = inputText.split(' ');
        for (var i = 0; i < wordsInput.length; i++) {
            wordsInput[i] = wordsInput[i].charAt(0).toUpperCase() + wordsInput[i].substring(1).toLowerCase();
        }
        var inputMayus = wordsInput.join(' ');
        var countryNameOperate = qs(`#country-announce-list option[value="${inputMayus}"]`);

    }
    /*--Si sigue siendo nulo, luego de haberse corregido mayusculas/minusculas, se corrigen tambien TILDES--*/
    if (countryNameOperate === null) {
        /*--Se captura la lista de paises--*/
        var countriesList = qs('#country-announce-list');
        /*--Se buscan los valores para comparar, una vez normalizado el input texto de país. En caso que el pais tenga tilde, ya con las mayusculas corregidas--*/
        for (let i = 0; i < countriesList.options.length; i++) {
            if (countriesList.options[i].value.normalize("NFD").replace(/[\u0300-\u036f]/g, "") == inputMayus) {
                countryNameOperate = qs(`#country-announce-list option[value="${countriesList.options[i].value}"]`);
            }
        }
    }

    if (countryNameOperate !== null) {
        /*--Si el país no fue previamente seleccionado lo agrega--*/
        if (!selectedCountriesAnnounceDisplay.includes(countryNameOperate.value)) {
            selectedCountriesAnnounceDisplay.push(countryNameOperate.value);
            selectedCountriesAnnounceOperate.push(countryNameOperate.dataset.value);

            countryAnnounce.value = '';
            listSelectedCountriesAnnounce.innerHTML = '';
            countrySelectionErrors.innerHTML = '';
            for (let i = 0; i < selectedCountriesAnnounceDisplay.length; i++) {
                listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}      <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
            }

        }
        countryAnnounce.classList.add('error-border');
    } else {
        if (countryAnnounce.value == '') {
            if (selectedCountriesAnnounceOperate.length >= 1) {
                countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Select a country from the drop-down list and add it with the button "Add country"</em></p>';
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '';
                    countryAnnounce.value = '';
                }, 4500);
            } else {
                countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Select a country from the drop-down list and add it with the button "Add country"</em></p>';
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Add one or more countries to the list</em></p>';
                    countryAnnounce.value = '';
                }, 4500);
            }

        } else {
            if (selectedCountriesAnnounceOperate.length >= 1) {
                countrySelectionErrors.innerHTML = `<p class="error-messages"><em>The country\u00A0<strong>${countryAnnounce.value}</strong>\u00A0is not a valid option. Please select a country from the list.</em></p>`;
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '';
                    countryAnnounce.value = '';
                }, 3500);
            } else {
                countrySelectionErrors.innerHTML = `<p class="error-messages"><em>The country\u00A0<strong>${countryAnnounce.value}</strong>\u00A0is not a valid option. Please select a country from the list.</em></p>`;
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Add one or more countries to the list</em></p>';
                    countryAnnounce.value = '';
                }, 3500);
            }
        }
    }
    /*--Valida si hay países o no seleccionados, luego de agregar uno--*/
    if (selectedCountriesAnnounceOperate.length < 1) {
        completeFormValidate[4] = false;
        countryAnnounce.classList.add('error-border');
    } else {
        completeFormValidate[4] = true;
        countryAnnounce.classList.remove('error-border');
        /*-Desctiva el mensaje de error tipo 3 al agregar un país a la lista-*/
        if (errorType == 5) {
            errorMessages.innerHTML = '';
        }
    }
}

/*---Evento del botón para agregar paises donde se quiere anunciar---*/
buttonAddCountryAnnounce.addEventListener('click', function (event) {
    event.preventDefault();
    addCountry();
});
/*---Evento del input datalist para agregar pais al hacer enter---*/
countryAnnounce.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        addCountry();
    }
}, false);

/*---Evento control email custom p/ Perfit---*/
var optinCheck = qs('#optin-okXxFSTU');
optinCheck.addEventListener('change', (e) => {
    emailCustomerInput = qsa('#optin-okXxFSTU input')[1];
    if (emailCustomerInput.value.match(mailFormat)) {
        emailCustomerInput.classList.remove('error-border');

    } else {
        emailCustomerInput.classList.add('error-border');
    }
});
/*---Evento para eliminar el label externo al completarse el ingreso OK de mail Perfit---*/
optinCheck.addEventListener('click', () => {
    setTimeout(() => {
        if (qs('.p-success') !== null) {
            qs('.email-customer-container label').classList.add('animated-toggle-base');
            qs('.email-customer-container label').classList.add('animated-toggle-hide');
            if (errorType == 9) {
                errorMessages.innerHTML = '';
            }
        } else if (qs('.p-error-message') !== null) {
            if (errorType == 9) {
                errorMessages.innerHTML = '';
            }
        }
    }, 3000);
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
        disenoWebServicesContainer.childNodes[1].classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
wordpress.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.childNodes[1].classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
customWebsite.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.childNodes[1].classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
ecommerceWeb.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.childNodes[1].classList.remove('error-border');
        errorMessages.innerHTML = '';
    }
});
logoMarca.addEventListener('change', function () {
    if (this.checked) {
        disenoWebServicesContainer.childNodes[1].classList.remove('error-border');
        errorMessages.innerHTML = '';
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

    /*---Captura el input de email Optin---*/
    emailCustomerInput = qsa('#optin-okXxFSTU input')[1];

    /*---Se valida que esten todas las etapas seleccionadas, para mostrar los resultados u ocultarlos---*/
    if (completeFormValidate.includes(false) || qs('.p-success') == null) {

        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';

        if (completeFormValidate[1] == false) {
            errorMessages.innerHTML = 'You must select at least one service';
            errorType = 1;
        } else if (completeFormValidate[2] == false) {
            errorMessages.innerHTML = 'Select the number of contacts for Email Marketing';
            emailAmmount.classList.add('error-border');
            errorType = 3;
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
            }
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
            }

        } else if (qs('.p-success') == null) {
            if (qs('.p-error-message') != null) {

            } else {
                errorMessages.innerHTML = 'Please fill in your email address';
                emailCustomerInput.classList.add('error-border');
                errorType = 9;
            }

        }

    } else if (disenoWeb.checked && (!landingPage.checked && !wordpress.checked && !customWebsite.checked && !ecommerceWeb.checked && !logoMarca.checked)) {
        errorMessages.innerHTML = 'You must select a Web Design sub-service';
        disenoWebServicesContainer.childNodes[1].classList.add('error-border');
        if (qs('.p-success') == null) {
            emailCustomerInput.classList.add('error-border');
        }

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
            if (!email.checked) {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Google Ads';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Google Ads investment)';
            } else {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Google Ads + Email Marketing';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Google Ads investment + Email Marketing investment)';
            }

        } else if (!googleSearchAds.checked && !googleDisplayAds.checked && facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Facebook Ads';
            if (!email.checked) {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Facebook Ads';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Facebook Ads investment)';
            } else {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Facebook Ads + Email Marketing';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Facebook Ads investment + Email Marketing investment)';
            }

        } else if ((googleSearchAds.checked || googleDisplayAds.checked) && facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Google Ads + Facebook Ads';
            if (!email.checked) {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Google Ads + Facebook Ads';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Google Ads investment + Facebook Ads investment)';
            } else {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Google Ads + Facebook Ads + Email Marketing';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Google Ads investment + Facebook Ads investment + Email Marketing investment)';
            }
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

    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked || communityManagement.checked || seo.checked || conversionWeb.checked || email.checked || (disenoWeb.checked && (landingPage.checked || wordpress.checked || customWebsite.checked || ecommerceWeb.checked || logoMarca.checked))) && !completeFormValidate.includes(false)) {

        /*---Se muestran los resultados particulares de email marketing solamente si esta opcion fue seleccionada---*/
        if (email.checked) {
            /*--Se ocultan los fees de implementacion (por unica vez), ya que este plan no tiene---*/
            resultImplementationContainer.style.display = "none";
            /*--Se establece el titulo "costo total de inversion" con Email Marketing en caso que no se hayan seleccionado otras inversiones-*/
            if (!googleSearchAds.checked && !googleDisplayAds.checked && !facebookAds.checked) {
                resultsInvestmentsSelectedInTitle.innerHTML = 'Email Marketing';
                resultsTotalSelectedInTitle.innerHTML = '(Maintenance service fee + Email Marketing investment)';
            }
            /*--Muestra el valor correspondiente a la cantidad de contactos seleccionados---*/
            totalInvestmentMonthly += Number(emailAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Email Marketing</strong> USD ${emailAmmount.value} of monthly investment <small>(Campaing for ${emailAmmount.options[emailAmmount.selectedIndex].text} contacts)</small></li>`;

            maintenanceContent = '';
            emailMarketingValueToPush = 0;
            services.emailMarketing.maintenance[emailMarketingPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        emailMarketingValueToPush += services.emailMarketing.maintenance[emailMarketingPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.emailMarketing.maintenance[emailMarketingPlan.value].hours[i]} hours of work from a ${services.emailMarketing.maintenance[emailMarketingPlan.value].skillsAcquired[i]} with a USD $${services.emailMarketing.maintenance[emailMarketingPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.emailMarketing.maintenance[emailMarketingPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de email marketing, inyectando titulo y contenido--*/
            resultMaintenanceEmailContainer.style.display = "block";
            titleMaintenanceEmail.innerHTML = `<u><strong>Email Marketing </strong> (Plan ${emailMarketingPlan.options[emailMarketingPlan.selectedIndex].text} - ${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} ${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth <= 1 ? 'monthly delivery' : 'monthly deliveries'}) :</u> USD ${emailMarketingValueToPush}`;
            resultMaintenanceEmail.innerHTML += `${maintenanceContent}`;

            agencyMonthlyFeeValue += emailMarketingValueToPush;

        } else {
            resultMaintenanceEmailContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de conversion web solamente si esta opcion fue seleccionada---*/
        if (conversionWeb.checked) {
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var conversionWebManteinanceValue = 0;
            services.conversionWeb.maintenance[conversionWebPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        conversionWebManteinanceValue += services.conversionWeb.maintenance[conversionWebPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours[i]} hours of work from a ${services.conversionWeb.maintenance[conversionWebPlan.value].skillsAcquired[i]} with a USD $${services.conversionWeb.maintenance[conversionWebPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.conversionWeb.maintenance[conversionWebPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceConversionWebContainer.style.display = "block";
            titleMaintenanceConversionWeb.innerHTML = `<u><strong>Conversion Rate Optimization</strong> (${conversionWebPlan.options[conversionWebPlan.selectedIndex].text}) plan:</u> USD ${conversionWebManteinanceValue}`;
            resultMaintenanceConversionWeb.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += conversionWebManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var conversionWebImplementationValue = 0;
            if (conversionWebPlan.value == 'basic' || conversionWebPlan.value == 'advanced') {
                resultImplementationContainer.style.display = "block";

                services.conversionWeb.implementation[conversionWebPlan.value].skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            conversionWebImplementationValue += services.conversionWeb.implementation[conversionWebPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.conversionWeb.implementation[conversionWebPlan.value].hours[i]} hours of work from a ${services.conversionWeb.implementation[conversionWebPlan.value].skillsAcquired[i]} with a USD $${services.conversionWeb.implementation[conversionWebPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.conversionWeb.implementation[conversionWebPlan.value].content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationConversionWebContainer.style.display = "block";
                titleImplementationConversionWeb.innerHTML = `<u><strong>Conversion Rate Optimization </strong> (${conversionWebPlan.options[conversionWebPlan.selectedIndex].text} plan) :</u> USD ${conversionWebImplementationValue}`;
                resultImplementationConversionWeb.innerHTML = `${implementationContent}`;

                agencyOnceFeeValue += conversionWebImplementationValue;

            } else {
                resultImplementationContainer.style.display = "none";
                resultImplementationConversionWebContainer.style.display = "none";
            }

        } else {
            resultMaintenanceConversionWebContainer.style.display = "none";
            resultImplementationConversionWebContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de SEO solamente si esta opcion fue seleccionada---*/
        if (seo.checked) {
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultImplementationContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var seoManteinanceValue = 0;
            services.seo.maintenance[seoPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        seoManteinanceValue += services.seo.maintenance[seoPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.seo.maintenance[seoPlan.value].hours[i]} hours of work from a ${services.seo.maintenance[seoPlan.value].skillsAcquired[i]} with a USD $${services.seo.maintenance[seoPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.seo.maintenance[seoPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de SEO, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceSeoContainer.style.display = "block";
            titleMaintenanceSeo.innerHTML = `<u><strong>Search Engine Optimization </strong> (${seoPlan.options[seoPlan.selectedIndex].text} plan) :</u> USD ${seoManteinanceValue}`;
            resultMaintenanceSeo.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += seoManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var seoImplementationValue = 0;
            services.seo.implementation[seoPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        seoImplementationValue += services.seo.implementation[seoPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.seo.implementation[seoPlan.value].hours[i]} hours of work from a ${services.seo.implementation[seoPlan.value].skillsAcquired[i]} with a USD $${services.seo.implementation[seoPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.seo.implementation[seoPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de SEO, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationSeoContainer.style.display = "block";
            titleImplementationSeo.innerHTML = `<u><strong>SEO </strong> (Plan ${seoPlan.options[seoPlan.selectedIndex].text}) :</u> USD ${seoImplementationValue}`;
            resultImplementationSeo.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += seoImplementationValue;

        } else {
            resultMaintenanceSeoContainer.style.display = "none";
            resultImplementationSeoContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de Community Management solamente si esta opcion fue seleccionada---*/
        if (communityManagement.checked) {
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultImplementationContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var communityManagementManteinanceValue = 0;
            services.communityManagement.maintenance[communityManagementPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        communityManagementManteinanceValue += services.communityManagement.maintenance[communityManagementPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.communityManagement.maintenance[communityManagementPlan.value].hours[i]} hours of work from a ${services.communityManagement.maintenance[communityManagementPlan.value].skillsAcquired[i]} with a USD $${services.communityManagement.maintenance[communityManagementPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.communityManagement.maintenance[communityManagementPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Community Management, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceCommunityManagementContainer.style.display = "block";
            titleMaintenanceCommunityManagement.innerHTML = `<u><strong>Community Management </strong> (${communityManagementPlan.options[communityManagementPlan.selectedIndex].text} plan) :</u> USD ${communityManagementManteinanceValue}`;
            resultMaintenanceCommunityManagement.innerHTML = ` ${maintenanceContent}`;

            agencyMonthlyFeeValue += communityManagementManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var communityManagementImplementationValue = 0;
            services.communityManagement.implementation[communityManagementPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        communityManagementImplementationValue += services.communityManagement.implementation[communityManagementPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.communityManagement.implementation[communityManagementPlan.value].hours[i]} hours of work from a ${services.communityManagement.implementation[communityManagementPlan.value].skillsAcquired[i]} with a USD $${services.communityManagement.implementation[communityManagementPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.communityManagement.implementation[communityManagementPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Community Management, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationCommunityManagementContainer.style.display = "block";
            titleImplementationCommunityManagement.innerHTML = `<u><strong>Community Management </strong> (${communityManagementPlan.options[communityManagementPlan.selectedIndex].text} plan) :</u> USD ${communityManagementImplementationValue}`;
            resultImplementationCommunityManagement.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += communityManagementImplementationValue;

        } else {
            resultMaintenanceCommunityManagementContainer.style.display = "none";
            resultImplementationCommunityManagementContainer.style.display = "none";
        }
        /*---Se muestran los resultados particulares de Google Search Ads solamente si esta opcion fue seleccionada---*/
        if (googleSearchAds.checked) {
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultImplementationContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            var googleSearchAdsManteinanceValue = 0;
            services.googleSearchAds.maintenance[googleSearchAdsPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        googleSearchAdsManteinanceValue += services.googleSearchAds.maintenance[googleSearchAdsPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].hours[i]} hours of work from a ${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].skillsAcquired[i]} with a USD $${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleSearchAdsContainer.style.display = "block";
            titleMaintenanceGoogleSearchAds.innerHTML = `<u><strong>Google Ads Search Network </strong> (${googleSearchAdsPlan.options[googleSearchAdsPlan.selectedIndex].text} plan) :</u> USD ${googleSearchAdsManteinanceValue}`;
            resultMaintenanceGoogleSearchAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += googleSearchAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var googleSearchAdsImplementationValue = 0;
            services.googleSearchAds.implementation[googleSearchAdsPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        googleSearchAdsImplementationValue += services.googleSearchAds.implementation[googleSearchAdsPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.googleSearchAds.implementation[googleSearchAdsPlan.value].hours[i]} hours of work from a ${services.googleSearchAds.implementation[googleSearchAdsPlan.value].skillsAcquired[i]} with a USD $${services.googleSearchAds.implementation[googleSearchAdsPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.googleSearchAds.implementation[googleSearchAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleSearchAdsContainer.style.display = "block";
            titleImplementationGoogleSearchAds.innerHTML = `<u><strong>Google Ads Search Network </strong> (${googleSearchAdsPlan.options[googleSearchAdsPlan.selectedIndex].text} plan) :</u> USD ${googleSearchAdsImplementationValue}`;
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
            services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        googleDisplayAdsManteinanceValue += services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].hours[i]} hours of work from a ${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].skillsAcquired[i]} with a USD $${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleDisplayAdsContainer.style.display = "block";
            titleMaintenanceGoogleDisplayAds.innerHTML = `<u><strong>Google Display Ads </strong> (${googleDisplayAdsPlan.options[googleDisplayAdsPlan.selectedIndex].text} plan) :</u> USD ${googleDisplayAdsManteinanceValue}`;
            resultMaintenanceGoogleDisplayAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += googleDisplayAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var googleDisplayAdsImplementationValue = 0;
            services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        googleDisplayAdsImplementationValue += services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].hours[i]} hours of work from a ${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].skillsAcquired[i]} with a USD $${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleDisplayAdsContainer.style.display = "block";
            titleImplementationGoogleDisplayAds.innerHTML = `<u><strong>Google Display Ads </strong> (${googleDisplayAdsPlan.options[googleDisplayAdsPlan.selectedIndex].text} plan) :</u> USD ${googleDisplayAdsImplementationValue}`;
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
            services.facebookAds.maintenance[facebookAdsPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        facebookAdsManteinanceValue += services.facebookAds.maintenance[facebookAdsPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.facebookAds.maintenance[facebookAdsPlan.value].hours[i]} hours of work from a ${services.facebookAds.maintenance[facebookAdsPlan.value].skillsAcquired[i]} with a USD $${services.facebookAds.maintenance[facebookAdsPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.facebookAds.maintenance[facebookAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceFacebookAdsContainer.style.display = "block";
            titleMaintenanceFacebookAds.innerHTML = `<u><strong>Facebook Ads </strong> (${facebookAdsPlan.options[facebookAdsPlan.selectedIndex].text} plan) :</u> USD ${facebookAdsManteinanceValue}`;
            resultMaintenanceFacebookAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += facebookAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var facebookAdsImplementationValue = 0;
            services.facebookAds.implementation[facebookAdsPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        facebookAdsImplementationValue += services.facebookAds.implementation[facebookAdsPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.facebookAds.implementation[facebookAdsPlan.value].hours[i]} hours of work from a ${services.facebookAds.implementation[facebookAdsPlan.value].skillsAcquired[i]} with a USD $${services.facebookAds.implementation[facebookAdsPlan.value].skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.facebookAds.implementation[facebookAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationFacebookAdsContainer.style.display = "block";
            titleImplementationFacebookAds.innerHTML = `<u><strong>Facebook Ads </strong> (${facebookAdsPlan.options[facebookAdsPlan.selectedIndex].text} plan) :</u> USD ${facebookAdsImplementationValue}`;
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
                services.disenoWeb.maintenance.basic.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            landingPageManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLandingPageContainer.style.display = "block";
                titleMaintenanceLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong> (Basic manteinance plan) :</u> USD ${landingPageManteinanceValue}`;
                resultMaintenanceLandingPage.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += landingPageManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var landingPageImplementationValue = 0;
                services.disenoWeb.implementation.basic.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            landingPageImplementationValue += services.disenoWeb.implementation.basic.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.basic.hours[i]} hours of work from a ${services.disenoWeb.implementation.basic.skillsAcquired[i]} with a USD $${services.disenoWeb.implementation.basic.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.implementation.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLandingPageContainer.style.display = "block";
                titleImplementationLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong> (Basic plan) :</u> USD ${landingPageImplementationValue}`;
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
                services.disenoWeb.maintenance.basic.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            wordpressManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceWordpressContainer.style.display = "block";
                titleMaintenanceWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong> (Basic manteinance plan) :</u> USD ${wordpressManteinanceValue}`;
                resultMaintenanceWordpress.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += wordpressManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var wordpressImplementationValue = 0;
                services.disenoWeb.implementation.intermediate.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            wordpressImplementationValue += services.disenoWeb.implementation.intermediate.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.intermediate.hours[i]} hours of work from a ${services.disenoWeb.implementation.intermediate.skillsAcquired[i]} with a USD $${services.disenoWeb.implementation.intermediate.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.implementation.intermediate.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationWordpressContainer.style.display = "block";
                titleImplementationWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong> (Standard plan) :</u> USD ${wordpressImplementationValue}`;
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
                services.disenoWeb.maintenance.basic.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            customWebsiteManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceCustomWebsiteContainer.style.display = "block";
                titleMaintenanceCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong> (Basic manteinance plan) :</u> USD ${customWebsiteManteinanceValue}`;
                resultMaintenanceCustomWebsite.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += customWebsiteManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var customWebsiteImplementationValue = 0;
                services.disenoWeb.implementation.advanced.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            customWebsiteImplementationValue += services.disenoWeb.implementation.advanced.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.advanced.hours[i]} hours of work from a ${services.disenoWeb.implementation.advanced.skillsAcquired[i]} with a USD $${services.disenoWeb.implementation.advanced.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.implementation.advanced.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationCustomWebsiteContainer.style.display = "block";
                titleImplementationCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong> (Premium plan) :</u> USD ${customWebsiteImplementationValue}`;
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
                services.disenoWeb.maintenance.basic.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            ecommerceWebManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceEcommerceWebContainer.style.display = "block";
                titleMaintenanceEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong> (Basic manteinance plan) :</u> USD ${ecommerceWebManteinanceValue}`;
                resultMaintenanceEcommerceWeb.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += ecommerceWebManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var ecommerceWebImplementationValue = 0;
                services.disenoWeb.implementation.ecommerce.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            ecommerceWebImplementationValue += services.disenoWeb.implementation.ecommerce.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.ecommerce.hours[i]} hours of work from a ${services.disenoWeb.implementation.ecommerce.skillsAcquired[i]} with a USD $${services.disenoWeb.implementation.ecommerce.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.implementation.ecommerce.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationEcommerceWebContainer.style.display = "block";
                titleImplementationEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong> :</u> USD ${ecommerceWebImplementationValue}`;
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
                services.disenoWeb.maintenance.basic.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            logoMarcaManteinanceValue += services.disenoWeb.maintenance.basic.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} hours of work from a ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} with a USD $${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLogoYMarcaContainer.style.display = "block";
                titleMaintenanceLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong> (Basic manteinance plan) :</u> USD ${logoMarcaManteinanceValue}`;
                resultMaintenanceLogoYMarca.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += logoMarcaManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var logoMarcaImplementationValue = 0;
                services.disenoWeb.implementation.logoYMarca.skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            logoMarcaImplementationValue += services.disenoWeb.implementation.logoYMarca.hours[i] * skills.prices[j][countrySupplier.value];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.logoYMarca.hours[i]} hours of work from a ${services.disenoWeb.implementation.logoYMarca.skillsAcquired[i]} a ${services.disenoWeb.implementation.logoYMarca.skillsPrices[i][countrySupplier.value]} hourly rate, to do the following:</li> ${services.disenoWeb.implementation.logoYMarca.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLogoYMarcaContainer.style.display = "block";
                titleImplementationLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong> :</u> USD ${logoMarcaImplementationValue}`;
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
        if (!email.checked && !googleSearchAds.checked && !googleDisplayAds.checked && !facebookAds.checked) {
            resultInvestmentsMonthlyDetail.innerHTML = "<li style='list-style: circle;'>You have not selected any investment in digital media. <small>(e.g.: Google Ads Search Network, Google Ads Display Network, Facebook Ads or Email Marketing)</small></li>";
        }
        /*---Se destaca la implementación en el cajon final, si SOLO se seleccionaron servicios "Diseño Web"---*/
        if (disenoWeb.checked && (!googleSearchAds.checked && !googleDisplayAds.checked && !facebookAds.checked && !communityManagement.checked && !seo.checked && !conversionWeb.checked && !email.checked)) {
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
        resultImplementationFee.innerHTML = `USD ${agencyOnceFeeValue}`;
        resultMaintenanceFee.innerHTML = `USD ${agencyMonthlyFeeValue}`;
        resultInvestmentsMonthly.innerHTML = ` USD ${totalInvestmentMonthly}`;
        resultMonthlyTotal.innerHTML = `USD ${totalInvestmentMonthly + agencyMonthlyFeeValue}`;

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
qs('#what-does-tab').addEventListener('click', () => {
    setTimeout(() => {
        qs('#what-does').scrollIntoView(true);
    }, 250);
});
qs('#info-tab').addEventListener('click', () => {
    setTimeout(() => {
        qs('#info').scrollIntoView(true);
    }, 250);
});
qs('#statistics-tab').addEventListener('click', () => {
    setTimeout(() => {
        qs('#statistics').scrollIntoView(true);
    }, 250);
});