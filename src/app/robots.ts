import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
		sitemap: 'https://tax-simulator.com/sitemap.xml',
		host: 'https://tax-simulator.com',
	};
}
