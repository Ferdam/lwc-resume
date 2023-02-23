import { LightningElement, api } from 'lwc';

export default class CvExperienceItem extends LightningElement {
    @api role;
    @api company;
    @api period;
}
