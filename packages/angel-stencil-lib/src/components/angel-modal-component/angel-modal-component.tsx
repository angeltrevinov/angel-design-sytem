import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";

@Component({
    tag: 'angel-modal-component',
    styleUrl: 'angel-modal-component.scss',
    shadow: true
})
export class AngelModalComponent {

    @Prop() modalTitle: string;
    @Prop() visible: boolean = false;

    @Event() closedModal:EventEmitter<string>;

    onCloseModal(completedWith: string) {
        this.closedModal.emit(completedWith);
    }


    render() {
        if (this.visible) {            
            return (
                <div class='modal__mask'>
                    <div class='modal__container'>
                        <section>{this.modalTitle}</section>
                        <section>
                            <slot />
                        </section>
                        <section>
                            <div>
                                <button onClick={() => this.onCloseModal('cancel')}>Cancel</button>
                            </div>
                            <div>
                                <button onClick={() => this.onCloseModal('success')}>Submit</button>
                            </div>
                        </section>
                    </div>
                </div>
            );
        }
    }
}