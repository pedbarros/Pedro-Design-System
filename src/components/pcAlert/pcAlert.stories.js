import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import pcAlert from './pcAlert.vue';

const variantsOptions = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success'
};

storiesOf('Components|pcAlert', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcAlert },
    template: `<pcAlert :variant="variant" :show="show">
      A simple alert with an <strong>strong</strong> text
    </pcAlert>`,
    props: {
      variant: { default: select('Variant', variantsOptions, 'secondary') },
      show: { default: boolean('Show', true) }
    },
  }));