import IBZ_CASESTATS_zh_CN_Base from './ibz-casestats_zh_CN_base';

function getLocaleResource(){
    const IBZ_CASESTATS_zh_CN_OwnData = {};
    const targetData = Object.assign(IBZ_CASESTATS_zh_CN_Base(), IBZ_CASESTATS_zh_CN_OwnData);
    return targetData;
}
export default getLocaleResource;