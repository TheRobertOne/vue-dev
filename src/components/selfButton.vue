<template>
  <button :style="{fontSize: fontSizeNum+'px'}" @click="$emit('getStyle', 2)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "self-button",
  props: {
    fontSizeNum: Number,
    getStyle: Function
  }
}
</script>

<style scoped>

</style>
