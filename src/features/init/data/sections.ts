import { Section } from '../types/interface';

export const initSections: Section[] = [
  {
    id: 'estructura',
    title: 'Estructura base',
    description: 'El código se organiza por features y capas compartidas, para que el dominio del sistema sea lo más visible.',
    items: [
      'src/app → rutas y páginas (Next.js App Router)',
      'src/features → módulos de negocio (auth, products, cart, etc.)',
      'src/shared → UI, hooks y utilidades reutilizables',
      'src/config → configuración global (env, api, rutas, etc.)',
    ],
  },
  {
    id: 'features',
    title: 'Carpeta features/',
    description: 'Cada feature agrupa su UI, lógica, hooks y estado. La idea es que puedas encontrar todo de un módulo en un solo lugar.',
    items: ['features/auth → login, registro, sesión…', 'features/products → listado, filtro, detalle…', 'features/cart → carrito, resumen, checkout…', 'features/init → esta página inicial de presentación'],
  },
  {
    id: 'como-usar',
    title: 'Cómo usar esta plantilla',
    description: 'Clona el proyecto, renombra el feature init si quieres, y empieza a crear tus propios módulos siguiendo el mismo patrón.',
    items: [
      'Crear una nueva carpeta en features/ para tu módulo',
      'Añadir components/, hooks/, utils/ según necesites',
      'Crear una ruta en src/app que use esos componentes',
      'Evitar lógica de negocio dentro de src/app siempre que sea posible',
    ],
  },
] as const;
