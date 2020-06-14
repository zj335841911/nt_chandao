<script lang='tsx'>
import { Component } from "vue-property-decorator";
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import IBizPMSBase from './i-biz-pms-base.vue';
import view_appmenu from '@widgets/app/zentao-appmenu/zentao-appmenu.vue';

/**
 * 应用首页
 */
@Component({
    components: {
        view_appmenu, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
@VueLifeCycleProcessing()
export default class IBizPMS extends IBizPMSBase { }
</script>