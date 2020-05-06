import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  boolean,
  text,
} from '@storybook/addon-knobs'

import pcCard from './pcCard.vue'

storiesOf('Components|pcCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcCard },
    template: `<div class="row">
    <div class="col-lg-3">
      <pc-card
        :disabled="disabled"
        :title="title"
        :description="description"
        img="https://source.unsplash.com/random/292x172"
        :actions="actions"
      >
      </pc-card>
    </div>
    </div>`,
    props: {
      title: { default: text('Title', 'My card title') },
      description: { default: text('Description', 'My card description') },
      disabled: { default: text('Disabled', false) },
    },
    data() {
      return {
        actions: [
          {
            label: 'See More',
            variant: 'secondary',
            click: () => {},
          },
          {
            label: 'Go',
            variant: 'primary',
            click: () => {},
          },
        ],
      }
    }
  })) 
