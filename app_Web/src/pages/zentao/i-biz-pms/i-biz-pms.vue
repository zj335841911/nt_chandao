<script lang='tsx'>
import { Component } from "vue-property-decorator";
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import { IBizPMSBase } from './i-biz-pms-base';
import view_appmenu from '@widgets/app/zentao-appmenu/zentao-appmenu.vue';

/**
 * 应用首页
 */
@Component({
    components: {
        view_appmenu, 
    }
})
@VueLifeCycleProcessing()
export default class IBizPMS extends IBizPMSBase { }
</script>
