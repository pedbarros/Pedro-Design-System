import { storiesOf } from '@storybook/vue'
import {
    withKnobs
  } from '@storybook/addon-knobs'

import pcButton from './pcButton.vue';


storiesOf('Components|pcButton', module)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { pcButton },
    template: `<pcButton>Normal Button</pcButton>`,
  }))
  .add('Primary', () => ({
    components: { pcButton },
    template: `<pcButton color="primary">Primary Button</pcButton>`,
  }));