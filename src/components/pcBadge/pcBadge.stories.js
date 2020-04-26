import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';

import pcBadge from './pcBadge.vue';

const variantsOptions = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success'
};

storiesOf('Components|pcBadge', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcBadge },
    template: `<pcBadge :variant="variant">My Badge</pcBadge>`,
    props: {
      variant: { default: select('Variant', variantsOptions, 'primary') },
    },
  }));