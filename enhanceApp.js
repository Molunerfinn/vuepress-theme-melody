import './styles/index.styl'
import TransLator from './utils/i18n/index'
import mixin from './utils/mixin'
const transLator = new TransLator()
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  transLator.setTemplate(TEMPLATE)
  Vue.prototype.$t = transLator.translate
  Vue.use(mixin)
}
