import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://shardmc.github.io',
	base: '/projects',
	integrations: [
		starlight({
			title: 'ShardMC Projects',
			favicon: './favicon.png',
			social: {
				github: 'https://github.com/ShardMC',
				discord: 'https://discord.gg/CqVAzakrqx'
			},
			sidebar: [
				{
					label: 'Arte',
					link: '/arte',
					autogenerate: { directory: 'projects/arte' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			]
		}),
	],
});
