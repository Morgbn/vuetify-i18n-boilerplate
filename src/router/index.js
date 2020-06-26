import Vue from 'vue'
import Router from 'vue-router'
import auth from './middleware/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/views/Login').default
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: require('@/views/Dashboard').default,
      meta: {
        middleware: [auth],
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware
    const funcChaine = []
    for (let i = middleware.length - 1; i >= 0; i--) {
      funcChaine[i] = () => middleware[i]({
        from,
        next: i !== (middleware.length - 1) ? funcChaine[i+1] : next,
        router,
        to
      })
    }
    funcChaine[0]()
  } else {
    next()
  }
})

export default router