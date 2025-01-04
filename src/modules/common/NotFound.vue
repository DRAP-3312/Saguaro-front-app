<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ButtonFormComponent from '@/modules/common/components/ButtonFormComponent.vue'
</script>

<template>
  <div>
    <div class="grid grid-cols-3 h-screen place-items-center">
      <div class="col-start-2 col-span-1" replace :to="{ name: 'auth' }">
        <img
          src="@/assets/notfound.png"
          alt="notfound"
          class="max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto"
        />

        <RouterLink replace :to="{ name: 'auth' }">
          <ButtonFormComponent content="Volver a saguro" type="button" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
