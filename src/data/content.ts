export const CONTACT = {
  phone: "3148750448",
  whatsappLink: "https://wa.me/573148750448?text=Hola%20Mónica%2C%20me%20gustaría%20agendar%20una%20consulta.",
  email: "monicatm89@gmail.com",
  address: "La troncal vía a la costa, Urb. El Lago, Caucasia, Antioquia, Colombia",
  registration: "5-0944-02 D.S.S.A.",
  // TODO: Reemplazar con URLs reales cuando estén disponibles
  instagram: null as string | null,
  facebook: null as string | null,
};

export const HERO = {
  preHeadline: "Psicóloga Clínica · Magíster · 23+ Años de Experiencia",
  headline: "Mereces sentirte escuchado/a y encontrar la calma que necesitas",
  subHeadline:
    "Terapia psicológica virtual y presencial para individuos, parejas y familias. Desde Caucasia para toda Colombia.",
  ctaPrimary: "Escríbeme por WhatsApp",
  ctaSecondary: "Conoce mis servicios",
  trustBadges: [
    "Universidad de Antioquia",
    "Universidad del Norte",
    "PNL Certificada",
    "Coaching Profesional",
  ],
};

export const ABOUT = {
  sectionTitle: "Sobre Mí",
  blocks: [
    {
      title: "Mi compromiso contigo",
      text: "Desde hace más de 23 años acompaño a personas, parejas y familias a transitar sus momentos más difíciles. He trabajado con niños que necesitaban ser escuchados, adolescentes buscando su identidad, adultos enfrentando crisis, y familias queriendo reconectarse.\n\nCreo firmemente que todos merecemos ser escuchados sin juicio y que cada persona tiene la capacidad de transformar su vida. Mi labor es acompañarte en ese proceso con profesionalismo, calidez y respeto.",
    },
    {
      title: "Mi trayectoria",
      text: "Mi camino en la salud mental comenzó como Tecnóloga en Promoción Social, lo que me enseñó a entender las realidades comunitarias. Luego me gradué como Psicóloga de la Universidad de Antioquia y completé mi Maestría en Psicología Clínica en la Universidad del Norte.\n\nHe tenido el privilegio de trabajar en instituciones como el ICBF, el Hospital Mental de Antioquia, la Alcaldía de Medellín y la Universidad de Antioquia como docente. Esta diversidad de experiencias me permite comprender la complejidad humana desde múltiples perspectivas.",
    },
    {
      title: "Mi enfoque terapéutico",
      text: "Mi enfoque integra herramientas de la psicología clínica, la Programación Neurolingüística (PNL) y el coaching profesional. Esto me permite personalizar cada proceso terapéutico según tus necesidades específicas.\n\nYa sea que necesites atención individual, de pareja, familiar, o un acompañamiento en crisis, mi compromiso es brindarte un espacio seguro donde puedas ser tú mismo/a y encontrar las herramientas para avanzar.",
    },
  ],
  credentials: [
    { icon: "graduation", text: "Maestría en Psicología Clínica — Universidad del Norte" },
    { icon: "graduation", text: "Psicóloga — Universidad de Antioquia (Reg. Prof. 5-0944-02)" },
    { icon: "graduation", text: "Tecnóloga en Promoción Social — Colegio Mayor de Antioquia" },
    { icon: "certificate", text: "Coaching Profesional Internacional" },
    { icon: "certificate", text: "Licensed Practitioner en PNL" },
    { icon: "certificate", text: "Docencia Universitaria" },
    { icon: "certificate", text: "Psicoterapia Avanzada (Formación Internacional)" },
  ],
};

