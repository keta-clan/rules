import VueResponsiveImage from '../../node_modules/vue-responsive-image'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.component('vue-responsive-image', VueResponsiveImage)
  }