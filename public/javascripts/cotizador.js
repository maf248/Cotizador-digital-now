/*---Datos estadisticos de paises organizado para programación orientada a objetos---*/
/* DATOS ABSOLUTOS DE ESTADOS UNIDOS COMO REFERENCIA */
const absoluteStatsCountries = {
    eeuu: {
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
        },
        facebookAds: {
            cpa: {
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
            },
            cpc: {
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
/*---Datos de los skills con precios por hora---*/
const skills = {
    names: ["Analista de Marketing Digital", "Analista SEO", "Community Manager", "Redactor", "Diseñador Web UX / UI", "Diseñador Gráfico", "Programador", "Editor de video"],
    prices: [26, 31, 13, 19, 35, 30, 00, 30]
}
/*---Datos de los servicios brindados, organizado para programación orientada a objetos---*/
const services = {
    googleSearchAds: {
        implementationHours: 8,
        maintenanceHours: 4,
        costPerHour: 26,
        implementation: {
            basic: {
                hours: [3],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Creación de cuenta de Google Ads.</li><li>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li>Creación de una campaña con 1 solo anuncio genérico para todas las búsquedas (<a href='https://drive.google.com/file/d/1EvPmLzeFRtriTdwfgtxOTTquk9lGSKIb/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li>Creación de extensiones para las campañas (Link con la dirección de tu negocio y link para que te llamen por celular).</li></ul>"]
            },
            intermediate: {
                hours: [6],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Creación de cuenta de Google Ads.</li><li>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li>Creación de extensiones para las campañas (Link con la dirección de tu negocio y link para que te llamen por celular).</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de diferentes campañas (Hasta 5) según tipos de búsquedas o ubicación geográfica, para concentrar la inversión en las campañas que más conversiones generen y a un costo más bajo.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de estructura de campaña que permita organizar las búsquedas en grupos, y poder hacer hasta 10 anuncios específicos para cada grupo de búsquedas. Se buscará que el texto de los anuncios sea lo más relevante posible a las búsquedas, para generar más clics a tu sitio web. (<a href='https://drive.google.com/file/d/1GXvFiktXQRjPjhB0rgpT0QZcOud83kDu/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>"]
            },
            advanced: {
                hours: [12],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Creación de cuenta de Google Ads.</li><li>Selección de las palabras clave que tengan volumen de búsqueda y sean relevantes para usar en la campaña. Call con el cliente, para determinar inversión mensual y qué búsquedas son relevantes.</li><li>Creación de extensiones para las campañas (Link con la dirección de tu negocio y link para que te llamen por celular).</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6ckdmZEJ0ZDJXUnM/page/VgD/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de diferentes campañas (Hasta 10) según tipos de búsquedas, para concentrar la inversión en las campañas que más conversiones generen y a un costo más bajo.</li><li>Creación de estructura de campaña que permita organizar las búsquedas en grupos, y poder hacer hasta 20 anuncios específicos para cada grupo de búsquedas (<a href='https://drive.google.com/file/d/1anPLmkM4xNm2XXzLLY_owOWoVBaQ8cJI/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [2],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés, podés ver más sobre las concordancias en el siguiente <a href='https://digitalnow.com.ar/google-ads-como-funciona-y-para-que-sirve/' target='_blank'>link</a>). A fin de mes el cliente puede ver un análisis sobre cómo impactó ese cambio.</li></ul>"]
            },
            intermediate: {
                hours: [4],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 2 cambios por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés, podés ver más sobre las concordancias en el siguiente <a href='https://digitalnow.com.ar/google-ads-como-funciona-y-para-que-sirve/' target='_blank'>link</a>). Cada 15 días el cliente puede ver un análisis sobre cómo impactaron los cambios.</li></ul>"]
            },
            advanced: {
                hours: [8],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 4 cambios por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, palabras clave (Búsquedas en las que aparecés), ubicación geográfica y concordancias (qué tan amplio es el abanico de búsquedas similares a tus palabras clave en el cual aparecés, podés ver más sobre las concordancias en el siguiente <a href='https://digitalnow.com.ar/google-ads-como-funciona-y-para-que-sirve/' target='_blank'>link</a>). Semanalmente el cliente puede ver un análisis sobre cómo impactaron los cambios.</li></ul>"]
            }
        }
    },
    googleDisplayAds: {
        implementationHours: 2,
        maintenanceHours: 2,
        costPerHour: 26,
        implementation: {
            basic: {
                hours: [1, 2],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[0], skills.prices[5]],
                content: ["<ul><li>Creación de cuenta de Google Ads.</li><li>Creación de 1 campaña de remarketing (Mostrarle anuncios en sitios web a usuarios que ya entraron a tu sitio web en los últimos 30 días). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formato cuadrado y horizontal para anuncios responsivos (mezcla de imagen y texto).</li><li><a href='https://drive.google.com/drive/folders/15wF9BY4RxRrQ-vEchJDP4V17rw6hp503?usp=sharing' target='_blank'>Ver suma de piezas creativas</a></li></ul>"]
            },
            intermediate: {
                hours: [2, 2, 2],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Creación de cuenta de Google Ads.</li><li>Creación de 1 campaña de remarketing (Mostrarle anuncios en sitios web a usuarios que ya entraron a tu sitio web en los últimos 30 días). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/f6da5210-ceff-411f-a088-28943fb6b9d6/page/s16BB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de hasta 5 campañas segmentadas por intereses de los usuarios y temas de sitios web, para distribuir el presupuesto según la que genere más conversiones.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formato cuadrado y horizontal para anuncios responsivos (mezcla de imagen y texto).</li></ul>", "<ul><li>Creación de video de 30 segundos en formato apaisado que se muestra en sitios web como anuncio (<a href='https://drive.google.com/file/d/1il1GW3U0HTOIy76mtOSmEEwNYXda6_CL/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li><a href='https://drive.google.com/drive/folders/131EO5sr8BXx1si4fRHetLhPWHeNHaZI4?usp=sharing' target='_blank'>Ver ejemplo de piezas creativas que se entregan</a></li></ul>"]
            },
            advanced: {
                hours: [2, 6, 4],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Creación de cuenta de Google Ads.</li><li>Creación de 1 campaña de remarketing (Mostrarle anuncios en sitios web a usuarios que ya entraron a tu sitio web en los últimos 30 días). (<a href='https://drive.google.com/file/d/1zvy-_UYBC1VWbIqEszWUhvuzPcU3FNXl/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li><li>Medición de acciones relevantes para tu negocio en tu sitio web (Conversiones). Por ejemplo, cuando arrancan el carrito, hacen una compra, completan un formulario o te contactan por el chat de la web.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/f6da5210-ceff-411f-a088-28943fb6b9d6/page/s16BB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Creación de hasta 5 campañas segmentadas por intereses de los usuarios y temas de sitios web, para distribuir el presupuesto según la que genere más conversiones.</li></ul>", "<ul><li>Creación de 3 piezas gráficas en formatos cuadrado y horizontal (6 en total) para anuncios responsivos (mezcla de imagen y texto).</li></ul>", "<ul><li>Creación de 2 videos de 30 segundos en formato apaisado y 1 video en formato vertical (Readaptación) que se muestra en sitios web como anuncio (<a href='https://drive.google.com/file/d/1il1GW3U0HTOIy76mtOSmEEwNYXda6_CL/view?usp=sharing' target='_blank'>Ver ejemplo</a>)</li></ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [2],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>"]
            },
            intermediate: {
                hours: [4],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[0], skills.prices[5]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formatos cuadrado y horizontal.</li></ul>"]
            },
            advanced: {
                hours: [8],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 2 cambios por mes (Uno cada 15 días) para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica y piezas creativas. Después de 15 días el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formatos cuadrado y horizontal.</li></ul>", "<ul><li>Creación de 1 video en formato apaisado.</li></ul>"]
            }
        }
    },
    facebookAds: {
        implementationHours: 8,
        maintenanceHours: 4,
        costPerHour: 26,
        implementation: {
            basic: {
                hours: [2, 2],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[0], skills.prices[5]],
                content: ["<ul><li>Creación de cuenta de Facebook Ads.</li><li>Implementación de pixel de facebook para usar públicos como usuarios que ya entraron a tu sitio web o usuarios similares a los ya entraron a tu sitio web.</li><li>Creación de estructura de campaña para invertir un 70% en usuarios nuevos (No entraron a tu sitio ni a tus redes sociales) y un 30% en usuarios que ya entraron a tu sitio web o ya interactuaron con tus redes sociales.</li></ul>", "<ul><li>Creación de 1 pieza gráfica en formatos cuadrado (Para feed) y vertical (Para stories) y de un anuncio de texto.</li><li><a href='https://drive.google.com/drive/folders/1zgJiT2dnypW3kAKUDmWyuyEN7zp8KZ47?usp=sharing' target='_blank'>Ver ejemplo de entregables</a></li></ul>"]
            },
            intermediate: {
                hours: [6, 4],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[0], skills.prices[5]],
                content: ["<ul><li>Creación de cuenta de Facebook Ads.</li><li>Implementación de pixel de facebook para usar públicos como usuarios que ya entraron a tu sitio web o usuarios similares a los ya entraron a tu sitio web.</li><li>Creación de estructura de campaña para invertir un 70% en usuarios nuevos (No entraron a tu sitio ni a tus redes sociales) y un 30% en usuarios que ya entraron a tu sitio web o ya interactuaron con tus redes sociales.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0BzjchXrR5ZQca013LXdWZzQ4cEU/page/UwsTB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Medición de conversiones (Acciones que querés que el usuario haga en tu sitio web, como una compra online o completar un formulario).</li><li>Redacción de textos diferentes de manera estratégica (10 textos en total) teniendo en cuenta si los usuarios ya entraron a la web o no.</li></ul>", "<ul><li>Se harán piezas creativas diferentes (2 sets de piezas gráficas en formatos cuadrado y vertical, 4 en total), teniendo en cuenta si los usuarios ya entraron a la web o no.</li><li><a href='https://drive.google.com/drive/folders/14atx8oJwDeypPzA49ISyET6KsONJZfPk?usp=sharing' target='_blank'>Ver ejemplos de entregables</a></li></ul>"]
            },
            advanced: {
                hours: [6, 6, 2],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Creación de cuenta de Facebook Ads.</li><li>Implementación de pixel de facebook para usar públicos como usuarios que ya entraron a tu sitio web o usuarios similares a los ya entraron a tu sitio web.</li><li>Creación de estructura de campaña para invertir un 70% en usuarios nuevos (No entraron a tu sitio ni a tus redes sociales) y un 30% en usuarios que ya entraron a tu sitio web o ya interactuaron con tus redes sociales.</li><li>Creación de dashboard de Google Data Studio (<a href='https://datastudio.google.com/u/0/reporting/0BzjchXrR5ZQca013LXdWZzQ4cEU/page/UwsTB/preview' target='_blank'>Ver ejemplo</a>)</li><li>Medición de conversiones (Acciones que querés que el usuario haga en tu sitio web, como una compra online o completar un formulario).</li><li>Redacción de textos diferentes de manera estratégica (10 textos en total) teniendo en cuenta si los usuarios ya entraron a la web o no.</li></ul>", "<ul><li>Se harán piezas creativas diferentes (2 sets de piezas gráficas en formatos cuadrado, vertical y horizontal, 6 en total), teniendo en cuenta si los usuarios ya entraron a la web o no.</li><li><a href='https://drive.google.com/drive/folders/14atx8oJwDeypPzA49ISyET6KsONJZfPk?usp=sharing' target='_blank'>Ver ejemplos de entregables</a></li></ul>", "<ul><li>Se harán piezas creativas diferentes (2 sets de piezas gráficas en formatos cuadrado, vertical y horizontal, 6 en total), teniendo en cuenta si los usuarios ya entraron a la web o no.</li><li><a href='https://drive.google.com/drive/folders/14atx8oJwDeypPzA49ISyET6KsONJZfPk?usp=sharing' target='_blank'>Ver ejemplos de entregables</a></li></ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [2],
                skillsAcquired: ["Analista de Marketing Digital"],
                skillsPrices: [skills.prices[0]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>"]
            },
            intermediate: {
                hours: [2, 2],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[0], skills.prices[5]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 1 cambio por mes para intentar mejorar la performance como modificar el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas. A fin de mes el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de pieza gráfica en formato cuadrado y vertical.</li></ul>"]
            },
            advanced: {
                hours: [4, 3, 1],
                skillsAcquired: ["Analista de Marketing Digital", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[0], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Cambios solicitados por el cliente (Sin que supere el tiempo contratado)</li><li>Incluye 2 cambios por mes para intentar mejorar la performance como modificaciones en el presupuesto, url finales, texto de anuncios, audiencia, ubicación geográfica, estrategia de puja y piezas creativas. Cada 15 días el cliente recibe un análisis sobre cómo impactó ese cambio.</li></ul>", "<ul><li>Creación de pieza gráfica en formato cuadrado, vertical y horizontal. </li></ul>", "<ul><li></li>Creación de video de menos de 15 seg  en formato vertical (Adaptable a 4:5)</ul>"]
            }
        }
    },
    communityManagement: {
        skillsAcquired: ["Community Management", "Redacciones", "Creación de piezas gráficas (3 Carrousels y 8 gráficas individuales)", "Creación de 1 video (Menos de 30 seg)"],
        implementationHours: [8, 0, 0, 0],
        maintenanceHours: [8, 4, 24, 4],
        costPerHour: [13, 19, 30, 30],
        implementation: {
            basic: {
                hours: [2],
                skillsAcquired: ["Community Manager"],
                skillsPrices: [skills.prices[2]],
                content: ["<ul><li>Análisis de competidores y sugerencia de ideas. Se entrega un Google Doc con capturas de imagen de 400 palabras</li><li>1 Call con el cliente de intercambio de opiniones.</li></ul>"]
            },
            intermediate: {
                hours: [4],
                skillsAcquired: ["Community Manager"],
                skillsPrices: [skills.prices[2]],
                content: ["<ul><li>Análisis de competidores y sugerencia de ideas. Se entregan 2 Google Doc con capturas de imagen de 400 palabras y se hacen 2 calls de revisión.</li></ul>"]
            },
            advanced: {
                hours: [8],
                skillsAcquired: ["Community Manager"],
                skillsPrices: [skills.prices[2]],
                content: ["<ul><li>Análisis de competidores y sugerencia de ideas. Se entregan 3 Google Doc con capturas de imagen de 400 palabras y se hacen 3 calls de revisión.</li></ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [7, 1],
                skillsAcquired: ["Community Manager", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[2], skills.prices[5]],
                content: ["<ul><li>Creación de calendario de 12 publicaciones (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank'>Ver ejemplo</a>), 12 redacciones para feed y publicación de contenido en 1 red social (Si es Instagram, se puede publicar en Instagram y Facebook). Se publicará contenido provisto por el cliente (Fotos, videos), o contenido de Internet con pequeños retoques. Todo el contenido del feed (12 publicaciones) se republicará también en stories con un link que redirecciona al feed. Incluye gestión de la cuenta (Responder comentarios en publicaciones e interactuar con perfiles que interactúan con publicaciones de la competencia).</li></ul>", "<ul><li>Retoques a contenido provisto por el cliente o sacado de internet.</li></ul>"]
            },
            intermediate: {
                hours: [8, 10, 2],
                skillsAcquired: ["Community Manager", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[2], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Creación de calendario de 12 publicaciones (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank'>Ver ejemplo</a>), 12 redacciones para feed y publicación de contenido en 1 red social (Si es Instagram, se puede publicar en Instagram y Facebook). Todo el contenido del feed (12 publicaciones) se republicará también en stories con un link que redirecciona al feed. Incluye gestión de la cuenta (Responder comentarios en publicaciones e interactuar con perfiles que interactúan con publicaciones de la competencia).</li></ul>", "<ul><li>Creación de 10 piezas gráficas individuales</li></ul>", "<ul><li>Dos videos en formato vertical para reels (Menos de 30 segundos)</li></ul>"]
            },
            advanced: {
                hours: [10, 27, 3],
                skillsAcquired: ["Community Manager", "Diseñador Gráfico", "Editor de video"],
                skillsPrices: [skills.prices[2], skills.prices[5], skills.prices[7]],
                content: ["<ul><li>Creación de calendario de 12 publicaciones (<a href='https://docs.google.com/spreadsheets/d/1aXf8BCOerxx0kOKmgUscE4ryAEqYGoaKi2tY-j-nfkU/edit?usp=sharing' target='_blank'>Ver ejemplo</a>), 12 redacciones para feed y publicación de contenido en 1 red social (Si es Instagram, se puede publicar en Instagram y Facebook). Todo el contenido del feed (12 publicaciones) se republicará también en stories con un link que redirecciona al feed y también se publicarán 8 historias adicionales (Encuestas, cuestionarios y piezas gráficas simples). Incluye gestión de la cuenta (Responder comentarios en publicaciones e interactuar con perfiles que interactúan con publicaciones de la competencia).</li></ul>", "<ul><li>Creación de 10 piezas gráficas individuales para feed y 4 piezas gráficas simples para stories.</li><li>Creación de 4 carrousels (Entre 5 y 10 piezas gráficas cada uno)</li></ul>", "<ul><li>Dos videos en formato vertical para reels (Menos de 30 segundos)</li><li>1 video de plantilla para encuestas y cuestionarios en stories</li></ul>"]
            }
        }
    },
    seo: {
        implementation: {
            basic: {
                hours: [4],
                skillsAcquired: ["Analista SEO"],
                skillsPrices: [skills.prices[1]],
                content: ["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Auditoría técnica general de sitio web usando <a href='https://neilpatel.com/ubersuggest/' target='_blank'>Ubersuggest</a>, que es una herramienta de Neil Patel que analiza hasta 132 aspectos técnicos de tu sitio web como por ejemplo, la velocidad de carga, cantidad de palabras de páginas y cantidad de palabras dentro de etiquetas title. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank'>Ver ejemplo de auditoría</a></li><li>Implementación de cambios para mejorar la performance según la auditoría técnica.</li><li>Cambio de contenido en etiquetas &lt;title&gt;, &lt;h1&gt; y texto de tu homepage para posicionarte en búsquedas de google de manera estratégica en base al análisis de palabras clave.</li></ul>"]
            },
            intermediate: {
                hours: [8],
                skillsAcquired: ["Analista SEO"],
                skillsPrices: [skills.prices[1]],
                content: ["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Auditoría técnica general de sitio web usando <a href='https://neilpatel.com/ubersuggest/' target='_blank'>Ubersuggest</a>, que es una herramienta de Neil Patel que analiza hasta 132 aspectos técnicos de tu sitio web como por ejemplo, la velocidad de carga, cantidad de palabras de páginas y cantidad de palabras dentro de etiquetas title. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank'>Ver ejemplo de auditoría</a></li><li>Cambio de contenido en etiquetas &lt;title&gt;, &lt;h1&gt; y texto de tu homepage en hasta 10 páginas de tu sitio web.</li><li>Optimización de alt de imágenes.</li><li>Análisis de palabras clave y secciones web de la competencia que más tráfico generen para copiar lo que funciona (3 competidores)</li><li>Solución de problemas detectados en la auditoría de Ubersuggest de hasta 5 páginas de tu sitio web.</li><ul>"]
            },
            advanced: {
                hours: [16],
                skillsAcquired: ["Analista SEO"],
                skillsPrices: [skills.prices[1]],
                content: ["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Auditoría técnica general de sitio web usando <a href='https://neilpatel.com/ubersuggest/' target='_blank'>Ubersuggest</a>, que es una herramienta de Neil Patel que analiza hasta 132 aspectos técnicos de tu sitio web como por ejemplo, la velocidad de carga, cantidad de palabras de páginas y cantidad de palabras dentro de etiquetas title. <a href='https://drive.google.com/file/d/1Xi63s89YuZv7v2s-Xc-1H2laM5H0x56-/view?usp=sharing' target='_blank'>Ver ejemplo de auditoría</a></li><li>Cambio de contenido en etiquetas &lt;title&gt;, &lt;h1&gt; y texto de tu homepage en hasta 10 páginas de tu sitio web.</li><li>Optimización de alt de imágenes.</li><li>Análisis de palabras clave y secciones web de la competencia que más tráfico generen para copiar lo que funciona (6 competidores)</li><li>Solución de problemas detectados en la auditoría de Ubersuggest de hasta 10 páginas de tu sitio web.</li><ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [2, 4, 2],
                skillsAcquired: ["Analista SEO", "Redactor", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[1], skills.prices[3], skills.prices[5]],
                content: ["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Análisis de palabras clave y contenidos web de la competencia que más tráfico generen para copiar lo que funciona (3 competidores).</li><li>Contacto con blogs de rubros afines buscando hacer colaboraciones usando ONE 2 Lead (Automation tool de linkedin, U$ 15 por mes) para conseguir links a tu sitio web (Link-building)</li></ul>", "<ul><li>Redacción de 1 publicación para blog de 1000 palabras. <a href='https://digitalnow.com.ar/posicionamiento-web-en-google-seo/' target='_blank'>Ver ejemplo</a></li></ul>", "<ul><li>Creación de dos piezas gráficas (1 infografía y portada)</li><li><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank'>Ver ejemplo de infografías</a> ,  <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank'>Ver ejemplo de portadas</a></li></ul>"]
            },
            intermediate: {
                hours: [4, 8, 4],
                skillsAcquired: ["Analista SEO", "Redactor", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[1], skills.prices[3], skills.prices[5]],
                content: ["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Análisis de palabras clave y contenidos web de la competencia que más tráfico generen para copiar lo que funciona (6 competidores).</li><li>Contacto con blogs de rubros afines buscando hacer colaboraciones usando ONE 2 Lead (Automation tool de linkedin, U$ 15 por mes) para conseguir links a tu sitio web (Link-building)</li></ul>", "<ul><li>Redacción de 2 publicaciones para blog de 1000 palabras.</li></ul>", "<ul><li>Creación de 4 piezas gráficas (2 infografías y 2 portadas)</li><li>Creación de 2 infografías para que otros blogs de rubros afines puedan incluirla con un link a tu sitio web.</li><li><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank'>Ver ejemplo de infografías</a> ,  <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank'>Ver ejemplo de portadas</a></li></ul>"]
            },
            advanced: {
                hours: [8, 16, 12],
                skillsAcquired: ["Analista SEO", "Redactor", "Diseñador Gráfico"],
                skillsPrices: [skills.prices[1], skills.prices[3], skills.prices[5]],
                content: ["<ul><li>Análisis de búsquedas en las cuales te interesa posicionarte teniendo en cuenta volumen, dificultad de posicionarse, relevancia y costo por clic estimado. Se buscarán palabras clave relevantes, de alto volumen, baja dificultad de posicionarse y costo por clic alto.</li><li>Análisis de palabras clave y contenidos web de la competencia que más tráfico generen para copiar lo que funciona (12 competidores).</li><li>Contacto con blogs de rubros afines buscando hacer colaboraciones usando ONE 2 Lead (Automation tool de linkedin, U$ 15 por mes) para conseguir links a tu sitio web (Link-building)</li></ul>", "<ul><li>Redacción de 4 publicaciones para blog de 1000 palabras.</li></ul>", "<ul><li>Creación de 8 piezas gráficas (4 infografías y 4 portadas)</li><li><a href='https://drive.google.com/drive/folders/1rQn2MLzdCdeKNcGda5qajIX1jVZHFtpl?usp=sharing' target='_blank'>Ver ejemplo de infografías</a> , <a href='https://drive.google.com/drive/folders/1q0vPeT2uTMWIB1qcGgBh8x7hB7dZkGfr?usp=sharing' target='_blank'>Ver ejemplo de portadas</a></li><li>Creación de 2 infografías para que otros blogs de rubros afines puedan incluirla con un link a tu sitio web.</li><li>Creación de 2 gifs para cada publicación para hacer la lectura más amable: <a href='https://digitalnow.com.ar/como-hacer-una-campana-en-google-ads/' target='_blank'>Ver ejemplo</a></li></ul>"]
            }
        }
    },
    conversionWeb: {
        skillsAcquired: ["Google Ads / Facebook Ads", "Diseño Web UX / UI"],
        implementationHours: [0, 0],
        maintenanceHours: [4, 8],
        costPerHour: [26, 35],
        implementation: {
            basic: {
                hours: [4],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                content: ["<ul><li>Diagnóstico de buenas prácticas de usabilidad y accesibilidad haciendo análisis de contenido, análisis de diseño visual, análisis de interacción y análisis de temas técnicos. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank'>Ver Plantilla de Diagnóstico</a></li></ul>"]
            },
            advanced: {
                hours: [16],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                content: ["<ul><li>Diagnóstico de buenas prácticas de usabilidad y accesibilidad haciendo análisis de contenido, análisis de diseño visual, análisis de interacción y análisis de temas técnicos. <a href='https://docs.google.com/spreadsheets/d/1ZlBsT4XKX11L22I8ojC06DcgsJOeAYjOkUmVmv5mcck/edit?usp=sharing' target='_blank'>Ver Plantilla de Diagnóstico</a><br>Implementación de mejoras en tu sitio web en base al diagnóstico.</li></ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [4],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                content: ["<ul><li>Implementación de 1 experimento con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li></ul>"]
            },
            intermediate: {
                hours: [8],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                content: ["<ul><li>Implementación de 2 experimentos con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li></ul>"]
            },
            advanced: {
                hours: [12],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                content: ["<ul><li>Implementación de 3 experimentos con dos versiones (Una con un cambio que apunta a mejorar la performance y otra sin) de tu sitio web al mismo tiempo usando Google optimize y Google Analytics.</li></ul>"]
            }
        }
    },
    disenoWeb: {
        implementation: {
            basic: {
                hours: [10],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                name: "Landing Page",
                content: ["<ul><li>Implementación de plantilla prediseñada de 1 sola página usando algún CMS (Content Management System) como Wordpress o Wix, de arrastrar y soltar.</li></ul>"]
            },
            intermediate: {
                hours: [25],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                name: " Sitio web de 5 secciones en base a plantilla prediseñada",
                content: ["<ul><li>Implementación de sitio web de 5 secciones usando alguna plantilla prediseñada de Wordpress. Incluye diseño de piezas gráficas que sean necesarias. <a href='https://gaudirjohnson.com.ar/' target='_blank'>Ver ejemplo</a></li></ul>"]
            },
            advanced: {
                hours: [50],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                name: "Sitio web con diseño personalizado",
                content: ["<ul><li>Diseño de varias versiones de prototipo en Figma <a href='https://www.figma.com/file/UXhBSaXoO8LeMYrQgFYO9F/Burplaza?node-id=0%3A1' target='_blank'>(Ver ejemplo)</a> call con el cliente de revisión e implementación de sitio web en Wordpress con hasta 3 revisiones por parte del cliente.</li></ul>"]
            },
            ecommerce: {
                hours: [50],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                name: "Sitio web de Ecommerce en CMS como WooCommerce o Shopify",
                content: ["<ul><li>Incluye carga de hasta 50 productos en el sitio web.</li></ul>"]
            },
            logoYMarca: {
                hours: [10],
                skillsAcquired: ["Diseñador gráfico"],
                skillsPrices: [skills.prices[5]],
                name: "Diseño de logo e identidad de marca",
                content: ["<ul><li>Tipografía, logo en diferentes formatos, paleta de colores y concepto. Hasta 3 revisiones. <a href='https://drive.google.com/file/d/1gyONia_qKjM6mqoJHe_AnGRGMPbicQnv/view?usp=sharing' target='_blank'>Ver ejemplo</a></li></ul>"]
            }
        },
        maintenance: {
            basic: {
                hours: [2],
                skillsAcquired: ["Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[4]],
                content: ["<ul><li>Actualización de plugins, actualización de contenido en imagen y texto, y arreglo de errores.</li></ul>"]
            }
        }
    },
    emailMarketing: {
        maintenance: {
            basic: {
                hours: [1, 0.5, 0.5],
                deliversPerMonth: 1,
                skillsAcquired: ["Diseñador Gráfico", "Redactor", "Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[5], skills.prices[3], skills.prices[4]],
                content: ["<ul><li>1 pieza gráfica en formato estático (JPG) o dinámico (GIF)</li></ul>", "<ul><li>Redacción de textos para envío de email.</li></ul>", "<ul><li>Implementación de imágenes y textos en plantilla prediseñada.</li></ul>"]
            },
            intermediate: {
                hours: [2, 1, 1],
                deliversPerMonth: 2,
                skillsAcquired: ["Diseñador Gráfico", "Redactor", "Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[5], skills.prices[3], skills.prices[4]],
                content: ["<ul><li>2 pieza gráfica en formato estático (JPG) o dinámico (GIF)</li></ul>", "<ul><li>Redacción de textos para envío de email.</li></ul>", "<ul><li>Implementación de imágenes y textos en plantilla prediseñada.</li></ul>"]
            },
            advanced: {
                hours: [4, 2, 2],
                deliversPerMonth: 4,
                skillsAcquired: ["Diseñador Gráfico", "Redactor", "Diseñador Web UX / UI"],
                skillsPrices: [skills.prices[5], skills.prices[3], skills.prices[4]],
                content: ["<ul><li>2 pieza gráfica en formato estático (JPG) o dinámico (GIF)</li></ul>", "<ul><li>Redacción de textos para envío de email.</li></ul>", "<ul><li>Implementación de imágenes y textos en plantilla prediseñada.</li></ul>"]
            }
        }
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
var communityManagement = qs('#communityManagement');
var seo = qs('#seo');
var conversionWeb = qs('#conversionWeb');
var disenoWeb = qs('#disenoWeb')
var email = qs('#email');
/*--Contenedor de servicios disenoWeb--*/
var disenoWebServicesContainer = qs('#disenoWebServicesContainer');

/*---Se capturan los CONTENEDORES de los distintos resultados---*/
var googleFacebookAdsResultContainer = qs('#result-googleads-facebookads-container');

var googleSearchAdsResultContainer = qs('#result-google-search-ads-container');
var googleDisplayAdsResultContainer = qs('#result-google-display-ads-container');
var facebookAdsResultContainer = qs('#result-facebook-ads-container');

var resultAgencyOnceFeeContainer = qs('#result-agency-once-fee-container');
var resultAgencyMonthlyFeeContainer = qs('#result-agency-monthly-fee-container');
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
var investmentGoogleSearchAdsAmmount = qs('#investment-google-search-ads input[type="number"]');
var investmentGoogleDisplayAdsAmmount = qs('#investment-google-display-ads input[type="number"]');
var investmentFacebookAdsAmmount = qs('#investment-facebook-ads input[type="number"]');

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

/*--Se capturan los resultados numericos de cada servicio--*/
var resultAgencyOnceFee = qs('#result-agency-once-fee');
var resultAgencyMonthlyFee = qs('#result-agency-monthly-fee');
var resultInvestmentsMonthly = qs('#result-investments-monthly');
var resultMonthlyTotal = qs('#result-monthly-total');

/*--Se capturan los resultados numericos de las conversiones --*/
var googleSearchAdsConversions = qs('#google-search-ads-conversions');
var googleDisplayAdsConversions = qs('#google-display-ads-conversions');
var facebookAdsConversions = qs('#facebook-ads-conversions');
var totalConversions = qs('#total-conversions');

/*--Se capturan los contenedores de detalles de resultados p/ c/ servicio--*/
var resultAgencyOnceFeeDetail = qs("#result-agency-once-fee-details");
var resultAgencyMonthlyFeeDetail = qs("#result-agency-monthly-fee-details");
var resultInvestmentsMonthlyDetail = qs("#result-investments-monthly-details");
var resultMonthlyTotalDetail = qs('#result-monthly-total-detail');

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
email.addEventListener('change', function() {
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
var industryAdsAndCountrySelectorContainer = qs('#industry-and-country-selectors-container');
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
        if (countryAnnounce.value == '') {
            errorMessages.innerHTML = 'Debes seleccionar un país de la lista desplegable y agregarlo con "+"';
            setTimeout(function(){ errorMessages.innerHTML = '';}, 4000);
        } else {
            console.log(`El país &nbsp;<strong>${countryAnnounce.value}</strong>&nbsp; no es una opción, selecciona un país de la lista`)
            errorMessages.innerHTML = `El país &nbsp;<strong>${countryAnnounce.value}</strong>&nbsp; no es una opción, selecciona un país de la lista`;
            setTimeout(function(){ errorMessages.innerHTML = ''; countryAnnounce.value = '';}, 3500);
        }
        
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
var formContainer = qs('#form-calculate-container');
var resultsContainer = qs('#results-container');

/*--Evento general para validar si mostrar resultados o no, y actualizar los mismos en base a lo seleccionado---*/
var calculateButton = qs('#calculateButton');
var calculateAgainButton = qs('#calculateAgainButton');

calculateAgainButton.addEventListener('click', function() {
        formContainer.style.height = 'auto';
        formContainer.style.opacity = '1';
        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';
        calculateAgainButton.classList.add("d-none");
        calculateButton.style.display = 'block';
})

disenoWeb.addEventListener('change', function() {
    if (this.checked) {
        disenoWebServicesContainer.style.display = 'flex';
    } else {
        disenoWebServicesContainer.style.display = 'none';
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

    resultAgencyOnceFeeDetail.innerHTML = '';
    resultAgencyMonthlyFeeDetail.innerHTML = '';
    resultInvestmentsMonthlyDetail.innerHTML = '';
    resultMonthlyTotalDetail.innerHTML = '';

    /*---Se valida que esten todas las etapas seleccionadas, para mostrar los resultados u ocultarlos---*/
    if (completeFormValidate.includes(false)) {

        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';

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
            errorMessages.innerHTML = 'Debes introducir montos a invertir en Google Ads Search, Google Ads Display y Facebook Ads   ';
            errorType = 6;
        } else if (completeFormValidate[5] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Google Ads Search';
            errorType = 6;
        } else if (completeFormValidate[6] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Google Ads Display';
            errorType = 7;
        } else if (completeFormValidate[7] == false) {
            errorMessages.innerHTML = 'Debes introducir el monto a invertir en Facebook Ads';
            errorType = 8;
        }
      
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

    /*--Array que colecciona los servicios con fee de mantenimiento MENSUAL seleccionadas--*/
    var arrayAgencyMantainanceSelected = [];
    /*--Array que colecciona las inversiones MENSUALES seleccionadas--*/
    var arrayInvestmentSelected = [];

    /*--Ya calculadas las conversiones particulares (google display, google search y facebook), se suman en conversion total--*/
    totalConversionsValue = googleAdsSearchConversionsValue + googleAdsDisplayConversionsValue + facebookAdsConversionsValue;

    if ((googleSearchAds.checked || googleDisplayAds.checked || facebookAds.checked || communityManagement.checked || seo.checked || conversionWeb.checked || disenoWeb.checked || email.checked) && !completeFormValidate.includes(false)) {

        /*---Se muestran los resultados particulares de email marketing solamente si esta opcion fue seleccionada---*/
        if (email.checked) {
            /*--Se ocultan los fees de implementacion (por unica vez), ya que este plan no tiene---*/
            resultAgencyOnceFeeContainer.style.display = "none";
            /*--Muestra el valor correspondiente a la cantidad de contactos seleccionados---*/
            totalInvestmentMonthly += Number(emailAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Email Marketing</strong> USD ${emailAmmount.value} de inversión mensual <small>(Campaña para ${emailAmmount.options[emailAmmount.selectedIndex].text} contactos)</small></li>`;

            maintenanceContent = '';
            emailMarketingValueToPush = 0;
            services.emailMarketing.maintenance[emailMarketingPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        emailMarketingValueToPush += services.emailMarketing.maintenance[emailMarketingPlan.value].hours[i] * skills.prices[j];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/
                maintenanceContent += `<ul><li>${services.emailMarketing.maintenance[emailMarketingPlan.value].hours[i]} horas de ${services.emailMarketing.maintenance[emailMarketingPlan.value].skillsAcquired[i]} a ${services.emailMarketing.maintenance[emailMarketingPlan.value].skillsPrices[i]} USD la hora, que hace lo siguiente:</li> ${services.emailMarketing.maintenance[emailMarketingPlan.value].content[i]}</ul>`;
            })
            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><u><strong>‣ Email Marketing </strong> (Plan ${emailMarketingPlan.options[emailMarketingPlan.selectedIndex].text} - ${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth} ${services.emailMarketing.maintenance[emailMarketingPlan.value].deliversPerMonth <= 1 ? 'envío mensual' : 'envíos mensuales'}):</u> ${maintenanceContent}</li>`;

            /*--Se guardan los nombres y valores de inversion y fees mensuales--*/
            arrayInvestmentSelected.push({
                name: "Email Marketing",
                value: emailAmmount.value
            });
            agencyMonthlyFeeValue += emailMarketingValueToPush;
            /*--Se guardan los valores de mantenimiento para mostrar en el contenedor "costo total mensual"--*/
            arrayAgencyMantainanceSelected.push({
                name: "Email Marketing",
                value: emailMarketingValueToPush
            });
        }
        /*---Se muestran los resultados particulares de conversion web solamente si esta opcion fue seleccionada---*/
        if (conversionWeb.checked) {
            var conversionWebManteinanceValue = 0;
            var conversionWebImplementationValue = 0;
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            let maintenanceContent = '';
            services.conversionWeb.maintenance[conversionWebPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        conversionWebManteinanceValue += services.conversionWeb.maintenance[conversionWebPlan.value].hours[i] * skills.prices[j];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/ 
                maintenanceContent += `<ul><li>${services.conversionWeb.maintenance[conversionWebPlan.value].hours[i]} horas de ${services.conversionWeb.maintenance[conversionWebPlan.value].skillsAcquired[i]} a ${services.conversionWeb.maintenance[conversionWebPlan.value].skillsPrices[i]} USD la hora, que hace lo siguiente:</li> ${services.conversionWeb.maintenance[conversionWebPlan.value].content[i]}</ul>`;
            })
            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            if (conversionWebPlan.value == 'basic' || conversionWebPlan.value == 'advanced') {
                resultAgencyOnceFeeContainer.style.display = "block";

                services.conversionWeb.implementation[conversionWebPlan.value].skillsAcquired.forEach((skill, i) => {
                    skills.names.forEach((name, j) => {
                        if (skill == name) {
                            conversionWebImplementationValue += services.conversionWeb.implementation[conversionWebPlan.value].hours[i] * skills.prices[j];
                        }
                    })
                    /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/ 
                    implementationContent += `<ul><li>${services.conversionWeb.implementation[conversionWebPlan.value].hours[i]} horas de ${services.conversionWeb.implementation[conversionWebPlan.value].skillsAcquired[i]} a ${services.conversionWeb.implementation[conversionWebPlan.value].skillsPrices[i]} USD la hora, que hace lo siguiente:</li> ${services.conversionWeb.implementation[conversionWebPlan.value].content[i]}</ul>`;
                })
                /*-Se cargan los resultados de implementacion para este servicio con el plan seleccionado-*/
                resultAgencyOnceFeeDetail.innerHTML += `<li style="margin-top: 10px"><u><strong>‣ Optimización de tasa de conversión web </strong> (Plan ${conversionWebPlan.options[conversionWebPlan.selectedIndex].text}):</u> ${implementationContent}</li>`;
                agencyOnceFeeValue += conversionWebImplementationValue;
                
            } else {
                resultAgencyOnceFeeContainer.style.display = "none";
            }
            
          
            /*-Se cargan los resultados de mantenimiento para este servicio con el plan seleccionado-*/
            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><u><strong>‣ Optimización de tasa de conversión web </strong> (Plan ${conversionWebPlan.options[conversionWebPlan.selectedIndex].text}):</u> ${maintenanceContent}</li>`;
            agencyMonthlyFeeValue += conversionWebManteinanceValue;
            
            /*--Se guardan los valores de mantenimiento para mostrar en el contenedor "costo total mensual"--*/
            arrayAgencyMantainanceSelected.push({
                name: "Optimización de tasa de conversión web",
                value: conversionWebManteinanceValue
            });
        }
        /*---Se muestran los resultados particulares de SEO solamente si esta opcion fue seleccionada---*/
        if (seo.checked) {
            var seoManteinanceValue = 0;
            var seoImplementationValue = 0;
            /*--Se muestran los fees de implementacion (por unica vez)---*/
            resultAgencyOnceFeeContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            /*-para MANTENIMIENTO-*/
            let maintenanceContent = '';
            services.seo.maintenance[seoPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        seoManteinanceValue += services.seo.maintenance[seoPlan.value].hours[i] * skills.prices[j];
                    }
                })
                /*--Se genera la descripcion de mantenimiento mensual para este servicio en el plan seleccionado---*/ 
                maintenanceContent += `<ul><li>${services.seo.maintenance[seoPlan.value].hours[i]} horas de ${services.seo.maintenance[seoPlan.value].skillsAcquired[i]} a ${services.seo.maintenance[seoPlan.value].skillsPrices[i]} USD la hora, que hace lo siguiente:</li> ${services.seo.maintenance[seoPlan.value].content[i]}</ul>`;
            })
            /*-para IMPLEMENTACIÓN-*/
            let implementationContent = '';
            services.seo.implementation[seoPlan.value].skillsAcquired.forEach((skill, i) => {
                skills.names.forEach((name, j) => {
                    if (skill == name) {
                        seoImplementationValue += services.seo.implementation[seoPlan.value].hours[i] * skills.prices[j];
                    }
                })
                /*--Se genera la descripcion de implementación para este servicio en el plan seleccionado---*/ 
                implementationContent += `<ul><li>${services.seo.implementation[seoPlan.value].hours[i]} horas de ${services.seo.implementation[seoPlan.value].skillsAcquired[i]} a ${services.seo.implementation[seoPlan.value].skillsPrices[i]} USD la hora, que hace lo siguiente:</li> ${services.seo.implementation[seoPlan.value].content[i]}</ul>`;
            })
          
            /*-Se cargan los resultados de mantenimiento para este servicio con el plan seleccionado-*/
            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><u><strong>‣ SEO </strong> (Plan ${seoPlan.options[seoPlan.selectedIndex].text}):</u> ${maintenanceContent}</li>`;
            agencyMonthlyFeeValue += seoManteinanceValue;
            /*-Se cargan los resultados de implementacion para este servicio con el plan seleccionado-*/
            resultAgencyOnceFeeDetail.innerHTML += `<li style="margin-top: 10px"><u><strong>‣ SEO </strong> (Plan ${seoPlan.options[seoPlan.selectedIndex].text}):</u> ${implementationContent}</li>`;
            agencyOnceFeeValue += seoImplementationValue;
            /*--Se guardan los valores de mantenimiento para mostrar en el contenedor "costo total mensual"--*/
            arrayAgencyMantainanceSelected.push({
                name: "SEO",
                value: seoManteinanceValue
            });
        }
        
        if (communityManagement.checked) {
            var redesSocialesValueToPush = 0;
            /*--Se ocultan los fees de unica vez, ya que este plan no tiene---*/
            resultAgencyOnceFeeContainer.style.display = "block";
            /*--Se guardan los detalles de skills que incluye este servicio---*/
            let detailedSkillsList = '';
            
            services.communityManagement.maintenanceHours.forEach((monthlyHours, i) => {
                if(monthlyHours > 0) {
                    redesSocialesValueToPush += monthlyHours * services.communityManagement.costPerHour[i];
                    agencyMonthlyFeeValue += monthlyHours * services.communityManagement.costPerHour[i];
                    detailedSkillsList += `<li style="list-style-type: none">- ${services.communityManagement.skillsAcquired[i]} : USD ${monthlyHours * services.communityManagement.costPerHour[i]} <small>(Siendo ${monthlyHours}hs mensuales a USD ${services.communityManagement.costPerHour[i]} la hora)</small></li>`;
                }
                if (services.communityManagement.implementationHours[i] > 0) {
                    agencyOnceFeeValue += services.communityManagement.implementationHours[i] * services.communityManagement.costPerHour[i];
                    resultAgencyOnceFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Gestión de redes sociales:</strong><ul style="list-style-type: none"><li>- ${services.communityManagement.skillsAcquired[i]}: USD ${services.communityManagement.implementationHours[i] * services.communityManagement.costPerHour[i]}. <small>(Siendo ${services.communityManagement.implementationHours[i]}hs a un valor de USD ${services.communityManagement.costPerHour[i]} por hora)</small></ul></li></li>`;
                }
            })

            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Gestión de redes sociales:</strong><ul>${detailedSkillsList}</ul></li>`;
            
            arrayAgencyMantainanceSelected.push({
                name: "Gestión de redes sociales",
                value: redesSocialesValueToPush
            });
        }
        if (googleSearchAds.checked) {
            agencyMonthlyFeeValue += services.googleSearchAds.maintenanceHours * services.googleSearchAds.costPerHour;
            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Search:</strong> USD ${services.googleSearchAds.maintenanceHours * services.googleSearchAds.costPerHour} <small>(Siendo ${services.googleSearchAds.maintenanceHours}hs a un valor de USD ${services.googleSearchAds.costPerHour} por hora)</small></li>`;
            resultAgencyOnceFeeContainer.style.display = "block";
            agencyOnceFeeValue += services.googleSearchAds.implementationHours * services.googleSearchAds.costPerHour;
            resultAgencyOnceFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Search:</strong> USD ${services.googleSearchAds.implementationHours * services.googleSearchAds.costPerHour} <small>(Siendo ${services.googleSearchAds.implementationHours}hs a un valor de USD ${services.googleSearchAds.costPerHour} por hora)</small></li>`;
            /*-Se completa la información de conversiones-*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleSearchAdsConversions.innerHTML = `${googleAdsSearchConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleSearchAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Search:</strong> USD ${investmentGoogleSearchAdsAmmount.value} de inversión mensual</li>`;
            /*--Se guardan los nombres y valores de inversion y fees mensuales--*/
            arrayAgencyMantainanceSelected.push({
                name: "Google Ads Search",
                value: (services.googleSearchAds.maintenanceHours * services.googleSearchAds.costPerHour)
            });
            arrayInvestmentSelected.push({
                name: "Google Ads Search",
                value: investmentGoogleSearchAdsAmmount.value
            })
        }
        if (googleDisplayAds.checked) {
            agencyMonthlyFeeValue += services.googleDisplayAds.maintenanceHours * services.googleDisplayAds.costPerHour;
            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Display:</strong> USD ${services.googleDisplayAds.maintenanceHours * services.googleDisplayAds.costPerHour} <small>(Siendo ${services.googleDisplayAds.maintenanceHours}hs a un valor de USD ${services.googleDisplayAds.costPerHour} por hora)</small></li>`;
            resultAgencyOnceFeeContainer.style.display = "block";
            agencyOnceFeeValue += services.googleDisplayAds.implementationHours * services.googleDisplayAds.costPerHour;
            resultAgencyOnceFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Display:</strong> USD ${services.googleDisplayAds.implementationHours * services.googleDisplayAds.costPerHour} <small>(Siendo ${services.googleDisplayAds.implementationHours}hs a un valor de USD ${services.googleDisplayAds.costPerHour} por hora)</small></li>`;
            /*-Se completa la información de conversiones-*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            googleDisplayAdsConversions.innerHTML = `${googleAdsDisplayConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentGoogleDisplayAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Google Ads Display:</strong> USD ${investmentGoogleDisplayAdsAmmount.value} de inversión mensual</li>`;
            /*--Se guardan los nombres y valores de inversion y fees mensuales--*/
            arrayAgencyMantainanceSelected.push({
                name: "Google Ads Display",
                value: (services.googleDisplayAds.maintenanceHours * services.googleDisplayAds.costPerHour)
            });
            arrayInvestmentSelected.push({
                name: "Google Ads Display",
                value: investmentGoogleDisplayAdsAmmount.value
            });
        }
        if (facebookAds.checked) {
            agencyMonthlyFeeValue += services.facebookAds.maintenanceHours * services.facebookAds.costPerHour;
            resultAgencyMonthlyFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Facebook Ads:</strong> USD ${services.facebookAds.maintenanceHours * services.facebookAds.costPerHour} <small>(Siendo ${services.facebookAds.maintenanceHours}hs a un valor de USD ${services.facebookAds.costPerHour} por hora)</small></li>`;
            resultAgencyOnceFeeContainer.style.display = "block";
            agencyOnceFeeValue += services.facebookAds.implementationHours * services.facebookAds.costPerHour;
            resultAgencyOnceFeeDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Facebook Ads:</strong> USD ${services.facebookAds.implementationHours * services.facebookAds.costPerHour} <small>(Siendo ${services.facebookAds.implementationHours}hs a un valor de USD ${services.facebookAds.costPerHour} por hora)</small></li>`;
            /*-Se completa la información de conversiones-*/
            totalConversions.innerHTML = `${totalConversionsValue.toFixed(2).replace(".", ",")}`;
            facebookAdsConversions.innerHTML = `${facebookAdsConversionsValue.toFixed(2).replace(".", ",")} conversiones`;
            /*-Se completa el cajón "costo de inversion en medios mensual total"-*/
            totalInvestmentMonthly += Number(investmentFacebookAdsAmmount.value);
            resultInvestmentsMonthlyDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Facebook Ads:</strong> USD ${investmentFacebookAdsAmmount.value} de inversión mensual</li>`;
            /*--Se guardan los nombres y valores de inversion y fees mensuales--*/
            arrayAgencyMantainanceSelected.push({
                name: "Facebook Ads",
                value: (services.facebookAds.maintenanceHours * services.facebookAds.costPerHour)
            });
            arrayInvestmentSelected.push({
                name: "Facebook Ads",
                value: investmentFacebookAdsAmmount.value
            });
        }
        
        if (disenoWeb.checked) { console.log('Desarrollo en progreso de diseño web con sub-servicios....')  }
        
        if (!email.checked && !googleSearchAds.checked && !googleDisplayAds.checked && !facebookAds.checked) {
            resultInvestmentsMonthlyDetail.innerHTML = '<li>No has seleccionado ninguna inversión en medios digitales. <small>(Ej: Google Ads Search, Google Ads Display, Facebook Ads o Email Marketing)</small></li>'
        }

        /*---Se setean los valores totales de los cajónes, es decir las sumas de valores de c/u---*/
        resultAgencyOnceFee.innerHTML = `USD ${agencyOnceFeeValue}`;
        resultAgencyMonthlyFee.innerHTML = `USD ${agencyMonthlyFeeValue}`;
        resultInvestmentsMonthly.innerHTML = ` USD ${totalInvestmentMonthly}`;
        resultMonthlyTotal.innerHTML = `USD ${totalInvestmentMonthly + agencyMonthlyFeeValue}`;

        /*--Se guardan los detalles de "costo total mensual de agencia (mantenimiento)" en el ultimo cajón "costo total mensual"--*/
        var agencyMantainanceDetails = '';
        arrayAgencyMantainanceSelected.forEach(singleService => { agencyMantainanceDetails += `<li style="list-style-type: none"> - <u>${singleService.name}:</u> USD ${singleService.value}</li>`});
        resultMonthlyTotalDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Costo total mensual de agencia (mantenimiento):</strong> USD ${agencyMonthlyFeeValue}<br><ul>${agencyMantainanceDetails}</ul></li>`;
        /*--Se guardan los detalles de "costo total mensual de inversion en medios" en el ultimo cajón "costo total mensual"--*/
        var investmentSelectedDetails = '';
        arrayInvestmentSelected.forEach(singleService => { investmentSelectedDetails += `<li style="list-style-type: none"> - <u>${singleService.name}:</u> USD ${singleService.value}</li>`});
        resultMonthlyTotalDetail.innerHTML += `<li style="margin-top: 10px"><strong>‣ Costo total mensual de inversión en medios:</strong> USD ${totalInvestmentMonthly}<br><ul>${investmentSelectedDetails}</ul></li>`;
        

    } else {
        formContainer.style.height = 'auto';
        formContainer.style.opacity = '1';
        resultsContainer.style.height = '0';
        resultsContainer.style.opacity = '0';
        calculateAgainButton.classList.add("d-none");
        calculateButton.style.display = 'block';
    }


};

/*--Sistema para rotar los iconos de cajónes "collapse" al expandirlos o contraerlos--*/
var cardHeaders = qsa('.card-header');
var iconsToRotate = qsa('.iconsToRotate');
cardHeaders.forEach((header, i) => {
    header.addEventListener('click', function () {
        iconsToRotate[i].classList.toggle('rotateIcons');
    });
});