export const SERVICES = {
  sectionTitle: "Servicios",
  sectionSubtitle: "Cada proceso es único, como tú. Encuentra el acompañamiento que necesitas.",
  items: [
    {
      title: "Terapia Individual",
      phrase: "A veces cargar solo/a con todo se vuelve insostenible. No tiene que ser así.",
      description:
        "Un espacio confidencial y sin juicios donde trabajamos juntos tus emociones, pensamientos y conductas para que recuperes tu bienestar emocional.",
      forWhom: "Adultos y jóvenes con ansiedad, depresión, duelo, estrés, crisis emocionales o dificultades en relaciones.",
      modality: "Virtual y presencial",
      icon: "user",
    },
    {
      title: "Terapia de Pareja",
      phrase: "Cuando la comunicación se rompe, el amor necesita herramientas para reconstruirse.",
      description:
        "Un espacio seguro para que ambos puedan expresarse, entenderse y trabajar juntos en fortalecer su relación.",
      forWhom: "Parejas que buscan mejorar su comunicación, superar crisis o reconectarse emocionalmente.",
      modality: "Virtual y presencial",
      icon: "heart",
    },
    {
      title: "Terapia Familiar",
      phrase: "Las familias no son perfectas, pero pueden aprender a entenderse y fortalecerse.",
      description:
        "Acompañamiento para que la familia encuentre nuevas formas de comunicarse, resolver conflictos y fortalecer sus vínculos.",
      forWhom: "Familias en conflicto, familias con adolescentes en crisis, familias en procesos de cambio.",
      modality: "Virtual y presencial",
      icon: "family",
    },
    {
      title: "Terapia para Adolescentes",
      phrase: "La adolescencia es un camino complejo. Tu hijo/a no tiene que recorrerlo sin apoyo.",
      description:
        "Un espacio adaptado a las necesidades de los jóvenes, donde pueden expresarse libremente y encontrar orientación.",
      forWhom: "Adolescentes con dificultades emocionales, problemas de identidad, conflictos familiares o escolares.",
      modality: "Virtual y presencial",
      icon: "star",
    },
    {
      title: "Coaching con PNL",
      phrase: "Descubre tu potencial y transforma los patrones que te limitan.",
      description:
        "Herramientas de Programación Neurolingüística y coaching para alcanzar tus metas personales y profesionales.",
      forWhom: "Personas que buscan desarrollo personal, claridad en sus metas o superar creencias limitantes.",
      modality: "Virtual",
      icon: "compass",
    },
    {
      title: "Atención en Crisis",
      phrase: "Cuando sientes que no puedes más, hay ayuda profesional disponible.",
      description:
        "Intervención inmediata y acompañamiento profesional para momentos de crisis emocional aguda.",
      forWhom: "Personas atravesando una crisis emocional, pérdida reciente, situación traumática o momento de emergencia.",
      modality: "Virtual y presencial",
      icon: "shield",
    },
  ],
};

export const HOW_IT_WORKS = {
  sectionTitle: "¿Cómo Funciona?",
  sectionSubtitle: "Dar el primer paso es más fácil de lo que crees.",
  steps: [
    {
      number: 1,
      title: "Escríbeme por WhatsApp",
      description: "Cuéntame brevemente qué te trae aquí. Sin compromiso.",
      icon: "message",
    },
    {
      number: 2,
      title: "Agendamos tu primera sesión",
      description: "Coordinamos día y hora que se ajusten a tu rutina.",
      icon: "calendar",
    },
    {
      number: 3,
      title: "Nos conectamos por videollamada",
      description: "Desde la comodidad de tu hogar, iniciamos el proceso.",
      icon: "video",
    },
    {
      number: 4,
      title: "Comienzas tu camino de transformación",
      description: "Trabajamos juntos a tu ritmo, con un plan personalizado para ti.",
      icon: "path",
    },
  ],
  details: [
    { icon: "location", text: "Virtual (Google Meet/Zoom) o presencial (Caucasia)" },
    { icon: "clock", text: "Sesiones de 50-60 minutos" },
    { icon: "calendar", text: "Frecuencia semanal o quincenal" },
    { icon: "lock", text: "Total confidencialidad garantizada" },
    { icon: "payment", text: "Transferencia, Nequi, Daviplata" },
  ],
};

