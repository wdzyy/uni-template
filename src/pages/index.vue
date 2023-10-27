<script setup lang="ts">
const name = $ref('')
</script>

<template>
  <div>
    <ZLogo />

    <div py-4 />

    <ZInput
      v-model:value="name"
      placeholder="What's your name?"
    />

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="router.push(`/pages/hi?name=${name}`)"
      >
        Go
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
layout: home
</route>
