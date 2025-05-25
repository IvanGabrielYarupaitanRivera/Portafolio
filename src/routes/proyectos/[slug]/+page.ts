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
