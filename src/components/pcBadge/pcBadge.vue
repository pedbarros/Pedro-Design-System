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

<style lang="scss" scoped>
.bagde {
  text-align: center;
  padding: 2px;
  width: 80px;
  border-radius: 4px;
  color: white;
}

.badge-primary {
  background: $primary;
}
.badge-secondary {
  color: $primary;
  background: $secondary;
}

.badge-success {
  color: $white;
  background: $info;
}
</style>