import { LightningElement, api } from 'lwc';

const classTypeMap = {
    text:   "text-body-ident",
    badge:  "skill-badge",
    badges: "skill-badge"
};

export default class CvSkillDisplay extends LightningElement {
    @api category;
    @api type;
    @api items;
    itemTypeClass = "badge";

    async connectedCallback() {
        this.itemTypeClass = classTypeMap[this.type];
    }
}
