<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import IBizPMSBase from './i-biz-pms-base.vue';

import view_appmenu from '@widgets/app/zentao-appmenu/zentao-appmenu.vue';
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
export default class IBizPMS extends IBizPMSBase {

}
</script>