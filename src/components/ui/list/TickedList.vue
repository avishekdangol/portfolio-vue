<script setup lang="ts">
import type { ListProps } from './types'

const props = defineProps<ListProps>()
</script>

<template>
  <h2 class="english mb-2 text-[14px] font-semibold text-white">
    {{ props.title }}
  </h2>
  <ul class="grid md:grid-cols-2 space-y-1 list-inside text-gray-400">
    <li
      v-for="(item, index) of props.items"
      :key="index"
      class="flex items-center"
    >
      <svg
        class="w-3.5 h-3.5 me-2 text-green-400 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
        />
      </svg>
      {{ item }}
    </li>
  </ul>
</template>
