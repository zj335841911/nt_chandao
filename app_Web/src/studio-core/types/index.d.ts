import { AppCommunicationsCenter } from "../message-center/app-communications-center";

declare module "vue/types/vue" {
    interface Vue {
        $acc: AppCommunicationsCenter
    }
}