/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AngelButtonComponent {
        "typeBtn": string;
    }
    interface AngelModalComponent {
        "modalTitle": string;
        "visible": boolean;
    }
}
export interface AngelModalComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAngelModalComponentElement;
}
declare global {
    interface HTMLAngelButtonComponentElement extends Components.AngelButtonComponent, HTMLStencilElement {
    }
    var HTMLAngelButtonComponentElement: {
        prototype: HTMLAngelButtonComponentElement;
        new (): HTMLAngelButtonComponentElement;
    };
    interface HTMLAngelModalComponentElementEventMap {
        "closedModal": string;
    }
    interface HTMLAngelModalComponentElement extends Components.AngelModalComponent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAngelModalComponentElementEventMap>(type: K, listener: (this: HTMLAngelModalComponentElement, ev: AngelModalComponentCustomEvent<HTMLAngelModalComponentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAngelModalComponentElementEventMap>(type: K, listener: (this: HTMLAngelModalComponentElement, ev: AngelModalComponentCustomEvent<HTMLAngelModalComponentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAngelModalComponentElement: {
        prototype: HTMLAngelModalComponentElement;
        new (): HTMLAngelModalComponentElement;
    };
    interface HTMLElementTagNameMap {
        "angel-button-component": HTMLAngelButtonComponentElement;
        "angel-modal-component": HTMLAngelModalComponentElement;
    }
}
declare namespace LocalJSX {
    interface AngelButtonComponent {
        "typeBtn"?: string;
    }
    interface AngelModalComponent {
        "modalTitle"?: string;
        "onClosedModal"?: (event: AngelModalComponentCustomEvent<string>) => void;
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "angel-button-component": AngelButtonComponent;
        "angel-modal-component": AngelModalComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "angel-button-component": LocalJSX.AngelButtonComponent & JSXBase.HTMLAttributes<HTMLAngelButtonComponentElement>;
            "angel-modal-component": LocalJSX.AngelModalComponent & JSXBase.HTMLAttributes<HTMLAngelModalComponentElement>;
        }
    }
}
