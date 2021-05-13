type renderProps = {
    components: HTMLElement;
};

type ComponentProps = {
    name: string;
};

interface IComponent {
    name: string;
    getTemplate: () => string;
    render: (props: {}) => IComponent;
}

export { renderProps, IComponent, ComponentProps };
