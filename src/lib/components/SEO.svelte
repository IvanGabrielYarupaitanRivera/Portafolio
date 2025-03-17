<script lang="ts">
	let {
		title,
		description,
		keywords,
		url,
		type,
		image = 'https://www.vanchi.pro/og-image.jpg',
		city,
		region,
		country = 'Perú',
		countryCode = 'PE',
		latitude,
		longitude
	}: {
		title: string;
		description: string;
		keywords: string;
		url: string;
		type: string;
		image?: string;
		city: string;
		region: string;
		country?: string;
		countryCode?: string;
		latitude: string;
		longitude: string;
	} = $props();

	const locationData = $derived({
		formattedCity: city + ', ' + region,
		geoRegion: `${countryCode}-${region.substring(0, 3).toUpperCase()}`
	});

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': url,
		name: city
			? `Ivan Gabriel Yarupaitan Rivera - Desarrollo Web en ${city}`
			: 'Ivan Gabriel Yarupaitan Rivera - Servicios de Desarrollo Web',
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
			addressLocality: city,
			addressRegion: region,
			addressCountry: countryCode
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
			'https://github.com/IvanGabrielYarupaitanRivera/',
			'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
			'https://www.facebook.com/vanchi.desarrollador/',
			'https://www.instagram.com/vanchi.desarrollador/'
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: city
				? `Servicios de Desarrollo Web en ${city}`
				: 'Servicios de Desarrollo Web Profesional',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: city ? `Desarrollo de Páginas Web en ${city}` : 'Desarrollo de Páginas Web',
						description:
							'Creación de páginas web modernas, responsivas y optimizadas para SEO y conversión de clientes'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: city
							? `Desarrollo de Aplicaciones Web en ${city}`
							: 'Desarrollo de Aplicaciones Web',
						description:
							'Aplicaciones web interactivas y funcionales con tecnologías modernas para negocios y startups'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: city ? `Desarrollo Full Stack para ${city}` : 'Desarrollo Full Stack',
						description:
							'Soluciones web completas desde el frontend hasta el backend con las tecnologías más modernas del mercado'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: city ? `Diseño y Programación Web para ${city}` : 'Diseño y Programación Web',
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
				addressLocality: city,
				addressRegion: region,
				addressCountry: countryCode
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
			latitude: latitude,
			longitude: longitude
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
	<meta name="geo.region" content={locationData.geoRegion} />
	<meta name="geo.placename" content={locationData.formattedCity} />
	<meta name="geo.position" content={`${latitude};${longitude}`} />
	<meta name="ICBM" content={`${latitude}, ${longitude}`} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content="es_PE" />
	<meta
		property="og:site_name"
		content="Servicios de Desarrollo Web ${` en ${city} `} | Ivan Gabriel Yarupaitan Rivera"
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
