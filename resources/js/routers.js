import Dashboard from './components/Dashboard.vue';
import Products from './components/Product.vue';
import Users from './components/Users.vue';
export default [
    {
        path: '/admin/dashboard',
        name: 'admin/dashboard',
        component: Dashboard,   
    },
    {
        path: '/admin/products',
        name: 'admin/products',
        component: Products,   
    },
    {
        path: '/admin/users',
        name: 'admin/users',
        component: Users,   
    }
]