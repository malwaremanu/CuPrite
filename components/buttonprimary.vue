<template>
    <button class="px-4 py-3 font-semibold text-white bg-gray-900 w-full rounded-md text-sm">
        {{ title }}
    </button>
</template>

<script>
export default {
    props : ['title']
}
</script>