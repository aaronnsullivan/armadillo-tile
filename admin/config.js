const config = {
  backend: {
    name: 'github',
    repo: 'aaronnsullivan/armadillo-tile',
    branch: 'master'
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

// Wait for CMS to be available
function initCMS() {
  if (window.CMS) {
    CMS.init({ config });
  } else {
    setTimeout(initCMS, 100);
  }
}

initCMS();
