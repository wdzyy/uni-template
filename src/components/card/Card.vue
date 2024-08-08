<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/cn'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'bg-card text-card-foreground border-border rounded-10px border shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
