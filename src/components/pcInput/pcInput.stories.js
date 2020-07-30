import { storiesOf } from '@storybook/vue'; 
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import pcInput from './pcInput.vue';

storiesOf('Components|pcInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcInput },
    data() {
      return {
        value: ''
      }
    },
    template: `<pcInput label="First Name" :value="value" />`,
  }));