import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, {
    beforeEnter(el: HTMLElement): void;
    afterEnter(el: HTMLElement): void;
    afterLeave(el: HTMLElement): void;
    beforeLeave(el: HTMLElement): void;
    leave(el: HTMLElement, done: Function): void;
    setAbsolutePosition(el: HTMLElement): void;
    cleanUpStyles(el: HTMLElement): void;
}, unknown, {
    transition: string | Record<"enter" | "leave" | "move", string>;
    transitionDuration: number | Record<"enter" | "leave", number>;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin>;
export default _default;
