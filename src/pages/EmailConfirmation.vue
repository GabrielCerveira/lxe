<template>
  <q-page class="flex flex-center">
    <div>
    <p class="text-h4 text-center text-secondary">
      Você foi registrado!
    </p>
    <p class="text-h6 text-center">
      Faça a confirmação no email {{ $route.query.email }} para finalizar o cadastro.
    </p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
