module.exports = {
    title: '[KETA]',
    description: 'Nem győzni jöttünk, hanem pusztítani!',
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#ffffff' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
      ['meta', { name: 'og:site_name', content: 'Nem győzni jöttünk, hanem pusztítani!'}],
      ['meta', { name: 'og:title', content: 'KETA - Kezdő Tank Alakulat'}],
      ['meta', { name: 'og:description', content: 'A World of Tanks talán legjobb mottója mögött egy remek kis klánt találsz. Akár a KETA tagja vagy akár nem, itt szinte minden információt megtalálsz rólunk. Ha unod már a játékot egyedül, csatlakozz hozzánk!'}],
      ['meta', { name: 'og:image', content: '/logo.png'}]
    ],
    //serviceWorker: true,
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
          //'premium_tankok',
          //'terkepek'
        ],
  
        // fallback
        // '/': [
        //   '',
        //   'contact',
        //   'about'
        // ]
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
      }
    }
  }