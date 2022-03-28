
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'LoginDefault', component: () => import('pages/Login.vue') },
      { path: 'Login', name: 'Login', component: () => import('pages/Login.vue') },
      { path: 'Register', name: 'Register', component: () => import('pages/Register.vue') },
      { path: 'EmailConfirmation', name: 'EmailConfirmation', component: () => import('pages/EmailConfirmation.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Me', name: 'Me', component: () => import('pages/Me.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
