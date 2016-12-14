import * as EasyToastVue from './EasyToast.vue'

export default {
  install(Vue, options) {
    const CONSTRUCTOR = Vue.extend(EasyToastVue)
    const CACHE = {}
    function toast(msg, options = {}) {
      options.message = msg
      let toast = CACHE[options.id] || (CACHE[options.id] = new CONSTRUCTOR)
      toast.$mount()
      toast.queue.push(options)
    }
    Vue.toast = Vue.prototype.$toast = toast
  }
}
