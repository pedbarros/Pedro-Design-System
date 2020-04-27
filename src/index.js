import * as hsComponents from './components';

const install = (Vue) => {
  Object.values(hsComponents).forEach((component) => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export { default as Button } from './pcButton';
export { default as Badge } from './pcBadge';
export { default as Alert } from './pcAlert';
export { default as Radio } from './pcRadio';