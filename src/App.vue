<script lang="ts" setup>

import Pinia from '@/plugins/Pinia'
import {useHello} from '@/stores/useHello'

const hello = useHello(Pinia)

</script>

<template>

  <transition mode="out-in">

    <div>
      <h1>{{ hello.state.title }}</h1>
      <p>{{ hello.state.message }}</p>

      <v-textarea v-model="hello.state.message"></v-textarea>
    </div>

  </transition>

</template>

<style lang="scss">

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 0.75s ease;
}

.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}

</style>
