import { rif, Lock } from "./RIF";
import { ElementFX } from "Funcs/ElementFX"
export const load = () => {

    ; (window as any)._R = rif;
    ; (window as any).Lock = {}
    if ((window as any).mioHotkeyMod && (window as any).mioHotkeyMod.loadded) { return null }

    console.log("CompactEditor: loadStyles..");
    (function loadStyles(){
        var stylesheet = document.styleSheets[0];

        const rules = [
            `.editor-item_VnW { padding-top: 0px; padding-bottom: 0px}`,
            `.expandable-header_hQZ { padding-top: 0px; padding-bottom: 0px}`,
            `.toggle_IOi { padding-top: 0px; padding-bottom: 0px}`,
            `.beta-banner_qiZ { display: none}`,
            `.header_MLk {border-top-left-radius: 20rem}`,
            `.toggle_IOi { width: auto}`,
            `.list-item_zT4 {flex:1;display: flex;flex-direction:row; flex-wrap: wrap}`,
            `.editor-item_VnW.editor-item-base_sYx.editor-widget_QQl { padding-top: 0px; padding-bottom: 0px}`,
            `.control_Hds {width: auto}`,
            `.label_Mi4 { padding-left: 0px; padding-right: 0px}`,
            `.label_BbZ { width: 20%}`,
            `.editor-item-base_sYx { flex: 1}`
        ];

        rules.forEach(rule => {
            stylesheet.insertRule(rule, stylesheet.cssRules.length);
        });
    })()

    console.log("CompactEditor: loadEvents..");

    const MOUSE_EVENTS:Function[] = [ElementFX.MouseEvent]

    document.addEventListener('mousedown', async function (event) {
        for (const func of MOUSE_EVENTS) {
            await func(event)
        }
    });


    return null;
}