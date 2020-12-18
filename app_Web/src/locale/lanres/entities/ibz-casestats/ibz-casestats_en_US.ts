import IBZ_CASESTATS_en_US_Base from './ibz-casestats_en_US_base';

function getLocaleResource(){
    const IBZ_CASESTATS_en_US_OwnData = {};
    const targetData = Object.assign(IBZ_CASESTATS_en_US_Base(), IBZ_CASESTATS_en_US_OwnData);
    return targetData;
}
export default getLocaleResource;
