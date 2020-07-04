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
}