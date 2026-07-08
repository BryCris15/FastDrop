import { COLORS } from "@/src/constants/colors";

export type ScreenAction = {
  label: string;
  href: string;
};

export type FastDropScreen = {
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  items: string[];
  actions?: ScreenAction[];
};

export const SCREENS: Record<string, FastDropScreen> = {
  login: {
    title: "Iniciar Sesión",
    subtitle: "Accede con tu cuenta institucional UCE",
    badge: "Autenticación",
    description:
      "Pantalla inicial para que estudiantes ingresen o se registren en FastDrop usando correo institucional.",
    items: [
      "Email o teléfono",
      "Contraseña",
      "Botón Iniciar Sesión",
      "Acceso a registro",
    ],
    actions: [
      { label: "Verificación en proceso", href: "/verificacion" },
      { label: "Entrar a FastDrop", href: "/home" },
    ],
  },
  verificacion: {
    title: "Verificación en Proceso",
    subtitle: "Confirma tu correo institucional",
    badge: "Cuenta UCE",
    description:
      "Mensaje para indicar que la cuenta debe ser confirmada desde el correo institucional antes de usar la app.",
    items: [
      "Estado de verificación",
      "Mensaje informativo",
      "Correo institucional",
      "Botón continuar",
    ],
    actions: [{ label: "Ir al inicio", href: "/home" }],
  },
  encargoHome: {
    title: "Inicio - Encargo",
    subtitle: "Compras, entregas, impresiones y encargos",
    badge: "Módulo Encargo",
    description:
      "Home principal para solicitar servicios dentro del campus: comida, papelería, impresiones y otros encargos.",
    items: [
      "Facultad de Ingeniería y Ciencias Aplicadas",
      "Categorías de servicios",
      "Tiendas cercanas",
      "Acceso a checkout",
    ],
    actions: [
      { label: "Crear encargo", href: "/encargo/checkout" },
      { label: "Buscar Walker", href: "/encargo/buscando-walker" },
      { label: "Mis pedidos", href: "/pedidos" },
    ],
  },
  academicoHome: {
    title: "Inicio - Académico",
    subtitle: "Tutorías y acompañamiento entre estudiantes",
    badge: "Módulo Académico",
    description:
      "Home para solicitar tutorías, revisión de tareas, resolución guiada y acompañamiento académico.",
    items: [
      "Búsqueda de tutorías",
      "Revisión de tareas",
      "Resolución guiada",
      "Acompañamiento académico",
    ],
    actions: [
      { label: "Solicitar apoyo académico", href: "/academico/checkout" },
      { label: "Buscar Tutor", href: "/academico/buscando-tutor" },
      { label: "Mis solicitudes", href: "/academico/solicitudes" },
    ],
  },
  checkoutEncargo: {
    title: "Checkout y Oferta - Encargo",
    subtitle: "Configura tu pedido antes de publicarlo",
    badge: "Pedido",
    description:
      "Pantalla para definir punto de entrega, detalle del encargo, método de pago y tarifa ofrecida al Walker.",
    items: [
      "Mapa de referencia",
      "Punto de entrega",
      "Método de pago",
      "Tarifa para el Walker",
    ],
    actions: [
      { label: "Publicar y buscar Walker", href: "/encargo/buscando-walker" },
    ],
  },
  checkoutAcademico: {
    title: "Checkout y Oferta - Académico",
    subtitle: "Define tu solicitud académica",
    badge: "Solicitud",
    description:
      "Pantalla para seleccionar materia, tema, modalidad, punto de reunión y tarifa para el tutor.",
    items: ["Facultad", "Materia o tema", "Modalidad", "Tarifa para el tutor"],
    actions: [
      { label: "Publicar y buscar Tutor", href: "/academico/buscando-tutor" },
    ],
  },
  buscandoWalker: {
    title: "Buscando Walker",
    subtitle: "Estamos encontrando estudiantes cercanos",
    badge: "Búsqueda",
    description:
      "Pantalla de espera mientras FastDrop localiza un Walker disponible para aceptar el encargo.",
    items: [
      "Animación de búsqueda",
      "Pedido publicado",
      "Walkers cercanos",
      "Estado en tiempo real",
    ],
    actions: [{ label: "Ver monitoreo", href: "/encargo/monitoreo" }],
  },
  buscandoTutor: {
    title: "Buscando Tutor",
    subtitle: "Estamos buscando tutores disponibles",
    badge: "Búsqueda",
    description:
      "Pantalla de espera para conectar al estudiante con un tutor disponible según materia y ubicación.",
    items: [
      "Materia solicitada",
      "Tutores cercanos",
      "Modalidad",
      "Estado en tiempo real",
    ],
    actions: [
      { label: "Ver monitoreo académico", href: "/academico/monitoreo" },
    ],
  },
  monitoreoEncargo: {
    title: "Monitoreo Pedido - Encargo",
    subtitle: "El Walker está en camino",
    badge: "Seguimiento",
    description:
      "Pantalla para visualizar el estado del pedido, ETA, datos del Walker y avance del servicio.",
    items: [
      "Estado del pedido",
      "Tiempo estimado",
      "Datos del Walker",
      "Calificación al finalizar",
    ],
    actions: [{ label: "Ir a Mis Pedidos", href: "/pedidos" }],
  },
  monitoreoAcademico: {
    title: "Monitoreo Pedido - Académico",
    subtitle: "El Tutor está en camino",
    badge: "Seguimiento",
    description:
      "Pantalla para seguir una solicitud académica activa y visualizar datos del tutor asignado.",
    items: [
      "Estado de la tutoría",
      "Tiempo estimado",
      "Datos del Tutor",
      "Finalización y reputación",
    ],
    actions: [{ label: "Mis solicitudes", href: "/academico/solicitudes" }],
  },
  pedidos: {
    title: "Mis Pedidos",
    subtitle: "Pedidos activos y finalizados",
    badge: "Historial",
    description:
      "Lista de encargos realizados por el estudiante, separados por activos y finalizados.",
    items: [
      "Pedidos activos",
      "Pedidos finalizados",
      "Estado del servicio",
      "Calificación",
    ],
    actions: [{ label: "Crear nuevo encargo", href: "/encargo/checkout" }],
  },
  solicitudes: {
    title: "Mis Solicitudes - Académico",
    subtitle: "Solicitudes activas y finalizadas",
    badge: "Académico",
    description:
      "Listado de solicitudes académicas del estudiante con estados, tutor asignado y detalle del servicio.",
    items: [
      "Solicitudes activas",
      "Solicitudes finalizadas",
      "Detalle académico",
      "Reputación del tutor",
    ],
    actions: [{ label: "Ver detalle", href: "/academico/detalle-solicitud" }],
  },
  detalleSolicitud: {
    title: "Detalles de Solicitud Académica",
    subtitle: "Información completa del apoyo académico",
    badge: "Detalle",
    description:
      "Pantalla de detalle para revisar el tema, tutor, estado, punto de reunión y cierre de la solicitud.",
    items: ["Materia", "Tema", "Tutor asignado", "Estado de la solicitud"],
    actions: [
      { label: "Volver a solicitudes", href: "/academico/solicitudes" },
    ],
  },
  perfil: {
    title: "Mi Perfil",
    subtitle: "Cliente y Walker",
    badge: "Cuenta",
    description:
      "Pantalla de perfil general con acceso a modo cliente, modo Walker, direcciones, pagos, seguridad y ayuda.",
    items: [
      "Modo Cliente",
      "Modo Walker",
      "Datos personales",
      "Opciones de cuenta",
    ],
    actions: [
      { label: "Perfil Cliente", href: "/perfil/cliente" },
      { label: "Perfil Walker", href: "/perfil/walker" },
      { label: "Direcciones", href: "/cuenta/direcciones" },
      { label: "Métodos de pago", href: "/cuenta/metodos-pago" },
    ],
  },
  perfilCliente: {
    title: "Mi Perfil Cliente",
    subtitle: "Información del estudiante solicitante",
    badge: "Cliente",
    description:
      "Perfil para estudiantes que solicitan encargos o apoyo académico dentro de la UCE.",
    items: [
      "Datos personales",
      "Pedidos realizados",
      "Solicitudes académicas",
      "Métodos de pago",
    ],
    actions: [{ label: "Seguridad y Cuenta", href: "/cuenta/seguridad" }],
  },
  perfilWalker: {
    title: "Mi Perfil Walker",
    subtitle: "Información del estudiante prestador",
    badge: "Walker",
    description:
      "Perfil para estudiantes que aceptan encargos o servicios dentro del campus.",
    items: [
      "Reputación",
      "Servicios realizados",
      "Ganancias",
      "Modo disponible",
    ],
    actions: [
      { label: "Explorar pedidos cercanos", href: "/walker/explorar-pedidos" },
      { label: "Billetera Walker", href: "/walker/billetera" },
    ],
  },
  explorarPedidos: {
    title: "Explorar Pedidos Cercanos",
    subtitle: "Encuentra encargos disponibles",
    badge: "Walker",
    description:
      "Pantalla para que el Walker revise pedidos cercanos y acepte servicios disponibles.",
    items: [
      "Pedidos cercanos",
      "Distancia",
      "Ganancia estimada",
      "Botón aceptar",
    ],
    actions: [
      { label: "Ver detalle de pedido", href: "/walker/detalle-pedido" },
    ],
  },
  detallePedidoWalker: {
    title: "Detalles del Pedido",
    subtitle: "Información para aceptar el encargo",
    badge: "Walker",
    description:
      "Detalle del pedido disponible para que el Walker evalúe ubicación, pago y requerimientos.",
    items: [
      "Lugar de recogida",
      "Lugar de entrega",
      "Pago ofrecido",
      "Descripción del pedido",
    ],
    actions: [{ label: "Aceptar y monitorear", href: "/encargo/monitoreo" }],
  },
  billetera: {
    title: "Billetera Walker",
    subtitle: "Saldo y movimientos",
    badge: "Pagos",
    description:
      "Pantalla para visualizar saldo, historial de ganancias y opciones de recarga/retiro.",
    items: ["Saldo disponible", "Movimientos", "Ganancias", "Recargas"],
    actions: [{ label: "Recargar saldo", href: "/walker/recargar-saldo" }],
  },
  recargarSaldo: {
    title: "Recargar Saldo",
    subtitle: "Agrega saldo a tu cuenta",
    badge: "Pagos",
    description:
      "Pantalla para registrar una recarga mediante transferencia o método configurado.",
    items: ["Monto", "Método de pago", "Comprobante", "Confirmación"],
    actions: [{ label: "Volver a billetera", href: "/walker/billetera" }],
  },
  direcciones: {
    title: "Mis Direcciones",
    subtitle: "Ubicaciones guardadas",
    badge: "Ubicación",
    description:
      "Pantalla para administrar puntos frecuentes dentro del campus universitario.",
    items: ["Facultad", "Aula", "Punto de encuentro", "Ubicación favorita"],
    actions: [{ label: "Nueva ubicación", href: "/cuenta/nueva-ubicacion" }],
  },
  nuevaUbicacion: {
    title: "Nueva Ubicación",
    subtitle: "Registra un punto dentro del campus",
    badge: "Ubicación",
    description:
      "Formulario para guardar una nueva dirección o punto de referencia en la UCE.",
    items: ["Nombre del lugar", "Referencia", "Facultad", "Guardar ubicación"],
    actions: [{ label: "Volver a direcciones", href: "/cuenta/direcciones" }],
  },
  metodosPago: {
    title: "Métodos de Pago",
    subtitle: "Efectivo o transferencia",
    badge: "Pagos",
    description:
      "Pantalla para administrar métodos de pago disponibles en el MVP de FastDrop.",
    items: [
      "Efectivo",
      "Transferencia",
      "Comprobante",
      "Método predeterminado",
    ],
    actions: [{ label: "Volver al perfil", href: "/perfil" }],
  },
  seguridad: {
    title: "Seguridad y Cuenta",
    subtitle: "Administra tu acceso",
    badge: "Cuenta",
    description:
      "Pantalla para cambiar contraseña, revisar correo institucional y cerrar sesión.",
    items: [
      "Correo UCE",
      "Cambio de contraseña",
      "Privacidad",
      "Cerrar sesión",
    ],
    actions: [{ label: "Centro de ayuda", href: "/cuenta/ayuda" }],
  },
  ayuda: {
    title: "Centro de Ayuda",
    subtitle: "Soporte para estudiantes",
    badge: "Ayuda",
    description:
      "Pantalla de soporte con preguntas frecuentes, contacto y reportes básicos.",
    items: [
      "Preguntas frecuentes",
      "Reportar problema",
      "Soporte",
      "Información de FastDrop",
    ],
    actions: [{ label: "Volver al perfil", href: "/(tabs)/perfil" }],
  },
};

export { COLORS };
