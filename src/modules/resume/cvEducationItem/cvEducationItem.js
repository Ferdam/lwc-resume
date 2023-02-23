import { LightningElement, api } from 'lwc';

export default class CvEducationItem extends LightningElement {
    @api subject;
    @api period;
    @api institution;
    @api status;
}
