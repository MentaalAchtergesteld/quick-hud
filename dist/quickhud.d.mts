declare class QuickHUD {
    private header;
    private content;
    private wrapper;
    private toggleEl;
    private isOpen;
    private hasDragged;
    private draggable;
    constructor(title?: string, position?: string);
    toggle(): void;
    initDragAndToggle(): void;
    setDraggable(enabled: boolean): this;
    createRow(parent: HTMLElement, children: HTMLElement[]): HTMLElement;
    addRange(label: string, min: number, max: number, value: number, step: number, callback: (value: number) => void, parent?: HTMLElement): this;
    addSelect(label: string, options: string[] | {
        string: string;
    }, selectedValue: string, callback: (value: string) => void, parent?: HTMLElement): this;
    addButton(label: string, callback: () => void, parent?: HTMLElement): void;
    addFolder(title: string): {
        addRange: (l: string, min: number, max: number, v: number, s: number, cb: (value: number) => void) => /*elided*/ any;
        addSelect: (l: string, opts: string[] | {
            string: string;
        }, v: string, cb: (value: string) => void) => /*elided*/ any;
        addButton: (l: string, cb: () => void) => /*elided*/ any;
        ok: () => QuickHUD;
    };
    folderResult(parent: QuickHUD, content: HTMLElement): {
        addRange: (l: string, min: number, max: number, v: number, s: number, cb: (value: number) => void) => /*elided*/ any;
        addSelect: (l: string, opts: string[] | {
            string: string;
        }, v: string, cb: (value: string) => void) => /*elided*/ any;
        addButton: (l: string, cb: () => void) => /*elided*/ any;
        ok: () => QuickHUD;
    };
}

export { QuickHUD };
