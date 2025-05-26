import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import AstroIcon from '$lib/icons/technologies/AstroIcon.svelte';
import NetlifyIcon from '$lib/icons/technologies/NetlifyIcon.svelte';
import TailwindIcon from '$lib/icons/technologies/TailwindIcon.svelte';
import SvelteKitIcon from '$lib/icons/technologies/SvelteKitIcon.svelte';
import SupabaseIcon from '$lib/icons/technologies/SupabaseIcon.svelte';
import OpenRouterIcon from '$lib/icons/technologies/OpenRouterIcon.svelte';
import RAGIcon from '$lib/icons/technologies/RAGIcon.svelte';
import TypeScriptIcon from '$lib/icons/technologies/TypeScriptIcon.svelte';
import VercelIcon from '$lib/icons/technologies/VercelIcon.svelte';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;

	// Base de datos de proyectos detallados
	const projectsData = {
		'pagina-web-peralta-asociados': {
			id: 1,
			image:
				'https://www.vanchi.pro/images/proyectos/pagina-web-peralta-asociados/pagina-web-peralta-asociados.webp',
			altImage: 'Página web corporativa de Peralta Asociados',
			additionalImages: [
				'https://www.vanchi.pro/images/proyectos/pagina-web-peralta-asociados/presencia-digital-peralta-asociados.webp'
			],
			altAdditionalImages: ['Presencia digital de Peralta Asociados con página web corporativa'],
			slug: 'pagina-web-peralta-asociados',
			title: 'Página Web Corporativa para Peralta Asociados',
			description:
				'Desarrollo del sitio web corporativo de Peralta Asociados, un bufete legal tradicional, para establecer su presencia digital y mejorar la captación de clientes.',
			keywords:
				'bufete legal, página web corporativa, presencia digital, captación de clientes, SEO local, optimización de rendimiento, diseño profesional, marketing digital',
			subtitle: 'Transformación digital de un bufete legal tradicional',
			client: 'Peralta Asociados',
			year: '2025',
			duration: '1 mes',
			projectType: 'Sitio Web Corporativo',
			url: 'https://peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/PeraltaAsociados',

			// Resumen ejecutivo
			summary:
				'Desarrollo de sitio web corporativo que aumentó la captación de clientes en un 35% y obtuvo puntuación perfecta en Lighthouse.',

			// Métricas clave
			metrics: [
				{
					id: 'improvement',
					label: 'Aumento en Conversión',
					value: '+35%',
					description: 'Incremento en leads cualificados',
					icon: 'trending-up'
				},
				{
					id: 'loadTime',
					label: 'Tiempo de Carga',
					value: '0.8s',
					description: 'Velocidad de carga optimizada',
					icon: 'zap'
				},
				{
					id: 'lighthouse',
					label: 'Puntuación Lighthouse',
					value: '100/100',
					description: 'Rendimiento web perfecto',
					icon: 'target'
				}
			],

			// El desafío
			challenge: {
				description:
					'Peralta Asociados, un bufete legal con años de experiencia y sólida reputación, carecía completamente de presencia digital. Sin página web, sin perfil de Google My Business y sin estrategia online, el bufete dependía únicamente del marketing tradicional boca a boca, limitando significativamente su alcance y crecimiento en el mercado digital actual.',
				painPoints: [
					'Ausencia total de presencia en internet',
					'Sin página web corporativa ni institucional',
					'Falta de perfil en Google My Business',
					'Imposibilidad de ser encontrado en búsquedas online',
					'Dependencia exclusiva del marketing boca a boca',
					'Desventaja competitiva frente a bufetes con presencia digital',
					'Pérdida de oportunidades de clientes que buscan servicios legales online',
					'Dificultad para demostrar profesionalidad y experiencia digitalmente'
				]
			},

			// Objetivos
			objectives: {
				description:
					'Establecer la primera presencia digital de Peralta Asociados desde cero, creando una página web corporativa profesional que sirva como herramienta de captación de clientes y posicionamiento en el mercado legal local.',
				goals: [
					'Crear la primera página web corporativa del bufete',
					'Establecer presencia digital profesional y confiable',
					'Alcanzar puntuación perfecta (100/100) en Lighthouse',
					'Implementar SEO local para servicios legales en Huancavelica y Huancayo',
					'Optimizar para búsquedas como "abogado en Huancavelica y Huancayo" y servicios específicos',
					'Crear sistema de contacto y captación de leads digital',
					'Posicionar el bufete en Google Maps y búsquedas locales',
					'Generar confianza mediante diseño profesional y testimoniales',
					'Establecer base sólida para futuras estrategias de marketing digital'
				]
			},

			// Proceso de desarrollo
			phases: [
				{
					id: 1,
					title: 'Investigación & Estrategia',
					duration: '1 semana',
					description:
						'Análisis del mercado legal local, definición de objetivos y arquitectura del sitio.',
					deliverables: [
						'Investigación de mercado legal en Huancavelica y Huancayo',
						'Definición de público objetivo y servicios clave',
						'Estructura de contenido y navegación',
						'Estrategia de SEO local'
					]
				},
				{
					id: 2,
					title: 'Diseño & Prototipado',
					duration: '1 semana',
					description: 'Diseño visual profesional enfocado en generar confianza y conversión.',
					deliverables: [
						'Wireframes responsivos',
						'Diseño visual corporativo',
						'Prototipo interactivo',
						'Sistema de colores y tipografías'
					]
				},
				{
					id: 3,
					title: 'Desarrollo & Optimización',
					duration: '1.5 semanas',
					description:
						'Implementación con Astro, optimización de rendimiento y configuración técnica.',
					deliverables: [
						'Desarrollo completo con Astro y Tailwind CSS',
						'Optimización de rendimiento (Lighthouse 100/100)',
						'Implementación de SEO técnico y Schema Markup',
						'Configuración de formularios de contacto'
					]
				},
				{
					id: 4,
					title: 'Testing & Lanzamiento',
					duration: '0.5 semanas',
					description: 'Pruebas finales, configuración de hosting y puesta en producción.',
					deliverables: [
						'Testing responsivo en dispositivos múltiples',
						'Auditoría de accesibilidad y rendimiento',
						'Configuración de Netlify y dominio personalizado',
						'Setup de Google Analytics y Google My Business'
					]
				}
			],

			// Resultados
			results: {
				description:
					'La implementación de la presencia digital desde cero generó resultados medibles y significativos para Peralta Asociados, estableciendo una base sólida para el crecimiento digital del bufete.',
				before: {
					title: 'Situación Inicial',
					context: 'Sin presencia digital',
					metrics: {
						webPresence: 'Inexistente',
						lighthouse: 'N/A',
						loadTime: 'N/A',
						mobileOptimization: 'Sin sitio web',
						monthlyLeads: 0,
						digitalDiscovery: '0%',
						googleVisibility: 'No encontrable',
						bounceRate: 'N/A'
					}
				},
				after: {
					title: 'Resultados Obtenidos',
					context: 'Presencia digital establecida',
					metrics: {
						webPresence: 'Sitio web profesional activo',
						lighthouse: 100,
						loadTime: '0.8s',
						mobileOptimization: 'Completamente optimizado',
						monthlyLeads: 12,
						digitalDiscovery: '65%',
						googleVisibility: 'Visible en búsquedas locales',
						bounceRate: '28%'
					}
				}
			},

			// Stack tecnológico
			technologies: [
				{
					name: 'Astro',
					iconComponent: AstroIcon,
					reason: 'Framework ideal para sitios estáticos ',
					category: 'Framework',
					benefits: ['Carga ultrarrápida', 'SEO optimizado', 'Hidratación parcial']
				},
				{
					name: 'Tailwind CSS',
					iconComponent: TailwindIcon,
					reason: 'Sistema de diseño consistente y mantenible',
					category: 'CSS Framework',
					benefits: ['Desarrollo ágil', 'Bundle CSS mínimo', 'Responsive design']
				},
				{
					name: 'Netlify',
					iconComponent: NetlifyIcon,
					reason: 'Hosting optimizado para sitios estáticos',
					category: 'Hosting',
					benefits: ['CDN global', 'Deploy automático', 'SSL gratuito']
				}
			]
		},

		'asistente-inteligente-peralta-asociados': {
			id: 2,
			image:
				'https://www.vanchi.pro/images/proyectos/asistente-inteligente-peralta-asociados/asistente-inteligente.webp',
			altImage: 'Asistente inteligente legal para Peralta Asociados',
			additionalImages: [
				'https://www.vanchi.pro/images/proyectos/asistente-inteligente-peralta-asociados/chatbot-legal.webp'
			],
			altAdditionalImages: ['Asistente inteligente legal para Peralta Asociados'],
			slug: 'asistente-inteligente-peralta-asociados',
			title: 'Asistente Inteligente Legal para Peralta Asociados',
			description:
				'Desarrollo de un chatbot inteligente especializado en derecho para Peralta Asociados, automatizando consultas legales básicas y mejorando la atención al cliente 24/7.',
			keywords:
				'chatbot legal, inteligencia artificial, automatización legal, atención al cliente, consultas legales, IA conversacional, asistente virtual, bufete legal',
			subtitle: 'Automatización inteligente para consultas legales',
			client: 'Peralta Asociados',
			year: '2025',
			duration: '2 meses',
			projectType: 'Chatbot con IA',
			url: 'https://chat.peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/ChatbotPeraltaAsociados',

			// Resumen ejecutivo
			summary:
				'Desarrollo de asistente inteligente que redujo el tiempo de respuesta inicial en 85% y aumentó la satisfacción del cliente al 92%.',

			// Métricas clave
			metrics: [
				{
					id: 'responseTime',
					label: 'Reducción Tiempo Respuesta',
					value: '-85%',
					description: 'Respuestas instantáneas 24/7',
					icon: 'clock'
				},
				{
					id: 'satisfaction',
					label: 'Satisfacción Cliente',
					value: '92%',
					description: 'Índice de satisfacción usuario',
					icon: 'heart'
				},
				{
					id: 'automation',
					label: 'Consultas Automatizadas',
					value: '78%',
					description: 'Resolución automática de consultas',
					icon: 'robot'
				}
			],

			// El desafío
			challenge: {
				description:
					'Peralta Asociados recibía un alto volumen de consultas legales básicas y repetitivas que consumían tiempo valioso del equipo legal. Los clientes esperaban respuestas inmediatas fuera del horario de oficina, y el bufete necesitaba una solución que proporcionara información legal preliminar de manera eficiente sin comprometer la calidad del servicio.',
				painPoints: [
					'Alto volumen de consultas legales básicas y repetitivas',
					'Tiempo limitado del equipo legal para consultas preliminares',
					'Clientes esperando respuestas fuera del horario de oficina',
					'Falta de filtrado de consultas por urgencia o complejidad',
					'Necesidad de capturar leads cualificados automáticamente',
					'Ausencia de primera orientación legal inmediata',
					'Dificultad para escalar la atención personalizada',
					'Pérdida de consultas potenciales fuera del horario laboral'
				]
			},

			// Objetivos
			objectives: {
				description:
					'Desarrollar un asistente inteligente especializado en derecho que automatice la atención inicial de consultas legales, proporcione información preliminar precisa y capture leads cualificados de manera eficiente.',
				goals: [
					'Automatizar respuestas a consultas legales frecuentes',
					'Proporcionar atención 24/7 para consultas básicas',
					'Clasificar consultas por área legal y urgencia',
					'Capturar información de contacto de leads cualificados',
					'Reducir carga de trabajo del equipo en consultas básicas',
					'Mejorar experiencia del cliente con respuestas inmediatas',
					'Implementar base de conocimiento legal actualizable',
					'Integrar sistema de derivación a abogados especialistas',
					'Generar reportes de consultas y tendencias legales'
				]
			},

			// Proceso de desarrollo
			phases: [
				{
					id: 1,
					title: 'Análisis Legal & Diseño',
					duration: '2 semanas',
					description:
						'Investigación de consultas frecuentes, definición de flujos conversacionales y arquitectura del sistema.',
					deliverables: [
						'Análisis de consultas legales más frecuentes',
						'Mapeo de flujos conversacionales por área legal',
						'Definición de base de conocimiento legal',
						'Diseño de interfaz conversacional',
						'Arquitectura del sistema de IA'
					]
				},
				{
					id: 2,
					title: 'Desarrollo Backend & IA',
					duration: '3 semanas',
					description: 'Implementación del motor de IA, procesamiento de lenguaje natural y APIs.',
					deliverables: [
						'Configuración de modelo de lenguaje especializado',
						'Desarrollo de APIs para procesamiento de consultas',
						'Implementación de sistema de clasificación legal',
						'Base de datos de conocimiento legal'
					]
				},
				{
					id: 3,
					title: 'Interfaz & Integración',
					duration: '2 semanas',
					description: 'Desarrollo de interfaz web, integración con sistemas existentes.',
					deliverables: [
						'Interfaz web responsiva del chatbot',
						'Conexión con la base de datos vectorial'
					]
				},
				{
					id: 4,
					title: 'Testing & Optimización',
					duration: '1 semana',
					description: 'Pruebas exhaustivas, entrenamiento del modelo y ajustes finales.',
					deliverables: [
						'Testing de precisión en respuestas legales',
						'Optimización de flujos conversacionales',
						'Entrenamiento con casos reales del bufete',
						'Capacitación del equipo legal'
					]
				}
			],

			// Resultados
			results: {
				description:
					'La implementación del asistente inteligente transformó la atención al cliente de Peralta Asociados, automatizando consultas básicas y mejorando significativamente la eficiencia operativa.',
				before: {
					title: 'Situación Inicial',
					context: 'Atención manual tradicional',
					metrics: {
						responseTime: '24-48 horas',
						availability: 'Solo horario de oficina',
						automationLevel: '0%',
						clientSatisfaction: '68%',
						leadCapture: 'Manual e inconsistente',
						consultationVolume: '45 consultas/semana',
						repeatQueries: '65% consultas repetitivas',
						legalTeamLoad: '100% capacidad utilizada'
					}
				},
				after: {
					title: 'Resultados Obtenidos',
					context: 'Asistente inteligente activo',
					metrics: {
						responseTime: 'Instantáneo',
						availability: '24/7 disponible',
						automationLevel: '78%',
						clientSatisfaction: '92%',
						leadCapture: 'Automatizada y estructurada',
						consultationVolume: '120 consultas/semana',
						repeatQueries: '15% consultas repetitivas',
						legalTeamLoad: '45% capacidad utilizada'
					}
				}
			},

			// Stack tecnológico
			technologies: [
				{
					name: 'SvelteKit',
					iconComponent: SvelteKitIcon,
					reason: 'Framework full-stack moderno para desarrollo web escalable y optimizado',
					category: 'Frontend Framework',
					benefits: ['Rendering híbrido', 'Routing automático', 'Performance excepcional']
				},
				{
					name: 'Tailwind CSS',
					iconComponent: TailwindIcon,
					reason: 'Sistema de diseño utility-first para interfaces responsive y consistentes',
					category: 'CSS Framework',
					benefits: ['Desarrollo ágil', 'Bundle CSS mínimo', 'Responsive design']
				},
				{
					name: 'Supabase Vector',
					iconComponent: SupabaseIcon,
					reason: 'Base de datos vectorial para almacenar embeddings y búsqueda semántica',
					category: 'Vector Database',
					benefits: ['Búsqueda semántica', 'Embeddings nativos', 'PostgreSQL compatible']
				},
				{
					name: 'OpenRouter',
					iconComponent: OpenRouterIcon,
					reason: 'API gateway para acceso a múltiples modelos de IA con mejor costo-beneficio',
					category: 'AI Gateway',
					benefits: ['Múltiples modelos', 'Precios competitivos', 'Failover automático']
				},
				{
					name: 'RAG Architecture',
					iconComponent: RAGIcon,
					reason: 'Arquitectura de generación aumentada por recuperación para respuestas precisas',
					category: 'AI Pattern',
					benefits: [
						'Información actualizada',
						'Respuestas contextuales',
						'Reducción de alucinaciones'
					]
				},
				{
					name: 'Netlify',
					iconComponent: NetlifyIcon,
					reason: 'Plataforma de deployment con edge functions para aplicaciones SvelteKit',
					category: 'Hosting',
					benefits: ['Deploy automático', 'Edge functions', 'CDN global']
				}
			]
		},

		'sistema-gestion-academica': {
			id: 3,
			image:
				'https://www.vanchi.pro/images/proyectos/sistema-gestion-academica/sistema-gestion-academica.webp',
			altImage: 'Sistema de gestión académica integral',
			additionalImages: [
				'https://www.vanchi.pro/images/proyectos/sistema-gestion-academica/dashboard-academico.webp'
			],
			altAdditionalImages: ['Dashboard del sistema de gestión académica'],
			slug: 'sistema-gestion-academica',
			title: 'Sistema de Gestión Académica Integral',
			description:
				'Desarrollo de una plataforma web completa para la gestión académica institucional, principalmente en la gestión de notas de los estudiantes.',
			keywords:
				'sistema académico, gestión educativa, plataforma estudiantil, automatización escolar, calificaciones digitales, gestión institucional',
			subtitle: 'Gestión de notas de los estudiantes',
			client: 'Demo: Proyecto Personal',
			year: '2025',
			duration: '2 meses',
			projectType: 'Sistema Web Completo',
			url: 'https://sistema-de-gestion-academica.vercel.app/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/SistemaDeGestionAcademica',

			// Resumen ejecutivo
			summary:
				'Desarrollo de sistema académico principalmente para demostrar mis habilidades de full stack.',

			// Métricas clave
			metrics: [
				{
					id: 'roles',
					label: 'Roles de Usuario',
					value: '3',
					description: 'Administrador, Docente, Estudiante',
					icon: 'users'
				},
				{
					id: 'features',
					label: 'Funcionalidades',
					value: '15+',
					description: 'Módulos integrados del sistema',
					icon: 'trending-up'
				},
				{
					id: 'improvement',
					label: 'Tipo de Proyecto',
					value: 'Demo',
					description: 'Proyecto de demostración técnica',
					icon: 'robot'
				}
			],

			// El desafío
			challenge: {
				description:
					'Como desarrollador full stack, necesitaba crear un proyecto que demostrara de manera integral mis habilidades técnicas en el desarrollo web moderno. El desafío consistía en construir una aplicación web completa desde cero, abarcando desde la arquitectura de base de datos hasta la experiencia de usuario, implementando funcionalidades complejas como autenticación, autorización por roles y gestión de datos en tiempo real.',
				painPoints: [
					'Demostrar competencias completas en desarrollo full stack',
					'Implementar un sistema robusto de autenticación y autorización',
					'Crear una arquitectura escalable de base de datos relacional',
					'Desarrollar interfaces de usuario intuitivas y responsivas',
					'Gestionar diferentes roles de usuario con permisos específicos',
					'Implementar funcionalidades de tiempo real y notificaciones',
					'Crear una experiencia de usuario fluida con feedback visual',
					'Demostrar habilidades en deployment y configuración de producción',
					'Mostrar dominio de tecnologías modernas del ecosistema web'
				]
			},

			// Objetivos
			objectives: {
				description:
					'Desarrollar una aplicación web completa que sirva como demostración práctica de mis habilidades como desarrollador full stack, implementando un sistema académico funcional que abarque todos los aspectos del desarrollo web moderno, desde la gestión de base de datos hasta la experiencia de usuario.',
				goals: [
					'Construir una aplicación full stack completamente funcional',
					'Implementar sistema de autenticación con Supabase Auth seguro y escalable',
					'Desarrollar arquitectura de roles con permisos granulares',
					'Crear interfaces de usuario modernas y accesibles',
					'Implementar gestión de estado reactivo y en tiempo real',
					'Integrar notificaciones toast y feedback visual intuitivo',
					'Desarrollar pantallas de carga y estados de interfaz optimizados',
					'Configurar deployment automatizado en plataformas modernas',
					'Demostrar uso de tecnologías actuales del stack web'
				]
			},

			// Proceso de desarrollo
			phases: [
				{
					id: 1,
					title: 'Diseño & Arquitectura de Base de Datos',
					duration: '2 semanas',
					description:
						'Diseño de la arquitectura del sistema, normalización de base de datos y definición de roles de usuario.',
					deliverables: [
						'Diseño y normalización de base de datos en Supabase',
						'Definición de roles y permisos del sistema (Admin, Docente, Estudiante)',
						'Arquitectura de autenticación con Supabase Auth',
						'Wireframes y mockups de interfaces principales',
						'Especificaciones técnicas del proyecto full stack'
					]
				},
				{
					id: 2,
					title: 'Desarrollo Backend & Autenticación',
					duration: '3 semanas',
					description:
						'Implementación de la lógica de negocio, configuración de Supabase y sistema de autenticación JWT.',
					deliverables: [
						'Configuración completa de Supabase como backend',
						'Implementación de Supabase Auth con roles granulares',
						'Creación de APIs y funciones de base de datos',
						'Sistema de gestión de calificaciones y notas',
						'Políticas de seguridad RLS (Row Level Security)'
					]
				},
				{
					id: 3,
					title: 'Desarrollo Frontend & UI/UX',
					duration: '2.5 semanas',
					description:
						'Creación de interfaces responsive, componentes reutilizables y experiencia de usuario optimizada.',
					deliverables: [
						'Desarrollo completo con SvelteKit y TypeScript',
						'Componentes de toast para notificaciones en tiempo real',
						'Pantallas de carga y estados de interfaz optimizados',
						'Dashboard diferenciado por roles de usuario',
						'Diseño responsive con Tailwind CSS'
					]
				},
				{
					id: 4,
					title: 'Testing, Optimización & Deploy',
					duration: '0.5 semanas',
					description: 'Pruebas exhaustivas del sistema, optimización y despliegue en Vercel.',
					deliverables: [
						'Testing completo de funcionalidades por roles',
						'Pruebas de autenticación y autorización',
						'Optimización de rendimiento y carga',
						'Deploy automatizado en Vercel',
						'Documentación técnica del proyecto'
					]
				}
			],

			// Resultados
			results: {
				description:
					'El desarrollo del sistema académico demostró exitosamente mis competencias como desarrollador full stack, implementando una aplicación completa con gestión de usuarios, roles, cursos y calificaciones con una arquitectura robusta y escalable.',
				before: {
					title: 'Objetivo de Demostración',
					context: 'Habilidades técnicas por demostrar',
					metrics: {
						userManagement: 'Sin sistema de gestión de usuarios',
						roleSystem: 'Sin arquitectura de roles implementada',
						courseManagement: 'Sin funcionalidades académicas',
						gradeCalculation: 'Sin algoritmos de cálculo de promedios',
						profileEditing: 'Sin gestión de perfiles de usuario',
						passwordSecurity: 'Sin sistema de cambio de contraseñas',
						teacherAssignment: 'Sin asignación de cursos a docentes',
						studentTracking: 'Sin seguimiento de rendimiento académico'
					}
				},
				after: {
					title: 'Habilidades Demostradas',
					context: 'Sistema académico completamente funcional',
					metrics: {
						userManagement: 'Gestión completa de perfiles de usuarios',
						roleSystem: 'Arquitectura de 3 roles con permisos granulares',
						courseManagement: 'Sistema completo de creación y gestión de cursos',
						gradeCalculation: 'Algoritmo automático de cálculo de promedios',
						profileEditing: 'Edición de perfiles con validaciones',
						passwordSecurity: 'Sistema seguro de cambio de contraseñas',
						teacherAssignment: 'Asignación dinámica de cursos a docentes',
						studentTracking: 'Seguimiento automático de estado académico'
					}
				}
			},

			// Stack tecnológico
			technologies: [
				{
					name: 'SvelteKit',
					iconComponent: SvelteKitIcon,
					reason: 'Framework full-stack moderno para aplicaciones web complejas y escalables',
					category: 'Frontend Framework',
					benefits: ['Rendering híbrido', 'Routing automático', 'Performance excepcional']
				},
				{
					name: 'Tailwind CSS',
					iconComponent: TailwindIcon,
					reason: 'Framework CSS utility-first para diseño responsive y desarrollo ágil',
					category: 'CSS Framework',
					benefits: ['Desarrollo ágil', 'Bundle CSS mínimo', 'Responsive design']
				},
				{
					name: 'Supabase',
					iconComponent: SupabaseIcon,
					reason: 'Backend-as-a-Service con PostgreSQL para gestión de datos académicos robusta',
					category: 'Backend & Database',
					benefits: ['PostgreSQL robusto', 'Auth integrada', 'Real-time subscriptions']
				},
				{
					name: 'TypeScript',
					iconComponent: TypeScriptIcon,
					reason: 'Superset de JavaScript con tipado estático para mayor confiabilidad del código',
					category: 'Programming Language',
					benefits: ['Tipado estático', 'Mejor DX', 'Detección temprana de errores']
				},
				{
					name: 'Vercel',
					iconComponent: VercelIcon,
					reason:
						'Plataforma de deployment optimizada para aplicaciones SvelteKit con CI/CD automático',
					category: 'Hosting',
					benefits: ['Deploy automático', 'Edge functions', 'Performance optimizado']
				}
			]
		}
	};

	const project = projectsData[slug as keyof typeof projectsData];

	if (!project) {
		throw error(404, 'Proyecto no encontrado');
	}

	return {
		project
	};
};
