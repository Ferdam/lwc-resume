import { LightningElement, api } from 'lwc';

let basePath = '/public/assets/icons/';

export default class CvIcon extends LightningElement {
    @api icon = '';

    get iconPath() {
        // console.log(this.icon.split(':'));
        let [type, iconName] = this.icon.split(':');
        // console.log(type + '; ' + iconName);
        return basePath + iconName + '.' + type;
    }

    get none() {
        return !this.isLinkedin && !this.isFacebook && !this.isSalesforce;
    }
}
