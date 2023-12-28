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
					collapsed: true,
					badge: {
						text: 'New',
						variant: 'tip'
					},
					autogenerate: { directory: '/arte' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
				"./src/styles/project.css"
			],
			components: {
				Header: './src/components/Header.astro',
				MobileMenuFooter: './src/components/MobileMenuFooter.astro'
			}
		}),
	],
});
