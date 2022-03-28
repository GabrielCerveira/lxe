<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h4 text-center">Criar sua conta</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
         label="Nome"
         v-model="form.name"
         rounded outlined
        />

        <q-input
         label="Email"
         v-model="form.email"
         rounded outlined
        />

        <q-input
         label="Senha"
         v-model="form.password"
         rounded outlined
        />
        <div class="full-width q-pt-md">
            <q-btn
            label="Cadastre-se"
            color="secondary"
            class="full-width shadow-3"
            outline
            rounded
            type="submit"
            />
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
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = authUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'EmailConfirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>
