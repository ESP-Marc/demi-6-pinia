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

      <textarea v-model="hello.state.message"></textarea>
    </div>

  </transition>

</template>
