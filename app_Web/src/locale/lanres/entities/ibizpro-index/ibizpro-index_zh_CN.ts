import IBIZPRO_INDEX_zh_CN_Base from './ibizpro-index_zh_CN_base';

function getLocaleResource(){
    const IBIZPRO_INDEX_zh_CN_OwnData = {};
    const targetData = Object.assign(IBIZPRO_INDEX_zh_CN_Base(), IBIZPRO_INDEX_zh_CN_OwnData);
    return targetData;
}
export default getLocaleResource;