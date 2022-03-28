<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h4 text-center">LXE</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" v-model="form.email" rounded outlined/>

        <q-input label="Senha" v-model="form.password" rounded outlined
         :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
        </q-input>
        <div class="full-width q-pt-md">
          <q-btn
            label="Entrar"
            color="secondary"
            class="full-width shadow-3"
            outline
            rounded
            type="submit"
          />
        </div>
        <div class="full-width">
          <q-btn label="Criar conta" color="secondary" class="full-width" flat to="/register" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import authUser from 'src/composables/AuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()
    const { login } = authUser()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.replace({ name: 'Me' })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin,
      isPwd: ref(true)
    }
  }
})
</script>
