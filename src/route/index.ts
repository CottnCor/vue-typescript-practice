import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: 'index'
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/views/home-page/HomePage'),
            meta: {
                icon: '',
                title: '',
                keepAlive: true,
                navigable: true
            }
        },
        {
            path: '*',
            redirect: 'index'
        }
    ],
    mode: 'history'
});

router.beforeEach((to: any, from: any, next: any) => {
    next();
});

router.afterEach((to: any) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});

export default router;
