<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p class="text-h5 text-secondary"> Olá {{ user.user_metadata.name }} </p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import authUser from 'src/composables/AuthUser'

export default defineComponent({
  name: 'PageMe',
  setup () {
    const { user } = authUser()

    return {
      user
    }
  }
})
</script>
