module.exports = {
    title: '[KETA]',
    description: 'Nem győzni jöttünk, hanem pusztítani!',
    head: [
      ['link', { rel: 'icon', href: `/favicon-16x16.png` }]
    ],
    themeConfig: {
      sidebar: {
        // sidebar for pages under /clan/
        '/clan/': [
          '',
          'newcomer'
        ],
        // sidebar for pages under /game/
        '/game/': [
          '',
          'elso',
          'masodik'
        ],
        // sidebar for pages under /duide/
        '/guide/': [
          '',
          'first',
          'second'
        ]
      },
      nav: [
        { text: 'KETA',
          items: [
            { text: 'A klánról', link: '/clan/' },
            { text: 'A játékról', link: '/game/' }
          ]
        },
        { text: 'Szabályok', link: '/guide/' },
        { text: 'Clan | Wargaming.net', link: 'https://eu.wargaming.net/clans/wot/500065045/' },
      ]
    }
  
  }