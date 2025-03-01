<script lang="ts">
	let {
		title,
		description,
		keywords,
		url,
		type,
		image = '%sveltekit.assets%/og-image.jpg'
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
		'@type': 'Person',
		name: 'Ivan Gabriel Yarupaitan Rivera',
		alternateName: 'Vanchi',
		jobTitle: 'Programador de aplicaciones web',
		url: url,
		image: image,
		description: description,
		knowsAbout: keywords.split(', '),
		sameAs: [
			'https://github.com/IvanGabrielYarupaitanRivera',
			'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
			'https://www.facebook.com/ivan.yarupaitan'
		],
		workLocation: {
			'@type': 'Place',
			address: {
				'@type': 'PostalAddress',
				addressRegion: 'Junín',
				addressCountry: 'PE'
			}
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
		]
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
	<meta property="og:site_name" content="Ivan Gabriel Yarupaitan Rivera | Desarrollador Web" />

	<!-- Twitter -->
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={image} />

	<!-- Schema.org -->
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
