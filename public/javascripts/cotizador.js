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
    names: Object.freeze(["Analista de Marketing Digital", "Analista SEO", "Community Manager", "Redactor", "Diseñador Web UX / UI", "Diseñador Gráfico", "Programador", "Editor de video"]),
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
                hours: Object.freeze([3]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Google Ads.</li><li>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li>Creación de una campaña con 1 solo anuncio genérico para todas las búsquedas (<a href='https://drive.google.com/file/d/1EvPmLzeFRtriTdwfgtxOTTquk9lGSKIb/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li>Creación de extensiones para las campañas (Link con la dirección de tu negocio y link para que te llamen por celular).</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([6]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Google Ads.</li><li>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li>Creación de extensiones para las campañas (Link con la dirección de tu negocio y link para que te llamen por celular).</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de diferentes campañas (Hasta 5) según tipos de búsquedas o ubicación geográfica, para concentrar la inversión en las campañas que más conversiones generen y a un costo más bajo.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de estructura de campaña que permita organizar las búsquedas en grupos, y poder hacer hasta 10 anuncios específicos para cada grupo de búsquedas. Se buscará que el texto de los anuncios sea lo más relevante posible a las búsquedas, para generar más clics a tu sitio web. (<a href='https://drive.google.com/file/d/1GXvFiktXQRjPjhB0rgpT0QZcOud83kDu/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([12]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Google Ads.</li><li>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li>Creación de extensiones para las campañas (Link con la dirección de tu negocio y link para que te llamen por celular).</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de diferentes campañas (Hasta 10) según tipos de búsquedas, para concentrar la inversión en las campañas que más conversiones generen y a un costo más bajo.</li><li>Creación de estructura de campaña que permita organizar las búsquedas en grupos, y poder hacer hasta 20 anuncios específicos para cada grupo de búsquedas (<a href='https://drive.google.com/file/d/1anPLmkM4xNm2XXzLLY_owOWoVBaQ8cJI/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés, podés ver más sobre las concordancias en el siguiente <a href='https://digitalnow.com.ar/google-ads-como-funciona-y-para-que-sirve/' target='_blank'>link</a>). A fin de mes el cliente puede ver un análisis sobre cómo impactó ese cambio.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 2 cambios por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés, podés ver más sobre las concordancias en el siguiente <a href='https://digitalnow.com.ar/google-ads-como-funciona-y-para-que-sirve/' target='_blank'>link</a>). Cada 15 días el cliente puede ver un análisis sobre cómo impactaron los cambios.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 4 cambios por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés, podés ver más sobre las concordancias en el siguiente <a href='https://digitalnow.com.ar/google-ads-como-funciona-y-para-que-sirve/' target='_blank'>link</a>). Semanalmente el cliente puede ver un análisis sobre cómo impactaron los cambios.</li></ul>"])
            })
        })
    }),
    googleDisplayAds: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([1, 2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Google Ads.</li><li>Creación de 1 campaña de remarketing (Mostrarle anuncios en sitios web a usuarios que ya entraron a tu sitio web en los últimos 30 días). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formato cuadrado y horizontal para anuncios responsivos (mezcla de imagen y texto).</li><li><a href='https://drive.google.com/drive/folders/15wF9BY4RxRrQ-vEchJDP4V17rw6hp503?usp=sharing' target='_blank'>Ver suma de piezas creativas</a></li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([2, 2, 2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Google Ads.</li><li>Creación de 1 campaña de remarketing (Mostrarle anuncios en sitios web a usuarios que ya entraron a tu sitio web en los últimos 30 días). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/f6da5210-ceff-411f-a088-28943fb6b9d6/page/s16BB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de hasta 5 campañas segmentadas por intereses de los usuarios y temas de sitios web, para distribuir el presupuesto según la que genere más conversiones.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formato cuadrado y horizontal para anuncios responsivos (mezcla de imagen y texto).</li></ul>", "<ul><li>Creación de video de 30 segundos en formato apaisado que se muestra en sitios web como anuncio (<a href='https://drive.google.com/file/d/1il1GW3U0HTOIy76mtOSmEEwNYXda6_CL/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li><a href='https://drive.google.com/drive/folders/131EO5sr8BXx1si4fRHetLhPWHeNHaZI4?usp=sharing' target='_blank'>Ver ejemplo de piezas creativas que se entregan</a></li></ul>"])
            }),
            advanced: {
                hours: Object.freeze([2, 6, 4]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Google Ads.</li><li>Creación de 1 campaña de remarketing (Mostrarle anuncios en sitios web a usuarios que ya entraron a tu sitio web en los últimos 30 días). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/f6da5210-ceff-411f-a088-28943fb6b9d6/page/s16BB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de hasta 5 campañas segmentadas por intereses de los usuarios y temas de sitios web, para distribuir el presupuesto según la que genere más conversiones.</li></ul>", "<ul><li>Creación de 3 piezas gráficas en formatos cuadrado y horizontal (6 en total) para anuncios responsivos (mezcla de imagen y texto).</li></ul>", "<ul><li>Creación de 2 videos de 30 segundos en formato apaisado y 1 video en formato vertical (Readaptación) que se muestra en sitios web como anuncio (<a href='https://drive.google.com/file/d/1il1GW3U0HTOIy76mtOSmEEwNYXda6_CL/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>"])
            }
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([2, 2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formatos cuadrado y horizontal.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: [4, 2, 2],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 2 cambios por mes (Uno cada 15 días) para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas. Después de 15 días el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formatos cuadrado y horizontal.</li></ul>", "<ul><li>Creación de 1 video en formato apaisado.</li></ul>"]
            })
        })
    }),
    facebookAds: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2, 2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Facebook Ads.</li><li>Implementación de pixel de facebook para usar públicos como usuarios que ya entraron a tu sitio web o usuarios similares a los ya entraron a tu sitio web.</li><li>Creación de estructura de campaña para invertir un 70% en usuarios nuevos (No entraron a tu sitio ni a tus redes sociales) y un 30% en usuarios que ya entraron a tu sitio web o ya interactuaron con tus redes sociales.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formatos cuadrado (Para feed) y vertical (Para stories) y de un anuncio de texto.</li><li><a href='https://drive.google.com/drive/folders/1zgJiT2dnypW3kAKUDmWyuyEN7zp8KZ47?usp=sharing' target='_blank'>Ver ejemplo de entregables</a></li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([6, 4]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Facebook Ads.</li><li>Implementación de pixel de facebook para usar públicos como usuarios que ya entraron a tu sitio web o usuarios similares a los ya entraron a tu sitio web.</li><li>Creación de estructura de campaña para invertir un 70% en usuarios nuevos (No entraron a tu sitio ni a tus redes sociales) y un 30% en usuarios que ya entraron a tu sitio web o ya interactuaron con tus redes sociales.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0BzjchXrR5ZQca013LXdWZzQ4cEU/page/UwsTB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Medición de conversiones (Acciones que querés que el usuario haga en tu sitio web, como una compra online o completar un formulario).</li><li>Redacción de textos diferentes de manera estratégica (10 textos en total) teniendo en cuenta si los usuarios ya entraron a la web o no.</li></ul>", "<ul><li>Se harán piezas creativas diferentes (2 sets de piezas gráficas en formatos cuadrado y vertical, 4 en total), teniendo en cuenta si los usuarios ya entraron a la web o no.</li><li><a href='https://drive.google.com/drive/folders/14atx8oJwDeypPzA49ISyET6KsONJZfPk?usp=sharing' target='_blank'>Ver ejemplos de entregables</a></li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([6, 12, 10, 4]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de Video", "Redactor"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7], skills.prices[3]]),
                content: Object.freeze(["<ul><li>Creación de cuenta de Facebook Ads.</li><li>Implementación de pixel de facebook para usar públicos como usuarios que ya entraron a tu sitio web o usuarios similares a los ya entraron a tu sitio web.</li><li>Creación de estructura de campaña para invertir un 70% en usuarios nuevos (No entraron a tu sitio ni a tus redes sociales) y un 30% en usuarios que ya entraron a tu sitio web o ya interactuaron con tus redes sociales.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0BzjchXrR5ZQca013LXdWZzQ4cEU/page/UwsTB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Medición de conversiones (Acciones que querés que el usuario haga en tu sitio web, como una compra online o completar un formulario).</li><li>Creación de público personalizado en base a lista e-mails, y uso de la herramienta audience insights para determinar características del público.</li><li>Creación de 3 buyer personas, y análisis en profundidad de características del público (Edad, sexo, zona geográfica y motivaciones). Podés ver un ejemplo de la plantilla que se utilizará en el siguiente <a href='https://drive.google.com/file/d/1r3oC6PDOhql0txR6MVsnt4qqz1bPrnpw/view?usp=sharing' target='_blank'>link</a></li><li>Se estructurarán las campañas usando diferentes públicos y conjuntos de anuncios según buyer personas, pero priorizando que los conjuntos de anuncios lleguen a 50 conversiones por semana, para que la plataforma los pueda optimizar de manera efectiva.</li></ul>", "<ul><li>Se harán 12 piezas gráficas diferentes, teniendo en cuenta las características del buyer persona, si ya entró al sitio web o no, y cada una con una variante en formato cuadrado (feed) y vertical (Stories)</li><li><a href='https://drive.google.com/drive/folders/1faD8HMt_eaqTpa-KhQu0SDiTDnU9b9Ui?usp=sharing' target='_blank'>Ver ejemplo de entregables</a></li></ul>", "<ul><li>Se harán 12 videos diferentes, teniendo en cuenta las características del buyer persona, si ya entró al sitio web o no, y cada una con una variante en formato 4:5 (feed) y vertical (Stories).</li><li><a href='https://drive.google.com/drive/folders/1faD8HMt_eaqTpa-KhQu0SDiTDnU9b9Ui?usp=sharing'>Ver ejemplo de entregables</a></li></ul>", "<ul><li>Redacción de 30 textos para anuncios en el feed de Instagram, 6 textos para anuncios de videos y 6 textos para anuncios de imagen.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
                skillsPrices: Object.freeze([skills.prices[0]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([2, 2]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de pieza gráfica en formato cuadrado y vertical.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([4, 3, 1]),
                skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"]),
                skillsPrices: Object.freeze([skills.prices[0], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 2 cambios por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas. Cada 15 días el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de 3 piezas gráficas en formatos cuadrado y vertical.</li></ul>", "<ul><li>Creación de video de menos de 15 seg  en formato vertical (Adaptable a 4:5)</li></ul>"])
            })
        })
    }),
    communityManagement: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Community Manager"]),
                skillsPrices: Object.freeze([skills.prices[2]]),
                content: Object.freeze(["<ul><li>Análisis de competidores y sugerencia de ideas. Se entrega un Google Doc con capturas de imagen de 400 palabras</li><li>1 Call con el cliente de intercambio de opiniones.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Community Manager"]),
                skillsPrices: Object.freeze([skills.prices[2]]),
                content: Object.freeze(["<ul><li>Análisis de competidores y sugerencia de ideas. Se entregan 2 Google Doc con capturas de imagen de 400 palabras y se hacen 2 calls de revisión.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["Community Manager"]),
                skillsPrices: Object.freeze([skills.prices[2]]),
                content: Object.freeze(["<ul><li>Análisis de competidores y sugerencia de ideas. Se entregan 3 Google Doc con capturas de imagen de 400 palabras y se hacen 3 calls de revisión.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([7, 1]),
                skillsAcquired: Object.freeze(["Community Manager", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[2], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Creación de calendario de 12 publicaciones (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank'>Ver ejemplo</a>), 12 redacciones para feed y publicación de contenido en 1 red social (Si es Instagram, se puede publicar en Instagram y Facebook). Se publicará contenido provisto por el cliente (Fotos, videos), o contenido de Internet con pequeños retoques. Todo el contenido del feed (12 publicaciones) se republicará también en stories con un link que redirecciona al feed. Incluye gestión de la cuenta (Responder comentarios en publicaciones e interactuar con perfiles que interactúan con publicaciones de la competencia).</li></ul>", "<ul><li>Retoques a contenido provisto por el cliente o sacado de internet.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([8, 10, 2]),
                skillsAcquired: Object.freeze(["Community Manager", "Diseñador Gráfico", "Editor de video"]),
                skillsPrices: Object.freeze([skills.prices[2], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li>Creación de calendario de 12 publicaciones (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank'>Ver ejemplo</a>), 12 redacciones para feed y publicación de contenido en 1 red social (Si es Instagram, se puede publicar en Instagram y Facebook). Todo el contenido del feed (12 publicaciones) se republicará también en stories con un link que redirecciona al feed. Incluye gestión de la cuenta (Responder comentarios en publicaciones e interactuar con perfiles que interactúan con publicaciones de la competencia).</li></ul>", "<ul><li>Creación de 10 piezas gráficas individuales</li></ul>", "<ul><li>Dos videos en formato vertical para reels (Menos de 30 segundos)</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([10, 27, 3]),
                skillsAcquired: Object.freeze(["Community Manager", "Diseñador Gráfico", "Editor de video"]),
                skillsPrices: Object.freeze([skills.prices[2], skills.prices[5], skills.prices[7]]),
                content: Object.freeze(["<ul><li>Creación de calendario de 12 publicaciones (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank'>Ver ejemplo</a>), 12 redacciones para feed y publicación de contenido en 1 red social (Si es Instagram, se puede publicar en Instagram y Facebook). Todo el contenido del feed (12 publicaciones) se republicará también en stories con un link que redirecciona al feed y también se publicarán 8 historias adicionales (Encuestas, cuestionarios y piezas gráficas simples). Incluye gestión de la cuenta (Responder comentarios en publicaciones e interactuar con perfiles que interactúan con publicaciones de la competencia).</li></ul>", "<ul><li>Creación de 10 piezas gráficas individuales para feed y 4 piezas gráficas simples para stories.</li><li>Creación de 4 carrousels (Entre 5 y 10 piezas gráficas cada uno)</li></ul>", "<ul><li>Dos videos en formato vertical para reels (Menos de 30 segundos)</li><li>1 video de plantilla para encuestas y cuestionarios en stories</li></ul>"])
            })
        })
    }),
    seo: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Analista SEO"]),
                skillsPrices: Object.freeze([skills.prices[1]]),
                content: Object.freeze(["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Auditoría técnica general de sitio web usando <a href='https://neilpatel.com/ubersuggest/' target='_blank'>Ubersuggest</a>, que es una herramienta de Neil Patel que analiza hasta 132 aspectos técnicos de tu sitio web como por ejemplo, la velocidad de carga, cantidad de palabras de páginas y cantidad de palabras dentro de etiquetas title. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank'>Ver ejemplo de auditoría</a></li><li>Implementación de cambios para mejorar la performance según la auditoría técnica.</li><li>Cambio de contenido en etiquetas &lt;title&gt;, &lt;h1&gt; y texto de tu homepage para posicionarte en búsquedas de google de manera estratégica en base al análisis de palabras clave.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([8]),
                skillsAcquired: Object.freeze(["Analista SEO"]),
                skillsPrices: Object.freeze([skills.prices[1]]),
                content: Object.freeze(["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Auditoría técnica general de sitio web usando <a href='https://neilpatel.com/ubersuggest/' target='_blank'>Ubersuggest</a>, que es una herramienta de Neil Patel que analiza hasta 132 aspectos técnicos de tu sitio web como por ejemplo, la velocidad de carga, cantidad de palabras de páginas y cantidad de palabras dentro de etiquetas title. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank'>Ver ejemplo de auditoría</a></li><li>Cambio de contenido en etiquetas &lt;title&gt;, &lt;h1&gt; y texto de tu homepage en hasta 10 páginas de tu sitio web.</li><li>Optimización de alt de imágenes.</li><li>Análisis de palabras clave y secciones web de la competencia que más tráfico generen para copiar lo que funciona (3 competidores)</li><li>Solución de problemas detectados en la auditoría de Ubersuggest de hasta 5 páginas de tu sitio web.</li><ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([16]),
                skillsAcquired: Object.freeze(["Analista SEO"]),
                skillsPrices: Object.freeze([skills.prices[1]]),
                content: Object.freeze(["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Auditoría técnica general de sitio web usando <a href='https://neilpatel.com/ubersuggest/' target='_blank'>Ubersuggest</a>, que es una herramienta de Neil Patel que analiza hasta 132 aspectos técnicos de tu sitio web como por ejemplo, la velocidad de carga, cantidad de palabras de páginas y cantidad de palabras dentro de etiquetas title. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank'>Ver ejemplo de auditoría</a></li><li>Cambio de contenido en etiquetas &lt;title&gt;, &lt;h1&gt; y texto de tu homepage en hasta 10 páginas de tu sitio web.</li><li>Optimización de alt de imágenes.</li><li>Análisis de palabras clave y secciones web de la competencia que más tráfico generen para copiar lo que funciona (6 competidores)</li><li>Solución de problemas detectados en la auditoría de Ubersuggest de hasta 10 páginas de tu sitio web.</li><ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2, 4, 2]),
                skillsAcquired: Object.freeze(["Analista SEO", "Redactor", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[1], skills.prices[3], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Análisis de palabras clave y contenidos web de la competencia que más tráfico generen para copiar lo que funciona (3 competidores).</li><li>Contacto con blogs de rubros afines buscando hacer colaboraciones usando ONE 2 Lead (Automation tool de linkedin, U$ 15 por mes) para conseguir links a tu sitio web (Link-building)</li></ul>", "<ul><li>Redacción de 1 publicación para blog de 1000 palabras. <a href='https://digitalnow.com.ar/posicionamiento-web-en-google-seo/' target='_blank'>Ver ejemplo</a></li></ul>", "<ul><li>Creación de dos piezas gráficas (1 infografía y portada)</li><li><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank'>Ver ejemplo de infografías</a> ,  <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank'>Ver ejemplo de portadas</a></li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4, 8, 4]),
                skillsAcquired: Object.freeze(["Analista SEO", "Redactor", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[1], skills.prices[3], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Análisis de palabras clave y contenidos web de la competencia que más tráfico generen para copiar lo que funciona (6 competidores).</li><li>Contacto con blogs de rubros afines buscando hacer colaboraciones usando ONE 2 Lead (Automation tool de linkedin, U$ 15 por mes) para conseguir links a tu sitio web (Link-building)</li></ul>", "<ul><li>Redacción de 2 publicaciones para blog de 1000 palabras.</li></ul>", "<ul><li>Creación de 4 piezas gráficas (2 infografías y 2 portadas)</li><li>Creación de 2 infografías para que otros blogs de rubros afines puedan incluirla con un link a tu sitio web.</li><li><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank'>Ver ejemplo de infografías</a> ,  <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank'>Ver ejemplo de portadas</a></li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([8, 16, 12]),
                skillsAcquired: Object.freeze(["Analista SEO", "Redactor", "Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[1], skills.prices[3], skills.prices[5]]),
                content: Object.freeze(["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Análisis de palabras clave y contenidos web de la competencia que más tráfico generen para copiar lo que funciona (12 competidores).</li><li>Contacto con blogs de rubros afines buscando hacer colaboraciones usando ONE 2 Lead (Automation tool de linkedin, U$ 15 por mes) para conseguir links a tu sitio web (Link-building)</li></ul>", "<ul><li>Redacción de 4 publicaciones para blog de 1000 palabras.</li></ul>", "<ul><li>Creación de 8 piezas gráficas (4 infografías y 4 portadas)</li><li><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank'>Ver ejemplo de infografías</a> , <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank'>Ver ejemplo de portadas</a></li><li>Creación de 2 infografías para que otros blogs de rubros afines puedan incluirla con un link a tu sitio web.</li><li>Creación de 2 gifs para cada publicación para hacer la lectura más amable: <a href='https://digitalnow.com.ar/como-hacer-una-campana-en-google-ads/' target='_blank'>Ver ejemplo</a></li></ul>"])
            })
        })
    }),
    conversionWeb: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li>Diagnóstico de buenas prácticas de usabilidad y accesibilidad haciendo análisis de contenido, análisis de diseño visual, análisis de interacción y análisis de temas técnicos. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank'>Ver Plantilla de Diagnóstico</a></li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([12]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li>Diagnóstico de buenas prácticas de usabilidad y accesibilidad haciendo análisis de contenido, análisis de diseño visual, análisis de interacción y análisis de temas técnicos. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank'>Ver Plantilla de Diagnóstico</a><br>Implementación de mejoras en tu sitio web en base al diagnóstico.</li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li>Implementación de 1 experimento con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([4]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li>Implementación de 2 experimentos con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([6]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li>Implementación de 3 experimentos con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li></ul>"])
            })
        })
    }),
    disenoWeb: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Landing Page"),
                content: Object.freeze(["<ul><li>Implementación de plantilla prediseñada de 1 sola página usando algún CMS (Content Management System) como Wordpress o Wix, de arrastrar y soltar.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Sitio web de 5 secciones en base a plantilla prediseñada"),
                content: Object.freeze(["<ul><li>Implementación de sitio web de 5 secciones usando alguna plantilla prediseñada de Wordpress. Incluye diseño de piezas gráficas que sean necesarias. <a href='https://gaudirjohnson.com.ar/' target='_blank'>Ver ejemplo</a></li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([50]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Sitio web con diseño personalizado"),
                content: Object.freeze(["<ul><li>Diseño de varias versiones de prototipo en Figma <a href='https://www.figma.com/file/UXhBSaXoO8LeMYrQgFYO9F/Burplaza?node-id=0%3A1' target='_blank'>(Ver ejemplo)</a> call con el cliente de revisión e implementación de sitio web en Wordpress con hasta 3 revisiones por parte del cliente.</li></ul>"])
            }),
            ecommerce: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                name: Object.freeze("Sitio web de Ecommerce simple en CMS como WooCommerce, Tienda Nube o Shopify"),
                content: Object.freeze(["<ul><li>Carga de hasta 15 productos en el sitio web,</li></ul>"])
            }),
            logoYMarca: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["Diseñador Gráfico"]),
                skillsPrices: Object.freeze([skills.prices[5]]),
                name: Object.freeze("Diseño de logo e identidad de marca"),
                content: Object.freeze(["<ul><li>Tipografía, logo en diferentes formatos, paleta de colores y concepto. Hasta 3 revisiones. <a href='https://drive.google.com/file/d/1gyONia_qKjM6mqoJHe_AnGRGMPbicQnv/view?usp=sharing' target='_blank'>Ver ejemplo</a></li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([2]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[4]]),
                content: Object.freeze(["<ul><li>Actualización de plugins, actualización de contenido en imagen y texto, y arreglo de errores.</li></ul>"])
            })
        })
    }),
    emailMarketing: Object.freeze({
        maintenance: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([1, 0.5, 0.5]),
                deliversPerMonth: Object.freeze(1),
                skillsAcquired: Object.freeze(["Diseñador Gráfico", "Redactor", "Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[5], skills.prices[3], skills.prices[4]]),
                content: Object.freeze(["<ul><li>1 pieza gráfica en formato estático (JPG) o dinámico (GIF)</li></ul>", "<ul><li>Redacción de textos para envío de email.</li></ul>", "<ul><li>Implementación de imágenes y textos en plantilla prediseñada.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([2, 1, 1]),
                deliversPerMonth: Object.freeze(2),
                skillsAcquired: Object.freeze(["Diseñador Gráfico", "Redactor", "Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[5], skills.prices[3], skills.prices[4]]),
                content: Object.freeze(["<ul><li>2 piezas gráfica en formato estático (JPG) o dinámico (GIF)</li></ul>", "<ul><li>Redacción de textos para envío de email.</li></ul>", "<ul><li>Implementación de imágenes y textos en plantilla prediseñada.</li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([4, 2, 2]),
                deliversPerMonth: Object.freeze(4),
                skillsAcquired: Object.freeze(["Diseñador Gráfico", "Redactor", "Diseñador Web UX / UI"]),
                skillsPrices: Object.freeze([skills.prices[5], skills.prices[3], skills.prices[4]]),
                content: Object.freeze(["<ul><li>2 piezas gráfica en formato estático (JPG) o dinámico (GIF)</li></ul>", "<ul><li>Redacción de textos para envío de email.</li></ul>", "<ul><li>Implementación de imágenes y textos en plantilla prediseñada.</li></ul>"])
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

/*---Se captura el contenedor de datos extra para suavizar la animación de aparicion/desaparicion---*/
var servicesExtraContainer = qs('#services-extra-container');

/*---Se capturan los CONTENEDORES de los distintos resultados---*/
var googleFacebookAdsResultContainer = qs('#result-googleads-facebookads-container');

var googleSearchAdsResultContainer = qs('#result-google-search-ads-container');
var googleDisplayAdsResultContainer = qs('#result-google-display-ads-container');
var facebookAdsResultContainer = qs('#result-facebook-ads-container');

var resultImplementationContainer = qs('#result-implementation-container');
var resultMaintenanceContainer = qs('#result-maintenance-container');
var resultInvestmentsMonthlyContainer = qs('#result-investments-monthly-container');
var resultMonthlyTotalContainer = qs('#result-monthly-total-container');

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
/*--Se da estilo a los resultados totales mensuales---*/
resultMonthlyTotalContainer.style.marginTop = "40px";
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
        if (checkboxesServicesValidate.includes(true)) {

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
                    googleSearchAdsPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.googleSearchAds.implementation[googleSearchAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hs de implementación (por única vez)</li> <li>${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
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
                    googleDisplayAdsPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hs de implementación (por única vez)</li> <li>${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
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
                    facebookAdsPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.facebookAds.implementation[facebookAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hs de implementación (por única vez)</li> <li>${services.facebookAds.maintenance[facebookAdsPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
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
                communityManagementPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.communityManagement.implementation[communityManagementPlan.value].hours.reduce((a, b) => a + b, 0)}hs de implementación (por única vez)</li> <li>${services.communityManagement.maintenance[communityManagementPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
            });
        } else {
            communityManagementExtraContainer.style.display = "none"
        }
        /*--Muestra la selección de plan de SEO--*/
        if (checkboxesServicesValidate[4]) {
            seoExtraContainer.style.display = "block";
            seoPlan.addEventListener('change', function () {
                seoPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.seo.implementation[seoPlan.value].hours.reduce((a, b) => a + b, 0)}hs de implementación (por única vez)</li> <li>${services.seo.maintenance[seoPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
            });
        } else {
            seoExtraContainer.style.display = "none";
        }
        /*--Muestra la selección de plan de Optimización de conversion web--*/
        if (checkboxesServicesValidate[5]) {
            conversionWebExtraContainer.style.display = "block";
            conversionWebPlan.addEventListener('change', function () {
                if (conversionWebPlan.value == "basic" || conversionWebPlan.value == "advanced") {
                    conversionWebPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.conversionWeb.implementation[conversionWebPlan.value].hours.reduce((a, b) => a + b, 0)}hs de implementación (por única vez)</li> <li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
                } else {
                    conversionWebPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento mensual</li>`;
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
                emailMarketingPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} Envio mensual (${services.emailMarketing.maintenance[emailMarketingPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento)</li>`;
            } else {
                emailMarketingPlanDetails.innerHTML = `<u>Incluye:</u> <li>${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} Envios mensuales (${services.emailMarketing.maintenance[emailMarketingPlan.value].hours.reduce((a, b) => a + b, 0)}hs de mantenimiento)</li>`;
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

    console.log(`Industria elegida: ${industryAdsSelector.options[industryAdsSelector.selectedIndex].text} codigo: ${industryAdsSelector.value}`)

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
        countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Agrega uno o más países a la lista</em></p>';
        countryAnnounce.classList.add('error-border');

    } else {
        completeFormValidate[4] = true;
        countrySelectionErrors.innerHTML = '';
        countryAnnounce.classList.remove('error-border');
    }
    listSelectedCountriesAnnounce.innerHTML = '';
    for (let i = 0; i < selectedCountriesAnnounceDisplay.length; i++) {
        listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}  <i class="fas fa-trash-alt" onClick="deleteCountry(${i}); return false;"></i></li>`;
    }
    console.log(selectedCountriesAnnounceDisplay)
    console.log(selectedCountriesAnnounceOperate)
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
                countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Debes seleccionar un país de la lista desplegable y agregarlo con el botón "Agregar país"</em></p>';
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '';
                    countryAnnounce.value = '';
                }, 4500);
            } else {
                countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Debes seleccionar un país de la lista desplegable y agregarlo con el botón "Agregar país"</em></p>';
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Agrega uno o más países a la lista</em></p>';
                    countryAnnounce.value = '';
                }, 4500);
            }

        } else {
            if (selectedCountriesAnnounceOperate.length >= 1) {
                countrySelectionErrors.innerHTML = `<p class="error-messages"><em>El país\u00A0<strong>${countryAnnounce.value}</strong>\u00A0no es una opción, selecciona un país de la lista</em></p>`;
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '';
                    countryAnnounce.value = '';
                }, 3500);
            } else {
                countrySelectionErrors.innerHTML = `<p class="error-messages"><em>El país\u00A0<strong>${countryAnnounce.value}</strong>\u00A0no es una opción, selecciona un país de la lista</em></p>`;
                setTimeout(function () {
                    countrySelectionErrors.innerHTML = '<p class="error-messages"><em>Agrega uno o más países a la lista</em></p>';
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
    console.log(selectedCountriesAnnounceOperate)
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

/*---Se captura el bloque que muestra los resultados, y se muestra solamente al seleccionar todas las opciones requeridas---*/
var formContainer = qs('#form-calculate-container');
var resultsContainer = qs('#results-container');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
var calculateButton = qs('#calculateButton');
var calculateAgainButton = qs('#calculateAgainButton');

calculateAgainButton.addEventListener('click', function () {
    formContainer.style.height = 'auto';
    formContainer.style.opacity = '1';
    resultsContainer.style.height = '0';
    resultsContainer.style.opacity = '0';
    calculateAgainButton.classList.add("d-none");
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
})

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
    if (completeFormValidate.includes(false)) {

        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';

        if (completeFormValidate[1] == false) {
            errorMessages.innerHTML = 'Debes seleccionar mínimo un servicio';
            errorType = 1;
        } else if (completeFormValidate[2] == false) {
            errorMessages.innerHTML = 'Debes seleccionar la cantidad de contactos para Email Marketing';
            emailAmmount.classList.add('error-border');
            errorType = 3;
        } else if (completeFormValidate[3] == false && completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Debes agregar mínimo un país a la lista y seleccionar una categoría corresponde tu industria';
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
            errorMessages.innerHTML = 'Debes seleccionar a que categoría corresponde tu industria, para poder calcular los anuncios';
            industryAdsSelector.classList.add('error-border');
            errorType = 4;
        } else if (completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Debes agregar mínimo un país a la lista';
            setTimeout(() => {
                errorMessages.innerHTML = '';
            }, 4000)
            countryAnnounce.classList.add('error-border');
            errorType = 5;
        } else if (completeFormValidate[5] == false && completeFormValidate[6] == false && completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Debes introducir montos a invertir en Google Ads Red de Busquedas, Google Ads Red de Display y Facebook Ads';
            investmentGoogleSearchAdsAmmount.classList.add('error-border');
            investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            investmentFacebookAdsAmmount.classList.add('error-border');
            errorType = 6;
        } else if (completeFormValidate[5] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Google Ads Red de Busquedas';
            investmentGoogleSearchAdsAmmount.classList.add('error-border');
            errorType = 6;
            if (completeFormValidate[6] == false) {
                investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[7] == false) {
                investmentFacebookAdsAmmount.classList.add('error-border');
            }
        } else if (completeFormValidate[6] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Google Ads Red de Display';
            investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            errorType = 7;
            if (completeFormValidate[5] == false) {
                investmentGoogleSearchAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[7] == false) {
                investmentFacebookAdsAmmount.classList.add('error-border');
            }
        } else if (completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Facebook Ads';
            investmentFacebookAdsAmmount.classList.add('error-border');
            errorType = 8;
            if (completeFormValidate[5] == false) {
                investmentGoogleSearchAdsAmmount.classList.add('error-border');
            }
            if (completeFormValidate[6] == false) {
                investmentGoogleDisplayAdsAmmount.classList.add('error-border');
            }

        }

    } else if (disenoWeb.checked && (!landingPage.checked && !wordpress.checked && !customWebsite.checked && !ecommerceWeb.checked && !logoMarca.checked)) {
        errorMessages.innerHTML = 'Debes seleccionar un sub-servicio de Diseño Web';
        disenoWebServicesContainer.childNodes[1].classList.add('error-border');

    } else {

        formContainer.style.height = '0';
        formContainer.style.opacity = '0';
        resultsContainer.style.height = 'auto';
        resultsContainer.style.opacity = '1';
        calculateButton.style.display = 'none';
        calculateAgainButton.classList.remove("d-none");
        errorMessages.innerHTML = '';
    }

    /*---Se muestran los resultados particulares de google/facebook ads solamente si esta opcion fue seleccionada---*/
    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked) && !completeFormValidate.includes(false)) {

        googleFacebookAdsResultContainer.style.display = 'block';

        if (googleSearchAds.checked) {
            googleSearchAdsResultContainer.style.display = 'block';

            if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '' && investmentGoogleSearchAdsAmmount.value > 0) {
                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {

                    if (selectedCountriesAnnounceOperate.length == 1) {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión elegida: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA));
                            googleAdsSearchConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión elegida: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]);
                            googleAdsSearchConversionsValue += thisConversion;
                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión proporcional: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA));
                            googleAdsSearchConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión proporcional: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

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
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión elegida: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) ).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            googleAdsDisplayConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión elegida: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]));
                            googleAdsDisplayConversionsValue += thisConversion;

                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión proporcional: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) ).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            googleAdsDisplayConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión proporcional: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

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
                resultFacebookAds.innerHTML += 'No tenemos datos de Facebook Ads para la industria Citas :('
            } else if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '') {

                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {
                    if (selectedCountriesAnnounceOperate.length == 1) {
                        if (selectedCountry !== "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión elegida: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) ).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            facebookAdsConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión elegida: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]));
                            facebookAdsConversionsValue += thisConversion;

                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión proporcional: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA) ).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            facebookAdsConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                            <ul style="list-style-type: none;"><li>- Inversión proporcional: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                            <li>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

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
            /*--Muestra el valor correspondiente a la cantidad de contactos seleccionados---*/
            totalInvestmentMonthly += Number(emailAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Email Marketing</strong> USD ${emailAmmount.value} de inversión mensual <small>(Campaña para ${emailAmmount.options[emailAmmount.selectedIndex].text} contactos)</small></li>`;

            maintenanceContent = '';
            emailMarketingValueToPush = 0;
            services.emailMarketing.maintenance[emailMarketingPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        emailMarketingValueToPush += services.emailMarketing.maintenance[emailMarketingPlan.value].hours[i] * skills.prices[j][countrySupplier.value];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.emailMarketing.maintenance[emailMarketingPlan.value].hours[i]} horas de ${services.emailMarketing.maintenance[emailMarketingPlan.value].skillsAcquired[i]} a ${services.emailMarketing.maintenance[emailMarketingPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.emailMarketing.maintenance[emailMarketingPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de email marketing, inyectando titulo y contenido--*/
            resultMaintenanceEmailContainer.style.display = "block";
            titleMaintenanceEmail.innerHTML = `<u><strong>Email Marketing </strong> (Plan ${emailMarketingPlan.options[emailMarketingPlan.selectedIndex].text} - ${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} ${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth <= 1 ? 'envío mensual' : 'envíos mensuales'}) :</u> USD ${emailMarketingValueToPush}`;
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
                maintenanceContent += `<ul><li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours[i]} horas de ${services.conversionWeb.maintenance[conversionWebPlan.value].skillsAcquired[i]} a ${services.conversionWeb.maintenance[conversionWebPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.conversionWeb.maintenance[conversionWebPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceConversionWebContainer.style.display = "block";
            titleMaintenanceConversionWeb.innerHTML = `<u><strong>Optimización de tasa de conversión web </strong> (Plan ${conversionWebPlan.options[conversionWebPlan.selectedIndex].text}) :</u> USD ${conversionWebManteinanceValue}`;
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
                    implementationContent += `<ul><li>${services.conversionWeb.implementation[conversionWebPlan.value].hours[i]} horas de ${services.conversionWeb.implementation[conversionWebPlan.value].skillsAcquired[i]} a ${services.conversionWeb.implementation[conversionWebPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.conversionWeb.implementation[conversionWebPlan.value].content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationConversionWebContainer.style.display = "block";
                titleImplementationConversionWeb.innerHTML = `<u><strong>Optimización de tasa de conversión web </strong> (Plan ${conversionWebPlan.options[conversionWebPlan.selectedIndex].text}) :</u> USD ${conversionWebImplementationValue}`;
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
                maintenanceContent += `<ul><li>${services.seo.maintenance[seoPlan.value].hours[i]} horas de ${services.seo.maintenance[seoPlan.value].skillsAcquired[i]} a ${services.seo.maintenance[seoPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.seo.maintenance[seoPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de SEO, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceSeoContainer.style.display = "block";
            titleMaintenanceSeo.innerHTML = `<u><strong>SEO </strong> (Plan ${seoPlan.options[seoPlan.selectedIndex].text}) :</u> USD ${seoManteinanceValue}`;
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
                implementationContent += `<ul><li>${services.seo.implementation[seoPlan.value].hours[i]} horas de ${services.seo.implementation[seoPlan.value].skillsAcquired[i]} a ${services.seo.implementation[seoPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.seo.implementation[seoPlan.value].content[i]}</ul>`;
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
                maintenanceContent += `<ul><li>${services.communityManagement.maintenance[communityManagementPlan.value].hours[i]} horas de ${services.communityManagement.maintenance[communityManagementPlan.value].skillsAcquired[i]} a ${services.communityManagement.maintenance[communityManagementPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.communityManagement.maintenance[communityManagementPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Community Management, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceCommunityManagementContainer.style.display = "block";
            titleMaintenanceCommunityManagement.innerHTML = `<u><strong>Community Management </strong> (Plan ${communityManagementPlan.options[communityManagementPlan.selectedIndex].text}) :</u> USD ${communityManagementManteinanceValue}`;
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
                implementationContent += `<ul><li>${services.communityManagement.implementation[communityManagementPlan.value].hours[i]} horas de ${services.communityManagement.implementation[communityManagementPlan.value].skillsAcquired[i]} a ${services.communityManagement.implementation[communityManagementPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.communityManagement.implementation[communityManagementPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Community Management, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationCommunityManagementContainer.style.display = "block";
            titleImplementationCommunityManagement.innerHTML = `<u><strong>Community Management </strong> (Plan ${communityManagementPlan.options[communityManagementPlan.selectedIndex].text}) :</u> USD ${communityManagementImplementationValue}`;
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
                maintenanceContent += `<ul><li>${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].hours[i]} horas de ${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].skillsAcquired[i]} a ${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.googleSearchAds.maintenance[googleSearchAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleSearchAdsContainer.style.display = "block";
            titleMaintenanceGoogleSearchAds.innerHTML = `<u><strong>Google Ads Red de Busquedas </strong> (Plan ${googleSearchAdsPlan.options[googleSearchAdsPlan.selectedIndex].text}) :</u> USD ${googleSearchAdsManteinanceValue}`;
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
                implementationContent += `<ul><li>${services.googleSearchAds.implementation[googleSearchAdsPlan.value].hours[i]} horas de ${services.googleSearchAds.implementation[googleSearchAdsPlan.value].skillsAcquired[i]} a ${services.googleSearchAds.implementation[googleSearchAdsPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.googleSearchAds.implementation[googleSearchAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleSearchAdsContainer.style.display = "block";
            titleImplementationGoogleSearchAds.innerHTML = `<u><strong>Google Ads Red de Busquedas </strong> (Plan ${googleSearchAdsPlan.options[googleSearchAdsPlan.selectedIndex].text}) :</u> USD ${googleSearchAdsImplementationValue}`;
            resultImplementationGoogleSearchAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += googleSearchAdsImplementationValue;

            /*----Se completa la información de conversiones----*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleSearchAdsConversions.innerHTML = `${googleAdsSearchConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleSearchAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Red de Busquedas:</strong> USD ${investmentGoogleSearchAdsAmmount.value} de inversión mensual</li>`;

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
                maintenanceContent += `<ul><li>${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].hours[i]} horas de ${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].skillsAcquired[i]} a ${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.googleDisplayAds.maintenance[googleDisplayAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleDisplayAdsContainer.style.display = "block";
            titleMaintenanceGoogleDisplayAds.innerHTML = `<u><strong>Google Ads Red de Display </strong> (Plan ${googleDisplayAdsPlan.options[googleDisplayAdsPlan.selectedIndex].text}) :</u> USD ${googleDisplayAdsManteinanceValue}`;
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
                implementationContent += `<ul><li>${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].hours[i]} horas de ${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].skillsAcquired[i]} a ${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.googleDisplayAds.implementation[googleDisplayAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleDisplayAdsContainer.style.display = "block";
            titleImplementationGoogleDisplayAds.innerHTML = `<u><strong>Google Ads Red de Display </strong> (Plan ${googleDisplayAdsPlan.options[googleDisplayAdsPlan.selectedIndex].text}) :</u> USD ${googleDisplayAdsImplementationValue}`;
            resultImplementationGoogleDisplayAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += googleDisplayAdsImplementationValue;

            /*----Se completa la información de conversiones----*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleDisplayAdsConversions.innerHTML = `${googleAdsDisplayConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleDisplayAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Red de Display:</strong> USD ${investmentGoogleDisplayAdsAmmount.value} de inversión mensual</li>`;

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
                maintenanceContent += `<ul><li>${services.facebookAds.maintenance[facebookAdsPlan.value].hours[i]} horas de ${services.facebookAds.maintenance[facebookAdsPlan.value].skillsAcquired[i]} a ${services.facebookAds.maintenance[facebookAdsPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.facebookAds.maintenance[facebookAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceFacebookAdsContainer.style.display = "block";
            titleMaintenanceFacebookAds.innerHTML = `<u><strong>Facebook Ads </strong> (Plan ${facebookAdsPlan.options[facebookAdsPlan.selectedIndex].text}) :</u> USD ${facebookAdsManteinanceValue}`;
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
                implementationContent += `<ul><li>${services.facebookAds.implementation[facebookAdsPlan.value].hours[i]} horas de ${services.facebookAds.implementation[facebookAdsPlan.value].skillsAcquired[i]} a ${services.facebookAds.implementation[facebookAdsPlan.value].skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.facebookAds.implementation[facebookAdsPlan.value].content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationFacebookAdsContainer.style.display = "block";
            titleImplementationFacebookAds.innerHTML = `<u><strong>Facebook Ads </strong> (Plan ${facebookAdsPlan.options[facebookAdsPlan.selectedIndex].text}) :</u> USD ${facebookAdsImplementationValue}`;
            resultImplementationFacebookAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += facebookAdsImplementationValue;

            /*-Se completa la información de conversiones-*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            facebookAdsConversions.innerHTML = `${facebookAdsConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentFacebookAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Facebook Ads:</strong> USD ${investmentFacebookAdsAmmount.value} de inversión mensual</li>`;

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
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} horas de ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} a ${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLandingPageContainer.style.display = "block";
                titleMaintenanceLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong> (Plan de mantenimiento Básico) :</u> USD ${landingPageManteinanceValue}`;
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
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.basic.hours[i]} horas de ${services.disenoWeb.implementation.basic.skillsAcquired[i]} a ${services.disenoWeb.implementation.basic.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLandingPageContainer.style.display = "block";
                titleImplementationLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong> (Plan Básico) :</u> USD ${landingPageImplementationValue}`;
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
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} horas de ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} a ${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceWordpressContainer.style.display = "block";
                titleMaintenanceWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong> (Plan de mantenimiento Básico) :</u> USD ${wordpressManteinanceValue}`;
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
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.intermediate.hours[i]} horas de ${services.disenoWeb.implementation.intermediate.skillsAcquired[i]} a ${services.disenoWeb.implementation.intermediate.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.intermediate.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationWordpressContainer.style.display = "block";
                titleImplementationWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong> (Plan Intermedio) :</u> USD ${wordpressImplementationValue}`;
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
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} horas de ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} a ${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceCustomWebsiteContainer.style.display = "block";
                titleMaintenanceCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong> (Plan de mantenimiento Básico) :</u> USD ${customWebsiteManteinanceValue}`;
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
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.advanced.hours[i]} horas de ${services.disenoWeb.implementation.advanced.skillsAcquired[i]} a ${services.disenoWeb.implementation.advanced.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.advanced.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationCustomWebsiteContainer.style.display = "block";
                titleImplementationCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong> (Plan Avanzado) :</u> USD ${customWebsiteImplementationValue}`;
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
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} horas de ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} a ${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceEcommerceWebContainer.style.display = "block";
                titleMaintenanceEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong> (Plan de mantenimiento Básico) :</u> USD ${ecommerceWebManteinanceValue}`;
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
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.ecommerce.hours[i]} horas de ${services.disenoWeb.implementation.ecommerce.skillsAcquired[i]} a ${services.disenoWeb.implementation.ecommerce.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.ecommerce.content[i]}</ul>`;
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
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.basic.hours[i]} horas de ${services.disenoWeb.maintenance.basic.skillsAcquired[i]} a ${services.disenoWeb.maintenance.basic.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLogoYMarcaContainer.style.display = "block";
                titleMaintenanceLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong> (Plan de mantenimiento Básico) :</u> USD ${logoMarcaManteinanceValue}`;
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
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.logoYMarca.hours[i]} horas de ${services.disenoWeb.implementation.logoYMarca.skillsAcquired[i]} a ${services.disenoWeb.implementation.logoYMarca.skillsPrices[i][countrySupplier.value]} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.logoYMarca.content[i]}</ul>`;
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
            resultInvestmentsMonthlyDetail.innerHTML = '<li>No has seleccionado ninguna inversión en medios digitales. <small>(Ej: Google Ads Red de Busquedas, Google Ads Red de Display, Facebook Ads o Email Marketing)</small></li>'
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
        calculateAgainButton.classList.add("d-none");
        calculateButton.style.display = 'block';
    }

    /*--Sistema que genera el horario real en el mensaje de "click para ver más"--*/
    function parseDate() {
        var date = new Date();
        var localeSpecificTime = date.toLocaleTimeString();
        return localeSpecificTime.replace(/:\d+ /, ' ').slice(0,5);
    }
    qs('#timestamp').innerHTML = parseDate();
    qs('#bubble-click-container').classList.remove('animated-toggle-hide');

};


/*--Sistema para rotar los iconos de cajónes "collapse" al expandirlos o contraerlos--*/
var cardHeaders = qsa('.card-header');
var iconsToRotate = qsa('.iconsToRotate');
cardHeaders.forEach((header, i) => {
    header.addEventListener('click', function () {
        iconsToRotate[i].classList.toggle('rotateIcons');

        qs('#bubble-click-container').classList.add('animated-toggle-hide');

    });
});




// $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://www.google.com') + '&callback=?', function(data){
// 	console.log(data.contents);
// });
// /*---Upwork Access-Control-Allow-Origin header blocking---*/
// var urlNotWorking = "https://www.upwork.com/ab/profiles/search/?loc=argentina&q=web%20designer";