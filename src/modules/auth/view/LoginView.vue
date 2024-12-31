<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useAuthStore } from '../store/auth.store'
import { useToast } from 'vue-toastification'
import ButtonFormComponent from '@/modules/common/components/ButtonFormComponent.vue'
import InputFormComponent from '@/modules/common/components/InputFormComponent.vue'
import LoadingView from '@/modules/common/animation/LoadingView.vue'

const userNameInputRef = ref<HTMLInputElement | null>(null)
const passwordInputRef = ref<HTMLInputElement | null>(null)
const authStore = useAuthStore()
const loading = ref(false)
const toast = useToast()
const myLogin = reactive<{ userName: string; password: string }>({
  userName: '',
  password: '',
})

const onLogin = async () => {
  if (myLogin.userName === '' || myLogin.password.length < 6) {
    return toast.warning('User name o password no pueden estar vacios')
  }

  loading.value = true
  const ok = await authStore.login(myLogin)
  loading.value = false
  if (ok) {
    return toast.success(`Bienvenido ${authStore.user?.name} ${authStore.user?.lastname}`)
  }

  toast.error('Credenciales inválidas')
}

const assignValue = (value: string, id: string) => {
  switch (id) {
    case 'username':
      myLogin.userName = value
      break
    case 'password':
      myLogin.password = value
      break
  }
}
</script>

<template>
  <div class="w-full lg:w-4/5 pt-4">
    <LoadingView v-if="loading" />
    <div>
      <h3 class="text-2xl text-center p-3">Bienvenido</h3>
    </div>
    <form class="" @submit.prevent="onLogin">
      <div class="mt-4 sm:mt-0 sm:ml-4 dark:text-white text-gray-700 text-start">
        <div class="md:flex gap-3">
          <div class="flex-grow">
            <InputFormComponent
              id-element="username"
              label="User Name"
              placeholder="UserName"
              type="text"
              @input-value="assignValue($event, 'username')"
            />
          </div>

          <div class="flex-grow">
            <InputFormComponent
              id-element="password"
              label="Password"
              placeholder="**********"
              type="password"
              @input-value="assignValue($event, 'password')"
            />
          </div>
        </div>
        <div class="mt-3">
          <ButtonFormComponent content="Sign In" type="submit" />
        </div>
      </div>
    </form>
  </div>
</template>
