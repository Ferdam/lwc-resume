import { LightningElement, api } from 'lwc';

export default class CvComposedText extends LightningElement {
    @api text;

    async connectedCallback() {
        setTimeout(() => {
            let div = this.template.querySelector('div');
            div.innerHTML = this.text;
        }, 100);
    }
}
