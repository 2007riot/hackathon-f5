const travel = [
    {
        id: 1,
        type: "terrestre",
        title: "Machu Picchu",
        location: "Perú",
        description: "Machu Picchu es una antigua ciudad inca ubicada en lo alto de los Andes peruanos. Es famosa por su arquitectura bien conservada y su impresionante ubicación escénica.",
        atractions: ["Ruinas incas", "Montaña Huayna Picchu", "Intihuatana"],
        activities: ["Senderismo", "Fotografía", "Exploración arqueológica"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 2,
        type: "espacial",
        title: "Estación Espacial Internacional (ISS)",
        location: "Órbita terrestre baja",
        description: "La Estación Espacial Internacional es un laboratorio espacial habitable en órbita terrestre baja. Sirve como un centro de investigación y observación en microgravedad.",
        atractions: ["Vistas de la Tierra", "Experiencia de gravedad cero", "Experimentos científicos"],
        activities: ["Observación de la Tierra", "Participación en experimentos científicos", "Comunicación con astronautas"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 2,
        type: "virtual",
        title: "Mundo submarino de coral",
        location: "Realidad virtual",
        description: "Explora el mundo submarino de los arrecifes de coral en una experiencia de realidad virtual. Descubre la belleza y la diversidad de la vida marina desde la comodidad de tu hogar.",
        atractions: ["Arrecifes de coral", "Peces tropicales", "Tiburones"],
        activities: ["Buceo virtual", "Observación de la vida marina", "Educación ambiental"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 3,
        type: "cuerpo_humano",
        title: "Expedición al torrente sanguíneo",
        location: "Cuerpo humano",
        description: "Embárcate en un viaje fascinante a través del torrente sanguíneo humano. Descubre el increíble mundo de glóbulos rojos, glóbulos blancos y plaquetas mientras exploras las arterias y venas del cuerpo.",
        atractions: ["Corazón", "Sistema circulatorio", "Órganos vitales"],
        activities: ["Observación de células sanguíneas", "Navegación por arterias y venas", "Interacción con el sistema inmunológico"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },

    {
        id: 4,
        type: "futuro",
        title: "Ciudad del futuro",
        location: "Futuro",
        description: "Visita una visión futurista de la civilización humana. Explora una ciudad avanzada con tecnologías innovadoras, rascacielos flotantes y vehículos autónomos que recorren las calles.",
        atractions: ["Rascacielos futuristas", "Transporte autónomo", "Tecnologías de vanguardia"],
        activities: ["Visita a museos de tecnología avanzada", "Recorrido en vehículos autónomos", "Participación en simulaciones del futuro"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 5,
        type: "recuerdos",
        title: "Exploración de recuerdos personales",
        location: "Realidad Virtual",
        description: "Sumérgete en una experiencia única que te permite revivir tus recuerdos más preciados. Viaja a tu pasado y explora momentos significativos de tu vida a través de una realidad virtual inmersiva.",
        atractions: ["Recuerdos de la infancia", "Momentos importantes", "Personas significativas"],
        activities: ["Exploración de recuerdos en realidad virtual", "Interacción con versiones virtuales de personas importantes", "Reflexión y autoconocimiento"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 6,
        type: "cuerpo_humano",
        title: "Aventura en el Sistema Digestivo",
        location: "Cuerpo humano",
        description: "Desciende al fascinante mundo del sistema digestivo humano. Explora el proceso de la digestión mientras viajas a través del esófago, el estómago y el intestino delgado, presenciando la descomposición de alimentos y la absorción de nutrientes.",
        atractions: ["Estómago", "Intestino delgado", "Proceso de digestión"],
        activities: ["Observación de enzimas digestivas", "Seguimiento del recorrido de los alimentos", "Interacción con la flora intestinal"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 7,
        type: "cuerpo_humano",
        title: "Inmersión en el Sistema Nervioso",
        location: "Cuerpo humano",
        description: "Adéntrate en el asombroso sistema nervioso humano. Explora la complejidad del cerebro, la médula espinal y los nervios periféricos mientras aprendes sobre la transmisión de señales nerviosas y la coordinación de funciones corporales.",
        atractions: ["Cerebro", "Médula espinal", "Neuronas"],
        activities: ["Observación de sinapsis neuronales", "Experimentos de estimulación cerebral", "Simulaciones de procesos mentales"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 8,
        type: "futuro",
        title: "Exploración de una Colonia Espacial",
        location: "Futuro",
        description: "Embárcate en un viaje a una colonia espacial del futuro. Descubre cómo sería la vida en el espacio exterior, desde la gravedad artificial hasta la agricultura en invernaderos espaciales, mientras exploras los límites de la frontera final.",
        atractions: ["Gravedad artificial", "Agricultura espacial", "Vistas del cosmos"],
        activities: ["Paseos espaciales simulados", "Participación en experimentos de microgravedad", "Exploración de la estación espacial"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    },
    {
        id: 9,
        type: "futuro",
        title: "Simulacro de una Megaciudad Inteligente",
        location: "Futuro",
        description: "Visita una megaciudad inteligente del futuro, donde la tecnología y la sostenibilidad se unen para crear un entorno urbano avanzado. Explora edificios inteligentes, sistemas de transporte autónomo y soluciones innovadoras para la energía y los residuos.",
        atractions: ["Edificios inteligentes", "Transporte autónomo", "Energía renovable"],
        activities: ["Recorrido en vehículos autónomos", "Visita a parques urbanos tecnológicos", "Participación en proyectos de ciudadanía digital"],
        image: "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg"
    }
]

export default travel