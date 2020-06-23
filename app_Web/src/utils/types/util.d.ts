import { Util } from "../util/util";

declare module "vue/types/vue" {
    interface Vue {
        /**
         * 工具类
         *
         * @type {Util}
         * @memberof Vue
         */
        $util: Util;
    }
}