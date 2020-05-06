import { storiesOf } from '@storybook/vue'; 
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import pcInput from './pcInput.vue';

storiesOf('Components|pcInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcInput },
    data() {
      return {
        text: 'ok'
      }
    },
    template: `<pcInput :value="text" />`,
  }));