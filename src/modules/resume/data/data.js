import data_PT_BR from "./data_ptbr";
import data_EN_US from "./data_enus";

let localizationMap = {
    "ptbr": data_PT_BR(),
    "enus": data_EN_US(),
}

export default function getCvData(localizationCode) {
    localizationCode = localizationCode?.replace(/[-_]/, '').toLowerCase();
    // console.log('loc: ' + localizationCode);
    // console.log('locmap: ' + localizationMap);
    return localizationMap[localizationCode];
}