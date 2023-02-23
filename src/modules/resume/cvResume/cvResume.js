import { LightningElement, api } from 'lwc';
import getCvData from '@resume/data';
import getLabels from '@resume/metadata/labels';
// import fileSystem from "fs";
// import cvJson from "../../../resources/data/getData";

export default class CvResume extends LightningElement {
    // @api cvdata = "danielmeyerdammous.json";
    rdata = {};
    labels = {};
    localizationCode = 'enus';

    async connectedCallback() {
        this.rdata = await this.getResumeData();
        this.labels = await this.getLabelsMap();
        console.log(this.labels);
    }

    async getResumeDataOld() {
        let jsonFile = null;
        jsonFile = await fetch('./data/getUsers');
        jsonFile = await jsonFile.text();
        if (jsonFile == null) { return null; }
        return JSON.parse(jsonFile);
    }

    async getResumeData() {
        return getCvData(this.localizationCode);
    }

    async getLabelsMap() {
        return getLabels(this.localizationCode);
    }
}
