<template>
  <div :class="`bagde badge-${variant}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'pcBadge',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style scoped>
.bagde {
  text-align: center;
  padding: 5px;
  width: 80px;
  border-radius: 4px;
  color: white;
}

.badge-primary {
  background: #2196f3;
}
.badge-secondary {
  color: #000;
  background: #FFFAF0;
}

.badge-success {
  background: #4B0082;
}
</style>