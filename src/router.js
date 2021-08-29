import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import DoandDont from '@/views/DoandDont';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/do-and-dont', component: DoandDont}
];

const router = new VueRouter({
    mode: 'history',
    routes
});
 export default router;