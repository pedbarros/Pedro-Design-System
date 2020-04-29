<template>
  <button
    class="button"
    :class="`button-color--${color}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'pcButton',
  props: {
    color: {
      type: String,
      default: 'normal', // 'normal' or 'primary'
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  appearance: none;
  border: none;
  // font-family: sans-serif;
  padding: 8px 16px;
  border-radius: 2px;
}

.button-color--normal {
  background-color: $secondary;
  color: $info;
}

.button-color--normal:hover,
.button-color--normal:focus {
  background-color: $secondary;
}

.button-color--normal:active {
  background-color: $secondary;
}

.button-color--primary {
  background-color: $primary;
  color: #fff;
}

.button-color--primary:hover,
.button-color--primary:focus {
  background-color: $primary;
}

.button-color--primary:active {
  background-color: $primary;
}
</style>