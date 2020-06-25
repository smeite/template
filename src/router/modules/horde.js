import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/horde',
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      meta: { ...meta, cache: true, title: '部落首页' },
      component: () => import('@/views/data/index/index')
    },
    {
      path: 'dashboard/overview',
      name: `${pre}dashboard-overview`,
      meta: { ...meta, cache: true, title: '概况' },
      component: () => import('@/views/data/dashboard/overview/index')
    },
    {
      path: 'dashboard/realtime',
      name: `${pre}dashboard-realtime`,
      meta: { ...meta, cache: true, title: '实时' },
      component: () => import('@/views/data/dashboard/realtime/index')
    },
    {
      path: 'dashboard/monitor',
      name: `${pre}dashboard-monitor`,
      meta: { ...meta, cache: true, title: '监控' },
      component: () => import('@/views/data/dashboard/monitor/index')
    },

  ])('horde-')
}
