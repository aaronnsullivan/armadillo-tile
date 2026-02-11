(async function() {
  const { TinaCloud } = window;
  
  const schema = {
    collections: [
      {
        label: 'Photos. Love Ya Bud. Nice Hog.',
        name: 'gallery',
        path: 'src/gallery',
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'image',
            label: 'Image',
            name: 'image',
          },
          {
            type: 'string',
            label: 'Alt Text',
            name: 'alt',
          },
          {
            type: 'rich-text',
            label: 'Description',
            name: 'body',
            isBody: true,
          },
        ],
        ui: {
          defaultItem: {
            title: 'New Photo',
          },
        },
      },
    ],
  };

  const tinaConfig = {
    branch: 'master',
    clientId: process.env.TINA_CLIENT_ID || 'YOUR_CLIENT_ID',
    token: process.env.TINA_TOKEN || 'YOUR_TOKEN',
    build: {
      outputFolder: 'admin',
      publicFolder: 'public',
    },
    media: {
      tina: {
        mediaRoot: 'images',
        publicFolder: 'public',
      },
    },
    schema: schema,
  };

  const app = new TinaCloud.TinaCMS(tinaConfig);
  app.initialization.start();
})();
