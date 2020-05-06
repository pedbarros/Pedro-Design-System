<template>
  <div class="card" :class="{'card-disabled': disabled}">
    <div class="card-header">
      <img :src="img" alt="">
    </div>
    <div class="card-body">
      <h3 class="card-body-title">{{ title }}</h3>
      <p class="card-body-description">{{ description }}</p>
    </div>
    <div class="card-footer" v-if="actions">
      <div v-for="action in actions" :key="action.label">
        <pc-button :color="action.variant">Normal Button</pc-button>
      </div>
    </div>
  </div>
</template>

<script>
import pcButton from '../pcButton/pcButton';
// import pcBadge from '../pcBadge';

export default {
  name: 'hs-card',
  components: {
    pcButton,
    // pcBadge,
  },
  props: {
    title: String,
    description: String,
    actions: Array,
    img: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasFooterSlot () {
      return !!this.$slots['footer']
    }
  },
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.card {
  background: $white;
  width: 295px;
  height: 100%;
  padding: 30px 20px;
  border-radius: 6px;
  &-disabled{
    cursor: not-allowed;
    opacity: 0.5;
  }
  .card-body {
    margin-bottom: 30px;
    .card-body-title {
      font-size: 20px;
    }
  }
  .card-footer{
    display: flex;
    justify-content: space-between;
  }
}
</style>
