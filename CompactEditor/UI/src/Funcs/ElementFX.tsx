import { RIF, rif, delay, Click ,Lock} from "RIF";

class iElement {
    element: Element
    static PATH = {

    }

    constructor(element: Element) {
        this.element = element
    }

    get open() {
        rif(this.element).class('button_M6C.toggle_IOi').hasHtml('ThickStrokeArrowRight.svg').click
        return
    }
    get control() { return this.element.querySelector('.editor-item_VnW')?.querySelector('.row_d2o') }
    get first() { return this.element.querySelector('.editor-item_VnW') }
    get header() { return this.element.querySelector('.header_jkI') }
    get buttons() { return this.element.querySelectorAll('.button_M6C') }
    get button() { return this.element.querySelector('.button_M6C') }
    get all() {
         return this.element.querySelectorAll('.editor-item-base_sYx') }
    get reload() {
        const E = (this.element as any)
        E.onclick();
        E.onclick();
        return
    }
    get list() { return this.element.parentElement?.parentElement }



}

export class ElementFX {
    static findAllElement(returnAll = false): iElement[] {
        return rif().class('list-item_zT4').items.map(element => {
            if (element.classList.contains('modfiy') && (!returnAll)) return null;
            element.classList.add('modfiy')
            return new iElement(element)
        }).filter(item => item !== null) as iElement[]
    }

    static MouseEvent = async (event: MouseEvent) => {
        if (event.button != 0) return;

        const openDelay = 100

        async function startElement() {
            const allElements = ElementFX.findAllElement()
            if (!allElements) return;

            // move ctrl and hide
            function moveCtrl(element: any) {
                const ctrl = element.control
                const first = element.first as any
                const ctrlTitle = ctrl?.querySelector('.label_BbZ') as any
                ctrl.classList.add('modfiy_ctrl')
                if (ctrl) { element.header?.appendChild(ctrl) }
                if (first) { first.style.display = 'none'; (first as any).hide = true }
                if (ctrlTitle) { ctrlTitle.style.display = 'none' }

            }
            // button func 
            function buttonFunc(element: any) {
                const button = element.button
                if (!button) return;

                const _button = Click(button, true)
                if (_button) {
                    const { reactItem, prop, onClickMethod } = _button
                    reactItem[prop] = null

                        ; (element.button as any).onclick = async () => {
                            for (const item of element.all) {
                                console.log(element.all)
                                if ((item as any).hide) { continue }
                                ; (item as any).style.display = (item as any).style.display == 'none' ? 'block' : 'none'
                            }
                        }
                        ; (element.button as any).onclick()
                }
            }
            function copyAndDelete(element: any) {

                const buttons = element.buttons
                if ((!buttons) || (!buttons.length)) return;

                const copyButton = Click(buttons[buttons.length-2], true)
                const deleteButton = Click(buttons[buttons.length-1], true)
                const list = element.list

                if (copyButton && deleteButton) {
                    {
                        const { reactItem, prop, onClickMethod } = copyButton
                        reactItem[prop] = null;

                        (reactItem as any).onclick = async () => {

                            onClickMethod({ stopPropagation: () => { } })
                            await delay(200)
                            let siblings
                            if ((() => {
                                if (!list) return null;
                                const nextPage = list.querySelector('.controls_kKZ')?.children[1];
                                if (!nextPage) return null;
                                return nextPage.outerHTML.includes('disabled')
                            })()) {
                                siblings = true
                            }
                            if (siblings) {
                                async function reload() {
                                    const Elements = ElementFX.findAllElement(true).slice(0, -1)
                                    Elements.forEach((e: any) => {
                                        const e_ = e.element
                                        const modfiy_ctrl = e_.querySelector('.modfiy_ctrl')
                                        modfiy_ctrl.parentNode.removeChild(modfiy_ctrl);
                                        console.log(e_.classList)
                                        e_.classList.remove('modfiy')
                                    });
                                    Elements.forEach(element => { element.open })
                                    await delay(openDelay)
                                    Elements.forEach(element => {
                                        moveCtrl(element)
                                        buttonFunc(element)
                                        copyAndDelete(element)
                                        element.element.classList.add('modfiy')
                                    })
                                }
                                await delay(200)
                                reload()

                            }
                        }
                    }
                    {
                        const { reactItem, prop, onClickMethod } = deleteButton
                        reactItem[prop] = null;

                        (reactItem as any).onclick = async () => {

                            onClickMethod({ stopPropagation: () => { } })
                            await delay(200)
                            let siblings
                            if ((() => {
                                if (!list) return null;
                                const nextPage = list.querySelector('.controls_kKZ')?.children[1];
                                if (!nextPage) return null;
                                return nextPage.outerHTML.includes('disabled')
                            })()) {
                                siblings = true
                            }
                            if (siblings) {
                                async function reload() {
                                    const Elements = ElementFX.findAllElement(true)
                                    Elements.forEach((e: any) => {
                                        const e_ = e.element
                                        const modfiy_ctrl = e_.querySelector('.modfiy_ctrl')
                                        modfiy_ctrl.parentNode.removeChild(modfiy_ctrl);
                                        console.log(e_.classList)
                                        e_.classList.remove('modfiy')
                                    });
                                    Elements.forEach(element => { element.open })
                                    await delay(openDelay)
                                    Elements.forEach(element => {
                                        moveCtrl(element)
                                        buttonFunc(element)
                                        copyAndDelete(element)
                                        element.element.classList.add('modfiy')
                                    })
                                }
                                await delay(50)
                                reload()

                            }
                        }
                    }

                }
            }
            allElements.forEach(element => { element.open })
            await delay(openDelay)
            allElements.forEach(element => {
                moveCtrl(element)
                buttonFunc(element)
                copyAndDelete(element)
            })



        }

        setTimeout(async() => {
            if (!await Lock('startElement',500)) { return null };
            if ((window as any).__isElementFXrunning ){return}
            try{
            ; (window as any).__isElementFXrunning = true
            await startElement()
            }
            finally{; (window as any).__isElementFXrunning = false

            }
        }, 200)

    }
}

; (window as any)._e = Element