import Vue from 'vue';
import Router from 'vue-router';
import Home from '../layouts/home';
import Search from '../layouts/search';
import Notice from '../layouts/notice';
import Me from '../layouts/me';

import PhotoDetail from '../components/PhotoDetail/index';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
        },
        {
            path: '/notice',
            name: 'Notice',
            component: Notice,
        },
        {
            path: '/me',
            name: 'Me',
            component: Me,
        },
        {
            path: '/photo',
            name: 'PhotoDetail',
            component: PhotoDetail,
        },
    ],
});
