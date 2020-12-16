<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeLoginMobEditViewBase from './sys-employee-login-mob-edit-view-base.vue';

@Component({
    components: {
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class SysEmployeeLoginMobEditView extends SysEmployeeLoginMobEditViewBase {

}
</script>