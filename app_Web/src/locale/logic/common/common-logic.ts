import CommonLogicBase from './common-logic-base';
import store from '@/store';

const CommonLogicOwnData = {
    appcommonhandle: function(param1: any, param2: any) {
        const appData = store.getters.getAppData();
        if(appData.settings && appData.settings.srfmstatus) {
            let srfmstatus: Array<string> = appData.settings.srfmstatus.split('_');
            if(!srfmstatus || srfmstatus.length === 0) {
                return param1;
            }
            if(Object.is(srfmstatus[0], 'project')) {
                if(param1.search('产品') !== -1) {
                    param1 = param1.replace('产品', '项目');
                } else {
                    switch (srfmstatus[1]) {
                        case 'iteration': param1 = param1.replace('项目', '迭代'); break;
                        case 'sprint': param1 = param1.replace('项目', '冲刺'); break;
                    }
                }
            } else if(Object.is(srfmstatus[0], 'product')) {
                if(param1.search('项目') !== -1) {
                    param1 = param1.replace('项目', '产品');
                } else {
                    switch (srfmstatus[1]) {
                        case 'project': param1 = param1.replace('产品', '项目'); break;
                        case 'iteration': param1 = param1.replace('产品', '迭代'); break;
                        case 'sprint': param1 = param1.replace('产品', '冲刺'); break;
                    }
                }
            }
        }
        return param1;
    }
};
const targetData = Object.assign(CommonLogicBase, CommonLogicOwnData);
export default targetData;