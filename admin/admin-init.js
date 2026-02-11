import * as StaticCms from 'https://cdn.jsdelivr.net/npm/@staticcms/core';

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

console.log('StaticCms:', StaticCms);
if (StaticCms.init) {
  StaticCms.init({ config });
  console.log('Static CMS initialized');
} else {
  console.error('StaticCms.init not found');
}

// Load custom CSS after init
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'admin.css';
document.head.appendChild(link);

