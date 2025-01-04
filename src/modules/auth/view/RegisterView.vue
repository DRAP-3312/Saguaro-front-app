<script setup lang="ts">
import type { RegisterAuth } from '@/interfaces'
import ButtonFormComponent from '@/modules/common/components/ButtonFormComponent.vue'
import InputFormComponent from '@/modules/common/components/InputFormComponent.vue'
import SelectFormComponent from '@/modules/common/components/SelectFormComponent.vue'
import { reactive, ref } from 'vue'
import { registerAction } from '../actions/register.actions'
import LoadingView from '@/modules/common/animation/LoadingView.vue'
import { toastCustom } from '@/modules/common/alert/alertMessage'

const loadingReq = ref(false)
const myRegister = reactive<RegisterAuth>({
  userName: '',
  password: '',
  user: {
    name: '',
    aboutme: '',
    gender: 'notsay',
    lastname: '',
  },
})

const onRegister = async () => {
  loadingReq.value = true
  const register = await registerAction(myRegister)
  loadingReq.value = false
  if (register.ok) {
    toastCustom.success(register.message)
  } else {
    toastCustom.error(register.message)
  }
}
</script>

<template>
  <div class="w-full p-2">
    <LoadingView v-if="loadingReq" />
    <div class="text-white shadow-md">
      <form @submit.prevent="onRegister" class="">
        <div class="md:flex gap-3">
          <div class="flex-grow pt-2">
            <label for="gender" class="block mb-2 text-sm font-medium text-gray-300">Gender</label>
            <SelectFormComponent
              :list="['male', 'female', 'notSay']"
              @select-item="(newValue) => (myRegister.user.gender = newValue as any)"
            />
          </div>
          <div class="flex-grow pt-2">
            <InputFormComponent
              id-element="username"
              label="User Name"
              placeholder="UserName"
              type="text"
              @input-value="(newValor) => (myRegister.userName = newValor)"
            />
          </div>

          <div class="flex-grow pt-2">
            <InputFormComponent
              id-element="password"
              label="Password"
              placeholder="************"
              type="password"
              @input-value="(newValor) => (myRegister.password = newValor)"
            />
          </div>
        </div>

        <div class="md:flex gap-3 pt-2">
          <div class="flex-grow">
            <InputFormComponent
              id-element="name"
              label="Name(s)"
              placeholder="name(s)"
              type="text"
              @input-value="(newValor) => (myRegister.user.name = newValor)"
            />
          </div>

          <div class="flex-grow">
            <InputFormComponent
              id-element="lastname"
              label="Lastname"
              placeholder="lastname"
              type="text"
              @input-value="(newValor) => (myRegister.user.lastname = newValor)"
            />
          </div>
        </div>

        <div class="pt-2">
          <label for="aboutme" class="block mb-2 text-sm font-medium text-gray-300">About me</label>
          <textarea
            v-model="myRegister.user.aboutme"
            :rows="3"
            :cols="50"
            placeholder="aboutme"
            class="w-full p-2 border rounded-md text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
          ></textarea>
        </div>

        <div class="mt-3">
          <ButtonFormComponent content="Save" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>
