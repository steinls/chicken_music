import Vue from 'vue'
import Router from 'vue-router'
// const helloword = (resolve) => {
//   import('components/HelloWorld.vue').then((module) => {
//     resolve(module)
//   })
// }
const recommend = resolve => require(['views/recommend.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend
    }
  ]
})
