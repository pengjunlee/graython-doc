import router from '@/router'

// components
const NotFound = () => import('@/components/NotFound.vue')

// blossom
const Index = () => import('../views/Index.vue')
const Articles = () => import('@/views/article/Articles.vue')

router.addRoute({ path: '/404', component: NotFound })
router.addRoute({ path: '/:pathMatch(.*)', redirect: '/404' })
router.addRoute({ path: '/', redirect: '/articles' })
router.addRoute({
  path: '/',
  name: 'Index',
  component: Index,
  meta: { keepAlive: true },
  children: [
    { path: '/articles', name: 'Articles', component: Articles, meta: { keepAlive: true } }
  ]
})
