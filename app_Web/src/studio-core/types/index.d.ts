import { AppCommunicationsCenter } from "../message-center/app-communications-center";
import { FooterItemsService } from "../service/FooterItemsService";
import { UIStateService } from "../service/UIStateService";

declare module "vue/types/vue" {
    interface Vue {
        $acc: AppCommunicationsCenter,
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
}