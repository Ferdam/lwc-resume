import labels_PT_BR from "./labels_ptbr";
import labels_EN_US from "./labels_enus";

let localizationMap = {
    "ptbr": labels_PT_BR(),
    "enus": labels_EN_US(),
}

export default function getCvData(localizationCode) {
    localizationCode = localizationCode?.replace(/[-_]/, '').toLowerCase();
    return localizationMap[localizationCode];
}