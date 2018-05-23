# keta-clan static site

>This project uses [VuePress](https://github.com/vuejs/vuepress) and generates the static site [https://keta-clan.github.io/](https://keta-clan.github.io/)

## When you writing code:

```
yarn docs:dev
```

## You can use in markdown fies

### Embeding YouTube videos

``` md
<YoutubeVideo :videoId="'your-videos-id'"></YoutubeVideo>
```
#### Examlple
 The video you want to embed has the url: `https://www.youtube.com/watch?v=82kUjM0A-oE`
 You must add the following line to the markdown file:
 
 ```
<YoutubeVideo :videoId="'82kUjM0A-oE'"></YoutubeVideo>
```

### Favicon in the text

``` md
<FavEmoji/>
```

### Responsive images

For responsive image tag generation, you can use [Vue Responsive Image](https://github.com/HCESrl/vue-responsive-image) in all markdown file, wiht the following syntax:

```
<vue-responsive-image
:image-url="'https://res.cloudinary.com/aponyhardt/image/upload/w_%width%/<your_filename>'"
:image-ratio="16/9">
</vue-responsive-image>
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

