import { storiesOf } from '@storybook/vue';
import { withKnobs, select, } from '@storybook/addon-knobs';

import pcRadio from './pcRadio.vue';

// const variantsOptions = {
//   primary: 'primary',
//   secondary: 'secondary',
//   success: 'success'
// };

storiesOf('Components|pcRadio', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcRadio },
    template: `<pcRadio :text="text"></pcRadio>`,
    props: {
      text: { default: 'MyText' },
    },
  }));