import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;

	// Base de datos de proyectos detallados
	const projectsData = {
		'pagina-web-peralta-asociados': {
			id: 1,
			slug: 'pagina-web-peralta-asociados',
			title: 'Página Web Corporativa para Peralta Asociados',
			subtitle: 'Transformación digital de un bufete legal tradicional',
			industry: 'Servicios Legales',
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
				title: 'El Desafío',
				description:
					'Peralta Asociados, un bufete legal establecido, necesitaba modernizar su presencia digital para competir en el mercado actual. Su sitio web anterior era obsoleto, lento y no generaba confianza en clientes potenciales.',
				painPoints: [
					'Sitio web desactualizado con diseño de hace 10 años',
					'Tiempo de carga superior a 5 segundos',
					'No optimizado para dispositivos móviles',
					'Baja generación de leads cualificados',
					'Posicionamiento SEO deficiente'
				]
			},

			// Objetivos
			objectives: [
				'Crear una presencia digital profesional que inspire confianza',
				'Optimizar el rendimiento web para una experiencia superior',
				'Implementar SEO técnico y de contenido',
				'Diseñar una experiencia móvil excepcional',
				'Incrementar la conversión de visitantes a clientes potenciales'
			],

			// Proceso de desarrollo
			phases: [
				{
					id: 1,
					title: 'Investigación & Estrategia',
					duration: '1 semana',
					description: 'Análisis profundo del sector legal, competencia y definición de objetivos.',
					deliverables: [
						'Análisis de competencia directa',
						'Definición de buyer personas',
						'Arquitectura de información',
						'Estrategia de contenido'
					]
				},
				{
					id: 2,
					title: 'Diseño UX/UI',
					duration: '2 semanas',
					description: 'Creación de wireframes, prototipos y diseño visual enfocado en conversión.',
					deliverables: [
						'Wireframes de alta fidelidad',
						'Sistema de diseño completo',
						'Prototipos interactivos',
						'Guía de estilo visual'
					]
				},
				{
					id: 3,
					title: 'Desarrollo & Optimización',
					duration: '3 semanas',
					description: 'Implementación con Astro, optimización de rendimiento y SEO técnico.',
					deliverables: [
						'Sitio web completamente funcional',
						'Optimización de imágenes y assets',
						'Implementación de Schema Markup',
						'Configuración de Analytics'
					]
				},
				{
					id: 4,
					title: 'Testing & Lanzamiento',
					duration: '1 semana',
					description: 'Pruebas exhaustivas, ajustes finales y puesta en producción.',
					deliverables: [
						'Testing en múltiples dispositivos',
						'Auditoría de accesibilidad',
						'Migración y configuración de hosting',
						'Capacitación al cliente'
					]
				}
			],

			// Stack tecnológico
			technologies: [
				{
					name: 'Astro',
					reason: 'Framework ideal para sitios estáticos con máximo rendimiento',
					benefits: ['Carga ultrarrápida', 'SEO optimizado', 'Hidratación parcial']
				},
				{
					name: 'Tailwind CSS',
					reason: 'Sistema de diseño consistente y mantenible',
					benefits: ['Desarrollo ágil', 'Bundle CSS mínimo', 'Responsive design']
				},
				{
					name: 'Netlify',
					reason: 'Hosting optimizado para sitios estáticos',
					benefits: ['CDN global', 'Deploy automático', 'SSL gratuito']
				}
			],

			// Resultados
			results: {
				before: {
					loadTime: '5.2s',
					lighthouse: 45,
					mobileOptimization: 'No',
					monthlyLeads: 3,
					bounceRate: '78%'
				},
				after: {
					loadTime: '0.8s',
					lighthouse: 100,
					mobileOptimization: 'Completamente optimizado',
					monthlyLeads: 12,
					bounceRate: '34%'
				}
			},

			// Testimonial
			testimonial: {
				quote:
					'Ivan transformó completamente nuestra presencia digital. El sitio web no solo se ve profesional, sino que realmente genera resultados. Hemos visto un aumento significativo en consultas de clientes potenciales.',
				author: 'Dr. Carlos Peralta',
				position: 'Socio Fundador',
				company: 'Peralta Asociados',
				avatar: '/images/testimonials/carlos-peralta.webp'
			},

			// Galería de screenshots
			gallery: [
				{
					url: '/images/projects/peralta-desktop-1.webp',
					alt: 'Vista desktop de la página principal',
					type: 'desktop',
					caption: 'Diseño limpio y profesional que inspira confianza'
				},
				{
					url: '/images/projects/peralta-mobile-1.webp',
					alt: 'Vista móvil optimizada',
					type: 'mobile',
					caption: 'Experiencia móvil completamente optimizada'
				},
				{
					url: '/images/projects/peralta-servicios.webp',
					alt: 'Sección de servicios legales',
					type: 'feature',
					caption: 'Presentación clara de servicios legales especializados'
				}
			],

			// Aprendizajes
			lessons: [
				'La velocidad de carga es crucial para sitios de servicios profesionales',
				'Un diseño minimalista genera más confianza que uno recargado',
				'La optimización móvil es fundamental para el SEO moderno',
				'Los testimoniales y casos de éxito aumentan significativamente la conversión'
			],

			// Próximos pasos sugeridos
			nextSteps: [
				'Implementar blog corporativo para content marketing',
				'Agregar chatbot para atención inicial de consultas',
				'Desarrollar portal cliente para seguimiento de casos',
				'Integrar sistema de citas online'
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
