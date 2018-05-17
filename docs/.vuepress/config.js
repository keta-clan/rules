module.exports = {
    title: 'KETA',
    description: 'KETA World of Tanks klán',
    head: [
      ['link', { rel: 'icon', href: `/favicon-16x16.png` }]
    ],
    themeConfig: {
      nav: [
        { text: 'KETA',
          items: [
            { text: 'A klánról', link: '/clan/' },
            { text: 'A játékról', link: '/game/' }
          ]

        },
        { text: 'Szabályok', link: '/guide/' },
        { text: 'Linkek', link: 'https://worldoftanks.eu' },
      ]
    }
  
  }