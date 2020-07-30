import { storiesOf } from '@storybook/vue';
import { withKnobs, select, } from '@storybook/addon-knobs';

import pcCheckbox from './pcCheckbox.vue';



storiesOf('Components|pcCheckbox', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { pcCheckbox },
    template: ` 
        <div>
          <pcCheckbox id="pedro" text="Pedro" v-model="checkedNames" value="pedro" />
          <pcCheckbox id="barros" text="Barros" v-model="checkedNames" value="barros" />
          <pcCheckbox id="silva" text="Silva" v-model="checkedNames" value="silva" />    
        </div> 
    `,
    data () {
      return {
        checkedNames: [],
      }
    }
  }));

