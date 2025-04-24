// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
      customProps: {
        icon: 'MdHome',
      },
    },
    {
      type: 'category',
      label: 'Tutorial Básico',
      customProps: {
        icon: 'MdMenuBook',
      },
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-document',
          label: 'Crear un documento',
          customProps: {
            icon: 'MdDescription',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-page',
          label: 'Crear una página',
          customProps: {
            icon: 'MdInsertDriveFile',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-blog-post',
          label: 'Crear una entrada de blog',
          customProps: {
            icon: 'MdCreate',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/deploy-your-site',
          label: 'Publicar tu sitio',
          customProps: {
            icon: 'MdCloudUpload',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/congratulations',
          label: '¡Felicitaciones!',
          customProps: {
            icon: 'MdEmojiEvents',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-basics/markdown-features',
          label: 'Características de Markdown',
          customProps: {
            icon: 'MdCode',
          },
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Extra',
      customProps: {
        icon: 'MdExtension',
      },
      items: [
        {
          type: 'doc',
          id: 'tutorial-extras/manage-docs-versions',
          label: 'Gestionar versiones de docs',
          customProps: {
            icon: 'MdHistory',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-extras/translate-your-site',
          label: 'Traducir tu sitio',
          customProps: {
            icon: 'MdTranslate',
          },
        },
        {
          type: 'doc',
          id: 'tutorial-extras/manual-inspector-elementos',
          label: 'Manual del inspector de elementos',
          customProps: {
            icon: 'MdSearch',
          },
        },
      ],
    },
  ],
};

export default sidebars;