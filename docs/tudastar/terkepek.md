---
lang: hu-HU
title: Térképek
sajatszovegem: 'Available maps in the game:'
maps: {
    "05prohorovka": {
      "namei18n": "Prokhorovka",
      "camouflagetype": "summer",
      "description": "Generally open terrain featuring a large hill and a railway embankment. Scattered trees provide concealment for tank destroyers. On the offensive, strike against the enemy's flanks, but do not leave your own flanks unguarded. Artillery enjoys good fields of fire, but is still vulnerable to raids by light tanks.",
      "arenaid": "05prohorovka"
    },
    "36fishingbay": {
      "namei18n": "Fisherman's Bay",
      "camouflagetype": "summer",
      "description": "The map is a mix of open spaces and irregular terrain. The winding streets of the fishing village can be highly advantageous for defense or attack. Low ridges and hills scattered with bushes offer excellent ambush opportunities.",
      "arenaid": "36fishingbay"
    },
    "01karelia": {
      "namei18n": "Karelia",
      "camouflagetype": "summer",
      "description": "Two avenues of attack are divided by a swamp. The eastern side is ideal for trench warfare. The western side is favorable to a hard push. The swamp provides a risky but perhaps unexpected attack route.",
      "arenaid": "01karelia"
    },
    "11murovanka": {
      "namei18n": "Murovanka",
      "camouflagetype": "summer",
      "description": "Swamps, ravines, and hills determine your battle tactics. The scarcity of buildings gives a combat advantage to artillery. Concentrating all your attacks along one axis of attack may prove the best strategy.",
      "arenaid": "11murovanka"
    },
    "35steppes": {
      "namei18n": "Steppes",
      "camouflagetype": "summer",
      "description": "Generally open, this map allows you to strike in multiple directions, but don't disperse your forces too much. A road in the center will take you to the enemy base more directly, but perhaps with greater difficulty. The edges of the map may offer better avenues for attacks and feints.",
      "arenaid": "35steppes"
    }
  }
---

{{this.$page.frontmatter.sajatszovegem}}

<div v-for="map in this.$page.frontmatter.maps" :key="map.arenaid">
<h2>{{ map.namei18n }}</h2>
<span>Álcafestés: {{ map.camouflagetype }}</span>
<p> {{ map.description }} </p>
</div>

::: danger :)
Párat hagytam csak, hogy könnyebb legyen eligazodni...
:::