<p align="center">
  <img width="125" height="125" src="https://raw.githubusercontent.com/Morgbn/vuetify-i18n-boilerplate/gh-pages/src/img/logo.52220100.png">
</p>

# Vue, Vuetify, Vuex, Vue-router, i18n boilerplate

A good way to quickly start a Vue project with good foundations ! **[ [Demo]( https://morgbn.github.io/vuetify-i18n-boilerplate) ]**

## :package: Features

* [x] **[Vue](https://github.com/vuejs/vue)** 2.x
* [x] **[Vuetify](https://github.com/vuetifyjs/vuetify)** v2.x
* [x] **[Vuex](https://github.com/vuejs/vuex)** v3.x
* [x] **[Vue-router](https://github.com/vuejs/vue-router)** v3.x
* [x] **[Vue-i18n](https://github.com/kazupon/vue-i18n)** v8.x

## :rocket: Getting started
```
git clone https://github.com/morgbn/vuetify-i18n-boilerplate project-name
cd project-name
npm i
npm serve # compiles and hot-reloads for development
```

## :question: FAQ

##### How can I add languages?
Here is an example to add the Spanish language :\
Add the Spanish flag in /src/assets/flags/. You can find (MIT-licensed) flags in this [repo folder](https://github.com/gosquared/flags/tree/master/flags/flags/flat/32).\
Rename it **es.png** (*important*).\
Next, create the file /src/lang/**es.js**, and write your translations, for example :
```javascript
export default {
  appname: 'Nombre de la aplicación'
}
```
That's it.

## :copyright: License
[MIT](http://opensource.org/licenses/MIT) :gift:
