module.exports = {
    title: '[KETA]',
    description: 'Nem győzni jöttünk, hanem pusztítani!',
    head: [
      ['link', { rel: 'icon', href: `/favicon-16x16.png` }]
    ],
    themeConfig: {
      sidebar: {
        '/keta/': [
          '',     /* /keta/ */
          'one',  /* /keta/one.html */
          'two'   /* /keta/two.html */
        ],
  
        '/discord/': [
          '',      /* /bar/ */
          'one', /* /discord/one.html */
          'two'   /* /discord/two.html */
        ],
  
        // fallback
        '/': [
          '',        /* / */
          'contact', /* /contact.html */
          'about'    /* /about.html */
        ]
      },
      nav: [
        { text: 'Klán', link: '/keta/' },
        { text: 'Discord', link: '/discord/' },
      ],
      markdown: {
        config: md => {
          md.use(require('markdown-it-toc'))
        }
      }
    }
  }