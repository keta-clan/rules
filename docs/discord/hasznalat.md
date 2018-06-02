---
lang: hu-HU
title: Használata
sidebarDepth: 2
url: 'https://res.cloudinary.com/dem3uioaq/image/upload/w_%width%/'
---

# Használata

Biztosan vannak akiknek nem kell magyarázat a használatához. Viszont olyanok is akadnak, akiknek talán nem egyértelmű a program. Itt mindenki találhat hasznos információt. A már avatottak is elcsíphetnek pár trükköt.

## A felület

<vue-responsive-image :image-url=" this.$page.frontmatter.url + 'interface.png'" :image-ratio="16/9" :alt="'képernyőkép discord felület'"></vue-responsive-image>

* [A] Szerverek listája
* [B] Az aktuális szerver csatornái
* [C] Aktív szöveges csatorna hozzászólásai
* [D] Aktív szöveges csatorna felhasználói
* [E] Saját profilod és kapcsolói: némítás | halkítás | beállítások

### Csatlakozás csatornákhoz

A Discord külön kezeli a hang és szöveg csatornákat. Csatlakozáshoz csak klikkeljünk a csatorna nevére és már bent is vagyunk. Egy időben egy hang csatornához lehet csatlakozni, de ez független attól, hogy melyik szerver melyik szöveges csatornáját használjuk közben. A csatlakoztatott hang csatorna neve a profil doboz (E) felett jelenik meg. Itt látszik a csatlakoztatott `szoba neve / szervere`. A hangcsatorna elhagyásához a telefonkagyló ikonnal jelölt gombot kell megnyomni. 

<vue-responsive-image :image-url=" this.$page.frontmatter.url + 'discord-audio.png'" :image-ratio="16/9" :alt="'discord csatlakoztatott hang'"></vue-responsive-image>


## Beállítások
A felhasználónév meletti fogaskerékre kattintva csalogathatjuk elő a beállításokat. Rengeteg beállítás van, mi most csak a legfontosabbakra térünk ki.

### Hang és videó

<vue-responsive-image :image-url=" this.$page.frontmatter.url + 'audio1.png'" :image-ratio="16/9" :alt="'képernyőkép discord hang beállítások'"></vue-responsive-image>

A beviteli és kimeneti hang eszköz beállítása mellet a hangerőt is tudjuk állítani. A beviteli hangerőt érdemes a maximumra állítani.
1. Beviteli módnál választhatunk a Gomb nyomásra (Push to Talk) és hang aktiválásra (Voice Activity) lehetőségek közül. A Gomb nyomásra esetén szabadon kiválaszthatjuk a gombot a gyorsgomb beállítással.
2. A hang aktiválás érzékenysége pedig a Beviteli érzékenység automatikus megállapítása kikapcsolása után állítható.


## Tippek

### Halkítás

A halkítás funkció lehalkítja a többi alkalmazást (a tankcsaták zaját) amikor valaki beszél, ha az alábbi beállítást használjuk:

<vue-responsive-image :image-url=" this.$page.frontmatter.url + 'audio2.png'" :image-ratio="16/9" :alt="'képernyőkép discord halkítás'"></vue-responsive-image>

### Értesítések

Amennyiben a hang aktiválására a gombnyomást választottuk, érdemes az értesítések menü alatt a <code>PPT&nbsp;aktiválás</code>/<code>PPT&nbsp;deaktiválás</code> beállítások mellett a jelölőt kikapcsolni. Így a felesleges értesítési hangoktól (csipogás) megszabadulunk. Ellenkező esetben a gomb lenyomásakor és felengedésekor is egy rövid értesítő hangot fogunk hallani.

<vue-responsive-image :image-url=" this.$page.frontmatter.url + 'notify.png'" :image-ratio="16/9" :alt="'képernyőkép discord értesítés'"></vue-responsive-image>

### In-game hangkommunikáció

A játék is kínál hangkommunikációt, amit a legjobb ha kikapcsol az ember. Ezt a kliens beállító felületén lehet megtenni, a Beállítások->Hangerő->Hangkommunikácó menüben. Kikapcsolni a `Hang engedélyezése`(1) jelölővel lehet. Amennyiben használni szeretnénk érdemes ellenőrizni melyik gombra van beállítva (2). Nem szerencsés, ha a Discord és a játék is ugyanarra a billentyűre aktiválja a hangot. Ez erős gerjedéshez hasonló hangot tud prodikálni.

<vue-responsive-image :image-url=" this.$page.frontmatter.url + 'wot-settings-audio'" :image-ratio="16/9" :alt="'képernyőkép WoT kliens beállítások'"></vue-responsive-image>