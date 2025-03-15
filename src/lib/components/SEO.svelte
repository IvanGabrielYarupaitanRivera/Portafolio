<script lang="ts">
	let {
		title,
		description,
		keywords,
		url,
		type,
		image = 'https://www.vanchi.pro/og-image.jpg'
	}: {
		title: string;
		description: string;
		keywords: string;
		url: string;
		type: string;
		image?: string;
	} = $props();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': url,
		name: 'Ivan Gabriel Yarupaitan Rivera - Servicios de Desarrollo Web',
		alternateName: 'Vanchi',
		jobTitle: 'Programador de aplicaciones web',
		url: url,
		image: image,
		description: description,
		priceRange: '$$',
		telephone: '+51985942670',
		email: 'ivangyr321@gmail.com',
		address: {
			'@type': 'PostalAddress',
			addressRegion: 'Junín',
			addressCountry: 'PE'
		},
		founder: {
			'@type': 'Person',
			name: 'Ivan Gabriel Yarupaitan Rivera',
			jobTitle: 'Desarrollador Web Full Stack',
			knowsAbout: [
				'Svelte',
				'SvelteKit',
				'TypeScript',
				'JavaScript',
				'CSS',
				'HTML',
				'Supabase',
				'Frontend',
				'UI/UX',
				'Tailwind',
				'Vercel',
				'Netlify',
				'Astro'
			]
		},
		sameAs: [
			'https://github.com/IvanGabrielYarupaitanRivera',
			'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
			'https://www.facebook.com/vanchi.programador'
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Servicios de Desarrollo Web Profesional',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Desarrollo de Páginas Web',
						description:
							'Creación de páginas web modernas, responsivas y optimizadas para SEO y conversión de clientes'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Desarrollo de Aplicaciones Web',
						description:
							'Aplicaciones web interactivas y funcionales con tecnologías modernas para negocios y startups'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Desarrollo Full Stack',
						description:
							'Soluciones web completas desde el frontend hasta el backend con las tecnologías más modernas del mercado'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Diseño y Programación Web',
						description:
							'Interfaces atractivas y código optimizado para una experiencia de usuario excepcional y máxima velocidad de carga'
					}
				}
			]
		},
		workLocation: {
			'@type': 'Place',
			address: {
				'@type': 'PostalAddress',
				addressRegion: 'Junín',
				addressCountry: 'PE'
			}
		},
		areaServed: [
			{
				'@type': 'City',
				name: 'Huancayo',
				containedInPlace: {
					'@type': 'AdministrativeArea',
					name: 'Junín',
					containedInPlace: {
						'@type': 'Country',
						name: 'Perú'
					}
				}
			},
			{
				'@type': 'City',
				name: 'Huancavelica',
				containedInPlace: {
					'@type': 'AdministrativeArea',
					name: 'Huancavelica',
					containedInPlace: {
						'@type': 'Country',
						name: 'Perú'
					}
				}
			},
			{
				'@type': 'Country',
				name: 'Perú'
			},
			{
				'@type': 'GeoCircle',
				name: 'Virtual - Servicios remotos en todo el mundo',
				description:
					'Servicios disponibles internacionalmente de forma remota para clientes en cualquier ubicación'
			}
		],
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				opens: '00:00',
				closes: '23:59'
			}
		],
		worksFor: {
			'@type': 'Organization',
			name: 'Freelance - Servicios independientes de desarrollo'
		},
		skills: [
			'Svelte',
			'Sveltekit',
			'TypeScript',
			'JavaScript',
			'CSS',
			'HTML',
			'Supabase',
			'Frontend',
			'UI/UX',
			'Tailwind',
			'Vercel',
			'Netlify',
			'Astro'
		],
		knowsLanguage: ['es', 'en'],
		geo: {
			'@type': 'GeoCoordinates',
			latitude: -12.041545380185886,
			longitude: -75.19187545630611
		},
		logo: 'https://vanchi.pro/logo.png',
		additionalType: [
			'http://www.productontology.org/id/Web_development',
			'http://www.productontology.org/id/Software_development'
		],
		isicV4: '6201',
		amenityFeature: [
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Servicios Remotos',
				value: true
			},
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Reuniones virtuales',
				value: true
			}
		],
		paymentAccepted: 'Transferencia bancaria, Yape, Efectivo',
		serviceType: ['Desarrollo Web', 'Desarrollo Full Stack', 'Diseño UI/UX']
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Ivan Gabriel Yarupaitan Rivera" />
	<meta name="geo.region" content="PE-JUN" />
	<meta name="geo.placename" content="Junín" />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content="es_PE" />
	<meta
		property="og:site_name"
		content="Servicios de Desarrollo Web | Ivan Gabriel Yarupaitan Rivera"
	/>

	<!-- Twitter -->
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={image} />

	<!-- Schema.org -->
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
