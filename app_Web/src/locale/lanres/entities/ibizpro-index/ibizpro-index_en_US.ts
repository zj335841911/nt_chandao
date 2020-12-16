import IBIZPRO_INDEX_en_US_Base from './ibizpro-index_en_US_base';

function getLocaleResource(){
    const IBIZPRO_INDEX_en_US_OwnData = {};
    const targetData = Object.assign(IBIZPRO_INDEX_en_US_Base(), IBIZPRO_INDEX_en_US_OwnData);
    return targetData;
}
export default getLocaleResource;
