import CommonLogicBase from './common-logic-base';
import store from '@/store';

const CommonLogicOwnData = {
    appcommonhandle: function(param1: any, param2: any) {
        const appData = store.getters.getAppData();
        let srfmstatus: Array<string> = appData.settings.srfmstatus.split('_');
        if(Object.is(srfmstatus[0], 'project') && Object.is(param1, "项目")) {
            switch (srfmstatus[1]) {
                case 'iteration': param1 = "迭代"; break;
                case 'sprint': param1 = "冲刺"; break;
            }
        } else if(Object.is(srfmstatus[0], 'product') && Object.is(param1, "产品")) {
            switch (srfmstatus[1]) {
                case 'project': param1 = "项目"; break;
                case 'iteration': param1 = "迭代"; break;
                case 'sprint': param1 = "冲刺"; break;
            }
        }
        return param1;
    }
};
const targetData = Object.assign(CommonLogicBase, CommonLogicOwnData);
export default targetData;