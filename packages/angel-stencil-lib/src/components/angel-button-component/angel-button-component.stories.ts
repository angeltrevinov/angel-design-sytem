export default {
    title: 'Components/Button',
    argTyps: {
        typeBtn: {
            variant: {
                options: ['primary', 'secondary', 'success', 'danger']
            }
        }
    }
};

const Template = (args) => {
    return `<angel-button-component type-btn="${args.typeBtn}">${args.typeBtn}</angel-button-component>`;
};

export const Primary = Template.bind({});
Primary.args = {
    typeBtn: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    typeBtn: 'secondary'
};