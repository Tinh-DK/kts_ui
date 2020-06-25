import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

// Widgets
import widgets from '../views/widgets'

// UI Components
import alerts from '../views/ui-components/alerts'
import badges from '../views/ui-components/badges'
import breadcrumbs from '../views/ui-components/breadcrumbs'
import buttons from '../views/ui-components/buttons'
import carousel from '../views/ui-components/carousel'
import dropdowns from '../views/ui-components/dropdowns'
import icons from '../views/ui-components/icons'
import modals from '../views/ui-components/modals'
import paginations from '../views/ui-components/paginations'
import progress from '../views/ui-components/progress'
import tables from '../views/ui-components/tables'
import typography from '../views/ui-components/typography'
import tabs from '../views/ui-components/tabs'
import tooltips from '../views/ui-components/tooltips'

// Form Components
import forms from '../views/forms/forms'

// Sample Pages
import error404 from '../views/sample-pages/error-404'
import error500 from '../views/sample-pages/error-500'
import login from '../views/sample-pages/login'
import register from '../views/sample-pages/register'


import Layout from '../components/layout/Layout'
import LayoutPublic from '../components/layout/LayoutPublic'
import PostManagement from '../views/ui-admin/post-management/PostManagement'
import PostAdd from '../views/ui-admin/post-management/PostAdd'
import RoleManagement from '../views/ui-admin/role-management/RoleManagement'
import UserManagement from '../views/ui-admin/user-management/UserManagement'
import ParentCategory from '../views/ui-admin/category-parent/CategoryParent'
import SubCategory from '../views/ui-admin/category-sub/CategorySub'
import Post from '../views/ui-public/post/Post'
import Home from '../views/ui-public/home/Home'
import Category from '../views/ui-public/category/Category'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: LayoutPublic,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/post/:tenkd',
          name: 'post',
          component: Post
        },
        {
          path: '/category/:tenkd',
          name: 'category',
          component: Category
        },
      ]
    },
    {
      path: '/admin',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: dashboard,
        },
        {
          path: 'post-management',
          name: 'PostManagement',
          component: PostManagement,
        },
        {
          path: 'post-add',
          name: 'PostAdd',
          component: PostAdd,
        },
        {
          path: 'role-management',
          name: 'RoleManagement',
          component: RoleManagement,
        },
        {
          path: 'user-management',
          name: 'UserManagement',
          component: UserManagement,
        },
        {
          path: 'parent-category',
          name: 'CategoryParent',
          component: ParentCategory,
        },
        {
          path: 'sub-category',
          name: 'SubCategory',
          component: SubCategory,
        }
      ]
    },
  ]
})