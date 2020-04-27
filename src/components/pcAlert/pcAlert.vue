<template>
  <div
    v-if="show"
    :class="`alert alert-${variant}`"
  >
    <span
      class="close"
      @click="show = false"
    >x</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'pcAlert',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  align-items: center;
  position: relative;
  border-left: 4px #fff solid;
  display: flex;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  color: white;

  &-primary {
    background: $primary;
  }
  &-secondary {
    color: $primary;
    border-left-color: $primary;
    background: $secondary;
  }

  &-success {
    color: $white;
    background: $info;
  }
}

.close {
  position: absolute;
  right: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>