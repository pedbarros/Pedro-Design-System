import Button from '../src/components/Button';

export default {
    title: 'Button',
};

export const normalButton = () => ({
    components: { Button },
    template: '<Button>Normal Button</Button>',
});

export const primaryButton = () => ({
    components: { Button },
    template: '<Button color="primary">Normal Button</Button>',
});