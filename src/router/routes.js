const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home', // 入口主页面
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    redirect: '/home/scenicArea',
    children: [
      {
        path: 'scenicArea',
        name: 'ScenicArea',
        component: () => import('@/views/scenicArea/index.vue'),
      },
      {
        path: 'securityArea',
        name: 'SecurityArea',
        component: () => import('@/views/securityArea/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
];

export default routes;
