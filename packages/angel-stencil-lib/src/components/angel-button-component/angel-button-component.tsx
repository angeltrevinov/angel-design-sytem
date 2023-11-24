import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'angel-button-component',
    styleUrl: 'angel-button-component.scss',
    shadow: true
})
export class AngelButtonComponent {

    @Prop() typeBtn: string = 'primary';

    render () {
        return (
            <button class={this.typeBtn}>
                <slot />
            </button>
        );
    }
}