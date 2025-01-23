export async function GET() {
	const pages = [
		{
			url: 'https://mi-portafolio-ivan.vercel.app',
			priority: '1.0',
			changefreq: 'weekly'
		}
	];

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
							.map(
								(page) => `
                <url>
                    <loc>${page.url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>${page.changefreq}</changefreq>
                    <priority>${page.priority}</priority>
                </url>`
							)
							.join('')}
        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
