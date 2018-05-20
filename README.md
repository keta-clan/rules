# keta-clan static site

>[VuePress](https://github.com/vuejs/vuepress) project. Generates the static site [https://keta-clan.github.io/](https://keta-clan.github.io/)

## When you writing code:

```
yarn docs:dev
```

## You can use in markdown fies

### Embeding YouTube videos

``` md
<YoutubeVideo :videoId="'your-videos-id'"></YoutubeVideo>
```
**Examlple**

 The video you want to embed has the url:
 https://www.youtube.com/watch?v=82kUjM0A-oE
 
 You must add the following line to the markdown file:
 
 ```
<YoutubeVideo :videoId="'82kUjM0A-oE'"></YoutubeVideo>
```

## Generate static site:

```
yarn docs:build
```

## Deploy static site:

The sctipt generates the static site and push into the repositiry ([https://github.com/keta-clan/keta-clan.github.io](https://github.com/keta-clan/keta-clan.github.io)).
```
./delpoy.sh
```
For detailed instructions: [VuePress documentation](https://vuepress.vuejs.org/)

