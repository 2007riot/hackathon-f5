const travel = [
  {
    id: 1,
    type: "terrestre",
    title: "Machu Picchu",
    location: "Perú",
    description:
      "Machu Picchu es una antigua ciudad inca ubicada en lo alto de los Andes peruanos. Es famosa por su arquitectura bien conservada y su impresionante ubicación escénica.",
    atractions: ["Ruinas incas", "Montaña Huayna Picchu", "Intihuatana"],
    activities: ["Senderismo", "Fotografía", "Exploración arqueológica"],
    image:
      "https://historia.nationalgeographic.com.es/medio/2023/01/25/istock_bc3b04ec_930824730_230125152421_1280x853.jpg",
  },
  {
    id: 2,
    type: "espacial",
    title: "Estación Espacial Internacional (ISS)",
    location: "Órbita terrestre baja",
    description:
      "La Estación Espacial Internacional es un laboratorio espacial habitable en órbita terrestre baja. Sirve como un centro de investigación y observación en microgravedad.",
    atractions: [
      "Vistas de la Tierra",
      "Experiencia de gravedad cero",
      "Experimentos científicos",
    ],
    activities: [
      "Observación de la Tierra",
      "Participación en experimentos científicos",
      "Comunicación con astronautas",
    ],
    image:
      "https://images.theconversation.com/files/286891/original/file-20190805-36363-18aqkpa.jpg?ixlib=rb-1.1.0&rect=20%2C6%2C4473%2C2984&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 2,
    type: "virtual",
    title: "Mundo submarino de coral",
    location: "Realidad virtual",
    description:
      "Explora el mundo submarino de los arrecifes de coral en una experiencia de realidad virtual. Descubre la belleza y la diversidad de la vida marina desde la comodidad de tu hogar.",
    atractions: ["Arrecifes de coral", "Peces tropicales", "Tiburones"],
    activities: [
      "Buceo virtual",
      "Observación de la vida marina",
      "Educación ambiental",
    ],
    image:
      "https://cdn.pixabay.com/photo/2023/05/29/03/14/underwater-world-8024909_1280.jpg",
  },
  {
    id: 3,
    type: "cuerpo_humano",
    title: "Expedición al torrente sanguíneo",
    location: "Cuerpo humano",
    description:
      "Embárcate en un viaje fascinante a través del torrente sanguíneo humano. Descubre el increíble mundo de glóbulos rojos, glóbulos blancos y plaquetas mientras exploras las arterias y venas del cuerpo.",
    atractions: ["Corazón", "Sistema circulatorio", "Órganos vitales"],
    activities: [
      "Observación de células sanguíneas",
      "Navegación por arterias y venas",
      "Interacción con el sistema inmunológico",
    ],
    image:
      "https://noticieros.televisa.com/wp-content/uploads/2022/03/torrente-sanguineo-1.jpg",
  },

  {
    id: 4,
    type: "futuro",
    title: "Ciudad del futuro",
    location: "Futuro",
    description:
      "Visita una visión futurista de la civilización humana. Explora una ciudad avanzada con tecnologías innovadoras, rascacielos flotantes y vehículos autónomos que recorren las calles.",
    atractions: [
      "Rascacielos futuristas",
      "Transporte autónomo",
      "Tecnologías de vanguardia",
    ],
    activities: [
      "Visita a museos de tecnología avanzada",
      "Recorrido en vehículos autónomos",
      "Participación en simulaciones del futuro",
    ],
    image:
      "https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/02/pandasecurity-smartcity.jpg",
  },
  {
    id: 5,
    type: "recuerdos",
    title: "Exploración de recuerdos personales",
    location: "Realidad Virtual",
    description:
      "Sumérgete en una experiencia única que te permite revivir tus recuerdos más preciados. Viaja a tu pasado y explora momentos significativos de tu vida a través de una realidad virtual inmersiva.",
    atractions: [
      "Recuerdos de la infancia",
      "Momentos importantes",
      "Personas significativas",
    ],
    activities: [
      "Exploración de recuerdos en realidad virtual",
      "Interacción con versiones virtuales de personas importantes",
      "Reflexión y autoconocimiento",
    ],
    image:
      "https://amazingsisi.b-cdn.net/wp-content/uploads/2021/03/time-travel-header-mobile-scaled.jpg",
  },
  {
    id: 6,
    type: "cuerpo_humano",
    title: "Aventura en el Sistema Digestivo",
    location: "Cuerpo humano",
    description:
      "Desciende al fascinante mundo del sistema digestivo humano. Explora el proceso de la digestión mientras viajas a través del esófago, el estómago y el intestino delgado, presenciando la descomposición de alimentos y la absorción de nutrientes.",
    atractions: ["Estómago", "Intestino delgado", "Proceso de digestión"],
    activities: [
      "Observación de enzimas digestivas",
      "Seguimiento del recorrido de los alimentos",
      "Interacción con la flora intestinal",
    ],
    image:
      "https://img.freepik.com/fotos-premium/explorando-reino-probioticos-sistema-digestivo-viaje-ciencia-biologia-microco_892235-13498.jpg",
  },
  {
    id: 7,
    type: "cuerpo_humano",
    title: "Inmersión en el Sistema Nervioso",
    location: "Cuerpo humano",
    description:
      "Adéntrate en el asombroso sistema nervioso humano. Explora la complejidad del cerebro, la médula espinal y los nervios periféricos mientras aprendes sobre la transmisión de señales nerviosas y la coordinación de funciones corporales.",
    atractions: ["Cerebro", "Médula espinal", "Neuronas"],
    activities: [
      "Observación de sinapsis neuronales",
      "Experimentos de estimulación cerebral",
      "Simulaciones de procesos mentales",
    ],
    image:
      "https://centresukha.com/wp-content/uploads/2023/11/whatsapp-image-2023-11-21-at-19.41.57.jpeg",
  },
  {
    id: 8,
    type: "futuro",
    title: "Exploración de una Colonia Espacial",
    location: "Futuro",
    description:
      "Embárcate en un viaje a una colonia espacial del futuro. Descubre cómo sería la vida en el espacio exterior, desde la gravedad artificial hasta la agricultura en invernaderos espaciales, mientras exploras los límites de la frontera final.",
    atractions: [
      "Gravedad artificial",
      "Agricultura espacial",
      "Vistas del cosmos",
    ],
    activities: [
      "Paseos espaciales simulados",
      "Participación en experimentos de microgravedad",
      "Exploración de la estación espacial",
    ],
    image:
      "https://www.eluniverso.com/resizer/TxVbdGYdc-V8Hh-EGvCWCmy3Jjg=/827x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/7LJ244AECBEEFBVYSCRLO3BFOA.jpg",
  },
];

export default travel;
