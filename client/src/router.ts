import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ValidacaoEmail from './views/ValidacaoEmail.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/entrar',
		name: 'Login',
		component: Login
	},
	{
		path: '/validacaoEmail',
		name: 'Validação de Email Teste',
		component: ValidacaoEmail
	},
	{
		path: '/cadastrar',
		name: 'Cadastro',
		component: Register
	},
	{
		path: '/dashboard',
		name: 'DashboardRoot',
		component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue'),
		children: [
			{
				name: 'Dashboard',
				path: '/',
				component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Overview.vue')
			},
			{
				name: 'Contas – Visão Geral',
				path: 'contas',
				component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Accounts.vue')
			},
			{
				name: 'Bills Dashboard',
				path: 'bills',
				component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Bills.vue')
			},
			{
				name: 'Budgets Dashboard',
				path: 'budgets',
				component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Budgets.vue')
			},
			{
				name: 'Transações',
				path: 'transactions',
				component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Transactions.vue')
			},
			{
				name: 'Investimentos',
				path: 'investments',
				component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Investments.vue')
			}
		],
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/contas',
		name: 'Contas',
		component: () => import(/* webpackChunkName: "accounts" */ './views/dashboard/Accounts.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/contas/criar',
		name: 'Criar Conta',
		component: () => import(/* webpackChunkName: "accounts" */ './views/accounts/CreateDebitAccount.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/contas/:accountId',
		name: 'Criar Conta',
		component: () => import(/* webpackChunkName: "accounts" */ './views/accounts/EditDebitAccount.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/investimentos',
		name: 'Investimentos',
		component: () => import(/* webpackChunkName: "investments" */ './views/investments/Investment.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/transacoes',
		name: 'Transactions',
		component: () => import(/* webpackChunkName: "dashboard" */ './views/Transactions.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/transacao/criar',
		name: 'Criar Transação',
		component: () => import(/* webpackChunkName: "dashboard" */ './views/transactions/CreateTransaction.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/transacao/:transactionId/edicao',
		name: 'Editar Transação',
		component: () => import(/* webpackChunkName: "dashboard" */ './views/transactions/EditTransaction.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/admin',
		name: 'Admin',
		component: () => import(/* webpackChunkName: "admin" */ './views/admin/Admin.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/admin/usuarios',
		name: 'Admin-users',
		component: () => import(/* webpackChunkName: "admin" */ './views/admin/Users.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		name: 'Configurações',
		path: '/configuracoes',
		component: () => import(/* webpackChunkName: "profile" */ './views/profile/Settings.vue'),
		meta: {
			requiresAuth: true
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
