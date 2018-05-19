module.exports = {
    title: '[KETA]',
    description: 'Nem győzni jöttünk, hanem pusztítani!',
    head: [
      ['link', { rel: 'icon', href: `/favicon-16x16.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#ff0000' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#ff0000' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
      sidebar: {
        '/keta/': [
          '',
          'szabalyok'
        ],
  
        '/discord/': [
          '',
          'telepites',
          'hasznalat',
          'keta_szerver'
        ],

        '/tudastar/': [
          '',
          'jatekmechanika',
          'premium_tankok'
        ],
  
        // fallback
        '/': [
          '',
          'contact',
          'about'
        ]
      },
      nav: [
        { text: '[KETA]', link: '/keta/' },
        { text: 'Discord', link: '/discord/' },
        { text: 'Tudástár', link: '/tudastar/' }
      ],
      markdown: {
        config: md => {
          md.use(require('markdown-it-toc'))
        }
      },
      serviceWorker: true
    }
  }