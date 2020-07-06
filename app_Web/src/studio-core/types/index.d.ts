import { AppCommunicationsCenter } from "../message-center/app-communications-center";
import { AppService } from "../service/app-service/AppService";
import { FooterItemsService } from "../service/FooterItemsService";
import { UIStateService } from "../service/UIStateService";

declare module "vue/types/vue" {
    interface Vue {
        $acc: AppCommunicationsCenter,
        $appService: AppService,
        $footerMenuService: FooterItemsService,
        $uiState: UIStateService
    }
}

declare global {

    interface Object {
        /**
         * 清除所有属性，不改变内存地址
         *
         * @memberof Object
         */
        clearAll(): void;
    }

    /**
     * 判断对象是否存在，判断是否为undefined或null，避免数值型0误判
     *
     * @param {*} obj
     * @returns {boolean}
     */
    function isExist(obj: any): boolean;

    /**
     * 判断字符串是否为空
     *
     * @param {string} str
     * @returns {boolean}
     */
    function isEmpty(str: string): boolean;

    /**
     * 判断字符串，存在并且不为空
     *
     * @param {string} str
     * @returns {boolean}
     */
    function isExistAndNotEmpty(str: string): boolean;
}