import './bootstrap';
import '/node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '/node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '/node_modules/admin-lte/dist/js/adminlte.min.js?v=3.2.0';
import '/node_modules/admin-lte/plugins/chart.js/Chart.min.js';
import '/node_modules/admin-lte/dist/js/demo.js';
import '/node_modules/admin-lte/dist/js/pages/dashboard3.js';
import './api.js';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import Routes from './routers.js';


const app = createApp({});
const router = createRouter(
    {
        routes: Routes,
        history: createWebHistory(),
        
    });

app.use(router);
app.mount('#app');