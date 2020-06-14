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