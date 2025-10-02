// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/doc/',

	integrations: [
		starlight({
			title: 'anssl',
			lastUpdated: true,

			logo: {
				src: './src/assets/logo.png',
			},
			favicon: './src/assets/logo.png',

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/https-cert/website' }],
			sidebar: [
				{
					label: '入门',
					items: [
						{ label: '概览', slug: 'starteds/overview' },
						{ label: '快速开始', slug: 'starteds/started' },
						{ label: '证书基础知识', slug: 'starteds/certificate-basics' },
					],
				},
				{
					label: '指南',
					items: [
						{ label: '证书管理', slug: 'guides/certificate-management' },
						{ label: '域名监控', slug: 'guides/monitor' },
						{ label: '自动部署', slug: 'guides/deploy' },
						{
							label: '工具',
							items: [
								{ label: 'whois 查询', slug: 'guides/tools/whois' },
								{ label: 'CSR 生成', slug: 'guides/tools/csr' },
							]
						},
					],
				},
				{
					label: 'FAQ',
					items: [
						{ label: '常见问题', slug: 'faq/faq' },
					],
				},
				{
					label: '隐私政策',
					items: [
						{ label: '隐私政策', slug: 'privacy/privacy' },
					],
				},
			],
		}),
	],

	devToolbar: { enabled: false },
});
