<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div class="q-pa-md">
          <q-btn-dropdown color= secondary outline label="Perfil" icon="person">
            <div class="row no-wrap q-pa-md">
              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user.user_metadata.name }}</div>
                <q-btn color="primary" label="Sair" push size="sm" v-close-popup @click="handleLogout" />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Essential Links</q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

import { defineComponent, ref } from 'vue'
import authUser from 'src/composables/AuthUser'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const $q = useQuasar()

    const { user, logOut } = authUser()

    const router = useRouter()

    const handleLogout = async () => {
      $q.dialog({
        title: 'Sair',
        message: 'Você deseja sair?',
        cancel: 'Cancelar',
        persistent: true,
        ok: 'Sair'
      }).onOk(async () => {
        await logOut()
        router.replace({ name: 'Login' })
      })
    }
    return {
      user,
      handleLogout,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
