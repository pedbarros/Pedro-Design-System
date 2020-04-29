import { storiesOf } from '@storybook/vue'; 
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import pcInput from './pcInput.vue';

// const variantsOptions = {
//   primary: 'primary',
//   secondary: 'secondary',
//   success: 'success'
// };

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
    // props: {
    //   variant: { default: select('Variant', variantsOptions, 'secondary') },
    //   show: { default: boolean('Show', true) }
    // },
  }));