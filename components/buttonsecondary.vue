<template>
  <button
    class="px-4 py-3 text-white bg-primary-700 hover:bg-primary-900 font-semibold w-full rounded-md text-sm"
  >
  {{ title }}
  </button>
</template>

<script>
export default {
  props: ['title'],
}
</script>