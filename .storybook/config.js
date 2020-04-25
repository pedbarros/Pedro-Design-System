import { addParameters, configure } from '@storybook/vue'

addParameters({
  options: {
    name: 'Pedro Design System'
  },
})

const requireComponents = require.context('../src', true, /\.stories\.js$/)

const loadStories = () => {
  requireComponents.keys().forEach(file => requireComponents(file))
}

configure(loadStories, module)