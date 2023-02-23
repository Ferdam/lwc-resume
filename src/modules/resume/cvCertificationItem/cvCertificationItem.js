import { LightningElement, api } from 'lwc';

export default class CvCertificationItem extends LightningElement {
    @api title;
    @api credential;
    @api date;
}
