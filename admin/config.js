const config = {
  backend: {
    name: 'github',
    repo: 'aaronnsullivan/armadillo-tile',
    branch: 'master',
    auth_endpoint: 'api/auth'
  },
  display_url: 'https://armadillotile.com',
  logo_url: 'https://armadillotile.com/images/armadillo.png',
  media_folder: 'images',
  public_folder: '/images',
  collections: [
    {
      name: 'gallery',
      label: 'Photos. Love Ya Bud. Nice Hog.',
      folder: 'src/gallery',
      create: true,
      slug: '{{slug}}',
      fields: [
        {label: 'Title', name: 'title', widget: 'string'},
        {label: 'Tags', name: 'tags', widget: 'hidden', default: ['gallery']},
        {label: 'Image', name: 'image', widget: 'image'},
        {label: 'Alt Text', name: 'alt', widget: 'string'},
        {label: 'Body', name: 'body', widget: 'markdown', required: false}
      ]
    }
  ]
};

console.log('Window keys containing CMS or Static:', Object.keys(window).filter(k => k.includes('CMS') || k.includes('Static')));

// Static CMS looks for window.StaticCmsApp
if (window.StaticCmsApp) {
  window.StaticCmsApp.init({ config });
  console.log('StaticCmsApp initialized');
} else if (window.CMS) {
  window.CMS.init({ config });
  console.log('CMS initialized');
} else {
  console.error('No CMS library found');
  console.log('All window keys:', Object.keys(window).sort());
}
