const routes = [
	{
		path: '/',
		name: 'index',
		title: '首页',
		component: () => import('@/pages/index.vue'),
	},
	{
		path: '/luck',
		name: 'luck',
		title: '抽奖',
		component: () => import('@/pages/luck.vue'),
	},
]
export default routes