export const FAQ = {
  sectionTitle: "Preguntas Frecuentes",
  items: [
    {
      question: "¿Cómo sé si necesito terapia?",
      answer:
        "Si sientes que tus emociones te desbordan, tus relaciones se ven afectadas, tienes dificultad para dormir, concentrarte o disfrutar de las cosas, o simplemente sientes que necesitas un espacio para hablar, la terapia puede ayudarte. No necesitas estar en crisis para buscar apoyo profesional.",
    },
    {
      question: "¿Cómo funciona la terapia virtual? ¿Es igual de efectiva?",
      answer:
        "La terapia virtual se realiza por videollamada (Google Meet o Zoom) desde la comodidad de tu hogar. Múltiples estudios científicos han demostrado que la terapia online es igual de efectiva que la presencial. Solo necesitas un dispositivo con cámara, internet estable y un lugar tranquilo.",
    },
    {
      question: "¿Cuánto dura una sesión y cuántas sesiones necesitaré?",
      answer:
        "Cada sesión dura entre 50 y 60 minutos. La cantidad de sesiones depende de tu situación particular y tus objetivos. Algunas personas experimentan mejoría en pocas sesiones, mientras que otros procesos requieren un acompañamiento más prolongado. Esto lo evaluamos juntos.",
    },
    {
      question: "¿Qué plataforma usamos para las sesiones virtuales?",
      answer:
        "Utilizo Google Meet o Zoom, ambas plataformas seguras y fáciles de usar. Te envío el enlace antes de cada sesión por WhatsApp o email. No necesitas descargar ninguna aplicación si usas Google Meet desde el navegador.",
    },
    {
      question: "¿Es confidencial todo lo que hablo en terapia?",
      answer:
        "Absolutamente. La confidencialidad es un pilar fundamental de mi práctica profesional. Todo lo que compartas en sesión está protegido por el secreto profesional. Solo se rompe la confidencialidad en casos excepcionales donde exista riesgo inminente para tu vida o la de terceros, según la normativa legal colombiana.",
    },
    {
      question: "¿Cuál es la diferencia entre psicólogo, psiquiatra y coach?",
      answer:
        "El psicólogo clínico se enfoca en terapia conversacional y técnicas psicológicas para tratar problemas emocionales y de comportamiento. El psiquiatra es un médico que puede recetar medicamentos. El coach se enfoca en metas y desarrollo personal. En mi caso, integro la psicología clínica con herramientas de coaching y PNL para ofrecerte un acompañamiento integral.",
    },
    {
      question: "¿Atiendes niños y adolescentes?",
      answer:
        "Sí, atiendo adolescentes y trabajo con sus familias. Tengo amplia experiencia en esta etapa del desarrollo, incluyendo mi tesis de Maestría sobre la adolescencia. Para el caso de menores de edad, es necesario el consentimiento y participación de los padres o tutores.",
    },
    {
      question: "¿Cómo es la primera sesión?",
      answer:
        "La primera sesión es un espacio para conocernos. Me cuentas qué te trae aquí, a tu ritmo y sin presión. Hablamos de tus expectativas y juntos definimos los objetivos del proceso. También te explico cómo funciona la terapia conmigo. Es un primer paso para construir un espacio de confianza.",
    },
    {
      question: "¿Cuánto cuesta la consulta?",
      answer:
        "Las tarifas varían según el tipo de servicio (individual, pareja, familiar). Te invito a escribirme por WhatsApp para conocer las tarifas actualizadas y resolver cualquier duda sobre formas de pago.",
    },
    {
      question: "¿Puedo tomar terapia si vivo fuera de Colombia?",
      answer:
        "Sí. Atiendo personas de cualquier parte del mundo que hablen español. La terapia virtual permite que nos conectemos sin importar dónde estés. Solo necesitas coordinar la diferencia horaria.",
    },
    {
      question: "¿Qué pasa si necesito cancelar o reprogramar una cita?",
      answer:
        "Entiendo que pueden surgir imprevistos. Solo te pido que me avises con al menos 24 horas de anticipación por WhatsApp para poder reprogramar tu cita sin inconvenientes.",
    },
    {
      question: "¿Qué enfoque terapéutico utilizas?",
      answer:
        "Mi enfoque integra la psicología clínica, la Programación Neurolingüística (PNL) y el coaching profesional. Esto me permite adaptar las herramientas terapéuticas a tus necesidades específicas, combinando profundidad clínica con estrategias prácticas orientadas al cambio.",
    },
  ],
};

export const TESTIMONIALS = {
  sectionTitle: "Respaldo Profesional",
  metrics: [
    { value: "23+", label: "Años de experiencia" },
    { value: "500+", label: "Personas acompañadas" },
    { value: "11", label: "Instituciones" },
    { value: "7", label: "Certificaciones" },
  ],
  institutions: [
    "Universidad de Antioquia",
    "Universidad del Norte",
    "Colegio Mayor de Antioquia",
    "Hospital Mental de Antioquia",
    "ESE CARISMA",
    "Alcaldía de Medellín",
    "ICBF",
    "Centro de Familia UPB",
    "CES",
    "Comfama",
    "Comfenalco",
  ],
  quotes: [
    {
      text: "Como docente, Mónica demuestra una capacidad excepcional para transmitir herramientas terapéuticas con calidez y rigor.",
      author: "Colega docente, Universidad de Antioquia",
    },
    {
      text: "Encontré un espacio seguro donde pude expresar lo que sentía sin miedo a ser juzgada. Gracias por devolverme la esperanza.",
      author: "Paciente anónimo/a",
    },
  ],
};

export const LEGAL = {
  disclaimer:
    "Este sitio web y los servicios ofrecidos no sustituyen la atención médica de emergencia. Si te encuentras en una crisis que pone en riesgo tu vida, comunícate con la Línea 106 (Línea de atención en crisis de salud mental en Colombia) o acude al servicio de urgencias más cercano.",
  crisisLine: "106",
  privacyNote:
    "Tu información personal es tratada con total confidencialidad conforme a la Ley 1581 de 2012 de Protección de Datos Personales de Colombia.",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Respaldo", href: "#respaldo" },
];
