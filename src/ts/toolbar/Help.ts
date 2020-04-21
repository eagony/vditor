import {getEventName} from "../util/compatibility";
import {MenuItem} from "./MenuItem";

export class Help extends MenuItem {
    constructor(vditor: IVditor, menuItem: IMenuItem) {
        super(vditor, menuItem);
        this.element.children[0].addEventListener(getEventName(), (event) => {
            event.preventDefault();
            vditor.tip.show(`<div style="font-size: 14px;line-height: 22px;margin-left: 6px;width: 360px">
<h2>帮助</h2>
<p>Markdown 使用指南</p>
<ul>
    <li><a href="https://hacpai.com/article/1583308420519" target="_blank">语法速查手册</a></li>
    <li><a href="https://hacpai.com/article/1583129520165" target="_blank">基础语法</a></li>
    <li><a href="https://hacpai.com/article/1583305480675" target="_blank">扩展语法</a></li>
</ul>
<p>Vditor 支持</p>
<ul>
    <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>
    <li><a href="https://hacpai.com/tag/vditor" target="_blank">Vditor 官方讨论区</a></li>
    <li><a href="https://hacpai.com/article/1549638745630" target="_blank">Vditor 开发手册</a></li>
</ul><br>
</div>`, 0);
        });
    }
}
