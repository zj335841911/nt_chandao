<script lang='ts'>
import { Component } from 'vue-property-decorator';
import EmpTreeMpkBase from './emp-tree-mpk-treeview-base.vue';

 
@Component({
    components: {
         
    }
})
export default class EmpTreeMpk extends EmpTreeMpkBase {

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof EmpTreeMpkBase
     */
    public imageUrl = 'ibizutil/download';

    /**
     * isJson
     */
    public isJsonStr(str:any) {
        try{
            JSON.parse(str);
            return true;
        }
        catch(e){
            return false;
        }
    }

    /**
     * 解析节点数据
     *
     * @param {*} nodes
     * @memberof EmpTreeMpkBase
     */
    public parseNodes(nodes:any) {
        let rootNodes :any= [];
        let valueNodes :any= [];
        for (let index = 0; index < nodes.length; index++) {
            const item = nodes[index];
            let ele :any= this.$refs[item.srfkey+'checkbox'];
            if(!item.leaf){
                rootNodes.push(item);
            }else{
                if(item.strIcon && item.strIcon !== 'default_text' && this.isJsonStr(item.strIcon)){
                            let tempIcon =  JSON.parse(item.strIcon);
                            if(tempIcon && tempIcon[0] && tempIcon[0].id){
                                item.strIcon = `${this.imageUrl}/${tempIcon[0].id}`;
                            }
                }
                if(this.selectedNodes.findIndex((temp:any)=>{return temp.srfkey == item.srfkey}) > -1){
                    item.selected = true;
                    if(ele && ele[0]){
                        ele[0].ariaChecked = true;
                    }
                }else{
                    item.selected = false;
                    if(ele && ele[0]){
                        ele[0].ariaChecked = false;
                    }
                }
                valueNodes.push(item);
            }
        }
        this.rootNodes = rootNodes;
        this.valueNodes = valueNodes;
        this.$forceUpdate();
    }
}
</script>