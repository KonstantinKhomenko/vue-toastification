import { Wrapper, WrapperArray } from "@vue/test-utils";
import { PluginOptions } from "../../src/types";
declare const loadPlugin: (options?: PluginOptions | undefined) => {
    topLeft: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>> & {
        getToasts(): WrapperArray<Vue>;
    };
    topCenter: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>> & {
        getToasts(): WrapperArray<Vue>;
    };
    topRight: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>> & {
        getToasts(): WrapperArray<Vue>;
    };
    bottomLeft: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>> & {
        getToasts(): WrapperArray<Vue>;
    };
    bottomCenter: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>> & {
        getToasts(): WrapperArray<Vue>;
    };
    bottomRight: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>> & {
        getToasts(): WrapperArray<Vue>;
    };
    localVue: import("vue/types/vue").VueConstructor<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>>;
    containerWrapper: Wrapper<import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue/types/vue").Vue<Record<string, any>, Record<string, any>, never, never, any>>>;
};
export { loadPlugin };
