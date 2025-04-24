import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mi Sitio Personalizado',
  tagline: 'La mejor documentación de mi proyecto',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/docusaurus',

  organizationName: 'JimAcosta123', // Tu nombre de usuario de GitHub
  projectName: 'mi-docusaurus', // Nombre de tu repositorio

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Aquí agregas la fuente Montserrat
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap',
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/tuusuario/mi-docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Mi Sitio Personalizado',
        logo: {
          alt: 'Logo de mi sitio',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tuusuario/mi-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Enlaces',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tuusuario/mi-docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mi Proyecto. Creado con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;