<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import ZentaoBase from './zentao-appmenu-base.vue';


/**
 * 应用菜单
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Zentao extends ZentaoBase { }
</script>