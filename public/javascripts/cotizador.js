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
    names: Object.freeze(["Analista de Marketing Digital", "Diseñador Web UX / UI", "Diseñador Gráfico"]),
    ids: Object.freeze([0, 1, 2]),
    averages: [{
        argentina: {
            averagePrice: 16.64,
            averageTotal: 100
        },
        australia: {
            averagePrice: 42.73,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 15.14,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 17.23,
            averageTotal: 100
        },
        spain: {
            averagePrice: 19.82,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 51.24,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 14.63,
            averageTotal: 100
        },
        india: {
            averagePrice: 11.66,
            averageTotal: 100
        },
        england: {
            averagePrice: 37.32,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 20.87,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 31.77,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 35.39,
            averageTotal: 100
        },
        venezuela: {
            averagePrice: 11.18,
            averageTotal: 100
        },
        brazil: {
            averagePrice: 33.18,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 21.84,
            averageTotal: 68
        },
        chile: {
            averagePrice: 24.18,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 22.31,
            averageTotal: 100
        },
        ecuador: {
            averagePrice: 20.82,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 19.45,
            averageTotal: 100
        },
        guatemala: {
            averagePrice: 38.59,
            averageTotal: 73
        },
        honduras: {
            averagePrice: 18.60,
            averageTotal: 43
        },
        nicaragua: {
            averagePrice: 28.62,
            averageTotal: 53
        },
        panama: {
            averagePrice: 15.49,
            averageTotal: 79
        },
        paraguay: {
            averagePrice: 20.94,
            averageTotal: 33
        },
        peru: {
            averagePrice: 22.71,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 21.42,
            averageTotal: 100
        },
        uruguay: {
            averagePrice: 23.18,
            averageTotal: 100
        }
    }, {
        argentina: {
            averagePrice: 21.17,
            averageTotal: 100
        },
        australia: {
            averagePrice: 45.92,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 19.72,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 26.59,
            averageTotal: 100
        },
        spain: {
            averagePrice: 38.03,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 65.34,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 22.19,
            averageTotal: 100
        },
        india: {
            averagePrice: 23.69,
            averageTotal: 100
        },
        england: {
            averagePrice: 42.67,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 22.73,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 36.97,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 41.61,
            averageTotal: 100
        },
        venezuela: {
            averagePrice: 21.94,
            averageTotal: 100
        },
        brazil: {
            averagePrice: 25.74,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 18.48,
            averageTotal: 100
        },
        chile: {
            averagePrice: 18.81,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 20.72,
            averageTotal: 100
        },
        ecuador: {
            averagePrice: 19.74,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 16.86,
            averageTotal: 100
        },
        guatemala: {
            averagePrice: 18.69,
            averageTotal: 100
        },
        honduras: {
            averagePrice: 22.88,
            averageTotal: 100
        },
        nicaragua: {
            averagePrice: 15.68,
            averageTotal: 100
        },
        panama: {
            averagePrice: 19.45,
            averageTotal: 100
        },
        paraguay: {
            averagePrice: 17.74,
            averageTotal: 100
        },
        peru: {
            averagePrice: 22.46,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 22.69,
            averageTotal: 100
        },
        uruguay: {
            averagePrice: 20.81,
            averageTotal: 100
        }
    }, {
        argentina: {
            averagePrice: 19.97,
            averageTotal: 100
        },
        australia: {
            averagePrice: 34.66,
            averageTotal: 100
        },
        bangladesh: {
            averagePrice: 19.50,
            averageTotal: 100
        },
        colombia: {
            averagePrice: 22.11,
            averageTotal: 100
        },
        spain: {
            averagePrice: 20.98,
            averageTotal: 100
        },
        eeuu: {
            averagePrice: 33.02,
            averageTotal: 100
        },
        philippines: {
            averagePrice: 19.56,
            averageTotal: 100
        },
        india: {
            averagePrice: 22.56,
            averageTotal: 100
        },
        england: {
            averagePrice: 30.74,
            averageTotal: 100
        },
        mexico: {
            averagePrice: 21.29,
            averageTotal: 100
        },
        southafrica: {
            averagePrice: 33.91,
            averageTotal: 100
        },
        ukraine: {
            averagePrice: 23.60,
            averageTotal: 100
        },
        venezuela: {
            averagePrice: 17.92,
            averageTotal: 100
        },
        brazil: {
            averagePrice: 25.25,
            averageTotal: 100
        },
        bolivia: {
            averagePrice: 20.18,
            averageTotal: 100
        },
        chile: {
            averagePrice: 21.28,
            averageTotal: 100
        },
        costarica: {
            averagePrice: 19.38,
            averageTotal: 100
        },
        ecuador: {
            averagePrice: 17.93,
            averageTotal: 100
        },
        elsalvador: {
            averagePrice: 16.74,
            averageTotal: 100
        },
        guatemala: {
            averagePrice: 30.64,
            averageTotal: 100
        },
        honduras: {
            averagePrice: 26.12,
            averageTotal: 100
        },
        nicaragua: {
            averagePrice: 23.09,
            averageTotal: 100
        },
        panama: {
            averagePrice: 24.59,
            averageTotal: 100
        },
        paraguay: {
            averagePrice: 18.34,
            averageTotal: 100
        },
        peru: {
            averagePrice: 22.20,
            averageTotal: 100
        },
        dominicanrepublic: {
            averagePrice: 19.11,
            averageTotal: 100
        },
        uruguay: {
            averagePrice: 22.48,
            averageTotal: 100
        }
    }]
})
/*---Datos de los SERVICIOS brindados, organizado para programación orientada a objetos---*/
const services = Object.freeze({
    googleSearchAds: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([8]),
            skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
            idSkillsAcquired: Object.freeze([0]),
            skillsPrices: Object.freeze([skills.averages[0]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li style='list-style: circle;'>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones) a través de Google Tag Manager y Google Analytics. Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li style='list-style: circle;'>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank' rel='noreferrer noopener'>Ver ejemplo</a>)</li><li style='list-style: circle;'>Organización por temas de palabras clave para controlar la inversión para diferentes temas y hacer anuncios específicos para diferentes temas.</li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([6]),
            skillsAcquired: Object.freeze(["Analista de Marketing Digital"]),
            idSkillsAcquired: Object.freeze([0]),
            skillsPrices: Object.freeze([skills.averages[0]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li style='list-style: circle;'>1 cambio por semana para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés).</li><li style='list-style: circle;'>Análisis semanal del impacto de los cambios implementados usando el dashboard de Google Data Studio.</li></ul>"])
        })
    }),
    googleDisplayAds: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([2, 2]),
            skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
            idSkillsAcquired: Object.freeze([0, 2]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Creación de campañas que le muestren anuncios de imagen en sitios web a un público relevante. Por ejemplo, visitantes de tu sitio web en los últimos 30 días o gente interesada en tu producto o servicio según Google.</li></ul>", "<ul><li style='list-style: circle;'>Creación de 1 pieza gráfica en formato cuadrado y horizontal para anuncios responsivos (mezcla de imagen y texto).</li><li style='list-style: circle;'><a href='https://drive.google.com/drive/folders/15wF9BY4RxRrQ-vEchJDP4V17rw6hp503?usp=sharing' target='_blank' rel='noreferrer noopener'>Ver suma de piezas creativas</a></li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([4, 2]),
            skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
            idSkillsAcquired: Object.freeze([0, 2]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li style='list-style: circle;'>Incluye 1 cambio semanal para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas.</li><li style='list-style: circle;'>Análisis semanal del impacto de los cambios implementados usando el dashboard de Google Data Studio.</li></ul>", "<ul><li style='list-style: circle;'>Creación de 1 pieza gráfica en formatos cuadrado y horizontal.</li></ul>"])
        })
    }),
    facebookAds: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([2, 6]),
            skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
            idSkillsAcquired: Object.freeze([0, 2]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Creación de campañas que le muestren anuncios de imagen en Facebook e Instagram a un público relevante. Por ejemplo, visitantes de tu sitio web en los últimos 30 días o gente interesada en tu producto o servicio según Facebook.</li><li style='list-style: circle;'>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li></ul>", "<ul><li style='list-style: circle;'>Creación de 3 piezas gráficas en formatos cuadrado (Para feed) y vertical (Para stories) <a href='https://drive.google.com/drive/folders/1_rdQGGkJ41WnMRd9iRbHo44DZ7mu3_bc?usp=sharing' target='_blank' rel='noreferrer noopener'>Ver ejemplos de entregables</a></li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([4, 2]),
            skillsAcquired: Object.freeze(["Analista de Marketing Digital", "Diseñador Gráfico"]),
            idSkillsAcquired: Object.freeze([0, 2]),
            skillsPrices: Object.freeze([skills.averages[0], skills.averages[2]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li style='list-style: circle;'>Incluye 1 cambio por semana para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas.</li></ul>", "<ul><li style='list-style: circle;'>Creación de 2 sets de piezas gráficas en formato cuadrado y vertical.</li></ul>"])
        })
    }),
    conversionWeb: Object.freeze({
        implementation: Object.freeze({
            hours: Object.freeze([4]),
            skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
            idSkillsAcquired: Object.freeze([1]),
            skillsPrices: Object.freeze([skills.averages[1]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Diagnóstico de buenas prácticas de usabilidad y accesibilidad haciendo análisis de contenido, análisis de diseño visual, análisis de interacción y análisis de temas técnicos. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Ver Plantilla de Diagnóstico</a></li></ul>"])
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([6]),
            skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
            idSkillsAcquired: Object.freeze([1]),
            skillsPrices: Object.freeze([skills.averages[1]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Implementación de 2 experimentos con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li><li>Reporte al cliente.</li></ul>"])
        })
    }),
    disenoWeb: Object.freeze({
        implementation: Object.freeze({
            basic: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Landing Page"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementación de plantilla prediseñada de 1 sola página usando algún CMS (Content Management System) como Wordpress o Wix, de arrastrar y soltar.</li></ul>"])
            }),
            intermediate: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Sitio web de 5 secciones en base a plantilla prediseñada"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Implementación de sitio web de 5 secciones usando alguna plantilla prediseñada de Wordpress. Incluye diseño de piezas gráficas que sean necesarias. <a href='https://gaudirjohnson.com.ar/' target='_blank' rel='noreferrer noopener'>Ver ejemplo</a></li></ul>"])
            }),
            advanced: Object.freeze({
                hours: Object.freeze([50]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Sitio web con diseño personalizado"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Diseño de varias versiones de prototipo en Figma <a href='https://www.figma.com/file/UXhBSaXoO8LeMYrQgFYO9F/Burplaza?node-id=0%3A1' target='_blank' rel='noreferrer noopener'>(Ver ejemplo)</a>, call con el cliente de revisión e implementación de sitio web en Wordpress con hasta 3 revisiones por parte del cliente.</li></ul>"])
            }),
            ecommerce: Object.freeze({
                hours: Object.freeze([20]),
                skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
                idSkillsAcquired: Object.freeze([1]),
                skillsPrices: Object.freeze([skills.averages[1]]),
                name: Object.freeze("Sitio web de Ecommerce simple en CMS como WooCommerce, Tienda Nube o Shopify"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Carga de hasta 15 productos en el sitio web.</li></ul>"])
            }),
            logoYMarca: Object.freeze({
                hours: Object.freeze([10]),
                skillsAcquired: Object.freeze(["Diseñador Gráfico"]),
                idSkillsAcquired: Object.freeze([2]),
                skillsPrices: Object.freeze([skills.averages[2]]),
                name: Object.freeze("Diseño de logo e identidad de marca"),
                content: Object.freeze(["<ul><li style='list-style: circle;'>Tipografía, logo en diferentes formatos, paleta de colores y concepto. Hasta 3 revisiones. <a href='https://drive.google.com/file/d/1gyONia_qKjM6mqoJHe_AnGRGMPbicQnv/view?usp=sharing' target='_blank' rel='noreferrer noopener'>Ver ejemplo</a></li></ul>"])
            })
        }),
        maintenance: Object.freeze({
            hours: Object.freeze([2]),
            skillsAcquired: Object.freeze(["Diseñador Web UX / UI"]),
            idSkillsAcquired: Object.freeze([1]),
            skillsPrices: Object.freeze([skills.averages[1]]),
            content: Object.freeze(["<ul><li style='list-style: circle;'>Actualización de plugins, actualización de contenido en imagen y texto, y arreglo de errores.</li></ul>"])
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

/*--Se captura el email del usuario y se valida c/ Regex---*/
var emailCustomerInput = null;
var mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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
        listSelectedCountriesAnnounce.innerHTML += `<li>${selectedCountriesAnnounceDisplay[i]}  <i class="fas fa-trash-alt" aria-label="Eliminar país de la lista de selección" onClick="deleteCountry(${i}); return false;"></i></li>`;
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

// /*----Se obtienen los datos de freelancers para el pais seleccionado----*/
// var responseApi;
// fetch(`https://digitalnow.com.ar/wp-json/freelancer-api/${countrySupplier.value}`)
// .then(response => response.json())
// .then(data => responseApi = data);

// countrySupplier.addEventListener('change', function () {
// fetch(`https://digitalnow.com.ar/wp-json/freelancer-api/${countrySupplier.value}`)
// .then(response => response.json())
// .then(data => responseApi = data);
// });

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
            errorMessages.innerHTML = 'Debes seleccionar mínimo un servicio';
            errorType = 1;
        } else if (completeFormValidate[2] == false) {
            errorMessages.innerHTML = 'Debes seleccionar la cantidad de contactos para Email Marketing';
            emailAmmount.classList.add('error-border');
            errorType = 3;
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
            }
        } else if (completeFormValidate[3] == false && completeFormValidate[4] == false) {
            errorMessages.innerHTML = 'Debes agregar mínimo un país a la lista y seleccionar a que categoría corresponde tu industria';
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
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
            if (qs('.p-success') == null) {
                emailCustomerInput.classList.add('error-border');
            }

        } else if (qs('.p-success') == null) {
            if (qs('.p-error-message') != null) {

            } else {
                errorMessages.innerHTML = 'Debes completar tu dirección de email';
                emailCustomerInput.classList.add('error-border');
                errorType = 9;
            }

        }

    } else if (disenoWeb.checked && (!landingPage.checked && !wordpress.checked && !customWebsite.checked && !ecommerceWeb.checked && !logoMarca.checked)) {
        errorMessages.innerHTML = 'Debes seleccionar un sub-servicio de Diseño Web';
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
    resultsTotalSelectedInTitle.innerHTML = '(Fee servicios mantenimiento)';

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
            resultsTotalSelectedInTitle.innerHTML = '(Fee servicios mantenimiento + Inversión Google Ads)';


        } else if (!googleSearchAds.checked && !googleDisplayAds.checked && facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Facebook Ads';
            resultsInvestmentsSelectedInTitle.innerHTML = ' - Facebook Ads';
            resultsTotalSelectedInTitle.innerHTML = '(Fee servicios mantenimiento + inversión Facebook Ads)';


        } else if ((googleSearchAds.checked || googleDisplayAds.checked) && facebookAds.checked) {
            resultsConversionsSelectedInTitle.innerHTML = 'Google Ads + Facebook Ads';
            resultsInvestmentsSelectedInTitle.innerHTML = ' - Google Ads + Facebook Ads';
            resultsTotalSelectedInTitle.innerHTML = '(Fee servicios mantenimiento + inversión Google Ads + inversión Facebook Ads)';

        }

        if (googleSearchAds.checked) {
            googleSearchAdsResultContainer.style.display = 'block';

            if (selectedCountriesAnnounceOperate !== [] && industryAdsSelector.value !== '' && investmentGoogleSearchAdsAmmount.value > 0) {
                selectedCountriesAnnounceOperate.forEach((selectedCountry, i) => {

                    if (selectedCountriesAnnounceOperate.length == 1) {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión elegida: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA));
                            googleAdsSearchConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión elegida: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length)}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]);
                            googleAdsSearchConversionsValue += thisConversion;
                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión proporcional: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA));
                            googleAdsSearchConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleSearch.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión proporcional: USD ${(investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleSearchAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleSearchAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

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
                                <ul><li style='list-style: none;'>- Inversión elegida: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            googleAdsDisplayConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión elegida: USD ${investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]));
                            googleAdsDisplayConversionsValue += thisConversion;

                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión proporcional: USD ${(investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            googleAdsDisplayConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultGoogleDisplay.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión proporcional: USD ${(investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentGoogleDisplayAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.googleDisplayAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

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
                                <ul><li style='list-style: none;'>- Inversión elegida: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            facebookAdsConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión elegida: USD ${investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]));
                            facebookAdsConversionsValue += thisConversion;

                        }
                    } else {
                        if (selectedCountry !== "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión proporcional: USD ${(investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)).toFixed(2).replace(".", ",")}</strong></li></ul>`;

                            let thisConversion = Number(((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / (absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value] * relativeStatsCountries[selectedCountry].relativeRateToUSA)));
                            facebookAdsConversionsValue += thisConversion;

                        } else if (selectedCountry === "eeuu") {
                            resultFacebookAds.innerHTML += `<p><b>‣ ${selectedCountriesAnnounceDisplay[i]}</b> en industria <b>${industryAdsSelector.options[industryAdsSelector.selectedIndex].text}</b> ➠ <b>CPA:</b> ${(absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</p>
                                <ul><li style='list-style: none;'>- Inversión proporcional: USD ${(investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) % 1 == 0 ? (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) : (investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length).toFixed(2).replace(".", ",")}</li>
                                <li style='list-style: none;'>- Numero de conversiones (inversion / CPA):  <strong>${((investmentFacebookAdsAmmount.value / selectedCountriesAnnounceOperate.length) / absoluteStatsCountries.eeuu.facebookAds.cpa[industryAdsSelector.value]).toFixed(2).replace(".", ",")}</strong></li></ul>`;

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
                conversionWebManteinanceValue += services.conversionWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.conversionWeb.maintenance.hours[i]} horas de ${services.conversionWeb.maintenance.skillsAcquired[i]} a ${Math.round(services.conversionWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.conversionWeb.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceConversionWebContainer.style.display = "block";
            titleMaintenanceConversionWeb.innerHTML = `<u><strong>Optimización de tasa de conversión web</strong>:</u> USD ${Math.round(conversionWebManteinanceValue)}`;
            resultMaintenanceConversionWeb.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += conversionWebManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var conversionWebImplementationValue = 0;

            resultImplementationContainer.style.display = "block";

            services.conversionWeb.implementation.idSkillsAcquired.forEach((skill, i) => {
                conversionWebImplementationValue += services.conversionWeb.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.conversionWeb.implementation.hours[i]} horas de ${services.conversionWeb.implementation.skillsAcquired[i]} a ${Math.round(services.conversionWeb.implementation.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.conversionWeb.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de conversion web, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationConversionWebContainer.style.display = "block";
            titleImplementationConversionWeb.innerHTML = `<u><strong>Optimización de tasa de conversión web</strong>:</u> USD ${Math.round(conversionWebImplementationValue)}`;
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
                googleSearchAdsManteinanceValue += services.googleSearchAds.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.googleSearchAds.maintenance.hours[i]} horas de ${services.googleSearchAds.maintenance.skillsAcquired[i]} a ${Math.round(services.googleSearchAds.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.googleSearchAds.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleSearchAdsContainer.style.display = "block";
            titleMaintenanceGoogleSearchAds.innerHTML = `<u><strong>Google Ads Red de Busquedas</strong>:</u> USD ${Math.round(googleSearchAdsManteinanceValue)}`;
            resultMaintenanceGoogleSearchAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += googleSearchAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var googleSearchAdsImplementationValue = 0;
            services.googleSearchAds.implementation.idSkillsAcquired.forEach((skill, i) => {
                googleSearchAdsImplementationValue += services.googleSearchAds.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.googleSearchAds.implementation.hours[i]} horas de ${services.googleSearchAds.implementation.skillsAcquired[i]} a ${Math.round(services.googleSearchAds.implementation.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.googleSearchAds.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Search Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleSearchAdsContainer.style.display = "block";
            titleImplementationGoogleSearchAds.innerHTML = `<u><strong>Google Ads Red de Busquedas</strong>:</u> USD ${Math.round(googleSearchAdsImplementationValue)}`;
            resultImplementationGoogleSearchAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += googleSearchAdsImplementationValue;

            /*----Se completa la información de conversiones----*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleSearchAdsConversions.innerHTML = `${googleAdsSearchConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleSearchAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Google Ads Red de Busquedas:</strong> USD ${investmentGoogleSearchAdsAmmount.value} de inversión mensual</li>`;

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
                googleDisplayAdsManteinanceValue += services.googleDisplayAds.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.googleDisplayAds.maintenance.hours[i]} horas de ${services.googleDisplayAds.maintenance.skillsAcquired[i]} a ${Math.round(services.googleDisplayAds.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.googleDisplayAds.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceGoogleDisplayAdsContainer.style.display = "block";
            titleMaintenanceGoogleDisplayAds.innerHTML = `<u><strong>Google Ads Red de Display</strong>:</u> USD ${Math.round(googleDisplayAdsManteinanceValue)}`;
            resultMaintenanceGoogleDisplayAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += googleDisplayAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var googleDisplayAdsImplementationValue = 0;
            services.googleDisplayAds.implementation.idSkillsAcquired.forEach((skill, i) => {
                googleDisplayAdsImplementationValue += services.googleDisplayAds.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.googleDisplayAds.implementation.hours[i]} horas de ${services.googleDisplayAds.implementation.skillsAcquired[i]} a ${Math.round(services.googleDisplayAds.implementation.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.googleDisplayAds.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Google Display Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationGoogleDisplayAdsContainer.style.display = "block";
            titleImplementationGoogleDisplayAds.innerHTML = `<u><strong>Google Ads Red de Display</strong>:</u> USD ${Math.round(googleDisplayAdsImplementationValue)}`;
            resultImplementationGoogleDisplayAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += googleDisplayAdsImplementationValue;

            /*----Se completa la información de conversiones----*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleDisplayAdsConversions.innerHTML = `${googleAdsDisplayConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleDisplayAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Google Ads Red de Display:</strong> USD ${investmentGoogleDisplayAdsAmmount.value} de inversión mensual</li>`;

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
                facebookAdsManteinanceValue += services.facebookAds.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.facebookAds.maintenance.hours[i]} horas de ${services.facebookAds.maintenance.skillsAcquired[i]} a ${Math.round(services.facebookAds.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.facebookAds.maintenance.content[i]}</ul>`;
            })
            /*--Se activa el cajon de mantenimiento con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultMaintenanceFacebookAdsContainer.style.display = "block";
            titleMaintenanceFacebookAds.innerHTML = `<u><strong>Facebook Ads</strong>:</u> USD ${Math.round(facebookAdsManteinanceValue)}`;
            resultMaintenanceFacebookAds.innerHTML = `${maintenanceContent}`;

            agencyMonthlyFeeValue += facebookAdsManteinanceValue;

            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            var facebookAdsImplementationValue = 0;
            services.facebookAds.implementation.idSkillsAcquired.forEach((skill, i) => {
                facebookAdsImplementationValue += services.facebookAds.implementation.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                implementationContent += `<ul><li>${services.facebookAds.implementation.hours[i]} horas de ${services.facebookAds.implementation.skillsAcquired[i]} a ${Math.round(services.facebookAds.implementation.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.facebookAds.implementation.content[i]}</ul>`;
            })
            /*--Se activa el cajon de implementación con el sub-cajon de Facebook Ads, inyectando titulo y contenido para el plan seleccionado--*/
            resultImplementationFacebookAdsContainer.style.display = "block";
            titleImplementationFacebookAds.innerHTML = `<u><strong>Facebook Ads</strong>:</u> USD ${Math.round(facebookAdsImplementationValue)}`;
            resultImplementationFacebookAds.innerHTML = `${implementationContent}`;

            agencyOnceFeeValue += facebookAdsImplementationValue;

            /*-Se completa la información de conversiones-*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            facebookAdsConversions.innerHTML = `${facebookAdsConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentFacebookAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="list-style: none; margin-top: 10px"><strong>‣ Facebook Ads:</strong> USD ${investmentFacebookAdsAmmount.value} de inversión mensual</li>`;

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
                services.disenoWeb.maintenance.idSkillsAcquired.forEach((skill, i) => {
                    landingPageManteinanceValue += services.disenoWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.hours[i]} horas de ${services.disenoWeb.maintenance.skillsAcquired[i]} a ${Math.round(services.disenoWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLandingPageContainer.style.display = "block";
                titleMaintenanceLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong>:</u> USD ${Math.round(landingPageManteinanceValue)}`;
                resultMaintenanceLandingPage.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += landingPageManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var landingPageImplementationValue = 0;
                services.disenoWeb.implementation.basic.idSkillsAcquired.forEach((skill, i) => {
                    landingPageImplementationValue += services.disenoWeb.implementation.basic.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.basic.hours[i]} horas de ${services.disenoWeb.implementation.basic.skillsAcquired[i]} a ${Math.round(services.disenoWeb.implementation.basic.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.basic.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Landing Page, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLandingPageContainer.style.display = "block";
                titleImplementationLandingPage.innerHTML = `<u><strong>${services.disenoWeb.implementation.basic.name}</strong>:</u> USD ${Math.round(landingPageImplementationValue)}`;
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
                services.disenoWeb.maintenance.idSkillsAcquired.forEach((skill, i) => {
                    wordpressManteinanceValue += services.disenoWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.hours[i]} horas de ${services.disenoWeb.maintenance.skillsAcquired[i]} a ${Math.round(services.disenoWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceWordpressContainer.style.display = "block";
                titleMaintenanceWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong>:</u> USD ${Math.round(wordpressManteinanceValue)}`;
                resultMaintenanceWordpress.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += wordpressManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var wordpressImplementationValue = 0;
                services.disenoWeb.implementation.intermediate.idSkillsAcquired.forEach((skill, i) => {
                    wordpressImplementationValue += services.disenoWeb.implementation.intermediate.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.intermediate.hours[i]} horas de ${services.disenoWeb.implementation.intermediate.skillsAcquired[i]} a ${Math.round(services.disenoWeb.implementation.intermediate.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.intermediate.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Wordpress, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationWordpressContainer.style.display = "block";
                titleImplementationWordpress.innerHTML = `<u><strong>${services.disenoWeb.implementation.intermediate.name}</strong>:</u> USD ${Math.round(wordpressImplementationValue)}`;
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
                services.disenoWeb.maintenance.idSkillsAcquired.forEach((skill, i) => {
                    customWebsiteManteinanceValue += services.disenoWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.hours[i]} horas de ${services.disenoWeb.maintenance.skillsAcquired[i]} a ${Math.round(services.disenoWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceCustomWebsiteContainer.style.display = "block";
                titleMaintenanceCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong>:</u> USD ${Math.round(customWebsiteManteinanceValue)}`;
                resultMaintenanceCustomWebsite.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += customWebsiteManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var customWebsiteImplementationValue = 0;
                services.disenoWeb.implementation.advanced.idSkillsAcquired.forEach((skill, i) => {
                    customWebsiteImplementationValue += services.disenoWeb.implementation.advanced.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.advanced.hours[i]} horas de ${services.disenoWeb.implementation.advanced.skillsAcquired[i]} a ${Math.round(services.disenoWeb.implementation.advanced.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.advanced.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Custom Website, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationCustomWebsiteContainer.style.display = "block";
                titleImplementationCustomWebsite.innerHTML = `<u><strong>${services.disenoWeb.implementation.advanced.name}</strong>:</u> USD ${Math.round(customWebsiteImplementationValue)}`;
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
                services.disenoWeb.maintenance.idSkillsAcquired.forEach((skill, i) => {
                    ecommerceWebManteinanceValue += services.disenoWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.hours[i]} horas de ${services.disenoWeb.maintenance.skillsAcquired[i]} a ${Math.round(services.disenoWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceEcommerceWebContainer.style.display = "block";
                titleMaintenanceEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong>:</u> USD ${Math.round(ecommerceWebManteinanceValue)}`;
                resultMaintenanceEcommerceWeb.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += ecommerceWebManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var ecommerceWebImplementationValue = 0;
                services.disenoWeb.implementation.ecommerce.idSkillsAcquired.forEach((skill, i) => {
                    ecommerceWebImplementationValue += services.disenoWeb.implementation.ecommerce.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.ecommerce.hours[i]} horas de ${services.disenoWeb.implementation.ecommerce.skillsAcquired[i]} a ${Math.round(services.disenoWeb.implementation.ecommerce.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.ecommerce.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Ecommerce, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationEcommerceWebContainer.style.display = "block";
                titleImplementationEcommerceWeb.innerHTML = `<u><strong>${services.disenoWeb.implementation.ecommerce.name}</strong>:</u> USD ${Math.round(ecommerceWebImplementationValue)}`;
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
                services.disenoWeb.maintenance.idSkillsAcquired.forEach((skill, i) => {
                    logoMarcaManteinanceValue += services.disenoWeb.maintenance.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                    maintenanceContent += `<ul><li>${services.disenoWeb.maintenance.hours[i]} horas de ${services.disenoWeb.maintenance.skillsAcquired[i]} a ${Math.round(services.disenoWeb.maintenance.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.maintenance.content[i]}</ul>`;
                })
                /*--Se activa el cajon de mantenimiento con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultMaintenanceLogoYMarcaContainer.style.display = "block";
                titleMaintenanceLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong>:</u> USD ${Math.round(logoMarcaManteinanceValue)}`;
                resultMaintenanceLogoYMarca.innerHTML = `${maintenanceContent}`;

                agencyMonthlyFeeValue += logoMarcaManteinanceValue;

                /*-para IMPLEMENTACIÓN-*/
                let implementationContent = '';
                var logoMarcaImplementationValue = 0;
                services.disenoWeb.implementation.logoYMarca.idSkillsAcquired.forEach((skill, i) => {
                    logoMarcaImplementationValue += services.disenoWeb.implementation.logoYMarca.hours[i] * skills.averages[skill][countrySupplier.value].averagePrice;

                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/
                    implementationContent += `<ul><li>${services.disenoWeb.implementation.logoYMarca.hours[i]} horas de ${services.disenoWeb.implementation.logoYMarca.skillsAcquired[i]} a ${Math.round(services.disenoWeb.implementation.logoYMarca.skillsPrices[i][countrySupplier.value].averagePrice)} USD la hora, que hace lo siguiente:</li> ${services.disenoWeb.implementation.logoYMarca.content[i]}</ul>`;
                })
                /*--Se activa el cajon de implementación con el sub-cajon de Logo y Marca, inyectando titulo y contenido para el plan seleccionado--*/
                resultImplementationLogoYMarcaContainer.style.display = "block";
                titleImplementationLogoYMarca.innerHTML = `<u><strong>${services.disenoWeb.implementation.logoYMarca.name}</strong>:</u> USD ${Math.round(logoMarcaImplementationValue)}`;
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
            resultInvestmentsMonthlyDetail.innerHTML = "<li style='list-style: circle;'>No has seleccionado ninguna inversión en medios digitales. <small>(Ej: Google Ads Red de Busquedas, Google Ads Red de Display o Facebook Ads)</small></li>";
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
        qs('#bubble-results-message').innerHTML = 'Hace click en un sub-cajón de servicio para ver más...';

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