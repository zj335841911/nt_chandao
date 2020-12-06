<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MySubmitBase from './my-submit-mobmdctrl-base.vue';

 
@Component({
    components: {
         
    }
})
export default class MySubmit extends MySubmitBase {

    /**
    * 点击回调事件
    *
    * @memberof MySubmit
    */
    public item_click(item:any){
        if(Object.is(item.type,'daily')){
            this.mdctrl_click('ub24bd6e',item)
        }
        if(Object.is(item.type,'monthly')){
            this.mdctrl_click('u151f646',item)
        }
        if(Object.is(item.type,'weekly')){
            this.mdctrl_click('u11525d3',item)
        }
    }

    /**
     * 列表项左滑右滑触发行为
     *
     * @param {*} $event 点击鼠标事件
     * @param {*} tag 操作标识
     * @param {*} item 行数据
     * @memberof Mdctrl
     */
    public mdctrl_click(tag: any, item: any): void {
        this.selectedArray = [];
        this.selectedArray.push(item);
        if (Object.is(tag, 'ub24bd6e')) {
            this.mdctrl_ub24bd6e_click();
        }
        if (Object.is(tag, 'u11525d3')) {
            this.mdctrl_u11525d3_click();
        }
        if (Object.is(tag, 'u151f646')) {
            this.mdctrl_u151f646_click();
        }
        this.closeSlidings();
    }

}
</script>